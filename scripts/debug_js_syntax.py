# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"

async def test_syntax():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9255",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9255/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    cur = msg_id
                    await ws.send_json({"id": cur, "method": method, "params": params or {}})
                    while True:
                        msg = await ws.receive_json()
                        if msg.get("id") == cur:
                            return msg.get("result")

                await send("Runtime.enable")
                await send("Log.enable")
                await asyncio.sleep(2.0)

                with open("js/lesson-11-1-data.js", "r", encoding="utf-8") as f:
                    code = f.read()

                r = await send("Runtime.evaluate", {
                    "expression": code,
                    "silent": False,
                    "returnByValue": False
                })
                print("EVAL RESULT:")
                print(json.dumps(r, indent=2))
    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(test_syntax())
