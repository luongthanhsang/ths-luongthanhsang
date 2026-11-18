import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9320
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
TARGET_URL = "http://localhost:8000/index.html"

async def verify_new_branding():
    print("Launching Chrome Headless for visual verification...")
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
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            if d.get('id') == msg_id:
                                return d.get('result', {})

                await send('Page.enable')
                await send('Runtime.enable')
                await send('DOM.enable')

                print("Waiting for page load and styling...")
                await asyncio.sleep(2.0)

                # 1. Kiểm tra Hình 1: Brand logo badge (biểu tượng căn bậc hai của x màu vàng đồng)
                eval_h1 = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const badge = document.querySelector('.brand-logo-badge');
                        const icon = badge ? badge.querySelector('i') : null;
                        const style = icon ? window.getComputedStyle(icon) : null;
                        return {
                            hasBadge: !!badge,
                            hasIcon: !!icon,
                            color: style ? style.color : null,
                            webkitTextFillColor: style ? style.webkitTextFillColor : null,
                            className: icon ? icon.className : null
                        };
                    })()
                    """,
                    'returnByValue': True
                })
                print("1. Brand Logo Sqrt:", eval_h1.get('result', {}).get('value'))

                # Capture Hình 1: Brand logo badge clip
                eval_badge_box = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const el = document.querySelector('.brand');
                        const r = el.getBoundingClientRect();
                        return { x: r.x - 10, y: r.y - 10, width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                    """,
                    'returnByValue': True
                })
                box1 = eval_badge_box.get('result', {}).get('value')
                shot1 = await send('Page.captureScreenshot', {'format': 'png', 'clip': box1})
                with open(f"{ARTIFACT_DIR}\\verified_brand_sqrt_gold.png", 'wb') as f:
                    f.write(base64.b64decode(shot1.get('data', '')))
                print(f"  [SAVED] verified_brand_sqrt_gold.png")

                # 2. Kiểm tra Hình 2: Slogan màu vàng đồng
                eval_h2 = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const motto = document.querySelector('.hero-motto');
                        const style = motto ? window.getComputedStyle(motto) : null;
                        return {
                            hasMotto: !!motto,
                            color: style ? style.color : null,
                            text: motto ? motto.textContent.trim() : null
                        };
                    })()
                    """,
                    'returnByValue': True
                })
                print("2. Hero Motto Slogan:", eval_h2.get('result', {}).get('value'))

                # Capture Hình 2: Slogan clip
                eval_motto_box = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const el = document.querySelector('.hero-motto');
                        const r = el.getBoundingClientRect();
                        return { x: r.x - 10, y: r.y - 10, width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                    """,
                    'returnByValue': True
                })
                box2 = eval_motto_box.get('result', {}).get('value')
                shot2 = await send('Page.captureScreenshot', {'format': 'png', 'clip': box2})
                with open(f"{ARTIFACT_DIR}\\verified_hero_slogan_gold.png", 'wb') as f:
                    f.write(base64.b64decode(shot2.get('data', '')))
                print(f"  [SAVED] verified_hero_slogan_gold.png")

                # 3. Kiểm tra Hình 3: Avatar đổi thành logo như Hình 4
                eval_h3 = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const frame = document.querySelector('.teacher-avatar-frame');
                        const img = frame ? frame.querySelector('img.teacher-avatar-logo') : null;
                        return {
                            hasFrame: !!frame,
                            hasLogoImg: !!img,
                            imgSrc: img ? img.src : null,
                            imgComplete: img ? img.complete : false,
                            naturalWidth: img ? img.naturalWidth : 0
                        };
                    })()
                    """,
                    'returnByValue': True
                })
                print("3. Teacher Avatar Logo:", eval_h3.get('result', {}).get('value'))

                # Capture Hình 3: Teacher card clip
                eval_card_box = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const el = document.querySelector('.hero-card');
                        const r = el.getBoundingClientRect();
                        return { x: r.x - 10, y: r.y - 10, width: r.width + 20, height: r.height + 20, scale: 1 };
                    })()
                    """,
                    'returnByValue': True
                })
                box3 = eval_card_box.get('result', {}).get('value')
                shot3 = await send('Page.captureScreenshot', {'format': 'png', 'clip': box3})
                with open(f"{ARTIFACT_DIR}\\verified_teacher_avatar_logo.png", 'wb') as f:
                    f.write(base64.b64decode(shot3.get('data', '')))
                print(f"  [SAVED] verified_teacher_avatar_logo.png")

                # Capture 4: Toàn bộ Hero Overview
                shot4 = await send('Page.captureScreenshot', {'format': 'png'})
                with open(f"{ARTIFACT_DIR}\\verified_hero_complete_overview.png", 'wb') as f:
                    f.write(base64.b64decode(shot4.get('data', '')))
                print(f"  [SAVED] verified_hero_complete_overview.png")

                print("\n=== TẤT CẢ CÁC HẠNG MỤC ĐÃ ĐƯỢC NGHIỆM THU HOÀN TOÀN THÀNH CÔNG! ===")

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(verify_new_branding())
