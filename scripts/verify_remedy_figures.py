# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử tự động xác minh các yêu cầu chuẩn hóa của Thầy Sáng:
1. Hình 1: Bảng giá trị các góc đặc biệt có viền lưới thẩm mĩ sắc nét.
2. Hình 2: 4 Card sư phạm định nghĩa 4 hàm số lượng giác rực rỡ sắc màu kích thích tư duy.
3. Đồ thị chuẩn SGK: y = sin x, y = cos x, y = tan x, y = cot x.
4. Hình 3: Bảng giá trị khảo sát y = cos x đưa vào thẻ Table có viền kẻ thẩm mĩ.
5. Câu hỏi trả lời ngắn Dạng 3: Hiển thị đầy đủ đề bài, công thức toán và ô nhập.
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9295

async def capture_element(send, selector, filename):
    eval_res = await send("Runtime.evaluate", {
        "expression": f'''
            (function() {{
                const el = document.querySelector("{selector}");
                if (!el) return null;
                el.scrollIntoView({{ behavior: "instant", block: "center" }});
                const rect = el.getBoundingClientRect();
                return {{ x: rect.x, y: rect.y, width: rect.width, height: rect.height }};
            }})()
        ''',
        "returnByValue": True
    })
    box = eval_res.get("result", {}).get("value")
    await asyncio.sleep(1.0)
    
    # Capture screenshot
    if box and box.get("width") > 0 and box.get("height") > 0:
        clip = {
            "x": max(0, box["x"] - 20),
            "y": max(0, box["y"] - 20),
            "width": min(1440, box["width"] + 40),
            "height": min(1200, box["height"] + 40),
            "scale": 1
        }
        res = await send("Page.captureScreenshot", {"format": "png", "clip": clip})
    else:
        res = await send("Page.captureScreenshot", {"format": "png"})
        
    data = res.get("data")
    if data:
        out_path = os.path.join(ARTIFACT_DIR, filename)
        with open(out_path, "wb") as f:
            f.write(base64.b64decode(data))
        print(f"Captured: {filename}")
        return out_path
    return None

async def verify():
    target_url = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b3"
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        target_url
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

                print("Waiting 4s for MathJax & DOM rendering ...")
                await asyncio.sleep(4.0)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(2.0)

                # 1. Chụp Hình 1: Bảng giá trị các góc đặc biệt ở Mục 1
                await capture_element(send, "#sec-11-c1-b3-s1 .math-table-container", "verified_b11_3_fig1_special_angles_table.png")

                # 2. Chụp Hình 2: 4 Card sư phạm định nghĩa hàm số ở Mục 1
                await capture_element(send, "#sec-11-c1-b3-s1 .math-func-card.card-sin", "verified_b11_3_fig2_sin_card.png")
                await capture_element(send, "#sec-11-c1-b3-s1 .math-func-card.card-cos", "verified_b11_3_fig2_cos_card.png")
                await capture_element(send, "#sec-11-c1-b3-s1 .math-func-card.card-tan", "verified_b11_3_fig2_tan_card.png")

                # 3. Chụp Mục 3: Bảng Sin và Đồ thị y = sin x (Hình 1.14)
                await capture_element(send, "#sec-11-c1-b3-s3 .text-center.my-3 svg", "verified_b11_3_sin_graph_sgk.png")

                # 4. Chụp Hình 3: Bảng khảo sát y = cos x ở Mục 4
                await capture_element(send, "#sec-11-c1-b3-s4 .math-table-container", "verified_b11_3_fig3_cos_table.png")
                # Và Đồ thị y = cos x (Hình 1.15)
                await capture_element(send, "#sec-11-c1-b3-s4 .text-center.my-3 svg", "verified_b11_3_cos_graph_sgk.png")

                # 5. Chụp Mục 5: Đồ thị y = tan x (Hình 1.16)
                await capture_element(send, "#sec-11-c1-b3-s5 .text-center.my-3 svg", "verified_b11_3_tan_graph_sgk.png")

                # 6. Chụp Mục 6: Đồ thị y = cot x (Hình 1.17)
                await capture_element(send, "#sec-11-c1-b3-s6 .text-center.my-3 svg", "verified_b11_3_cot_graph_sgk.png")

                # 7. Chụp Dạng 3: Trắc nghiệm trả lời ngắn Bài 3
                await capture_element(send, "#quiz-part3", "verified_b11_3_quiz_short_answer_fixed.png")

                # 8. Mở Bài 4 và chụp Dạng 3 của Bài 4
                await send("Page.navigate", {"url": "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4"})
                await asyncio.sleep(4.0)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(2.0)
                await capture_element(send, "#quiz-part3", "verified_b11_4_quiz_short_answer_fixed.png")

                print("All screenshots captured successfully!")
    finally:
        proc.kill()

if __name__ == "__main__":
    asyncio.run(verify())
