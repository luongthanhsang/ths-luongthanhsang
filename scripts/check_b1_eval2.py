import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9395",
        "http://localhost:8000/index.html"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9395/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page" and "localhost" in p.get("url", "")][0]
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
                
                # Fetch and eval lesson-11-1-data.js
                load_res = await send("Runtime.evaluate", {
                    "expression": """
                        (async () => {
                            try {
                                const resp = await fetch('/js/lesson-11-1-data.js?t=' + Date.now());
                                const text = await resp.text();
                                const s = document.createElement('script');
                                s.textContent = text;
                                document.head.appendChild(s);
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
