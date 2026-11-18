import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9294
IMG_PATH = r"C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/.user_uploaded/media_1795005831131_5e3a3ced.png"

with open(IMG_PATH, "rb") as f:
    b64_data = base64.b64encode(f.read()).decode("ascii")

async def analyze_img4():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--remote-allow-origins=*',
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

                eval_res = await send('Runtime.evaluate', {
                    'expression': f"""
                    (async () => {{
                        const img = new Image();
                        img.src = "data:image/png;base64,{b64_data}";
                        await img.decode();

                        const cvs = document.createElement('canvas');
                        cvs.width = img.width;
                        cvs.height = img.height;
                        const ctx = cvs.getContext('2d');
                        ctx.drawImage(img, 0, 0);

                        const idata = ctx.getImageData(0, 0, img.width, img.height);
                        const data = idata.data;

                        // Find bounding box of logo
                        let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
                        let sampleColors = [];
                        for (let y = 0; y < img.height; y++) {{
                            for (let x = 0; x < img.width; x++) {{
                                const idx = (y * img.width + x) * 4;
                                const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
                                // if not transparent and not white (r,g,b < 245)
                                if (a > 30 && (r < 245 || g < 245 || b < 245)) {{
                                    if (x < minX) minX = x;
                                    if (x > maxX) maxX = x;
                                    if (y < minY) minY = y;
                                    if (y > maxY) maxY = y;
                                }}
                            }}
                        }}

                        return {{
                            width: img.width,
                            height: img.height,
                            bbox: {{ minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY }},
                            centerX: (minX + maxX) / 2,
                            centerY: (minY + maxY) / 2
                        }};
                    }})()
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print("Image Analysis:", eval_res.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(analyze_img4())
