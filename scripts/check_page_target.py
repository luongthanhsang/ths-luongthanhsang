import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9380",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen("http://localhost:9380/json")
        pages = json.loads(res.read())
        print("Pages found:", pages)
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
                loc = await send("Runtime.evaluate", {
                    "expression": "window.location.href",
                    "returnByValue": True
                })
                print("Live URL:", loc.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
