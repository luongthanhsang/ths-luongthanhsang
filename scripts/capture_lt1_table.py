import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b1"

async def test():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9227",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9227/json")
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

                # Set viewport size
                await send("Emulation.setDeviceMetricsOverride", {
                    "width": 1280,
                    "height": 900,
                    "deviceScaleFactor": 1,
                    "mobile": False
                })

                await asyncio.sleep(1.5)

                # Activate step sec-1
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                        // click the check answers button
                        const btn = document.querySelector('.btn-check-table-lt1');
                        if (btn) btn.click();
                    })()
                    """
                })

                await asyncio.sleep(1.5)

                # Check feedback box visibility
                res_check = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const box = document.getElementById('lt1-feedback-box');
                        return {
                            display: box ? box.style.display : null,
                            text: box ? box.innerText.substring(0, 150) : null
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("Feedback Box Check:", res_check.get("result", {}).get("value"))

                # Capture Screenshot
                shot_res = await send("Page.captureScreenshot", {"format": "png"})
                shot_data = shot_res.get("data", "")
                if shot_data:
                    out_path = "C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_lt1_table.png"
                    with open(out_path, "wb") as f:
                        f.write(base64.b64decode(shot_data))
                    print("Saved screenshot to verified_lt1_table.png")

    finally:
        proc.kill()

asyncio.run(test())
