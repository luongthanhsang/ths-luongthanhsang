import asyncio, json, urllib.request, subprocess, aiohttp, base64

PORT = 9303
with open('assets/images/logo-ths-sang-raw.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('ascii')

async def generate_gold_blue_logo_v2():
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

                        // Scan source to get exact bounding box and center of the outer ring
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
                                const diff = Math.max(255 - spx[i], 255 - spx[i+1], 255 - spx[i+2]);
                                if (diff > 12) {{
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
                        // Fit logo comfortably inside circular badge with padding
                        const scale = (size * 0.94) / (2 * R);
                        const outR = size * 0.47;

                        // Draw circular blue background with rich depth & subtle radial sheen
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(outCx, outCy, outR, 0, Math.PI * 2);
                        ctx.closePath();
                        ctx.clip();

                        // Nền xanh Academic Blue Gradient (chuẩn nhận diện thương hiệu ThS. Lương Thanh Sáng)
                        const bgGrad = ctx.createRadialGradient(outCx - outR*0.2, outCy - outR*0.2, outR * 0.05, outCx, outCy, outR);
                        bgGrad.addColorStop(0, '#1e40af');    // Royal blue
                        bgGrad.addColorStop(0.4, '#1d4ed8');  // Academic blue
                        bgGrad.addColorStop(0.75, '#1e3a8a'); // Deep navy
                        bgGrad.addColorStop(1, '#0f2445');    // Dark midnight blue
                        ctx.fillStyle = bgGrad;
                        ctx.fill();

                        ctx.restore();

                        // Create a radiant gold gradient canvas to sample from
                        const goldCvs = document.createElement('canvas');
                        goldCvs.width = size;
                        goldCvs.height = size;
                        const gctx = goldCvs.getContext('2d');

                        // Gold metallic gradient angled from top-left (sparkle) to bottom-right
                        const goldGrad = gctx.createLinearGradient(size * 0.1, size * 0.1, size * 0.9, size * 0.9);
                        goldGrad.addColorStop(0.00, '#d97706'); // warm deep amber gold
                        goldGrad.addColorStop(0.18, '#f59e0b'); // radiant gold
                        goldGrad.addColorStop(0.32, '#fde047'); // bright sunlight gold
                        goldGrad.addColorStop(0.46, '#ffffff'); // pure diamond sparkle highlight
                        goldGrad.addColorStop(0.58, '#fef08a'); // luminous gold
                        goldGrad.addColorStop(0.72, '#f59e0b'); // amber gold
                        goldGrad.addColorStop(0.88, '#d97706'); // warm gold
                        goldGrad.addColorStop(1.00, '#b45309'); // bronze gold
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

                        // Composite gold artwork over blue background with sharp anti-aliasing
                        for (let y = 0; y < size; y++) {{
                            for (let x = 0; x < size; x++) {{
                                const idx = (y * size + x) * 4;
                                const dist = Math.hypot(x - outCx, y - outCy);
                                
                                if (dist <= outR) {{
                                    const mr = mpx[idx], mg = mpx[idx+1], mb = mpx[idx+2];
                                    const diff = Math.max(255 - mr, 255 - mg, 255 - mb);
                                    
                                    // Smooth anti-aliased threshold
                                    let fgAlpha = 0;
                                    if (diff > 5) {{
                                        fgAlpha = Math.min(1.0, (diff - 4) / 40);
                                    }}

                                    if (fgAlpha > 0.01) {{
                                        const gr = goldData[idx];
                                        const gg = goldData[idx+1];
                                        const gb = goldData[idx+2];

                                        const br = opx[idx];
                                        const bg = opx[idx+1];
                                        const bb = opx[idx+2];

                                        // Blend gold with background
                                        opx[idx]   = Math.round(br * (1 - fgAlpha) + gr * fgAlpha);
                                        opx[idx+1] = Math.round(bg * (1 - fgAlpha) + gg * fgAlpha);
                                        opx[idx+2] = Math.round(bb * (1 - fgAlpha) + gb * fgAlpha);
                                    }}
                                }} else {{
                                    // Soft circular edge anti-aliasing for the outer border
                                    if (dist <= outR + 1.5) {{
                                        const edgeAlpha = Math.max(0, 1 - (dist - outR) / 1.5);
                                        opx[idx+3] = Math.round(opx[idx+3] * edgeAlpha);
                                    }} else {{
                                        opx[idx+3] = 0;
                                    }}
                                }}
                            }}
                        }}

                        ctx.putImageData(outData, 0, 0);

                        // Draw an outer gold ring at the perimeter
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(outCx, outCy, outR - 2, 0, Math.PI * 2);
                        ctx.lineWidth = 4;
                        ctx.strokeStyle = '#f59e0b';
                        ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
                        ctx.shadowBlur = 6;
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
    asyncio.run(generate_gold_blue_logo_v2())
