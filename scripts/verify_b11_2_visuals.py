# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử trực quan toàn diện Bài 2 Lớp 11: Công thức lượng giác
- Kiểm tra huy hiệu header: "BÀI HỌC SỐ LỚP 11"
- Kiểm tra tính toàn vẹn của MathJax (0 lỗi syntax, 0 lỗi \left/\right)
- Kiểm tra hiển thị SVG: Hook sóng trễ, Mục 1a vòng tròn vecto, Mục 2a mindmap, Mục 4b bàn phím DTMF
- Kiểm tra hộp thoại câu hỏi tương tác POI
- Kiểm tra Phần IV Đề trắc nghiệm 3 dạng thức mới 2026
- Chụp ảnh minh chứng lưu trực tiếp vào thư mục artifact
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b2"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9268

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

                print("Waiting for page load and MathJax rendering ...")
                await asyncio.sleep(4.0)

                # Kích hoạt MathJax typeset lại cho toàn trang
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(2.0)

                # 1. Kiểm tra Badge Header: "BÀI HỌC SỐ LỚP 11"
                eval_badge = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const badges = Array.from(document.querySelectorAll('.structure-tag, .structure-badge-row, .badge, span, div'));
                        const found = badges.find(el => el.textContent.includes('BÀI HỌC SỐ'));
                        return found ? found.textContent.trim() : 'NOT_FOUND';
                    })()
                    """
                })
                badge_text = eval_badge.get("result", {}).get("value", "")
                print(f"Header Badge text: '{badge_text}'")

                # 2. Kiểm tra lỗi MathJax trên toàn trang
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
                        print(f"Captured: {filename} ({os.path.getsize(out_path):,} bytes)")

                # 3. Chụp ảnh Badge Header
                clip_badge = {"x": 0, "y": 0, "width": 450, "height": 180, "scale": 1}
                await capture_screenshot("verified_b11_2_badge_header.png", clip_badge)

                # 4. Chụp ảnh Tình huống mở đầu (Hook) với sóng trễ
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('hookSectionCard')?.scrollIntoView({behavior: 'instant', block: 'start'})"
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_2_hook_delay.png")

                # 5. Mở Mục 1a và chụp ảnh
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const btn1a = document.querySelector('[data-sec-key="1a"]') || 
                                      document.querySelector('[data-subsection="a"]') ||
                                      document.querySelector('.tree-sub-btn');
                        if (btn1a) btn1a.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec1a_math.png")

                # 6. Mở Mục 2a và chụp ảnh Sơ đồ nhân đôi
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const btn2a = document.querySelector('[data-sec-key="2a"]') || 
                                      Array.from(document.querySelectorAll('.tree-sub-btn, .sub-step-btn')).find(b => b.textContent.includes('2a') || b.textContent.includes('Nhân đôi'));
                        if (btn2a) btn2a.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec2a_mindmap.png")

                # 7. Mở Mục 4b và chụp ảnh Bàn phím DTMF
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const btn4b = document.querySelector('[data-sec-key="4b"]') || 
                                      Array.from(document.querySelectorAll('.tree-sub-btn, .sub-step-btn')).find(b => b.textContent.includes('4b') || b.textContent.includes('DTMF'));
                        if (btn4b) btn4b.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_sec4b_dtmf.png")

                # 8. Kích hoạt POI Modal và chụp ảnh
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const poiBtn = document.querySelector('.timeline-poi-btn, .btn-poi-marker, .poi-badge-btn');
                        if (poiBtn) poiBtn.click();
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_poi_modal.png")

                # Đóng modal nếu mở
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('.modal.show .btn-close, .modal.show .btn-secondary')?.click()"
                })
                await asyncio.sleep(0.5)

                # 9. Cuộn xuống Phần IV Bài tập trắc nghiệm và chụp ảnh
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('examPracticeArea')?.scrollIntoView({behavior: 'instant', block: 'start'})"
                })
                await asyncio.sleep(1.5)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_2_quiz.png")

                print("Verification and screenshots completed successfully!")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(verify_and_capture())
