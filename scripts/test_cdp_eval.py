import socket, json, urllib.request, time, subprocess

def eval_js(url, expression):
    cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9223",
        url
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        req = urllib.request.urlopen("http://localhost:9223/json")
        tabs = json.loads(req.read().decode())
        page_tab = [t for t in tabs if t.get('type') == 'page'][0]
        ws_url = page_tab['webSocketDebuggerUrl']
        path = ws_url.split(':9223')[1]

        s = socket.socket()
        s.connect(('localhost', 9223))
        handshake = (
            f"GET {path} HTTP/1.1\r\n"
            "Host: localhost:9223\r\n"
            "Upgrade: websocket\r\n"
            "Connection: Upgrade\r\n"
            "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
            "Sec-WebSocket-Version: 13\r\n"
            "Origin: http://localhost:9223\r\n\r\n"
        )
        s.sendall(handshake.encode())
        res = s.recv(4096)
        assert b"101 " in res, f"Handshake failed: {res}"

        # Send Runtime.evaluate
        payload = json.dumps({
            "id": 1,
            "method": "Runtime.evaluate",
            "params": {
                "expression": expression,
                "returnByValue": True
            }
        }).encode('utf-8')
        
        # Build masked websocket frame
        import struct
        header = bytearray([0x81])
        length = len(payload)
        if length <= 125:
            header.append(0x80 | length)
        elif length <= 65535:
            header.append(0x80 | 126)
            header.extend(struct.pack("!H", length))
        else:
            header.append(0x80 | 127)
            header.extend(struct.pack("!Q", length))
        header.extend(b"\x00\x00\x00\x00") # mask
        s.sendall(header + payload)

        # Read response
        raw = bytearray()
        while True:
            chunk = s.recv(65536)
            if not chunk: break
            raw.extend(chunk)
            # Try to see if valid json received
            try:
                # Find start of payload in unmasked server frame
                # Server to client is NOT masked (mask bit is 0)
                p_len = raw[1] & 0x7F
                offset = 2
                if p_len == 126: offset = 4
                elif p_len == 127: offset = 10
                data = raw[offset:].decode('utf-8', errors='ignore')
                res_obj = json.loads(data)
                return res_obj
            except Exception:
                pass
            if len(raw) > 500000: break
        return None
    finally:
        proc.terminate()

print("Testing Bài 12 Lớp 11 (11-c4-b12)...")
r12 = eval_js(
    "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b12",
    """(() => {
        return {
            title: document.querySelector('.structure-lesson-title')?.textContent || 'NOT FOUND',
            subItems: Array.from(document.querySelectorAll('.tree-sub-item')).map(el => el.textContent.trim()),
            secTitles: Array.from(document.querySelectorAll('.tree-item-label')).map(el => el.textContent.trim())
        };
    })()"""
)
print("Bài 12 Result:", json.dumps(r12, ensure_ascii=False, indent=2))

print("\nTesting Bài 6 Lớp 10 (10-c3-b6)...")
r6 = eval_js(
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6",
    """(() => {
        return {
            title: document.querySelector('.structure-lesson-title')?.textContent || 'NOT FOUND',
            subItems: Array.from(document.querySelectorAll('.tree-sub-item')).map(el => el.textContent.trim()),
            secTitles: Array.from(document.querySelectorAll('.tree-item-label')).map(el => el.textContent.trim()),
            h3s: Array.from(document.querySelectorAll('.subsection-heading-h3')).map(el => el.textContent.trim())
        };
    })()"""
)
print("Bài 6 Result:", json.dumps(r6, ensure_ascii=False, indent=2))
