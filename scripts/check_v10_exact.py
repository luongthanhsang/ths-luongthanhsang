import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9340",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9340/json")
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
                await send("Runtime.evaluate", {"expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"})

                # Click sec-4 sub b
                res1 = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const subs = Array.from(document.querySelectorAll('.tree-sub-item'));
                            const item = subs.find(s => s.dataset.stepId === 'sec-4' && s.dataset.subkey === 'b');
                            if (item) {
                                item.click();
                                return { clicked: true, text: item.innerText };
                            }
                            return { clicked: false, available: subs.map(s => s.dataset.stepId + '-' + s.dataset.subkey) };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Click result:", res1.get("result", {}).get("value"))
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {"expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"})
                await asyncio.sleep(0.5)

                # Check what is in the document
                doc_check = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const text = document.body.innerText;
                            const hasV10 = text.includes('VÍ DỤ 10') || text.includes('Ví dụ 10');
                            const v10Idx = text.indexOf('VÍ DỤ 10');
                            const v10Snippet = v10Idx !== -1 ? text.slice(v10Idx, v10Idx + 300) : null;
                            const mathErrors = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).map(e => e.innerText || e.textContent);
                            return { hasV10, v10Snippet, mathErrors };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Doc check:", doc_check.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
