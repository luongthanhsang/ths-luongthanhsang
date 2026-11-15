import socket, json, urllib.request, time, subprocess, struct

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9226",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6"
]
proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9226/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    path = page_tab['webSocketDebuggerUrl'].split(':9226')[1]

    s = socket.socket()
    s.connect(('localhost', 9226))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9226\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9226\r\n\r\n"
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

    test_steps = """(() => {
        // Clear previous saved progress for clean test
        localStorage.removeItem('ths_sang_completed_steps_10-c3-b6');
        window.location.reload();
    })()"""
    evaluate(test_steps)
    time.sleep(2)

    # Now test progression
    test_run = """(() => {
        const results = [];
        
        // 1. Initial active step
        const activeBlock1 = document.querySelector('[data-step-block]:not([style*="display: none"])');
        results.push({ test: "Initial Active Block", id: activeBlock1?.dataset.stepBlock });

        // 2. Complete welcome
        window.markStepCompleted('welcome');
        let pct = document.getElementById('lessonProgressPercent')?.textContent;
        results.push({ test: "After Welcome Done", pct, hasCheck: document.querySelector('.tree-node[data-step-id="welcome"] .fa-circle-check') !== null });

        // 3. Complete goals
        window.markStepCompleted('goals');
        pct = document.getElementById('lessonProgressPercent')?.textContent;
        results.push({ test: "After Goals Done", pct, hasCheck: document.querySelector('.tree-node[data-step-id="goals"] .fa-circle-check') !== null });

        // 4. Complete sub-item 'a' of Sec 1
        window.markStepCompleted('sec-1', 'a');
        const subA_done = document.querySelector('.tree-sub-item[data-sub-step-id="sec-1-a"] .fa-circle-check') !== null;
        const parentSec1_done = document.querySelector('.tree-node[data-step-id="sec-1"] .fa-circle-check') !== null;
        results.push({ test: "After Sub-item 'a' done", subA_done, parentSec1_done }); // Parent MUST BE FALSE

        // 5. Complete sub-item 'b' of Sec 1
        window.markStepCompleted('sec-1', 'b');
        const subB_done = document.querySelector('.tree-sub-item[data-sub-step-id="sec-1-b"] .fa-circle-check') !== null;
        const parentSec1_done_after = document.querySelector('.tree-node[data-step-id="sec-1"] .fa-circle-check') !== null;
        results.push({ test: "After Sub-item 'b' done", subB_done, parentSec1_done_after }); // Parent MUST BE TRUE NOW

        // 6. Complete Quiz
        window.markStepCompleted('quiz');
        pct = document.getElementById('lessonProgressPercent')?.textContent;
        results.push({ test: "After Quiz Done", pct, quizDone: document.querySelector('.tree-node[data-step-id="quiz"] .fa-circle-check') !== null });

        return results;
    })()"""
    res = evaluate(test_run)
    print("STEPPER TEST RESULTS:\n", json.dumps(res, ensure_ascii=False, indent=2))
finally:
    proc.terminate()
