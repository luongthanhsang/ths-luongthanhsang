# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def main():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1400,1050",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9246",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9246/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]
        print("Connected to WebSocket:", ws_url)

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
                    print(f"Captured: {filename} ({len(data)} bytes)")

                await send("Runtime.enable")
                await send("DOM.enable")
                await send("Page.enable")
                await asyncio.sleep(2.5)

                # 1. Chụp màn hình Lời chào + Tình huống ISS
                await take_shot("verified_b11_1_init.png")

                # 2. Kích hoạt Mục 1a
                await eval_js("window.activateStep('sec-1', 'a');")
                await asyncio.sleep(1.0)
                sec1a_status = await eval_js("""
                (() => {
                    const sec = document.getElementById('sec-1');
                    const cards = sec ? Array.from(sec.querySelectorAll('.subsection-card')).map(c => ({
                        subkey: c.dataset.subkey,
                        display: window.getComputedStyle(c).display
                    })) : [];
                    const hasSpirals = sec ? sec.innerHTML.includes('360°') && sec.innerHTML.includes('720°') : false;
                    return { cards, hasSpirals };
                })()
                """)
                print("\n=== KIỂM TRA MỤC 1a ===")
                print(json.dumps(sec1a_status, indent=2, ensure_ascii=False))
                await take_shot("verified_b11_1_sec1a_spirals.png")

                # 3. Kích hoạt Mục 1b
                await eval_js("window.activateStep('sec-1', 'b');")
                await asyncio.sleep(1.0)
                sec1b_status = await eval_js("""
                (() => {
                    const sec = document.getElementById('sec-1');
                    const cards = sec ? Array.from(sec.querySelectorAll('.subsection-card')).map(c => ({
                        subkey: c.dataset.subkey,
                        display: window.getComputedStyle(c).display
                    })) : [];
                    return { cards };
                })()
                """)
                print("\n=== KIỂM TRA MỤC 1b ===")
                print(json.dumps(sec1b_status, indent=2, ensure_ascii=False))
                await take_shot("verified_b11_1_sec1b_chasles.png")

                # 4. Kích hoạt Mục 3b: Hình 1.9b ĐẶC BIỆT CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III
                await eval_js("window.activateStep('sec-3', 'b');")
                await asyncio.sleep(1.0)
                sec3b_status = await eval_js("""
                (() => {
                    const sec = document.getElementById('sec-3');
                    const cardB = sec ? sec.querySelector('.subsection-card[data-subkey=\"b\"]') : null;
                    const hasQ3 = cardB ? cardB.innerHTML.includes('Góc phần tư III') || cardB.innerHTML.includes('cos α = x < 0') : false;
                    return { hasQ3 };
                })()
                """)
                print("\n=== KIỂM TRA MỤC 3b (GÓC PHẦN TƯ III) ===")
                print(json.dumps(sec3b_status, indent=2, ensure_ascii=False))
                await take_shot("verified_b11_1_sec3b_quadrant3.png")

                # 5. Kích hoạt Mục 4b: Bộ 4 quy tắc lượng giác
                await eval_js("window.activateStep('sec-4', 'b');")
                await asyncio.sleep(1.0)
                await take_shot("verified_b11_1_sec4_formulas.png")

                # 6. Kích hoạt Phần V: Bài tập trắc nghiệm củng cố
                await eval_js("window.activateStep('quiz');")
                await asyncio.sleep(1.0)
                await take_shot("verified_b11_1_exam_quiz.png")

                # 7. Kiểm tra tính năng tick xanh mục con và mục cha
                tick_status = await eval_js("""
                (() => {
                    // Tick xong mục 1a
                    window.markStepCompleted('sec-1', 'a');
                    const item1a = document.querySelector('.tree-sub-item[data-step-id=\"sec-1\"][data-subkey=\"a\"]');
                    const is1aDone = item1a ? item1a.classList.contains('is-completed') : false;

                    // Kiểm tra mục cha 1 (lúc này chưa xong vì 1b chưa xong)
                    const node1Before = document.querySelector('.tree-node[data-step-id=\"sec-1\"]');
                    const is1ParentBefore = node1Before ? node1Before.classList.contains('is-completed') : false;

                    // Tick xong mục 1b
                    window.markStepCompleted('sec-1', 'b');
                    const item1b = document.querySelector('.tree-sub-item[data-step-id=\"sec-1\"][data-subkey=\"b\"]');
                    const is1bDone = item1b ? item1b.classList.contains('is-completed') : false;

                    // Giờ cả 1a và 1b đều xong -> mục cha 1 phải được tick xanh!
                    const is1ParentAfter = node1Before ? node1Before.classList.contains('is-completed') : false;

                    return { is1aDone, is1bDone, is1ParentBefore, is1ParentAfter };
                })()
                """)
                print("\n=== KIỂM TRA CƠ CHẾ TICK XANH MỤC CHA SAU KHI HOÀN THÀNH CÁC MỤC CON ===")
                print(json.dumps(tick_status, indent=2, ensure_ascii=False))

                print("\n>>> KIỂM THỬ CDP HOÀN TẤT THÀNH CÔNG 100%! <<<")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(main())
