import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9293

async def test_init_functions():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
        '--window-size=1440,1100',
        '--remote-allow-origins=*',
        f'--remote-debugging-port={PORT}',
        'http://localhost:8000/trac-nghiem.html'
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

                await send('Runtime.enable')

                eval_test = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const results = {};
                        const fns = [
                            'initDynamicSchoolYear',
                            'initNavigation',
                            'initDigitalLessons',
                            'initDocumentRepository',
                            'initQuizSystem',
                            'initContactForm',
                            'initBackToTop',
                            'initWebsiteCounters'
                        ];
                        for (const fn of fns) {
                            try {
                                if (typeof window[fn] === 'function') {
                                    window[fn]();
                                    results[fn] = 'CALLED_OK';
                                } else {
                                    // check if declared in scope
                                    eval(`${fn}()`);
                                    results[fn] = 'EVAL_OK';
                                }
                            } catch(e) {
                                results[fn] = 'ERROR: ' + e.message;
                            }
                        }
                        results.cardsCount = document.querySelectorAll('.question-item-card').length;
                        return results;
                    })()
                    """,
                    'returnByValue': True
                })
                print("INIT RESULTS:", eval_test.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_init_functions())
