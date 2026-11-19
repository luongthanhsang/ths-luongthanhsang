import asyncio, json, urllib.request, subprocess, time, aiohttp

html_content = """<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
  <div id="test1">$A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha$</div>
  <div id="test2">$P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) - 2\\sin\\alpha$</div>
</body>
</html>
"""

with open("test_math.html", "w", encoding="utf-8") as f:
    f.write(html_content)

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9255",
        "http://localhost:8000/test_math.html"
    ])
    await asyncio.sleep(2)
    try:
        res = urllib.request.urlopen("http://localhost:9255/json")
        pages = json.loads(res.read())
        ws_url = [p for p in pages if p.get("type") == "page"][0]["webSocketDebuggerUrl"]
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                expr = "(() => { return { errors: Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror')).map(e => e.innerText || e.textContent), h1: document.getElementById('test1').innerText, h2: document.getElementById('test2').innerText }; })()"
                await ws.send_json({'id': 1, 'method': 'Runtime.evaluate', 'params': {
                    'expression': expr,
                    'returnByValue': True
                }})
                reply = await ws.receive_json()
                print("Result:", reply.get('result', {}).get('result', {}).get('value'))
    finally:
        proc.kill()

asyncio.run(check())
