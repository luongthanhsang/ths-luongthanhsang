import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9301

async def check_rendered_colors():
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

                eval_colors = await send('Runtime.evaluate', {
                    'expression': """
                    (async () => {
                        const img = new Image();
                        img.src = 'http://localhost:8000/assets/images/logo-ths-sang.png';
                        await img.decode();

                        const cvs = document.createElement('canvas');
                        cvs.width = img.width;
                        cvs.height = img.height;
                        const ctx = cvs.getContext('2d');
                        ctx.drawImage(img, 0, 0);

                        const idata = ctx.getImageData(0, 0, img.width, img.height).data;
                        const centerIdx = (Math.floor(img.height/2) * img.width + Math.floor(img.width/2)) * 4;
                        const centerColor = [idata[centerIdx], idata[centerIdx+1], idata[centerIdx+2], idata[centerIdx+3]];

                        // Sample S area (top middle)
                        const sIdx = (Math.floor(img.height * 0.3) * img.width + Math.floor(img.width * 0.5)) * 4;
                        const sColor = [idata[sIdx], idata[sIdx+1], idata[sIdx+2], idata[sIdx+3]];

                        // Sample background area (center left)
                        const bgIdx = (Math.floor(img.height * 0.5) * img.width + Math.floor(img.width * 0.2)) * 4;
                        const bgColor = [idata[bgIdx], idata[bgIdx+1], idata[bgIdx+2], idata[bgIdx+3]];

                        return {
                            size: `${img.width}x${img.height}`,
                            centerColor: `RGBA(${centerColor.join(',')})`,
                            sColor: `RGBA(${sColor.join(',')})`,
                            bgColor: `RGBA(${bgColor.join(',')})`
                        };
                    })()
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print("Rendered colors:", eval_colors.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(check_rendered_colors())
