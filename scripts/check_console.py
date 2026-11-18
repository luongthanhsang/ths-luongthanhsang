import asyncio, json, urllib.request, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b3"
PORT = 9299

async def get_console():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(3.0)

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
                    payload = {"id": msg_id, "method": method, "params": params or {}}
                    await ws.send_str(json.dumps(payload))

                await send("Console.enable")
                await send("Runtime.enable")

                logs = []
                for _ in range(30):
                    try:
                        msg = await asyncio.wait_for(ws.receive(), timeout=0.5)
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            method = data.get("method")
                            if method == "Runtime.consoleAPICalled":
                                logs.append(f"[CONSOLE] {data['params']}")
                            elif method == "Runtime.exceptionThrown":
                                logs.append(f"[EXCEPTION] {data['params']}")
                    except asyncio.TimeoutError:
                        break

                print(f"Total logs/exceptions captured: {len(logs)}")
                for l in logs:
                    print(l)
    finally:
        proc.kill()

asyncio.run(get_console())
