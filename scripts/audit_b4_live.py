import asyncio, json, urllib.request, subprocess
import aiohttp

async def audit_b4_page():
    target_url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4'
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*', '--remote-debugging-port=9310', target_url
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen('http://localhost:9310/json')
        pages = json.loads(res.read())
        ws_url = pages[0]['webSocketDebuggerUrl']
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                async def send(method, params=None):
                    payload = {'id': 1, 'method': method, 'params': params or {}}
                    await ws.send_str(json.dumps(payload))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get('id') == 1:
                                return data.get('result', {})

                await send('Runtime.enable')
                await asyncio.sleep(3.0)
                eval_res = await send('Runtime.evaluate', {
                    'expression': '''
                        (function() {
                            // Tìm các phần tử hiển thị còn sót lại ký tự $ hoặc \\
                            const unrenderedMath = [];
                            document.querySelectorAll('*').forEach(el => {
                                if (el.children.length === 0 && el.textContent.includes('$')) {
                                    unrenderedMath.push({
                                        tag: el.tagName,
                                        cls: el.className,
                                        parentCls: el.parentElement ? el.parentElement.className : '',
                                        text: el.textContent.trim()
                                    });
                                }
                            });
                            
                            // MathJax errors
                            const mjxErrors = document.querySelectorAll('.MathJax_Error, [data-mjx-error], .mjx-error, .merror');
                            
                            return {
                                unrenderedCount: unrenderedMath.length,
                                unrenderedSample: unrenderedMath.slice(0, 15),
                                mjxErrorsCount: mjxErrors.length
                            };
                        })()
                    ''',
                    'returnByValue': True
                })
                print('B11-4 Audit Result:', json.dumps(eval_res.get('result', {}).get('value'), ensure_ascii=False, indent=2))
    finally:
        proc.kill()

asyncio.run(audit_b4_page())
