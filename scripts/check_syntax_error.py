import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9279

async def check_syntax_error():
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

                await send("Runtime.enable")
                await send("Page.enable")

                # Navigate to trac-nghiem.html and listen for exceptions
                exceptions = []
                async def listen():
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("method") == "Runtime.exceptionThrown":
                                exceptions.append(data.get("params"))
                            if data.get("method") == "Log.entryAdded":
                                print("LOG:", data.get("params"))

                listen_task = asyncio.create_task(listen())
                await send("Page.navigate", {"url": "http://localhost:8000/trac-nghiem.html"})
                await asyncio.sleep(3.0)
                listen_task.cancel()

                print("Exceptions caught:", len(exceptions))
                for exc in exceptions:
                    details = exc.get("exceptionDetails", {})
                    print("EXC:", details.get("text"), details.get("exception", {}).get("description"), "Line:", details.get("lineNumber"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(check_syntax_error())
