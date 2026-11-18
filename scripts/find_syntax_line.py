import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9287

async def find_syntax_line():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "about:blank"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.0)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            if d.get("id") == msg_id:
                                return d.get("result", {})

                with open('js/script.js', 'r', encoding='utf-8') as f:
                    lines = f.readlines()

                print(f"Total lines in js/script.js: {len(lines)}")

                # Binary search for syntax error line
                # We test slices of lines joined together
                async def test_code(code_str):
                    res = await send("Runtime.evaluate", {
                        "expression": f"""
                        (() => {{
                            try {{
                                new Function({json.dumps(code_str)});
                                return "OK";
                            }} catch(e) {{
                                return e.message;
                            }}
                        }})()
                        """,
                        "returnByValue": True
                    })
                    return res.get("result", {}).get("value")

                # Test line by line or find occurrences of 'function'
                # Let's find around where patch was inserted
                # We know the patch was inserted around QUIZ SYSTEM
                # Let's find the lines around QUIZ SYSTEM
                start_quiz = -1
                for i, l in enumerate(lines):
                    if "HỆ THỐNG THI TRẮC NGHIỆM ONLINE CHUẨN MỰC" in l:
                        start_quiz = i
                        break
                print(f"Quiz system starts at line: {start_quiz}")

                # Let's test lines before start_quiz
                before_code = "".join(lines[:start_quiz])
                res_before = await test_code(before_code)
                print("Syntax of code BEFORE quiz:", res_before)

                # Now let's test line by line inside quiz system
                for line_num in range(start_quiz, min(len(lines), start_quiz + 500)):
                    snippet = lines[line_num]
                    # Check if there is missing semicolon, bracket, or something
                
                # Binary search from start_quiz to len(lines)
                low = start_quiz
                high = len(lines)
                bad_line = high
                while low <= high:
                    mid = (low + high) // 2
                    code_slice = "".join(lines[:mid])
                    err = await test_code(code_slice)
                    if "Unexpected token 'function'" in err or "Unexpected token" in err and "Unexpected end of input" not in err:
                        bad_line = mid
                        high = mid - 1
                    else:
                        low = mid + 1

                print(f"First line triggering syntax error: {bad_line}")
                for i in range(max(0, bad_line - 10), min(len(lines), bad_line + 10)):
                    print(f"{i+1}: {lines[i].rstrip()}")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(find_syntax_line())
