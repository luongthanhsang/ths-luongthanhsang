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
        print("Connected to ws:", ws_url)

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

                await asyncio.sleep(3)

                # Set viewport
                await send("Emulation.setDeviceMetricsOverride", {
                    "width": 1440,
                    "height": 1000,
                    "deviceScaleFactor": 1,
                    "mobile": False
                })

                # Inspect Sidebar tree structure
                tree_eval = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const title = document.querySelector('.structure-lesson-title')?.innerText || '';
                        const nodes = Array.from(document.querySelectorAll('.tree-node, .tree-sub-item')).map(el => {
                            const isSub = el.classList.contains('tree-sub-item');
                            const label = (el.querySelector('.tree-item-label, .tree-sub-title')?.innerText || '').trim();
                            const letter = (el.querySelector('.tree-sub-letter')?.innerText || '').trim();
                            const checkState = el.classList.contains('completed') ? 'CHECKED' : 'UNCHECKED';
                            return { isSub, letter, label, checkState };
                        });
                        return { title, nodes };
                    })()
                    """,
                    "returnByValue": True
                })
                print("Sidebar Title:", tree_eval.get("result", {}).get("value", {}).get("title"))
                print("Sidebar Nodes:")
                for n in tree_eval.get("result", {}).get("value", {}).get("nodes", []):
                    prefix = "    └─ " if n.get("isSub") else "• "
                    let = f"[{n.get('letter')}] " if n.get("letter") else ""
                    print(f"{prefix}{let}{n.get('label')} ({n.get('checkState')})")

                # Take initial screenshot of page
                shot1 = await send("Page.captureScreenshot", {"format": "png"})
                img1_data = base64.b64decode(shot1["data"])
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_lesson_10_2_init.png", "wb") as f:
                    f.write(img1_data)
                print("Saved verified_lesson_10_2_init.png")

                # Click into Section 2b (Các tập con thường dùng của R) to check Golden Table & Vi du 5
                click_2b = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const items = Array.from(document.querySelectorAll('.tree-sub-item'));
                        const sub2b = items.find(el => el.innerText.includes('Các tập con thường dùng của R'));
                        if (sub2b) {
                            sub2b.click();
                            return 'Clicked 2b';
                        }
                        return 'Not found 2b';
                    })()
                    """,
                    "returnByValue": True
                })
                print("Click 2b result:", click_2b.get("result", {}).get("value"))
                await asyncio.sleep(2)

                # Scroll to golden table
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const table = document.querySelector('svg[viewBox*=\"0 0 760 520\"]');
                        if (table) table.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                    """
                })
                await asyncio.sleep(1)

                shot_2b = await send("Page.captureScreenshot", {"format": "png"})
                img_2b_data = base64.b64decode(shot_2b["data"])
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_sec2b_golden_table.png", "wb") as f:
                    f.write(img_2b_data)
                print("Saved verified_sec2b_golden_table.png")

                # Scroll to Vi du 5
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const v5 = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 5'));
                        if (v5) v5.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                    """
                })
                await asyncio.sleep(1)

                shot_v5 = await send("Page.captureScreenshot", {"format": "png"})
                img_v5_data = base64.b64decode(shot_v5["data"])
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_v5_render.png", "wb") as f:
                    f.write(img_v5_data)
                print("Saved verified_v5_render.png")

                # Click into Section 3a (Giao của hai tập hợp) to check Venn H1.6 & Vi du 6
                click_3a = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const items = Array.from(document.querySelectorAll('.tree-sub-item'));
                        const sub3a = items.find(el => el.innerText.includes('Giao của hai tập hợp'));
                        if (sub3a) {
                            sub3a.click();
                            return 'Clicked 3a';
                        }
                        return 'Not found 3a';
                    })()
                    """,
                    "returnByValue": True
                })
                print("Click 3a result:", click_3a.get("result", {}).get("value"))
                await asyncio.sleep(2)

                # Scroll to Vi du 6
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const v6 = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 6'));
                        if (v6) v6.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                    """
                })
                await asyncio.sleep(1)

                shot_v6 = await send("Page.captureScreenshot", {"format": "png"})
                img_v6_data = base64.b64decode(shot_v6["data"])
                with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_v6_render.png", "wb") as f:
                    f.write(img_v6_data)
                print("Saved verified_v6_render.png")

                # Test Complete All Sub-items in Section 1 and verify Section 1 gets checked!
                tick_test = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        // Complete sub 1a, 1b, 1c
                        if (window.completeSubSection) {
                            window.completeSubSection('10-c1-b2-s1', 'a');
                            window.completeSubSection('10-c1-b2-s1', 'b');
                            window.completeSubSection('10-c1-b2-s1', 'c');
                        }
                        const sec1 = document.querySelector('.tree-node[data-section-id=\"10-c1-b2-s1\"]');
                        const isSec1Checked = sec1 ? sec1.classList.contains('completed') : false;
                        return { isSec1Checked };
                    })()
                    """,
                    "returnByValue": True
                })
                print("Tick Test Result:", tick_test.get("result", {}).get("value"))

    finally:
        proc.terminate()
        print("Chrome closed.")

if __name__ == "__main__":
    asyncio.run(test())
