import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9304
with open('assets/images/logo-ths-sang-raw.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('ascii')

async def debug_coords():
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
                await ws.send_str(json.dumps({'id': 1, 'method': 'Runtime.enable'}))
                await ws.receive()

                eval_script = f"""
                (async () => {{
                    const img = new Image();
                    await new Promise(r => {{ img.onload = r; img.src = "data:image/png;base64,{b64}"; }});

                    const w = img.naturalWidth;
                    const h = img.naturalHeight;
                    const cvs = document.createElement('canvas');
                    cvs.width = w;
                    cvs.height = h;
                    const ctx = cvs.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const spx = ctx.getImageData(0, 0, w, h).data;

                    let minX = w, maxX = 0, minY = h, maxY = 0;
                    let count = 0;
                    for (let y = 0; y < h; y++) {{
                        for (let x = 0; x < w; x++) {{
                            const i = (y * w + x) * 4;
                            const diff = Math.max(255 - spx[i], 255 - spx[i+1], 255 - spx[i+2]);
                            if (diff > 12) {{
                                if (x < minX) minX = x;
                                if (x > maxX) maxX = x;
                                if (y < minY) minY = y;
                                if (y > maxY) maxY = y;
                                count++;
                            }}
                        }}
                    }}

                    return {{
                        w, h, minX, maxX, minY, maxY, count,
                        cx: (minX + maxX)/2,
                        cy: (minY + maxY)/2,
                        R: Math.max((maxX - minX)/2, (maxY - minY)/2)
                    }};
                }})()
                """
                await ws.send_str(json.dumps({'id': 2, 'method': 'Runtime.evaluate', 'params': {'expression': eval_script, 'awaitPromise': True, 'returnByValue': True}}))
                msg = await ws.receive()
                print("DEBUG COORDS:", json.loads(msg.data)['result']['result']['value'])
    finally:
        proc.terminate()

asyncio.run(debug_coords())
