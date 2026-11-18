import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9302

with open('assets/images/logo-ths-sang-raw.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('ascii')

async def inspect_source_pixels():
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

                eval_script = await send('Runtime.evaluate', {
                    'expression': f"""
                    (async () => {{
                        const img = new Image();
                        await new Promise((res) => {{
                            img.onload = res;
                            img.src = "data:image/png;base64,{b64}";
                        }});

                        const cvs = document.createElement('canvas');
                        cvs.width = img.width;
                        cvs.height = img.height;
                        const ctx = cvs.getContext('2d');
                        ctx.drawImage(img, 0, 0);

                        const idata = ctx.getImageData(0, 0, img.width, img.height).data;
                        
                        // Sample different regions
                        const samples = [];
                        // Sample S area: x: 212, y: 120 (head of S)
                        // Sample L area: x: 130, y: 260
                        // Sample T area: x: 220, y: 280
                        // Sample text area: x: 330, y: 200
                        const checkPoints = [
                            {{ name: 'top S', x: 212, y: 100 }},
                            {{ name: 'mid S', x: 220, y: 170 }},
                            {{ name: 'L block', x: 130, y: 260 }},
                            {{ name: 'T block', x: 220, y: 280 }},
                            {{ name: 'ring right', x: 360, y: 200 }},
                            {{ name: 'white bg', x: 100, y: 100 }}
                        ];

                        for (const pt of checkPoints) {{
                            const idx = (pt.y * img.width + pt.x) * 4;
                            samples.push({{
                                ...pt,
                                r: idata[idx],
                                g: idata[idx+1],
                                b: idata[idx+2],
                                a: idata[idx+3]
                            }});
                        }}

                        // Also find the minimum RGB across all pixels
                        let minR = 255, minG = 255, minB = 255;
                        let hist = {{}};
                        for (let i = 0; i < idata.length; i += 4) {{
                            const r = idata[i], g = idata[i+1], b = idata[i+2];
                            if (r < minR) minR = r;
                            if (g < minG) minG = g;
                            if (b < minB) minB = b;
                            // check if clearly different from white (255,255,255)
                            const diff = Math.max(Math.abs(255-r), Math.abs(255-g), Math.abs(255-b));
                            const bucket = Math.floor(diff / 10) * 10;
                            hist[bucket] = (hist[bucket] || 0) + 1;
                        }}

                        return {{
                            samples,
                            minRGB: [minR, minG, minB],
                            hist
                        }};
                    }})()
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print("SOURCE PIXEL ANALYSIS:", eval_script.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(inspect_source_pixels())
