import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9365",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9365/json")
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

                eval_res = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            return {
                                hasB1Global: !!window.LESSON_11_C1_B1_DATA,
                                hasB2Global: !!window.LESSON_11_C1_B2_DATA,
                                hasB3Global: !!window.LESSON_11_C1_B3_DATA,
                                hasB4Global: !!window.LESSON_11_C1_B4_DATA,
                                b1InDB: window.LESSONS_DATABASE && window.LESSONS_DATABASE['11'] && window.LESSONS_DATABASE['11'].chapters[0].lessons[0].sections[3].subsections[1].contentHtml ? 'HAS_CONTENT_HTML' : 'STUB'
                            };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Global variables status:", eval_res.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
