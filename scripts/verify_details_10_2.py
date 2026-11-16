# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b2"

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

                await asyncio.sleep(2)
                await send("Emulation.setDeviceMetricsOverride", {
                    "width": 1440,
                    "height": 1000,
                    "deviceScaleFactor": 1,
                    "mobile": False
                })

                # 1. Screenshot Hook (Tình huống mở đầu: 2 màn hình họp trực tuyến)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const hookItem = Array.from(document.querySelectorAll('.tree-node')).find(el => el.innerText.includes('Tình huống mở đầu'));
                        if (hookItem) hookItem.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                shot_hook = await send("Page.captureScreenshot", {"format": "png"})
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_hook_meeting_screens.png", "wb") as f:
                    f.write(base64.b64decode(shot_hook["data"]))
                print("Saved verified_hook_meeting_screens.png")

                # 2. Screenshot Section 1b (Tập hợp con - Biểu đồ Ven)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const sub1b = Array.from(document.querySelectorAll('.tree-sub-item')).find(el => el.innerText.includes('Tập hợp con'));
                        if (sub1b) sub1b.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                shot_1b = await send("Page.captureScreenshot", {"format": "png"})
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_sec1b_venn_subsets.png", "wb") as f:
                    f.write(base64.b64decode(shot_1b["data"]))
                print("Saved verified_sec1b_venn_subsets.png")

                # 3. Screenshot Section 3c (Hiệu và phần bù - Biểu đồ Ven)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const sub3c = Array.from(document.querySelectorAll('.tree-sub-item')).find(el => el.innerText.includes('Hiệu của hai tập hợp và phần bù'));
                        if (sub3c) sub3c.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                shot_3c = await send("Page.captureScreenshot", {"format": "png"})
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_sec3c_venn_diff.png", "wb") as f:
                    f.write(base64.b64decode(shot_3c["data"]))
                print("Saved verified_sec3c_venn_diff.png")

                # 4. Screenshot Part 4 (Bài tập củng cố trắc nghiệm 3 dạng thức mới 2025)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const p4 = Array.from(document.querySelectorAll('.tree-node')).find(el => el.innerText.includes('Phần IV'));
                        if (p4) p4.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                shot_p4 = await send("Page.captureScreenshot", {"format": "png"})
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_part4_exam.png", "wb") as f:
                    f.write(base64.b64decode(shot_p4["data"]))
                print("Saved verified_part4_exam.png")

    finally:
        proc.terminate()
        print("Chrome 9227 closed.")

if __name__ == "__main__":
    asyncio.run(test())
