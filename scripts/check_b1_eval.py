import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9390",
        "about:blank"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9390/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
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
                
                # Evaluate loading lesson-11-1-data.js script via script tag or fetch
                load_res = await send("Runtime.evaluate", {
                    "expression": """
                        (async () => {
                            const errs = [];
                            try {
                                const resp = await fetch('http://localhost:8000/js/lesson-11-1-data.js');
                                const text = await resp.text();
                                // Try evaluating it via Function or eval
                                const fn = new Function(text);
                                fn();
                                return { success: true, hasB1: !!window.LESSON_11_C1_B1_DATA };
                            } catch (e) {
                                return { success: false, error: e.message, stack: e.stack };
                            }
                        })()
                    """,
                    "returnByValue": True,
                    "awaitPromise": True
                })
                print("B1 parse & eval result:", load_res.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
