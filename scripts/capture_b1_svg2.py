# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio, os, base64
import aiohttp

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 9349
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def capture_b1_sub1():
    target_url = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
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
                await asyncio.sleep(2.0)

                # Activate sec-1-a
                await send("Runtime.evaluate", {
                    "expression": 'if (typeof window.activateStep === "function") window.activateStep("sec-1", "a");'
                })
                await asyncio.sleep(1.5)

                shot = await send("Page.captureScreenshot", {"format": "png"})
                if shot and shot.get("data"):
                    out_path = os.path.join(ARTIFACT_DIR, "b1_sec1_a_current.png")
                    with open(out_path, "wb") as f:
                        f.write(base64.b64decode(shot["data"]))
                    print("Saved: b1_sec1_a_current.png")

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

asyncio.run(capture_b1_sub1())
