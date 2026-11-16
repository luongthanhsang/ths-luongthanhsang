# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"

async def check_console():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9232",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9232/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
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

                # Check window.LESSON_11_C1_B1_DATA error
                err = await send("Runtime.evaluate", {
                    "expression": "(() => { try { return { hasData: !!window.LESSON_11_C1_B1_DATA }; } catch(e) { return { error: e.message }; } })()",
                    "returnByValue": True
                })
                print("Evaluate result:", json.dumps(err, indent=2))

                # Let's see if there are any exceptions or console messages
                msgs = []
                # listen a short while
                for _ in range(10):
                    try:
                        m = await asyncio.wait_for(ws.receive_json(), timeout=0.5)
                        if m.get("method") == "Runtime.exceptionThrown":
                            print("\n>>> EXCEPTION THROWN:", json.dumps(m["params"]["exceptionDetails"], indent=2, ensure_ascii=False))
                        elif m.get("method") == "Log.entryAdded":
                            print("LOG ENTRY:", m["params"]["entry"])
                    except asyncio.TimeoutError:
                        break

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(check_console())
