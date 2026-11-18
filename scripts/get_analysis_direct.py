import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9297

async def get_analysis_direct():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--remote-allow-origins=*',
        f'--remote-debugging-port={PORT}',
        'http://localhost:8000/render_logo.html'
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

                analysis_res = await send('Runtime.evaluate', {
                    'expression': """
                    (async () => {
                        try {
                            const img = new Image();
                            img.src = 'assets/images/logo-ths-sang-raw.png';
                            await img.decode();

                            const cvs = document.createElement('canvas');
                            cvs.width = img.width;
                            cvs.height = img.height;
                            const ctx = cvs.getContext('2d');
                            ctx.drawImage(img, 0, 0);

                            const idata = ctx.getImageData(0, 0, img.width, img.height);
                            const px = idata.data;

                            let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
                            let count = 0;

                            for (let y = 0; y < img.height; y++) {
                                for (let x = 0; x < img.width; x++) {
                                    const idx = (y * img.width + x) * 4;
                                    const r = px[idx], g = px[idx+1], b = px[idx+2];
                                    if (r < 240 || g < 240 || b < 240) {
                                        if (x < minX) minX = x;
                                        if (x > maxX) maxX = x;
                                        if (y < minY) minY = y;
                                        if (y > maxY) maxY = y;
                                        count++;
                                    }
                                }
                            }

                            return {
                                w: img.width,
                                h: img.height,
                                minX, maxX, minY, maxY,
                                cx: (minX + maxX) / 2,
                                cy: (minY + maxY) / 2,
                                radius: (maxX - minX) / 2,
                                count
                            };
                        } catch(e) {
                            return { error: e.message };
                        }
                    })()
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print("ANALYSIS DIRECT:", analysis_res.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(get_analysis_direct())
