# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử tự động toàn diện 5 Sao Bài 6 Lớp 11: Cấp số cộng
Chạy qua Chrome CDP Headless, xác minh MathJax, ViewMode mục con, Audio cache, POIs, Quizzes và chụp ảnh nghiệm thu
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c2-b6"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9300

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

                # 2. Hook (Dẫn nhập bài toán hàng ghế nhà hát)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"hook\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_hook_live.png")

                # 3. Section 1a (Định nghĩa cấp số cộng & công sai d)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-1\"][data-subkey=\"a\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_sec1a_def_live.png")

                # 4. Section 1b (Phương pháp chứng minh cấp số cộng)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-1\"][data-subkey=\"b\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_sec1b_proof_live.png")

                # 5. Section 2a (Công thức số hạng tổng quát & Sơ đồ bậc thang SVG)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-2\"][data-subkey=\"a\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_sec2a_nth_live.png")

                # 6. Section 3a (Công thức tính tổng Sn & Ghép đối xứng Gauss SVG)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-3\"][data-subkey=\"a\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_sec3a_sum_live.png")

                # 7. Section 3b (Bài toán thực tế & Lương anh Nam SVG)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-sub-item[data-step-id=\"sec-3\"][data-subkey=\"b\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_sec3b_app_live.png")

                # 8. Wrapup (Chốt kiến thức then chốt & Bảng vàng tổng kết)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"wrapup\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.0)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_wrapup_live.png")

                # 9. Phần IV: Bài tập củng cố (Quiz - Dạng 1)
                await eval_js("""
                    (() => {
                        const el = document.querySelector('.tree-node[data-step-id=\"quiz\"]');
                        if (el) el.click();
                    })()
                """)
                await asyncio.sleep(2.5)
                await eval_js("window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(1.0)
                await capture_screenshot("b11_6_quiz_tab_live.png")

                # Cuộn xuống Dạng 2: Đúng / Sai
                await eval_js("""
                    (() => {
                        const target = document.querySelector('#quiz-part2, .exam-list-tf') ||
                                       Array.from(document.querySelectorAll('h3, h4, .quiz-section-title, .exam-sub-title-bar')).find(el => el.textContent.includes('DẠNG 2') || el.textContent.includes('ĐÚNG / SAI'));
                        if (target) target.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(1.5)
                await capture_screenshot("b11_6_quiz_tf_live.png")

                # Cuộn xuống Dạng 3: Trả lời ngắn
                await eval_js("""
                    (() => {
                        const target = document.querySelector('#quiz-part3, .exam-list-sa') ||
                                       Array.from(document.querySelectorAll('h3, h4, .quiz-section-title, .exam-sub-title-bar')).find(el => el.textContent.includes('DẠNG 3') || el.textContent.includes('TRẢ LỜI NGẮN'));
                        if (target) target.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                """)
                await asyncio.sleep(1.5)
                await capture_screenshot("b11_6_quiz_sa_live.png")

                # 10. Toàn diện kiểm tra DOM & Data
                audit_report = await eval_js("""
                    (() => {
                        const merrs = Array.from(document.querySelectorAll('mjx-merr, [data-mjx-error], .MathJax_Error'));
                        const rawErrors = Array.from(document.querySelectorAll('*')).filter(el => {
                            const t = el.textContent || '';
                            return t.includes('Extra \\\\left or missing \\\\right') || t.includes('Math Processing Error') || t.includes('piextrad') || t.includes('undefined');
                        });
                        const audioCache = window.B11_6_AUDIO_CACHE || window.AUDIO_CACHE || {};
                        const b11_6_keys = Object.keys(audioCache).filter(k => k.includes('b11_6'));

                        const mcqCards = document.querySelectorAll('#quiz-part1 .exam-item-card');
                        const tfCards = document.querySelectorAll('#quiz-part2 .exam-item-card');
                        const saCards = document.querySelectorAll('#quiz-part3 .exam-item-card');

                        return {
                            headerBadge: document.querySelector('.lesson-tree-badge, .structure-tag, .tree-header-badge')?.textContent.trim(),
                            lessonTitle: document.querySelector('.lesson-tree-title, .structure-lesson-title')?.textContent.trim(),
                            merrCount: merrs.length,
                            rawErrorsCount: rawErrors.length,
                            audioKeysCount: b11_6_keys.length,
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
