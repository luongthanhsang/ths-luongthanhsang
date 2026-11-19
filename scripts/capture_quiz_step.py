# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9420

async def main():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(3.5)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page" and "localhost" in p.get("url", "")][0]
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

                # Click quiz step in sidebar
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const nodes = Array.from(document.querySelectorAll('.tree-node'));
                            const qNode = nodes.find(n => n.dataset.stepId === 'quiz');
                            if (qNode) qNode.click();
                        })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)

                res = await send("Page.captureScreenshot", {"format": "png"})
                data = res.get("data")
                if data:
                    out_path = os.path.join(ARTIFACT_DIR, "b11_1_quiz_step_live.png")
                    with open(out_path, "wb") as f:
                        f.write(base64.b64decode(data))
                    print(f"✅ Captured: b11_1_quiz_step_live.png ({os.path.getsize(out_path):,} bytes)")

                # Check MathJax error count in quiz
                errs = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).map(e => e.innerText || e.textContent);
                            return errs;
                        })()
                    """,
                    "returnByValue": True
                })
                print("Quiz live MathJax errors:", errs.get("result", {}).get("value"))
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(main())
