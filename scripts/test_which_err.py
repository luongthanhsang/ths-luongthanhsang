import asyncio, json, urllib.request, subprocess, time, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9260",
        "http://localhost:8000/test_math2.html"
    ])
    await asyncio.sleep(2)
    try:
        res = urllib.request.urlopen("http://localhost:9260/json")
        pages = json.loads(res.read())
        ws_url = [p for p in pages if p.get("type") == "page"][0]["webSocketDebuggerUrl"]
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                expr = """(() => {
                    const checkEl = (id) => {
                        const el = document.getElementById(id);
                        const err = el.querySelector('.MathJax_Error, [data-mjx-error], .merror, mjx-merror');
                        return { id, hasError: !!err, errorText: err ? err.innerText || err.textContent || err.getAttribute('title') : null };
                    };
                    return [checkEl('v10'), checkEl('q5'), checkEl('test_broken')];
                })()"""
                await ws.send_json({'id': 1, 'method': 'Runtime.evaluate', 'params': {
                    'expression': expr,
                    'returnByValue': True
                }})
                reply = await ws.receive_json()
                print("Element results:", reply.get('result', {}).get('result', {}).get('value'))
    finally:
        proc.kill()

asyncio.run(check())
