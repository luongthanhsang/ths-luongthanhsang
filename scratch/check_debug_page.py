import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b1"

async def test():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9226",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9226/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id:
                                return data.get("result", {})

                # Enable Log and Runtime
                await send("Log.enable")
                await send("Runtime.enable")
                await asyncio.sleep(2)

                eval_res = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        return {
                            href: window.location.href,
                            hasDb: !!window.LESSONS_DATABASE,
                            hasB1Data: !!window.LESSON_10_C1_B1_DATA,
                            bodyText: document.body.innerText.substring(0, 300)
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("EVAL:", eval_res)

    finally:
        proc.kill()

asyncio.run(test())
