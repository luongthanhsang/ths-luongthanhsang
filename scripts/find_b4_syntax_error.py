import asyncio, json, urllib.request, subprocess

async def get_console_errors():
    target_url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4'
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*', '--remote-debugging-port=9325', target_url
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen('http://localhost:9325/json')
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

                await send('Runtime.enable')
                await send('Log.enable')
                
                # Evaluate script directly to get exact syntax error
                eval_res = await send('Runtime.evaluate', {
                    'expression': '''
                        try {
                            const res = document.querySelector('script[src*="lesson-11-4-data.js"]');
                            console.log("Script tag found:", !!res);
                        } catch(e) {
                            console.error(e);
                        }
                    '''
                })
                
                # Fetch the script source and evaluate it inside try-catch
                eval_fetch = await send('Runtime.evaluate', {
                    'expression': '''
                        fetch('/js/lesson-11-4-data.js')
                            .then(r => r.text())
                            .then(code => {
                                try {
                                    new Function(code);
                                    return { valid: true };
                                } catch (err) {
                                    return { valid: false, message: err.message, stack: err.stack };
                                }
                            })
                    ''',
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print('Syntax Check B11-4:', json.dumps(eval_fetch.get('result', {}).get('value'), indent=2))
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(get_console_errors())
