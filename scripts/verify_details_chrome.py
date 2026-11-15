import socket, json, urllib.request, time, subprocess, struct

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9227",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6"
]
proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9227/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    path = page_tab['webSocketDebuggerUrl'].split(':9227')[1]

    s = socket.socket()
    s.connect(('localhost', 9227))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9227\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9227\r\n\r\n"
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
        data = raw[offset:].decode('utf-8', errors='ignore')
        return json.loads(data)

    test_check = """(() => {
        // Test text-align
        const pEl = document.querySelector('.lesson-detail-viewer p') || document.querySelector('.step-content-card p');
        const computedAlign = pEl ? window.getComputedStyle(pEl).textAlign : null;

        // Test mathToVietnameseSpeech
        const t1 = window.mathToVietnameseSpeech("Hệ trục Oxy và không gian Oxyz");
        const t2 = window.mathToVietnameseSpeech("Tính cot(anpha) và \\\\cot\\\\alpha");
        const t3 = window.mathToVietnameseSpeech("Cho \\\\vec{AB} và \\\\overrightarrow{CD}");
        const t4 = window.mathToVietnameseSpeech("Độ dài |\\\\vec{AB}| bằng 5");

        return {
            computedAlign,
            t1,
            t2,
            t3,
            t4
        };
    })()"""
    res = evaluate(test_check)
    print("VERIFICATION CHECKS:\n", json.dumps(res, ensure_ascii=False, indent=2))
finally:
    proc.terminate()
