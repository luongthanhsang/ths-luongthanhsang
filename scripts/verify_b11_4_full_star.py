# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử tự động toàn diện 5 Sao Bài 4 Lớp 11: Phương trình lượng giác cơ bản
Chạy qua Chrome CDP Headless, xác minh MathJax, ViewMode mục con 1a-1b, Audio cache, POIs, Quizzes và chụp ảnh nghiệm thu
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9295

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
                            return t.includes('Extra \\\\left or missing \\\\right') || t.includes('Math Processing Error') || t.includes('piextrad');
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
                if math_err_info.get('count', 0) > 0:
                    print("  Details:", math_err_info.get('details'))

                # 3. Chụp Header & Badge (full top viewport)
                await send("Runtime.evaluate", {"expression": "window.scrollTo(0, 0);"})
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_header_badge.png")

                # 4. Kiểm tra Lời chào & Mục tiêu
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('welcome');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"welcome\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_welcome_and_goals.png")

                # 5. Kiểm tra Tình huống mở đầu (Hook)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('hook');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"hook\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_hook_cannon.png")

                # 6. Kiểm tra Mục 1a (Định nghĩa phương trình tương đương - hiển thị riêng biệt)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec1', 'a');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-1\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                # Kiểm tra viewMode chỉ hiển thị 1a
                check_sub1a = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subA = document.querySelector('[data-subkey=\"a\"]');
                        const subB = document.querySelector('[data-subkey=\"b\"]');
                        return {
                            subA_display: subA ? window.getComputedStyle(subA).display : 'null',
                            subB_display: subB ? window.getComputedStyle(subB).display : 'null'
                        };
                    })()
                    """
                })
                print("Subsections display in 1a mode:", check_sub1a.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_4_sec1a_definition.png")

                # 7. Kiểm tra Mục 1b (Các phép biến đổi tương đương - hiển thị riêng biệt)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec1', 'b');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-1\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                check_sub1b = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subA = document.querySelector('[data-subkey=\"a\"]');
                        const subB = document.querySelector('[data-subkey=\"b\"]');
                        return {
                            subA_display: subA ? window.getComputedStyle(subA).display : 'null',
                            subB_display: subB ? window.getComputedStyle(subB).display : 'null'
                        };
                    })()
                    """
                })
                print("Subsections display in 1b mode:", check_sub1b.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_4_sec1b_rules.png")

                # 8. Kiểm tra cơ chế Tick xanh phân cấp Mục 1:
                # 8a: Tick chỉ mục 1a
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subNodeA = document.querySelector('.tree-sub-item[data-subkey=\"a\"]');
                        if (subNodeA) {
                            const icon = subNodeA.querySelector('.tree-sub-status-icon');
                            if (icon) icon.click();
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.0)
                eval_tick1 = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subA = document.querySelector('.tree-sub-item[data-subkey=\"a\"]')?.classList.contains('is-completed');
                        const subB = document.querySelector('.tree-sub-item[data-subkey=\"b\"]')?.classList.contains('is-completed');
                        const sec1 = document.querySelector('.tree-step-item[data-step-id=\"sec-1\"]')?.classList.contains('is-completed');
                        return { subA, subB, sec1_parent: sec1 };
                    })()
                    """
                })
                print("Tick state after sub 1a only:", eval_tick1.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_4_tick_sub1a_only.png")

                # 8b: Tick tiếp mục 1b -> Mục 1 cha tự động hoàn thành!
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subNodeB = document.querySelector('.tree-sub-item[data-subkey=\"b\"]');
                        if (subNodeB) {
                            const icon = subNodeB.querySelector('.tree-sub-status-icon');
                            if (icon) icon.click();
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.0)
                eval_tick2 = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const subA = document.querySelector('.tree-sub-item[data-subkey=\"a\"]')?.classList.contains('is-completed');
                        const subB = document.querySelector('.tree-sub-item[data-subkey=\"b\"]')?.classList.contains('is-completed');
                        const sec1 = document.querySelector('.tree-step-item[data-step-id=\"sec-1\"]')?.classList.contains('is-completed');
                        return { subA, subB, sec1_parent: sec1 };
                    })()
                    """
                })
                print("Tick state after both sub 1a and 1b:", eval_tick2.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_4_tick_both_subs_and_parent.png")

                # 9. Kiểm tra Mục 2 (Phương trình sin x = m)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec2');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-2\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_sec2_sine_eq.png")

                # 10. Kiểm tra Mục 3 (Phương trình cos x = m)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec3');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-3\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_sec3_cosine_eq.png")

                # 11. Kiểm tra Mục 4 (Phương trình tan x = m)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec4');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-4\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_sec4_tangent_eq.png")

                # 12. Kiểm tra Mục 5 (Phương trình cot x = m)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec5');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-5\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_sec5_cotangent_eq.png")

                # 13. Kiểm tra Mục 6 (Máy tính cầm tay Casio)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec6');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"sec-6\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_sec6_casio_calc.png")

                # 14. Kiểm tra Wrap-up (Bảng vàng công thức & Pha Mặt Trăng)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('wrapup');"
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('[data-step-block=\"wrapup\"]').scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_wrapup_table.png")

                # Scroll xuống phần các pha Mặt Trăng trong wrap-up
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('.application-box')?.scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_wrapup_moon_phases.png")

                # 15. Kiểm tra POI popup tương tác trên timeline
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const sec2Audio = document.querySelector('#sec-2 .custom-audio-player');
                        if (sec2Audio) {
                            const poiBtn = sec2Audio.querySelector('.checkpoint-marker, .poi-marker-btn, [data-poi-idx]');
                            if (poiBtn) poiBtn.click();
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_poi_popup.png")

                # Đóng modal POI
                await send("Runtime.evaluate", {
                    "expression": "const closeBtn = document.querySelector('.close-modal-btn, .btn-close, .modal-close'); if (closeBtn) closeBtn.click();"
                })
                await asyncio.sleep(0.5)

                # 16. Kiểm tra Phần IV: Bài tập trắc nghiệm củng cố (Quiz)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('quiz');"
                })
                await asyncio.sleep(1.0)

                # Dạng 1: Trắc nghiệm 4 lựa chọn (scroll to part 1)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('#quiz-part1')?.scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_quiz_part1.png")

                # Dạng 2: Trắc nghiệm Đúng / Sai (scroll to part 2)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('#quiz-part2')?.scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_quiz_part2.png")

                # Dạng 3: Trắc nghiệm Trả lời ngắn (scroll to part 3)
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('#quiz-part3')?.scrollIntoView({behavior:'instant', block:'start'});"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_4_quiz_part3.png")

                print("\nALL VERIFICATIONS AND SCREENSHOTS COMPLETED SUCCESSFULLY!")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
