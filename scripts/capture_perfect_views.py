# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio, os, base64
import aiohttp

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 9347
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def capture_lesson_sections(lesson_id, steps_to_capture):
    target_url = f"http://localhost:8000/bai-hoc-so.html?grade=11&lesson={lesson_id}"
    print(f"\nLaunching Chrome for {lesson_id}...")

    proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1200",
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
                await asyncio.sleep(2.0)

                for item in steps_to_capture:
                    step_id = item["stepId"]
                    selector = item.get("selector", f"#{step_id}")
                    fname = item["filename"]
                    
                    # Activate step
                    await send("Runtime.evaluate", {
                        "expression": f'''
                            (function() {{
                                if (typeof window.activateStep === "function") {{
                                    window.activateStep("{step_id}");
                                }}
                            }})()
                        '''
                    })
                    await asyncio.sleep(1.2)

                    # Typeset MathJax
                    await send("Runtime.evaluate", {
                        "expression": '''
                            (function() {
                                if (window.MathJax && MathJax.typesetPromise) {
                                    MathJax.typesetPromise();
                                }
                            })()
                        '''
                    })
                    await asyncio.sleep(1.2)

                    # Get element bounding box
                    box_res = await send("Runtime.evaluate", {
                        "expression": f'''
                            (function() {{
                                const el = document.querySelector("{selector}");
                                if (!el) return null;
                                el.scrollIntoView({{ behavior: "instant", block: "start" }});
                                const r = el.getBoundingClientRect();
                                return {{ x: r.x, y: r.y, width: r.width, height: r.height }};
                            }})()
                        ''',
                        "returnByValue": True
                    })
                    
                    box = box_res.get("value")
                    if box and box.get("width", 0) > 0 and box.get("height", 0) > 0:
                        clip = {
                            "x": max(0, box["x"] - 10),
                            "y": max(0, box["y"] - 10),
                            "width": min(1440, box["width"] + 20),
                            "height": min(1400, box["height"] + 20),
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
    # 1. Lesson 11-3 steps
    b3_steps = [
        {"stepId": "sec-3", "selector": "#sec-3", "filename": "b3_verified_sec3_perfect.png"},
        {"stepId": "sec-5", "selector": "#sec-5", "filename": "b3_verified_sec5_tan.png"}
    ]
    await capture_lesson_sections("11-c1-b3", b3_steps)

    # 2. Lesson 11-4 steps
    b4_steps = [
        {"stepId": "sec-2", "selector": "#sec-2", "filename": "b4_verified_sec2_perfect.png"},
        {"stepId": "wrapup", "selector": "#wrapup", "filename": "b4_verified_wrapup.png"}
    ]
    await capture_lesson_sections("11-c1-b4", b4_steps)

if __name__ == "__main__":
    asyncio.run(main())
