# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9260

async def verify_and_capture():
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

                # Đợi MathJax hoàn thành render
                print("Waiting for MathJax to finish typesetting...")
                await eval_js("""
                    new Promise(resolve => {
                        if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
                            window.MathJax.startup.promise.then(() => setTimeout(resolve, 800));
                        } else {
                            setTimeout(resolve, 1500);
                        }
                    })
                """)

                # 1. Kiểm tra xem có lỗi MathJax nào không
                errors = await eval_js("""
                    (() => {
                        const errs = [];
                        document.querySelectorAll('[data-mjx-error], merror, .MathJax_Error').forEach(el => {
                            errs.push(el.innerText || el.getAttribute('data-mjx-error') || 'Math error');
                        });
                        const text = document.body.innerText;
                        if (text.includes('Extra \\\\left') || text.includes('missing \\\\right') || text.includes('Extra \\left')) {
                            errs.push('Found Extra left or missing right text on page');
                        }
                        return errs;
                    })()
                """)
                print(f"=== MathJax Errors Found: {len(errors)} ===")
                for e in errors:
                    print("  ERROR:", e)

                # 2. Chụp ảnh Ví dụ 10
                print("Switching to Mục 4b to verify Ví dụ 10...")
                await eval_js("""
                    (() => {
                        // Click or activate sec-4, sub b
                        if (typeof activateStep === 'function') {
                            activateStep('sec-4', 'b');
                        }
                    })()
                """)
                await asyncio.sleep(0.8)

                # Rerender MathJax if needed
                await eval_js("window.MathJax && window.MathJax.typesetPromise && window.MathJax.typesetPromise()")
                await asyncio.sleep(0.5)

                vd10_clip = await eval_js("""
                    (() => {
                        const box = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 10'));
                        if (!box) return null;
                        const r = box.getBoundingClientRect();
                        return { x: Math.max(0, r.left - 10), y: Math.max(0, r.top - 10), width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                """)
                if vd10_clip:
                    r = await send("Page.captureScreenshot", {"clip": vd10_clip})
                    with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_vd10_fixed.png"), "wb") as f:
                        f.write(base64.b64decode(r["data"]))
                    print("✓ Saved verified_b11_1_vd10_fixed.png")

                # Chụp ảnh Luyện tập 8
                lt8_clip = await eval_js("""
                    (() => {
                        const box = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('LUYỆN TẬP 8'));
                        if (!box) return null;
                        const r = box.getBoundingClientRect();
                        return { x: Math.max(0, r.left - 10), y: Math.max(0, r.top - 10), width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                """)
                if lt8_clip:
                    r = await send("Page.captureScreenshot", {"clip": lt8_clip})
                    with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_lt8_fixed.png"), "wb") as f:
                        f.write(base64.b64decode(r["data"]))
                    print("✓ Saved verified_b11_1_lt8_fixed.png")

                # 3. Chuyển sang Phần V (Bài tập trắc nghiệm) để kiểm tra Câu 5
                print("Switching to Phần V (Quiz) to verify Câu 5...")
                await eval_js("""
                    (() => {
                        if (typeof activateStep === 'function') {
                            activateStep('quiz', null, '1');
                        }
                    })()
                """)
                await asyncio.sleep(0.8)
                await eval_js("window.MathJax && window.MathJax.typesetPromise && window.MathJax.typesetPromise()")
                await asyncio.sleep(0.5)

                q5_clip = await eval_js("""
                    (() => {
                        const card = document.getElementById('card-mc-11-1-5') || Array.from(document.querySelectorAll('.exam-question-card, .quiz-question-card, [id*=\"mc-11-1-5\"]')).find(el => el.innerText.includes('Câu 5') || el.innerText.includes('Rút gọn biểu thức'));
                        if (!card) return null;
                        const r = card.getBoundingClientRect();
                        return { x: Math.max(0, r.left - 10), y: Math.max(0, r.top - 10), width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                """)
                if q5_clip:
                    r = await send("Page.captureScreenshot", {"clip": q5_clip})
                    with open(os.path.join(ARTIFACT_DIR, "verified_b11_1_q5_fixed.png"), "wb") as f:
                        f.write(base64.b64decode(r["data"]))
                    print("✓ Saved verified_b11_1_q5_fixed.png")

                # 4. Kiểm tra toàn bộ 8 mục con trên sidebar và nội dung
                sub_check = await eval_js("""
                    (() => {
                        const items = [];
                        document.querySelectorAll('.tree-sub-item').forEach(el => {
                            items.push({
                                stepId: el.dataset.stepId,
                                subkey: el.dataset.subkey,
                                text: el.innerText.replace(/\\s+/g, ' ').trim()
                            });
                        });
                        return items;
                    })()
                """)
                print(f"=== Tree Sub-items Found: {len(sub_check)} ===")
                for it in sub_check:
                    print("  Sub item:", it)

    finally:
        proc.terminate()
        print("Chrome terminated.")

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
