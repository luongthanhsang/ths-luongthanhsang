# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio, os, base64
import aiohttp

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 9345
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def capture_views(lesson_id, shots):
    target_url = f"http://localhost:8000/bai-hoc-so.html?grade=11&lesson={lesson_id}"
    print(f"\n==========================================")
    print(f"Launching for {lesson_id}...")

    proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        target_url
    ])
    await asyncio.sleep(4.0)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    payload = {"id": msg_id, "method": method, "params": params or {}}
                    await ws.send_str(json.dumps(payload))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id:
                                return data.get("result", {})
                        elif msg.type in (aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR):
                            break

                await send("Page.enable")
                await send("Runtime.enable")
                await asyncio.sleep(2.5)

                for item in shots:
                    selector = item["selector"]
                    fname = item["filename"]
                    
                    # Scroll element into view and get bounding box
                    box_res = await send("Runtime.evaluate", {
                        "expression": f'''
                            (function() {{
                                const el = document.querySelector("{selector}");
                                if (!el) return null;
                                el.scrollIntoView({{ behavior: "instant", block: "center" }});
                                const r = el.getBoundingClientRect();
                                return {{ x: r.x, y: r.y, width: r.width, height: r.height }};
                            }})()
                        ''',
                        "returnByValue": True
                    })
                    
                    await asyncio.sleep(1.0)
                    box = box_res.get("value")
                    
                    if box and box.get("width", 0) > 0 and box.get("height", 0) > 0:
                        clip = {
                            "x": max(0, box["x"] - 15),
                            "y": max(0, box["y"] - 15),
                            "width": min(1440, box["width"] + 30),
                            "height": min(1200, box["height"] + 30),
                            "scale": 1
                        }
                        shot = await send("Page.captureScreenshot", {"format": "png", "clip": clip})
                    else:
                        shot = await send("Page.captureScreenshot", {"format": "png"})
                    
                    if shot and shot.get("data"):
                        out_path = os.path.join(ARTIFACT_DIR, fname)
                        with open(out_path, "wb") as f:
                            f.write(base64.b64decode(shot["data"]))
                        print(f"Captured: {fname}")

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

async def main():
    # 1. Lesson 11-3 screenshots
    shots_b3 = [
        {"selector": ".math-table-container", "filename": "b3_verified_table_hd1.png"},
        {"selector": ".card-sin", "filename": "b3_verified_card_sin.png"},
        {"selector": "#sec-3", "filename": "b3_verified_sec3_sin_properties.png"},
        {"selector": "#sidebarLessonsList", "filename": "b3_verified_sidebar.png"}
    ]
    await capture_views("11-c1-b3", shots_b3)

    # 2. Lesson 11-4 screenshots
    shots_b4 = [
        {"selector": "#sidebarLessonsList", "filename": "b4_verified_sidebar.png"},
        {"selector": "#sec-2", "filename": "b4_verified_sec2_sin_eq.png"},
        {"selector": "#sec-3", "filename": "b4_verified_sec3_cos_eq.png"},
        {"selector": "#sec-7", "filename": "b4_verified_sec7_summary_table.png"}
    ]
    await capture_views("11-c1-b4", shots_b4)

if __name__ == "__main__":
    asyncio.run(main())
