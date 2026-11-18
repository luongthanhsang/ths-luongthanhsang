# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b3"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9311

async def main():
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

                await asyncio.sleep(3.0)
                await send("Runtime.evaluate", {
                    "expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"
                })
                await asyncio.sleep(1.5)

                async def capture_screenshot(filename, clip=None):
                    params = {"format": "png"}
                    if clip: params["clip"] = clip
                    res = await send("Page.captureScreenshot", params)
                    data = res.get("data")
                    if data:
                        out_path = os.path.join(ARTIFACT_DIR, filename)
                        with open(out_path, "wb") as f:
                            f.write(base64.b64decode(data))
                        print(f"✅ Captured: {filename} ({os.path.getsize(out_path):,} bytes)")

                # 1. Kích hoạt Quiz và scroll đến Dạng 2 (Đúng / Sai)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('quiz');
                        const el = document.getElementById('quiz-part2');
                        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
                    })()
                    """
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_quiz_part2.png")

                # 2. Kích hoạt Quiz và scroll đến Dạng 3 (Trả lời ngắn)
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const el = document.getElementById('quiz-part3');
                        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
                    })()
                    """
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_quiz_part3.png")

                # 3. Kích hoạt Wrap-up và scroll đến bảng so sánh
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('wrapup');
                        const el = document.querySelector('.table-hover');
                        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
                    })()
                    """
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_wrapup_table.png")

                # 4. Kích hoạt Wrap-up và scroll đến bài toán sóng biển thực tế
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const el = document.querySelector('.alert-box.alert-success');
                        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
                    })()
                    """
                })
                await asyncio.sleep(1.2)
                await capture_screenshot("verified_b11_3_wrapup_waves_math.png")

                # 5. Kiểm tra cơ chế Tick xanh phân cấp:
                # - Ban đầu Mục 2 chưa tick
                # - Tick 2a: Sub-item 2a tick xanh, Mục 2 cha CHƯA tick xanh
                # - Tick 2b: Cả 2a, 2b và Mục 2 cha ĐỀU tick xanh!
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        // Kích hoạt 2a
                        window.activateStep('sec-2', 'a');
                        // Gọi markStepCompleted cho 2a
                        if (typeof window.markStepCompleted === 'function') {
                            window.markStepCompleted('sec-2-a');
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_3_tick_sub2a_only.png")

                # Bây giờ tick tiếp 2b
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-2', 'b');
                        if (typeof window.markStepCompleted === 'function') {
                            window.markStepCompleted('sec-2-b');
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.0)
                await capture_screenshot("verified_b11_3_tick_both_subs_and_parent.png")

                # 6. Mở hộp thoại POI tương tác
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1');
                        // Mở POI 1 của Mục 1
                        const poi = window.LESSON_11_C1_B3_DATA.sections[0].checkpoints[0];
                        if (typeof window.showCheckpointModal === 'function') {
                            window.showCheckpointModal(poi);
                        } else if (typeof window.openPoiModal === 'function') {
                            window.openPoiModal(poi);
                        } else {
                            const btn = document.querySelector('.poi-btn, [data-poi-id]');
                            if (btn) btn.click();
                        }
                    })()
                    """
                })
                await asyncio.sleep(1.5)
                await capture_screenshot("verified_b11_3_poi_popup.png")

                print("ALL DETAIL CAPTURES FINISHED!")
    finally:
        proc.kill()

if __name__ == "__main__":
    asyncio.run(main())
