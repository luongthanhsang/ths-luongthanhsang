import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9299
with open('assets/images/logo-ths-sang-raw.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('ascii')

async def generate_gold_blue_logo():
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
                        await new Promise((res, rej) => {{
                            img.onload = res;
                            img.onerror = rej;
                            img.src = "data:image/png;base64,{b64}";
                        }});

                        const w = img.naturalWidth;
                        const h = img.naturalHeight;

                        // 1. Scan source to get exact bounding circle of the outer ring
                        const tempCvs = document.createElement('canvas');
                        tempCvs.width = w;
                        tempCvs.height = h;
                        const tctx = tempCvs.getContext('2d');
                        tctx.drawImage(img, 0, 0);
                        const sData = tctx.getImageData(0, 0, w, h);
                        const spx = sData.data;

                        let minX = w, maxX = 0, minY = h, maxY = 0;
                        for (let y = 0; y < h; y++) {{
                            for (let x = 0; x < w; x++) {{
                                const i = (y * w + x) * 4;
                                const r = spx[i], g = spx[i+1], b = spx[i+2];
                                if (r < 240 || g < 240 || b < 240) {{
                                    if (x < minX) minX = x;
                                    if (x > maxX) maxX = x;
                                    if (y < minY) minY = y;
                                    if (y > maxY) maxY = y;
                                }}
                            }}
                        }}

                        const cx = (minX + maxX) / 2;
                        const cy = (minY + maxY) / 2;
                        const R = Math.max((maxX - minX) / 2, (maxY - minY) / 2);

                        // High-res output canvas (size 800 x 800)
                        const size = 800;
                        const outCvs = document.createElement('canvas');
                        outCvs.width = size;
                        outCvs.height = size;
                        const ctx = outCvs.getContext('2d');

                        const outCx = size / 2;
                        const outCy = size / 2;
                        const scale = (size * 0.96) / (2 * R);
                        const outR = R * scale;

                        // Draw circular blue background with rich depth & subtle radial sheen
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(outCx, outCy, outR, 0, Math.PI * 2);
                        ctx.closePath();
                        ctx.clip();

                        // Nền xanh Academic Blue Gradient (chuẩn nhận diện thương hiệu ThS. Lương Thanh Sáng)
                        const bgGrad = ctx.createRadialGradient(outCx - outR*0.25, outCy - outR*0.25, outR * 0.1, outCx, outCy, outR);
                        bgGrad.addColorStop(0, '#2563eb');    // Primary 600
                        bgGrad.addColorStop(0.5, '#1d4ed8');  // Primary 700
                        bgGrad.addColorStop(0.85, '#1e3a8a'); // Primary 800
                        bgGrad.addColorStop(1, '#0f2445');    // Primary 900
                        ctx.fillStyle = bgGrad;
                        ctx.fill();

                        ctx.restore();

                        // Now render foreground artwork recolored into Gold Metallic
                        // Create a gold gradient canvas to sample from
                        const goldCvs = document.createElement('canvas');
                        goldCvs.width = size;
                        goldCvs.height = size;
                        const gctx = goldCvs.getContext('2d');

                        const goldGrad = gctx.createLinearGradient(0, 0, size, size);
                        goldGrad.addColorStop(0.00, '#b45309'); // bronze/dark gold
                        goldGrad.addColorStop(0.18, '#d97706'); // amber gold
                        goldGrad.addColorStop(0.35, '#f59e0b'); // bright gold
                        goldGrad.addColorStop(0.50, '#fef08a'); // sparkling pale gold highlight
                        goldGrad.addColorStop(0.65, '#f59e0b'); // bright gold
                        goldGrad.addColorStop(0.82, '#d97706'); // warm gold
                        goldGrad.addColorStop(1.00, '#92400e'); // rich deep gold
                        gctx.fillStyle = goldGrad;
                        gctx.fillRect(0, 0, size, size);

                        const goldData = gctx.getImageData(0, 0, size, size).data;

                        // Create mask of source logo transformed to 800x800
                        const maskCvs = document.createElement('canvas');
                        maskCvs.width = size;
                        maskCvs.height = size;
                        const mctx = maskCvs.getContext('2d');
                        mctx.save();
                        mctx.translate(outCx, outCy);
                        mctx.scale(scale, scale);
                        mctx.translate(-cx, -cy);
                        mctx.drawImage(img, 0, 0);
                        mctx.restore();

                        const maskData = mctx.getImageData(0, 0, size, size);
                        const mpx = maskData.data;

                        const outData = ctx.getImageData(0, 0, size, size);
                        const opx = outData.data;

                        // Composite gold artwork over blue background with anti-aliasing
                        for (let y = 0; y < size; y++) {{
                            for (let x = 0; x < size; x++) {{
                                const idx = (y * size + x) * 4;
                                const dist = Math.hypot(x - outCx, y - outCy);
                                
                                // Only within the outer circular medallion
                                if (dist <= outR + 2) {{
                                    const mr = mpx[idx], mg = mpx[idx+1], mb = mpx[idx+2];
                                    // In source, background is white (~255), artwork is darker (< 240)
                                    // Compute darkness / presence of artwork
                                    const brightness = (mr * 0.299 + mg * 0.587 + mb * 0.114);
                                    let fgAlpha = 0;
                                    if (brightness < 250) {{
                                        fgAlpha = Math.min(1.0, Math.max(0, (250 - brightness) / 100));
                                    }}

                                    if (fgAlpha > 0.01) {{
                                        const gr = goldData[idx];
                                        const gg = goldData[idx+1];
                                        const gb = goldData[idx+2];

                                        const br = opx[idx];
                                        const bg = opx[idx+1];
                                        const bb = opx[idx+2];

                                        opx[idx]   = Math.round(br * (1 - fgAlpha) + gr * fgAlpha);
                                        opx[idx+1] = Math.round(bg * (1 - fgAlpha) + gg * fgAlpha);
                                        opx[idx+2] = Math.round(bb * (1 - fgAlpha) + gb * fgAlpha);
                                    }}
                                }} else {{
                                    // Outside badge is transparent
                                    opx[idx+3] = 0;
                                }}
                            }}
                        }}

                        ctx.putImageData(outData, 0, 0);

                        // Draw an outer gold border ring for the seal
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(outCx, outCy, outR - 1.5, 0, Math.PI * 2);
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = '#f59e0b';
                        ctx.stroke();
                        ctx.restore();

                        return outCvs.toDataURL('image/png');
                    }})()
                    """,
                    'awaitPromise': True,
                    'returnByValue': True
                })

                data_url = eval_script.get('result', {}).get('value', '')
                print(f"Data URL generated, length: {len(data_url)}")
                if data_url.startswith("data:image/png;base64,"):
                    png_bytes = base64.b64decode(data_url.split(",")[1])
                    out_path = r"assets\images\logo-ths-sang.png"
                    with open(out_path, "wb") as f:
                        f.write(png_bytes)
                    print(f"Saved gold-blue logo to {out_path} ({len(png_bytes)} bytes)")

                    # Also copy to Netlify folder
                    netlify_path = r"BAN_CAP_NHAT_NETLIFY\assets\images\logo-ths-sang.png"
                    with open(netlify_path, "wb") as f:
                        f.write(png_bytes)
                    print(f"Saved to Netlify folder: {netlify_path}")

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(generate_gold_blue_logo())
