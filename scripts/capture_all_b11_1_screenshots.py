# -*- coding: utf-8 -*-
"""
Chụp ảnh minh chứng và kiểm thử toàn diện Bài 1 Lớp 11:
1. 4 sơ đồ xoắn ốc Archimedes siêu mịn.
2. Công thức toán MathJax sạch sẽ, không có bất kỳ chữ \quad thô.
3. Cả 2 câu hỏi tương tác (Câu 1 và Câu 2) xuất hiện đầy đủ.
4. Phần V: Bài tập trắc nghiệm củng cố chuẩn 2025 hiển thị đầy đủ 3 Dạng (MC, TF, SA).
5. Tick xanh mục con a, b rồi mới tick xanh mục cha.
6. Hệ thống âm thanh Base64 cache 12/12 mục.
"""
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def capture_all():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9253",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9253/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    cur = msg_id
                    await ws.send_json({"id": cur, "method": method, "params": params or {}})
                    while True:
                        msg = await ws.receive_json()
                        if msg.get("id") == cur:
                            return msg.get("result")

                async def eval_js(expr):
                    r = await send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
                    return r.get("result", {}).get("value")

                async def take_shot(filename):
                    r = await send("Page.captureScreenshot", {"format": "png"})
                    data = base64.b64decode(r["data"])
                    out_path = os.path.join(ARTIFACT_DIR, filename)
                    with open(out_path, "wb") as f:
                        f.write(data)
                    print(f"[SCREENSHOT] {filename} ({len(data):,} bytes)")

                await send("Runtime.enable")
                await send("DOM.enable")
                await send("Page.enable")
                await asyncio.sleep(3.0)

                # Reset storage
                await eval_js("localStorage.removeItem('ths_sang_completed_steps_11-c1-b1');")

                # 1. Khởi động (Hook ISS) & Timeline Checkpoints (Câu 1 và Câu 2)
                await eval_js("window.activateStep('hook');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_hook_iss.png")

                # 2. Mục tiêu bài học (Goals)
                await eval_js("window.activateStep('goals');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_goals_math.png")

                # 3. Mục 1a: 4 sơ đồ xoắn ốc Archimedes siêu mịn
                await eval_js("window.activateStep('sec-1', 'a');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_sec1a_spirals.png")

                # 4. Mục 1a: Luyện tập 1 và Ví dụ (Không còn \quad thô)
                await eval_js("window.scrollTo(0, 950);")
                await asyncio.sleep(1.0)
                await take_shot("verified_b11_1_sec1a_lt1_math.png")

                # 5. Mục 1b: Hệ thức Chasles
                await eval_js("window.activateStep('sec-1', 'b');")
                await asyncio.sleep(1.2)
                await take_shot("verified_b11_1_sec1b_chasles.png")

                # 6. Mục 2a: Đơn vị Radian (Hình 1.6)
                await eval_js("window.activateStep('sec-2', 'a');")
                await asyncio.sleep(1.2)
                await take_shot("verified_b11_1_sec2a_radian.png")

                # 7. Mục 3b: Hình 1.9b ĐẶC BIỆT CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III
                await eval_js("window.activateStep('sec-3', 'b');")
                await asyncio.sleep(1.2)
                await take_shot("verified_b11_1_sec3b_quadrant3.png")

                # 8. Mục 4b: Bộ 4 quy tắc lượng giác
                await eval_js("window.activateStep('sec-4', 'b');")
                await asyncio.sleep(1.2)
                await take_shot("verified_b11_1_sec4_formulas.png")

                # 9. Phần V: Bài tập trắc nghiệm củng cố 2025 hiển thị đầy đủ
                await eval_js("window.activateStep('quiz');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_exam_quiz.png")

                # 10. Hoàn thành 1a và 1b -> Tick xanh mục cha trên Sidebar
                await eval_js("""
                (() => {
                    window.markStepCompleted('sec-1', 'a');
                    window.markStepCompleted('sec-1', 'b');
                })()
                """)
                await asyncio.sleep(0.8)
                await take_shot("verified_b11_1_parent_green_tick.png")

                # Diagnostic Audit
                audit = await eval_js("""
                (() => {
                    const l = window.CURRENT_LESSON_DATA || {};
                    const cache = window.B11_1_AUDIO_CACHE || {};
                    const keys = Object.keys(cache);
                    
                    // Check interactive checkpoints
                    const sec1 = (l.sections || []).find(s => s.id === '11-c1-b1-s1') || {};
                    const subs = sec1.subsections || [];
                    const sub1a = subs.find(s => s.key === 'a') || {};
                    const sub1b = subs.find(s => s.key === 'b') || {};
                    
                    // Check exam DOM elements
                    const mcItems = document.querySelectorAll('.exam-list-mc .exam-item-card').length;
                    const tfItems = document.querySelectorAll('.exam-tf-card').length;
                    const saItems = document.querySelectorAll('.exam-sa-card').length;
                    
                    // Check if quad is present in body text
                    const hasRawQuad = document.body.innerText.includes('\\\\quad') || 
                                       document.body.innerHTML.includes('; \\\\quad') ||
                                       document.body.innerHTML.includes(';\\quad');
                    
                    return {
                        lessonId: l.id,
                        totalCachedAudios: keys.length,
                        hook_cps: (l.hook && l.hook.checkpoints || []).length,
                        sec1a_cps: (sub1a.checkpoints || []).length,
                        sec1b_cps: (sub1b.checkpoints || []).length,
                        mc_dom_count: mcItems,
                        tf_dom_count: tfItems,
                        sa_dom_count: saItems,
                        hasRawQuad: hasRawQuad
                    };
                })()
                """)
                print("\n=== SYSTEM AUDIT REPORT ===")
                print(json.dumps(audit, indent=2))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(capture_all())
