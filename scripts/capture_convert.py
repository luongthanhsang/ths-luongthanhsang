import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9310
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def capture_convert():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--window-size=1200,900',
        '--remote-allow-origins=*',
        f'--user-data-dir=C:\\Users\\Hp\\AppData\\Local\\Temp\\chrome_tmp_{PORT}',
        f'--remote-debugging-port={PORT}',
        'about:blank'
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.0)
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
                await send('Page.navigate', {'url': 'http://localhost:8000/test_convert.html'})
                await asyncio.sleep(2.0)

                shot = await send('Page.captureScreenshot', {'format': 'png'})
                img_data = base64.b64decode(shot.get('data', ''))
                out_path = f"{ARTIFACT_DIR}\\verified_test_convert.png"
                with open(out_path, 'wb') as f:
                    f.write(img_data)
                print(f"Captured screenshot to: {out_path} ({len(img_data)} bytes)")

                # Also save the canvas as assets/images/logo-ths-sang.png
                eval_dataurl = await send('Runtime.evaluate', {
                    'expression': 'document.getElementById("logoCanvas").toDataURL("image/png")',
                    'returnByValue': True
                })
                durl = eval_dataurl.get('result', {}).get('value', '')
                if durl.startswith('data:image/png;base64,'):
                    png_bytes = base64.b64decode(durl.split(',')[1])
                    with open('assets/images/logo-ths-sang.png', 'wb') as f:
                        f.write(png_bytes)
                    with open('BAN_CAP_NHAT_NETLIFY/assets/images/logo-ths-sang.png', 'wb') as f:
                        f.write(png_bytes)
                    print(f"Saved logo-ths-sang.png to both assets and Netlify! ({len(png_bytes)} bytes)")

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(capture_convert())
