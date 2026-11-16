# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, socket, struct, base64

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1280,1000",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9232",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c4-b8"
]

proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9232/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    path = ws_url.split(':9232')[1]

    s = socket.socket()
    s.connect(('localhost', 9232))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9232\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9232\r\n\r\n"
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
        
        # Read WebSocket frames until full message is reassembled
        msg_bytes = bytearray()
        while True:
            # Read frame header
            head = s.recv(2)
            if not head: break
            fin = (head[0] & 0x80) != 0
            opcode = head[0] & 0x0F
            p_len = head[1] & 0x7F
            if p_len == 126:
                ext = s.recv(2)
                p_len = struct.unpack("!H", ext)[0]
            elif p_len == 127:
                ext = s.recv(8)
                p_len = struct.unpack("!Q", ext)[0]
            
            # Read payload
            payload_chunk = bytearray()
            while len(payload_chunk) < p_len:
                chunk = s.recv(min(p_len - len(payload_chunk), 65536))
                if not chunk: break
                payload_chunk.extend(chunk)
            
            msg_bytes.extend(payload_chunk)
            if fin:
                break
        
        return json.loads(msg_bytes.decode('utf-8', errors='ignore'))

    time.sleep(3)
    # Scroll to hook card and capture screenshot
    send_cmd("Runtime.evaluate", {"expression": "document.querySelector('#lessonHookCard').scrollIntoView();"})
    time.sleep(1)
    shot = send_cmd("Page.captureScreenshot", {"format": "png"})
    img_data = base64.b64decode(shot['result']['data'])
    out_path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\verified_svg_render.png"
    with open(out_path, "wb") as f:
        f.write(img_data)
    print("Screenshot saved to:", out_path)

    # Now scroll to section 1 (Hình 4.13)
    send_cmd("Runtime.evaluate", {"expression": "window.switchLessonActiveStep && window.switchLessonActiveStep('sec-1');"})
    time.sleep(1)
    send_cmd("Runtime.evaluate", {"expression": "document.querySelector('#sec-1').scrollIntoView();"})
    time.sleep(1)
    shot2 = send_cmd("Page.captureScreenshot", {"format": "png"})
    img_data2 = base64.b64decode(shot2['result']['data'])
    out_path2 = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\verified_sec1_render.png"
    with open(out_path2, "wb") as f:
        f.write(img_data2)
    print("Section 1 Screenshot saved to:", out_path2)
finally:
    proc.terminate()
