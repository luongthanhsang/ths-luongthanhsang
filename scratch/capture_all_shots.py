import asyncio, json, urllib.request, subprocess, aiohttp, base64

async def test():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9231",
        "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b1"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9231/json")
        pages = json.loads(res.read())
        ws_url = pages[0]["webSocketDebuggerUrl"]

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

                # Set viewport size
                await send("Emulation.setDeviceMetricsOverride", {
                    "width": 1366,
                    "height": 900,
                    "deviceScaleFactor": 1,
                    "mobile": False
                })

                await asyncio.sleep(1.5)

                # 1. Activate sec-1 and show table with feedback
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                        const box = document.getElementById('lt1-feedback-box');
                        if (box) box.style.display = 'block';
                    })()
                    """
                })
                await asyncio.sleep(1.5)

                shot1 = await send("Page.captureScreenshot", {"format": "png"})
                if shot1.get("data"):
                    with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_sec1_table_shot.png", "wb") as f:
                        f.write(base64.b64decode(shot1["data"]))
                    print("Saved verified_sec1_table_shot.png")

                # 2. Activate hook to show animal optical illusion
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('hook');"
                })
                await asyncio.sleep(1)

                shot2 = await send("Page.captureScreenshot", {"format": "png"})
                if shot2.get("data"):
                    with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_hook_animal_shot.png", "wb") as f:
                        f.write(base64.b64decode(shot2["data"]))
                    print("Saved verified_hook_animal_shot.png")

                # 3. Activate sec-2 to show pedestrian sign
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-2');"
                })
                await asyncio.sleep(1)

                shot3 = await send("Page.captureScreenshot", {"format": "png"})
                if shot3.get("data"):
                    with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_sec2_sign_shot.png", "wb") as f:
                        f.write(base64.b64decode(shot3["data"]))
                    print("Saved verified_sec2_sign_shot.png")

    finally:
        proc.kill()

asyncio.run(test())
