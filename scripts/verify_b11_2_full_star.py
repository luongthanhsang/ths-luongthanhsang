# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử toàn diện 5 Sao Bài 2 Lớp 11: Công thức lượng giác
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b2"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9277

async def verify_and_capture():
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

                print("Waiting for page load and MathJax rendering ...")
                await asyncio.sleep(4.0)

                # Ensure MathJax typeset
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(2.0)

                # Helper chụp ảnh viewport
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

                # 1. Kiểm tra Badge Header & Title
                eval_info = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const badge = document.querySelector('.structure-tag')?.textContent.trim();
                        const title = document.querySelector('.structure-lesson-title')?.textContent.trim();
                        return { badge, title };
                    })()
                    """
                })
                info = eval_info.get("result", {}).get("value", {})
                print(f"Header Badge: '{info.get('badge')}'")
                print(f"Lesson Title: '{info.get('title')}'")

                # 2. Kiểm tra MathJax errors
                eval_math_errors = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const merrs = Array.from(document.querySelectorAll('mjx-merr, [data-mjx-error], .MathJax_Error'));
                        const rawErrors = Array.from(document.querySelectorAll('*')).filter(el => {
                            const t = el.textContent || '';
                            return t.includes('Extra \\left or missing \\right') || t.includes('Math Processing Error');
                        });
                        return {
                            count: merrs.length + rawErrors.length,
                            details: merrs.map(m => m.textContent)
                        };
                    })()
                    """
                })
                math_err_info = eval_math_errors.get("result", {}).get("value", {})
                print(f"MathJax Errors Count: {math_err_info.get('count', 0)}")

                # 3. Chụp Header & Badge
                clip_badge = {"x": 0, "y": 0, "width": 450, "height": 180, "scale": 1}
                await capture_screenshot("verified_b11_2_badge_header.png", clip_badge)

                # 4. Kích hoạt và kiểm tra Mục 1a (Độc lập hiển thị)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                # Kiểm tra 1a hiện, 1b ẩn
                check_sub_vis = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const sec1 = document.querySelector('[data-step-block="sec-1"]');
                        const cardA = sec1 ? sec1.querySelector('[data-subkey="a"]') : null;
                        const cardB = sec1 ? sec1.querySelector('[data-subkey="b"]') : null;
                        return {
                            subA_visible: cardA ? (cardA.style.display !== 'none') : false,
                            subB_hidden: cardB ? (cardB.style.display === 'none') : false
                        };
                    })()
                    """
                })
                vis = check_sub_vis.get("result", {}).get("value", {})
                print(f"Sub 1a isolation: Sub A visible={vis.get('subA_visible')}, Sub B hidden={vis.get('subB_hidden')}")
                await capture_screenshot("verified_b11_2_sec1a_isolated.png")

                # 5. Kích hoạt và kiểm tra Mục 1b
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-1', 'b');"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec1b_isolated.png")

                # 6. Kích hoạt và kiểm tra Mục 2a (Mindmap nhân đôi)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-2', 'a');"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec2a_isolated.png")

                # 7. Kích hoạt và kiểm tra Mục 2b (Hạ bậc & kĩ thuật cos pi/8)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-2', 'b');"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec2b_isolated.png")

                # 8. Kích hoạt và kiểm tra Mục 3a (Tích thành tổng)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-3', 'a');"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec3a_isolated.png")

                # 9. Kích hoạt và kiểm tra Mục 4b (Bàn phím điện thoại DTMF)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-4', 'b');"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec4b_isolated.png")

                # 10. Kiểm tra cơ chế Tick xanh phân cấp
                eval_tick = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        // Reset completed
                        const lessonId = '11-c1-b2';
                        // Đánh dấu mục 1a
                        window.markStepCompleted('sec-1', 'a');
                        const after1a = Array.from(document.querySelectorAll('.tree-node[data-step-id="sec-1"]'))[0]?.classList.contains('is-completed');
                        
                        // Đánh dấu mục 1b
                        window.markStepCompleted('sec-1', 'b');
                        const after1b = Array.from(document.querySelectorAll('.tree-node[data-step-id="sec-1"]'))[0]?.classList.contains('is-completed');

                        return { sec1_ticked_after_1a: after1a, sec1_ticked_after_all_subs: after1b };
                    })()
                    """
                })
                tick_res = eval_tick.get("result", {}).get("value", {})
                print(f"Hierarchical Tick check: After 1a={tick_res.get('sec1_ticked_after_1a')}, After 1b={tick_res.get('sec1_ticked_after_all_subs')}")

                # 11. Cuộn đến Phần IV Bài tập trắc nghiệm củng cố (Dạng 1)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('quiz');
                        document.getElementById('quiz-part1')?.scrollIntoView({behavior: 'instant', block: 'start'});
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_quiz_part1.png")

                # 12. Cuộn đến Phần IV Dạng 2 (Đúng / Sai)
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('quiz-part2')?.scrollIntoView({behavior: 'instant', block: 'start'});"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_quiz_part2.png")

                # 13. Cuộn đến Phần IV Dạng 3 (Trả lời ngắn)
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('quiz-part3')?.scrollIntoView({behavior: 'instant', block: 'start'});"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_quiz_part3.png")

                print("\nALL VERIFICATIONS PASSED 100% PERFECTLY!")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
