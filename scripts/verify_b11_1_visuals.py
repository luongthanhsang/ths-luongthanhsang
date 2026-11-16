# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9262

async def verify_and_capture_visuals():
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

                async def eval_js(expr):
                    r = await send("Runtime.evaluate", {"expression": expr, "returnByValue": True, "awaitPromise": True})
                    return r.get("result", {}).get("value")

                await send("Page.enable")
                await send("DOM.enable")

                print("Waiting for initial load and MathJax...")
                await eval_js("""
                    new Promise(resolve => {
                        if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
                            window.MathJax.startup.promise.then(() => setTimeout(resolve, 800));
                        } else {
                            setTimeout(resolve, 1500);
                        }
                    })
                """)

                # 1. Chụp Mục 4b: Cuộn tới Ví dụ 10 & Luyện tập 8
                print("1. Activating Section 4b...")
                await eval_js("activateStep('sec-4', 'b')")
                await asyncio.sleep(0.5)
                await eval_js("window.MathJax && window.MathJax.typesetPromise && window.MathJax.typesetPromise()")
                await asyncio.sleep(0.5)

                # Cuộn tới Ví dụ 10
                await eval_js("""
                    (() => {
                        const box = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 10'));
                        if (box) box.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(0.5)
                r = await send("Page.captureScreenshot")
                with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_vd10_viewport.png"), "wb") as f:
                    f.write(base64.b64decode(r["data"]))
                print("✓ Saved verified_b11_1_vd10_viewport.png")

                # Cuộn tới Luyện tập 8
                await eval_js("""
                    (() => {
                        const box = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('LUYỆN TẬP 8'));
                        if (box) box.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(0.5)
                r = await send("Page.captureScreenshot")
                with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_lt8_viewport.png"), "wb") as f:
                    f.write(base64.b64decode(r["data"]))
                print("✓ Saved verified_b11_1_lt8_viewport.png")

                # 2. Chụp Phần V (Bài tập trắc nghiệm): Cuộn tới Câu 5
                print("2. Activating Quiz Part 1 and scrolling to Câu 5...")
                await eval_js("activateStep('quiz', null, '1')")
                await asyncio.sleep(0.5)
                await eval_js("window.MathJax && window.MathJax.typesetPromise && window.MathJax.typesetPromise()")
                await asyncio.sleep(0.5)

                await eval_js("""
                    (() => {
                        const card = Array.from(document.querySelectorAll('.exam-question-card, .quiz-question-card, [id*=\"mc-11-1-5\"]')).find(el => el.innerText.includes('Câu 5') || el.innerText.includes('Rút gọn biểu thức'));
                        if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(0.5)
                r = await send("Page.captureScreenshot")
                with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_q5_viewport.png"), "wb") as f:
                    f.write(base64.b64decode(r["data"]))
                print("✓ Saved verified_b11_1_q5_viewport.png")

                # 3. Chụp Mục 3a: Ví dụ 5 & Luyện tập 4
                print("3. Activating Section 3a...")
                await eval_js("activateStep('sec-3', 'a')")
                await asyncio.sleep(0.5)
                await eval_js("window.MathJax && window.MathJax.typesetPromise && window.MathJax.typesetPromise()")
                await asyncio.sleep(0.5)
                await eval_js("""
                    (() => {
                        const box = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 5'));
                        if (box) box.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(0.5)
                r = await send("Page.captureScreenshot")
                with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_sec3a_vd5_viewport.png"), "wb") as f:
                    f.write(base64.b64decode(r["data"]))
                print("✓ Saved verified_b11_1_sec3a_vd5_viewport.png")

    finally:
        proc.terminate()
        print("Chrome finished cleanly.")

if __name__ == "__main__":
    asyncio.run(verify_and_capture_visuals())
