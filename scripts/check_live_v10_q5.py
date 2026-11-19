import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9335",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9335/json")
        target = json.loads(res.read())[0]
        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(target["webSocketDebuggerUrl"], max_msg_size=10*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id: return data.get("result", {})

                await send("Runtime.enable")
                await asyncio.sleep(2.0)
                await send("Runtime.evaluate", {"expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"})

                # Activate 4b
                res1 = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const subs = Array.from(document.querySelectorAll('.tree-sub-item'));
                            const item = subs.find(s => s.dataset.stepId === 'sec-4' && s.dataset.subkey === 'b');
                            if (item) item.click();
                            return 'clicked 4b';
                        })()
                    """,
                    "returnByValue": True
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {"expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"})
                await asyncio.sleep(0.5)

                v10_check = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const v10 = Array.from(document.querySelectorAll('.alert-box')).find(el => el.innerText.includes('VÍ DỤ 10'));
                            return {
                                found: !!v10,
                                text: v10 ? v10.innerText : null,
                                hasMathJaxError: v10 ? !!v10.querySelector('.MathJax_Error, [data-mjx-error], .merror, mjx-merror') : false
                            };
                        })()
                    """,
                    "returnByValue": True
                })
                print("V10 live check:", v10_check.get("result", {}).get("value"))

                # Activate Quiz
                await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const btn = document.querySelector('button[data-bs-target=\"#trac-nghiem\"], [data-tab=\"trac-nghiem\"], a[href=\"#trac-nghiem\"]');
                            if (btn) btn.click();
                            if (typeof window.renderQuiz === 'function') window.renderQuiz();
                        })()
                    """
                })
                await asyncio.sleep(1.0)
                await send("Runtime.evaluate", {"expression": "window.MathJax && window.MathJax.typesetPromise ? window.MathJax.typesetPromise() : Promise.resolve()"})
                await asyncio.sleep(0.5)

                q5_check = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const cards = Array.from(document.querySelectorAll('.quiz-question-card, .question-card, .quiz-card, [id*=\"mc-11-1-5\"]'));
                            const text = document.getElementById('trac-nghiem') ? document.getElementById('trac-nghiem').innerText : '';
                            const q5Snippet = text.includes('mc-11-1-5') || text.includes('Câu 5') ? text.slice(text.indexOf('Câu 5'), text.indexOf('Câu 5') + 300) : 'Not found';
                            return {
                                q5Snippet,
                                quizMathErrors: document.querySelectorAll('#trac-nghiem .MathJax_Error, #trac-nghiem [data-mjx-error], #trac-nghiem .merror').length
                            };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Q5 live check:", q5_check.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
