# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử tự động toàn diện 5 Sao Bài 5 Lớp 11: Dãy số
Chạy qua Chrome CDP Headless, xác minh MathJax, ViewMode mục con 1a-1b, Audio cache, POIs, Quizzes và chụp ảnh nghiệm thu
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c2-b5"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9299

server_proc = None
def ensure_server():
    global server_proc
    try:
        urllib.request.urlopen("http://localhost:8000/bai-hoc-so.html", timeout=1)
        print("Server already running on port 8000.")
    except Exception:
        print("Starting local HTTP server on port 8000...")
        server_proc = subprocess.Popen(["scripts\\py\\python.exe", "-m", "http.server", "8000"],
                                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        time.sleep(2)

async def verify_and_capture():
    ensure_server()
    print(f"Launching Chrome Headless for {TARGET_URL} on port {PORT} ...")
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

                async def eval_js(expression):
                    res = await send("Runtime.evaluate", {
                        "expression": expression,
                        "returnByValue": True,
                        "awaitPromise": True
                    })
                    return res.get("result", {}).get("value")

                await send("Page.enable")
                await send("DOM.enable")
                await send("Runtime.enable")

                print("Waiting for page load and MathJax rendering ...")
                await asyncio.sleep(4.0)

                # Ensure MathJax typeset
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.5)

                async def capture_screenshot(filename, clip=None):
                    params = {"format": "png"}
                    if clip:
                        params["clip"] = clip
                    res = await send("Page.captureScreenshot", params)
                    data = res.get("data")
                    if data:
                        out_path = os.path.join(ARTIFACT_DIR, filename)
                        with open(out_path, "wb") as f:
                            f.write(base64.b64decode(data))
                        print(f"✅ Captured: {filename} ({os.path.getsize(out_path):,} bytes)")

                # 1. Header Badge & Title
                badge_info = await eval_js("""
                    (() => {
                        const badge = document.querySelector('.lesson-tree-badge, .structure-tag, .tree-header-badge')?.textContent.trim();
                        const title = document.querySelector('.lesson-tree-title, .structure-lesson-title')?.textContent.trim();
                        return { badge, title };
                    })()
                """)
                print(f"Header Badge & Title: {badge_info}")

                # 2. Hook (Dẫn nhập)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"hook\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_hook_live.png")

                # 3. Section 1a (Dãy số vô hạn)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-1\"][data-subkey=\"a\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_sec1a_infinite_live.png")

                # 4. Section 2b (Mô tả và truy hồi - có Fibonacci & Trục số SVG)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-2\"][data-subkey=\"b\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_sec2b_fibo_live.png")

                # 5. Section 3b (Dãy bị chặn - dải bị chặn SVG & thẻ định nghĩa mới sửa)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-3\"][data-subkey=\"b\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_sec3b_bounded_live.png")

                # 6. Wrapup (Chốt kiến thức then chốt)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"wrapup\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_wrapup_live.png")

                # 7. Phần IV: Bài tập củng cố (Quiz)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"quiz\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.5)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_5_quiz_tab_live.png")

                # Cuộn xuống câu hỏi đúng/sai và trả lời ngắn trong quiz
                await eval_js("""
                    (() => {
                        const target = document.querySelector('#quiz-part3, .exam-list-sa, .exam-part-3-container') ||
                                       Array.from(document.querySelectorAll('h3, h4, .quiz-section-title, .exam-sub-title-bar')).find(el => el.textContent.includes('DẠNG 3') || el.textContent.includes('TRẢ LỜI NGẮN'));
                        if (target) target.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(1.5)
                await capture_screenshot("b11_5_quiz_short_answer_live.png")

                # 8. Toàn diện kiểm tra DOM & Data
                audit_report = await eval_js("""
                    (() => {
                        const merrs = Array.from(document.querySelectorAll('mjx-merr, [data-mjx-error], .MathJax_Error'));
                        const rawErrors = Array.from(document.querySelectorAll('*')).filter(el => {
                            const t = el.textContent || '';
                            return t.includes('Extra \\\\left or missing \\\\right') || t.includes('Math Processing Error') || t.includes('piextrad');
                        });
                        const audioCache = window.B11_5_AUDIO_CACHE || window.AUDIO_CACHE || {};
                        const b11_5_keys = Object.keys(audioCache).filter(k => k.includes('b11_5'));

                        // Kiểm tra các câu hỏi quiz
                        const mcqCards = document.querySelectorAll('#quiz-part1 .exam-item-card');
                        const tfCards = document.querySelectorAll('#quiz-part2 .exam-item-card');
                        const saCards = document.querySelectorAll('#quiz-part3 .exam-item-card');

                        return {
                            headerBadge: document.querySelector('.lesson-tree-badge, .structure-tag, .tree-header-badge')?.textContent.trim(),
                            lessonTitle: document.querySelector('.lesson-tree-title, .structure-lesson-title')?.textContent.trim(),
                            merrCount: merrs.length,
                            rawErrorsCount: rawErrors.length,
                            audioKeysCount: b11_5_keys.length,
                            renderedMcqCount: mcqCards.length,
                            renderedTfCount: tfCards.length,
                            renderedSaCount: saCards.length
                        };
                    })()
                """)

                print("\n================ FULL AUDIT REPORT ================")
                print(json.dumps(audit_report, indent=2, ensure_ascii=False))
                print("===================================================\n")

    finally:
        proc.kill()
        if server_proc:
            server_proc.kill()

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
