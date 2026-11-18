import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9300
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def preview_logo():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--window-size=1000,900',
        '--remote-allow-origins=*',
        f'--remote-debugging-port={PORT}',
        'about:blank'
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen(f'http://localhost:{PORT}/json')
        target = json.loads(res.read())[0]
        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(target['webSocketDebuggerUrl']) as ws:
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

                await send('Runtime.enable')
                await send('Page.enable')

                html_content = """
                <!DOCTYPE html>
                <html>
                <body style="background: #0f172a; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; font-family: sans-serif; color: #fff;">
                    <h2 style="color: #f59e0b; margin-bottom: 20px;">KIỂM TRA LOGO THS. LƯƠNG THANH SÁNG (NỀN XANH - VÀNG ĐỒNG)</h2>
                    <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.5); text-align: center;">
                        <img src="http://localhost:8000/assets/images/logo-ths-sang.png" style="width: 320px; height: 320px; border-radius: 50%; box-shadow: 0 10px 30px rgba(37,99,235,0.4);" />
                        <div style="margin-top: 20px; font-size: 1.1rem; color: #fef08a; font-weight: 700;">Huy hiệu Logo ThS. Lương Thanh Sáng</div>
                        <div style="margin-top: 6px; font-size: 0.9rem; color: #94a3b8;">Nền Academic Blue • 3 Vòng tròn • Chữ S cách điệu • LT • Ngôi sao • Vàng đồng</div>
                    </div>
                </body>
                </html>
                """

                await send('Page.navigate', {'url': 'about:blank'})
                await send('Page.setDocumentContent', {'frameId': target['id'], 'html': html_content})
                await asyncio.sleep(2.0)

                shot = await send('Page.captureScreenshot', {'format': 'png'})
                img_data = base64.b64decode(shot.get('data', ''))
                out_path = f"{ARTIFACT_DIR}\\verified_logo_preview.png"
                with open(out_path, 'wb') as f:
                    f.write(img_data)
                print(f"Saved preview screenshot to: {out_path}")

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(preview_logo())
