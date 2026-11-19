import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9385",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen("http://localhost:9385/json")
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
                loc = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            return {
                                url: window.location.href,
                                b1: !!window.LESSON_11_C1_B1_DATA,
                                b2: !!window.LESSON_11_C1_B2_DATA,
                                b3: !!window.LESSON_11_C1_B3_DATA,
                                b4: !!window.LESSON_11_C1_B4_DATA,
                                b1_title: window.LESSON_11_C1_B1_DATA ? window.LESSON_11_C1_B1_DATA.title : null,
                                b1_sec4_sub2_hasV10: window.LESSON_11_C1_B1_DATA ? window.LESSON_11_C1_B1_DATA.sections[3].subsections[1].contentHtml.includes('VÍ DỤ 10') : false,
                                mathErrors: Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).length
                            };
                        })()
                    """,
                    "returnByValue": True
                })
                print("REAL PAGE CHECK:", loc.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
