import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9355",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9355/json")
        target = json.loads(res.read())[0]
        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(target["webSocketDebuggerUrl"], max_msg_size=10*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id: return data.get("result", {})

                await send("Runtime.enable")
                await asyncio.sleep(2.0)

                # Check #sec-4-sub-b
                res1 = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const subB = document.getElementById('sec-4-sub-b');
                            if (!subB) return { found: false, allSubCards: Array.from(document.querySelectorAll('.subsection-card')).map(c => c.id) };
                            const text = subB.innerText;
                            const hasV10 = text.includes('VÍ DỤ 10') || text.includes('Ví dụ 10');
                            const v10Idx = text.indexOf('VÍ DỤ 10');
                            const snippet = v10Idx !== -1 ? text.slice(v10Idx, v10Idx + 300) : null;
                            const mathErrors = Array.from(subB.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).map(e => e.innerText || e.textContent);
                            return { found: true, hasV10, snippet, mathErrors };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Result for #sec-4-sub-b:", res1.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
