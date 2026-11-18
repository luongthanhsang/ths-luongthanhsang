import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9298

with open('assets/images/logo-ths-sang-raw.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('ascii')

async def test_b64_img():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
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

                eval_b64 = await send('Runtime.evaluate', {
                    'expression': f"""
                    new Promise((resolve) => {{
                        const img = new Image();
                        img.onload = () => {{
                            resolve({{
                                status: "LOADED_OK",
                                width: img.naturalWidth,
                                height: img.naturalHeight
                            }});
                        }};
                        img.onerror = (e) => {{
                            resolve({{ status: "LOAD_ERROR" }});
                        }};
                        img.src = "data:image/png;base64,{b64}";
                    }})
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print("B64 RESULT:", eval_b64.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_b64_img())
