# -*- coding: utf-8 -*-
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
        "--remote-debugging-port=9252",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9252/json")
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
                await asyncio.sleep(2.5)

                # Reset storage
                await eval_js("localStorage.removeItem('ths_sang_completed_steps_11-c1-b1');")

                # 1. Khởi động (Hook ISS)
                await eval_js("window.activateStep('hook');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_hook_iss.png")

                # 2. Mục tiêu bài học (Goals - Kiểm tra công thức LaTeX chuẩn 100%)
                await eval_js("window.activateStep('goals');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_goals_math.png")

                # 3. Mục 1a: 4 sơ đồ xoắn ốc
                await eval_js("window.activateStep('sec-1', 'a');")
                await asyncio.sleep(1.5)
                await take_shot("verified_b11_1_sec1a_spirals.png")

                # 4. Mục 1a: Luyện tập 1 (Kiểm tra công thức MathJax)
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

                # 9. Phần V: Bài tập trắc nghiệm củng cố 2025
                await eval_js("window.activateStep('quiz');")
                await asyncio.sleep(1.2)
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

                # Kiểm tra âm thanh trong cache và audio engine
                audio_check = await eval_js("""
                (() => {
                    const cache = window.B11_1_AUDIO_CACHE || {};
                    const keys = Object.keys(cache);
                    return {
                        totalCached: keys.length,
                        sampleKey: keys[0],
                        hasWelcome: !!cache['assets/audio/b11_1_welcome.mp3'],
                        hasHook: !!cache['assets/audio/b11_1_hook.mp3'],
                        hasSec1a: !!cache['assets/audio/b11_1_sec1a.mp3'],
                        hasWrapup: !!cache['assets/audio/b11_1_wrapup.mp3']
                    };
                })()
                """)
                print("AUDIO ENGINE STATUS:", json.dumps(audio_check, indent=2))

                print("\nALL SCREENSHOTS CAPTURED SUCCESSFULLY!")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(capture_all())
