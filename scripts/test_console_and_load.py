import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9285

async def test_console_and_load():
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

                events = []
                async def listener():
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            m = d.get("method")
                            if m in ("Runtime.consoleAPICalled", "Runtime.exceptionThrown", "Log.entryAdded"):
                                events.append(d)

                await send("Runtime.enable")
                await send("Log.enable")
                await send("Page.enable")

                task = asyncio.create_task(listener())
                await send("Page.navigate", {"url": "http://localhost:8000/trac-nghiem.html"})
                await asyncio.sleep(3.0)
                task.cancel()

                print(f"Events captured: {len(events)}")
                for ev in events:
                    print(json.dumps(ev, ensure_ascii=False)[:300])

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(test_console_and_load())
