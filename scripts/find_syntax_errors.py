import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9370",
        "about:blank"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9370/json")
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
                await send("Log.enable")
                await send("Page.enable")

                console_errors = []

                # Listen to events
                # Navigate to the page
                await ws.send_str(json.dumps({'id': 999, 'method': 'Page.navigate', 'params': {'url': 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1'}}))

                # Read events for 4 seconds
                t_end = asyncio.get_event_loop().time() + 4.0
                while asyncio.get_event_loop().time() < t_end:
                    try:
                        msg = await asyncio.wait_for(ws.receive(), timeout=1.0)
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            method = d.get('method')
                            if method == 'Runtime.exceptionThrown':
                                exc = d.get('params', {}).get('exceptionDetails', {})
                                console_errors.append({
                                    'text': exc.get('text'),
                                    'line': exc.get('lineNumber'),
                                    'col': exc.get('columnNumber'),
                                    'url': exc.get('url'),
                                    'exception': exc.get('exception', {}).get('description')
                                })
                            elif method == 'Runtime.consoleAPICalled':
                                if d.get('params', {}).get('type') == 'error':
                                    console_errors.append({
                                        'type': 'console.error',
                                        'args': d.get('params', {}).get('args')
                                    })
                    except asyncio.TimeoutError:
                        pass

                print("Total console errors caught:", len(console_errors))
                for err in console_errors:
                    print("  ERROR:", err)
    finally:
        proc.kill()

asyncio.run(check())
