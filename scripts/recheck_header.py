# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b3"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9289

async def main():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(3.5)

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
                await send("DOM.enable")
                await send("Runtime.enable")
                await asyncio.sleep(2.0)

                # Get rect of header / top bar
                rect_res = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const el = document.querySelector('.structure-header') || document.querySelector('header') || document.querySelector('.navbar');
                        if (el) {
                            const r = el.getBoundingClientRect();
                            return { x: r.left, y: r.top, width: r.width, height: r.height };
                        }
                        const tag = document.querySelector('.structure-tag');
                        if (tag) {
                            const r = tag.getBoundingClientRect();
                            return { x: r.left, y: r.top, width: 450, height: 120 };
                        }
                        return { x: 0, y: 0, width: 600, height: 120 };
                    })()
                    """,
                    "returnByValue": True
                })
                rect = rect_res.get("result", {}).get("value", {})
                print("Header rect:", rect)

                # Capture header badge screenshot with good clip
                clip = {
                    "x": max(0, rect.get("x", 0)),
                    "y": max(0, rect.get("y", 0)),
                    "width": max(400, rect.get("width", 500)),
                    "height": max(100, rect.get("height", 120)),
                    "scale": 1
                }
                res = await send("Page.captureScreenshot", {"format": "png", "clip": clip})
                data = res.get("data")
                if data:
                    out_path = os.path.join(ARTIFACT_DIR, "verified_b11_3_header_badge.png")
                    with open(out_path, "wb") as f:
                        f.write(base64.b64decode(data))
                    print(f"Header screenshot saved: {os.path.getsize(out_path)} bytes")

                # Also test POI click to verify POI modal popup is working cleanly
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec2');"
                })
                await asyncio.sleep(1.0)
                # Click subkey b to check sec2b
                await send("Runtime.evaluate", {
                    "expression": "window.switchSubKey && window.switchSubKey('b');"
                })
                await asyncio.sleep(1.0)
    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(main())
