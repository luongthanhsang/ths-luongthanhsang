# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9330

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
    await asyncio.sleep(3.0)

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
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.0)

                async def capture_screenshot(filename):
                    res = await send("Page.captureScreenshot", {"format": "png"})
                    data = res.get("data")
                    if data:
                        out_path = os.path.join(ARTIFACT_DIR, filename)
                        with open(out_path, "wb") as f:
                            f.write(base64.b64decode(data))
                        print(f"✅ Captured: {filename} ({os.path.getsize(out_path):,} bytes)")

                # 1. Switch to Section 1a
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const subs = Array.from(document.querySelectorAll('.tree-sub-item'));
                            const item = subs.find(s => s.dataset.stepId === 'sec-1' && s.dataset.subkey === 'a');
                            if (item) item.click();
                        })()
                    """
                })
                await asyncio.sleep(1.2)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_sec1a_spiral.png")

                # 2. Switch to Section 4b
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const subs = Array.from(document.querySelectorAll('.tree-sub-item'));
                            const item = subs.find(s => s.dataset.stepId === 'sec-4' && s.dataset.subkey === 'b');
                            if (item) item.click();
                        })()
                    """
                })
                await asyncio.sleep(1.2)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_sec4b_v10.png")

                # 3. Switch to Quiz tab
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const btn = document.querySelector('button[data-bs-target=\"#trac-nghiem\"], [data-tab=\"trac-nghiem\"], a[href=\"#trac-nghiem\"]');
                            if (btn) btn.click();
                            if (typeof window.renderQuiz === 'function') window.renderQuiz();
                        })()
                    """
                })
                await asyncio.sleep(1.2)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_quiz_tab.png")

                # Inspect DOM for MathJax error markers
                chk = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror'));
                            return { count: errEls.length, errors: errEls.map(e => e.innerText || e.textContent) };
                        })()
                    """,
                    "returnByValue": True
                })
                print("MathJax error report:", chk.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(main())
