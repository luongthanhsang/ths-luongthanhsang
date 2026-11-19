import asyncio, json, urllib.request, subprocess, time, aiohttp

html_content = """<!DOCTYPE html>
<html>
<head>
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      }
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
  <div id="v10">$A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha$</div>
  <div id="q5">$P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) - 2\\sin\\alpha$</div>
  <div id="test_broken">$A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{\\pi}{2} - \\alpha - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha$</div>
</body>
</html>
"""

with open("test_math2.html", "w", encoding="utf-8") as f:
    f.write(html_content)

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9258",
        "http://localhost:8000/test_math2.html"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9258/json")
        pages = json.loads(res.read())
        ws_url = [p for p in pages if p.get("type") == "page"][0]["webSocketDebuggerUrl"]
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                expr = """(() => {
                    const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror'));
                    return {
                        errors: errEls.map(e => e.innerText || e.textContent || e.getAttribute('title')),
                        v10_html: document.getElementById('v10').innerHTML,
                        q5_html: document.getElementById('q5').innerHTML,
                        broken_html: document.getElementById('test_broken').innerHTML
                    };
                })()"""
                await ws.send_json({'id': 1, 'method': 'Runtime.evaluate', 'params': {
                    'expression': expr,
                    'returnByValue': True
                }})
                reply = await ws.receive_json()
                val = reply.get('result', {}).get('result', {}).get('value')
                print("Errors:", val.get('errors'))
                print("V10 has mjx-container:", 'mjx-container' in val.get('v10_html'))
                print("Q5 has mjx-container:", 'mjx-container' in val.get('q5_html'))
                print("Broken has mjx-merror:", 'mjx-merror' in val.get('broken_html'))
    finally:
        proc.kill()

asyncio.run(check())
