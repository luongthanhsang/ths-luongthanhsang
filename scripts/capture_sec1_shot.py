# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, socket, struct, base64

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1280,1100",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9231",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c4-b8"
]

proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9231/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    path = ws_url.split(':9231')[1]

    s = socket.socket()
    s.connect(('localhost', 9231))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9231\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9231\r\n\r\n"
    )
    s.sendall(handshake.encode())
    res = s.recv(4096)

    def send_cmd(method, params=None):
        payload = json.dumps({"id": 1, "method": method, "params": params or {}}).encode('utf-8')
        length = len(payload)
        header = bytearray([0x81])
        if length <= 125:
            header.append(0x80 | length)
        elif length <= 65535:
            header.append(0x80 | 126)
            header.extend(struct.pack("!H", length))
        header.extend(b"\x00\x00\x00\x00")
        s.sendall(header + payload)
        raw = bytearray()
        while True:
            chunk = s.recv(65536)
            if not chunk: break
            raw.extend(chunk)
            if b'"result"' in raw: break
        p_len = raw[1] & 0x7F
        offset = 2
        if p_len == 126: offset = 4
        elif p_len == 127: offset = 10
        body = raw[offset:].decode('utf-8', errors='ignore')
        for line in body.splitlines():
            if line.startswith('{') and '"result"' in line:
                return json.loads(line)
        return json.loads(body)

    time.sleep(2)
    # Switch to Section 1 view
    send_cmd("Runtime.evaluate", {"expression": "window.switchLessonActiveStep && window.switchLessonActiveStep('sec-1');"})
    time.sleep(1)
    send_cmd("Runtime.evaluate", {"expression": "document.querySelector('#sec-1').scrollIntoView();"})
    time.sleep(1)
    shot = send_cmd("Page.captureScreenshot", {"format": "png"})
    img_data = base64.b64decode(shot['result']['data'])
    out_path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\verified_sec1_render.png"
    with open(out_path, "wb") as f:
        f.write(img_data)
    print("Section 1 Screenshot saved to:", out_path)
finally:
    proc.terminate()
