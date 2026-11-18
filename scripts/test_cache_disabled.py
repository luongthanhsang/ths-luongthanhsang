import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9292

async def test_cache_disabled():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--window-size=1440,1100',
        '--remote-allow-origins=*',
        f'--remote-debugging-port={PORT}',
        'about:blank'
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.0)
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

                await send('Network.enable')
                await send('Network.setCacheDisabled', {'cacheDisabled': True})
                await send('Runtime.enable')
                await send('Page.enable')

                errors = []
                async def listen():
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            if d.get('method') == 'Runtime.exceptionThrown':
                                errors.append(d)

                listener = asyncio.create_task(listen())
                await send('Page.navigate', {'url': 'http://localhost:8000/trac-nghiem.html'})
                await asyncio.sleep(3.0)
                listener.cancel()

                print(f"Exceptions caught on trac-nghiem.html (cache disabled): {len(errors)}")
                for err in errors:
                    print(err.get('params', {}).get('exceptionDetails'))

                res_eval = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const cards = document.querySelectorAll('.question-item-card');
                        const isStarted = window.isExamStarted;
                        const shuffle = window.currentShuffleCode;
                        return { cards: cards.length, isStarted, shuffle };
                    })()
                    """,
                    'returnByValue': True
                })
                print("Result after navigation:", res_eval.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_cache_disabled())
