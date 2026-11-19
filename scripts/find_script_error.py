import asyncio, json, urllib.request, subprocess

async def capture_console_errors():
    target_url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4'
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*', '--remote-debugging-port=9340', target_url
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen('http://localhost:9340/json')
        pages = json.loads(res.read())
        ws_url = pages[0]['webSocketDebuggerUrl']
        
        import aiohttp
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    payload = {'id': msg_id, 'method': method, 'params': params or {}}
                    await ws.send_str(json.dumps(payload))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get('id') == msg_id:
                                return data.get('result', {})

                # Listen to console messages
                await send('Runtime.enable')
                
                # Evaluate script code by creating a <script> element manually and catch error
                eval_res = await send('Runtime.evaluate', {
                    'expression': '''
                        new Promise((resolve) => {
                            const s = document.createElement('script');
                            s.src = '/js/lesson-11-4-data.js?t=' + Date.now();
                            s.onload = () => resolve({ loaded: true, b4: typeof window.LESSON_11_C1_B4_DATA });
                            s.onerror = (e) => resolve({ loaded: false, error: 'Script load error' });
                            document.head.appendChild(s);
                        })
                    ''',
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print('Script injection result:', eval_res.get('result', {}).get('value'))
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(capture_console_errors())
