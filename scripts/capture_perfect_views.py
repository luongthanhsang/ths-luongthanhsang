import asyncio, json, urllib.request, subprocess, time, aiohttp, base64, os

ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9265

async def capture_views():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1400,1050",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        target = json.loads(res.read())[0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
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

                async def eval_js(expr):
                    r = await send('Runtime.evaluate', {'expression': expr, 'returnByValue': True, 'awaitPromise': True})
                    return r.get('result', {}).get('value')

                async def snap(filename, clip_selector=None):
                    if clip_selector:
                        rect = await eval_js(f"""
                            (() => {{
                                const el = document.querySelector('{clip_selector}');
                                if (!el) return null;
                                const r = el.getBoundingClientRect();
                                return {{ x: r.left, y: r.top, width: r.width, height: r.height, scale: 1 }};
                            }})()
                        """)
                        if rect and rect['width'] > 0 and rect['height'] > 0:
                            shot = await send('Page.captureScreenshot', {
                                'format': 'png',
                                'clip': rect
                            })
                        else:
                            shot = await send('Page.captureScreenshot', {'format': 'png'})
                    else:
                        shot = await send('Page.captureScreenshot', {'format': 'png'})

                    data = base64.b64decode(shot.get('data', ''))
                    path = os.path.join(ARTIFACT_DIR, filename)
                    with open(path, 'wb') as f:
                        f.write(data)
                    print(f"Captured: {filename} ({len(data)} bytes)")

                # Wait for MathJax
                await eval_js("new Promise(r => setTimeout(r, 2000))")

                # 1. Lesson 11-1: Section 1a (SVG 2 Spiral angles)
                await eval_js("""
                    (() => {
                        const sec1aBtn = document.querySelector('[data-step-id=\"sec1a\"], [data-sub-id=\"sec1a\"], .tree-sub-item');
                        if (sec1aBtn) sec1aBtn.click();
                    })()
                """)
                await eval_js("new Promise(r => setTimeout(r, 1000))")
                if await eval_js("window.MathJax ? window.MathJax.typesetPromise() : Promise.resolve()"):
                    pass
                await asyncio.sleep(0.5)
                await snap("b11_1_sec1a_spiral_perfect.png", "#lessonDetailViewer")

                # 2. Lesson 11-1: Section 4b (Ví dụ 10)
                await eval_js("""
                    (() => {
                        const items = Array.from(document.querySelectorAll('.tree-sub-item, .tree-leaf-item'));
                        const sec4b = items.find(el => el.textContent.includes('4b') || el.textContent.includes('liên quan'));
                        if (sec4b) sec4b.click();
                    })()
                """)
                await eval_js("new Promise(r => setTimeout(r, 1000))")
                await eval_js("window.MathJax ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(0.5)
                await snap("b11_1_sec4b_v10_perfect.png", "#lessonDetailViewer")

                # 3. Lesson 11-1: Quiz tab (Câu 5)
                await eval_js("""
                    (() => {
                        const quizBtn = document.querySelector('button[data-bs-target=\"#trac-nghiem\"], [data-tab=\"trac-nghiem\"], a[href=\"#trac-nghiem\"]');
                        if (quizBtn) quizBtn.click();
                        if (typeof window.renderQuiz === 'function') window.renderQuiz();
                    })()
                """)
                await eval_js("new Promise(r => setTimeout(r, 1000))")
                await eval_js("window.MathJax ? window.MathJax.typesetPromise() : Promise.resolve()")
                await asyncio.sleep(0.5)
                await snap("b11_1_quiz_q5_perfect.png", "#trac-nghiem")

                # 4. Check for any MathJax error in DOM
                errs = await eval_js("""
                    (() => {
                        const errors = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).map(e => e.innerText || e.textContent);
                        return errors;
                    })()
                """)
                print("Live MathJax errors across views:", errs)

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(capture_views())
