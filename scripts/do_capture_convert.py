import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9315
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
TARGET_URL = "http://localhost:8000/test_convert.html"

async def capture():
    print("Launching Chrome...")
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1200,900",
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

                print("Waiting for page conversion...")
                await asyncio.sleep(2.0)

                # Capture page screenshot
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                img_data = base64.b64decode(shot.get('data', ''))
                out_path = f"{ARTIFACT_DIR}\\verified_test_convert.png"
                with open(out_path, 'wb') as f:
                    f.write(img_data)
                print(f"Captured screenshot to: {out_path} ({len(img_data)} bytes)")

                # Save logo canvas as PNG
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
                    print(f"Saved logo-ths-sang.png successfully! ({len(png_bytes)} bytes)")

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(capture())
