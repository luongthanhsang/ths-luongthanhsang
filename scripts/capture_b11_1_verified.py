# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9325

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

                await asyncio.sleep(2.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.0)

                async def capture_screenshot(filename, selector=None):
                    params = {"format": "png"}
                    if selector:
                        eval_res = await send("Runtime.evaluate", {
                            "expression": f"""
                                (() => {{
                                    const el = document.querySelector('{selector}');
                                    if (!el) return null;
                                    const r = el.getBoundingClientRect();
                                    return {{ x: Math.max(0, r.left), y: Math.max(0, r.top), width: Math.min(1440, r.width), height: Math.min(1100, r.height), scale: 1 }};
                                }})()
                            """,
                            "returnByValue": True
                        })
                        clip = eval_res.get("result", {}).get("value")
                        if clip and clip.get("width") > 0 and clip.get("height") > 0:
                            params["clip"] = clip

                    res = await send("Page.captureScreenshot", params)
                    data = res.get("data")
                    if data:
                        out_path = os.path.join(ARTIFACT_DIR, filename)
                        with open(out_path, "wb") as f:
                            f.write(base64.b64decode(data))
                        print(f"✅ Captured: {filename} ({os.path.getsize(out_path):,} bytes)")

                # 1. Switch to Section 1a (Góc lượng giác - 4 sơ đồ xoắn ốc)
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const items = Array.from(document.querySelectorAll('.tree-sub-item, .tree-leaf-item'));
                            const sec1a = items.find(el => el.textContent.includes('1a') || el.textContent.includes('Khái niệm'));
                            if (sec1a) sec1a.click();
                        })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_verified_sec1a_spiral.png", "#lessonDetailViewer")

                # 2. Switch to Section 4b (Góc liên quan đặc biệt - Ví dụ 10)
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const items = Array.from(document.querySelectorAll('.tree-sub-item, .tree-leaf-item'));
                            const sec4b = items.find(el => el.textContent.includes('4b') || el.textContent.includes('liên quan'));
                            if (sec4b) sec4b.click();
                        })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_verified_sec4b_v10.png", "#lessonDetailViewer")

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
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot("b11_1_verified_quiz_q5.png", "#trac-nghiem")

                # Check MathJax error count
                chk = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror'));
                            return { count: errEls.length, errors: errEls.map(e => e.innerText || e.textContent) };
                        })()
                    """,
                    "returnByValue": True
                })
                print("MathJax check in live DOM:", chk.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(main())
