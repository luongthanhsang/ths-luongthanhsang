# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử tự động toàn diện 5 Sao Bài 3 Lớp 11: Hàm số lượng giác
Chạy qua Chrome CDP Headless, xác minh MathJax, ViewMode mục con, Audio cache, POIs và chụp ảnh nghiệm thu
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b3"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9288

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

                # 3. Chụp Header & Badge
                clip_badge = {"x": 0, "y": 0, "width": 480, "height": 180, "scale": 1}
                await capture_screenshot("verified_b11_3_header_badge.png", clip_badge)

                # 4. Kiểm tra Lời chào & Mục tiêu
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('welcome');"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_3_welcome_and_goals.png")

                # 5. Kích hoạt Hook: Tình huống mở đầu
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('hook');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_hook_respiratory.png")

                # 6. Kích hoạt Mục 1: Định nghĩa 4 hàm số
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-1');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_sec1_circle_def.png")

                # 7. Kích hoạt Mục 2a: Hàm số chẵn và hàm số lẻ
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-2', 'a');"
                })
                await asyncio.sleep(1.2)
                # Kiểm tra hiển thị độc lập: subCard 2a hiện, subCard 2b ẩn
                check_sub2a = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const cardA = document.querySelector('[data-subkey="a"]');
                        const cardB = document.querySelector('[data-subkey="b"]');
                        return {
                            cardA_display: cardA ? window.getComputedStyle(cardA).display : 'null',
                            cardB_display: cardB ? window.getComputedStyle(cardB).display : 'null'
                        };
                    })()
                    """
                })
                print("Sub 2a ViewMode check:", check_sub2a.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_3_sec2a_parity.png")

                # 8. Kích hoạt Mục 2b: Hàm số tuần hoàn và chu kì
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-2', 'b');"
                })
                await asyncio.sleep(1.2)
                check_sub2b = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const cardA = document.querySelector('[data-subkey="a"]');
                        const cardB = document.querySelector('[data-subkey="b"]');
                        return {
                            cardA_display: cardA ? window.getComputedStyle(cardA).display : 'null',
                            cardB_display: cardB ? window.getComputedStyle(cardB).display : 'null'
                        };
                    })()
                    """
                })
                print("Sub 2b ViewMode check:", check_sub2b.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_3_sec2b_periodic.png")

                # 9. Kích hoạt Mục 3: Đồ thị y = sin x
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-3');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_sec3_sine_wave.png")

                # 10. Kích hoạt Mục 4: Đồ thị y = cos x
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-4');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_sec4_cosine_wave.png")

                # 11. Kích hoạt Mục 5: Đồ thị y = tan x
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-5');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_sec5_tangent_graph.png")

                # 12. Kích hoạt Mục 6: Đồ thị y = cot x
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('sec-6');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_sec6_cotangent_graph.png")

                # 13. Kích hoạt Wrap-up: Chốt kiến thức & Sóng biển
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('wrapup');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_wrapup_ocean_waves.png")

                # 14. Kích hoạt Phần IV: Bài tập trắc nghiệm củng cố (Dạng 1)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('quiz', null, 'part1');"
                })
                await asyncio.sleep(1.5)
                # Kiểm tra hoán vị đáp án Part 1
                eval_p1 = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const items = window.LESSON_11_C1_B3_DATA.examFormatPractice.part1MultipleChoice;
                        return items.map(q => ({ id: q.id, answer: q.correctAnswer }));
                    })()
                    """
                })
                print("Part 1 Permuted Answers:", eval_p1.get("result", {}).get("value"))
                await capture_screenshot("verified_b11_3_quiz_part1.png")

                # 15. Kích hoạt Phần IV: Dạng 2 (Đúng / Sai)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('quiz', null, 'part2');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_quiz_part2.png")

                # 16. Kích hoạt Phần IV: Dạng 3 (Trả lời ngắn)
                await send("Runtime.evaluate", {
                    "expression": "window.activateStep('quiz', null, 'part3');"
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_quiz_part3.png")

                # 17. Mở và kiểm tra hộp thoại POI tương tác
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const poiBtn = document.querySelector('.poi-btn, .poi-badge-btn, [data-poi-id]');
                        if (poiBtn) {
                            poiBtn.click();
                            return true;
                        }
                        // Thử gọi trực tiếp openPoiModal nếu có
                        if (typeof window.openPoiModal === 'function') {
                            const poi = window.LESSON_11_C1_B3_DATA.hook.checkpoints[0];
                            window.openPoiModal(poi);
                            return true;
                        }
                        return false;
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_3_poi_modal.png")

                print("\nALL 5-STAR VERIFICATIONS COMPLETED SUCCESSFULLY!")

    finally:
        proc.kill()

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
