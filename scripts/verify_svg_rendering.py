# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, socket, struct, os

# Ensure HTTP server is running
import urllib.request
try:
    urllib.request.urlopen("http://localhost:8000/index.html", timeout=1)
    print("HTTP server is active on port 8000.")
except Exception:
    print("Starting HTTP server on port 8000...")
    subprocess.Popen(["scripts/py/python.exe", "-m", "http.server", "8000"])
    time.sleep(2)

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1280,1000",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9229",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c4-b8"
]

proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9229/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    path = ws_url.split(':9229')[1]

    s = socket.socket()
    s.connect(('localhost', 9229))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9229\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9229\r\n\r\n"
    )
    s.sendall(handshake.encode())
    res = s.recv(4096)

    def evaluate(expr):
        payload = json.dumps({"id": 1, "method": "Runtime.evaluate", "params": {"expression": expr, "awaitPromise": True, "returnByValue": True}}).encode('utf-8')
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

    # Let MathJax and page load
    time.sleep(2)

    test_expr = """(() => {
        // Find SVGs
        const svgs = Array.from(document.querySelectorAll('.lesson-detail-viewer svg'));
        const svgTexts = [];
        svgs.forEach((s, idx) => {
            const texts = Array.from(s.querySelectorAll('text')).map(t => t.textContent.trim());
            const viewBox = s.getAttribute('viewBox');
            svgTexts.push({ idx, viewBox, textCount: texts.length, sampleTexts: texts.slice(0, 10) });
        });

        // Check if there are any square boxes or raw backslashes
        const allText = document.querySelector('.lesson-detail-viewer')?.innerHTML || '';
        const hasTofu = allText.includes('\uFFFD') || allText.includes('&#8407;') || allText.includes('\\v_') || allText.includes('\\F_');
        
        return {
            svgCount: svgs.length,
            svgDetails: svgTexts,
            hasTofu
        };
    })()"""

    result = evaluate(test_expr)
    print("VERIFICATION RESULTS FOR BÀI 8 LỚP 10:")
    print(json.dumps(result, ensure_ascii=False, indent=2))
finally:
    proc.terminate()
