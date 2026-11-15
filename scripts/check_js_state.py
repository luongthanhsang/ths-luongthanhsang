import socket, json, urllib.request, time, subprocess, struct

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9225",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6"
]
proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9225/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    path = ws_url.split(':9225')[1]

    s = socket.socket()
    s.connect(('localhost', 9225))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9225\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9225\r\n\r\n"
    )
    s.sendall(handshake.encode())
    res = s.recv(4096)

    # Eval script.js and capture error
    expr = """(async () => {
        try {
            const resp = await fetch('js/script.js');
            const code = await resp.text();
            // Let's use new Function to parse and detect syntax errors
            new Function(code);
            return "SUCCESS: No syntax errors in script.js!";
        } catch (e) {
            return "SYNTAX ERROR in script.js: " + e.message + " | " + e.stack;
        }
    })()"""
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
        if b'"result"' in raw:
            break
    
    p_len = raw[1] & 0x7F
    offset = 2
    if p_len == 126: offset = 4
    elif p_len == 127: offset = 10
    data = raw[offset:].decode('utf-8', errors='ignore')
    print("PARSE RESULT:", data)
finally:
    proc.terminate()
