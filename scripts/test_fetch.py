import asyncio, json, urllib.request, subprocess

async def test_fetch():
    target_url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4'
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*', '--remote-debugging-port=9345', target_url
    ])
    await asyncio.sleep(4.0)
    try:
        res = urllib.request.urlopen('http://localhost:9345/json')
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
                
                eval_res = await send('Runtime.evaluate', {
                    'expression': '''
                        fetch('/js/lesson-11-4-data.js')
                            .then(r => ({ status: r.status, ok: r.ok, size: r.headers.get("content-length") }))
                            .catch(err => ({ error: err.message }))
                    ''',
                    'awaitPromise': True,
                    'returnByValue': True
                })
                print('Fetch result:', eval_res.get('result', {}).get('value'))
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(test_fetch())
