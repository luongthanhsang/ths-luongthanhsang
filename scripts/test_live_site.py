import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9291

async def test_live_site():
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

                await send('Runtime.enable')
                await send('Page.enable')

                # 1. Test tai-lieu.html
                print("--- Testing tai-lieu.html ---")
                await send('Page.navigate', {'url': 'http://localhost:8000/tai-lieu.html'})
                await asyncio.sleep(2.5)
                res_docs = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const cards = document.querySelectorAll('.doc-card');
                        const repoDls = document.getElementById('totalDocDownloadsCount')?.textContent?.trim();
                        const repoVisits = document.getElementById('docRepoVisitsCount')?.textContent?.trim();
                        const firstTitle = cards[0]?.querySelector('.doc-title')?.textContent?.trim();
                        const firstDls = cards[0]?.querySelector('.doc-downloads-meta strong')?.textContent?.trim();
                        return { cardCount: cards.length, repoDls, repoVisits, firstTitle, firstDls };
                    })()
                    """,
                    'returnByValue': True
                })
                print("tai-lieu.html:", res_docs.get('result', {}).get('value'))

                # 2. Test trac-nghiem.html
                print("\n--- Testing trac-nghiem.html ---")
                await send('Page.navigate', {'url': 'http://localhost:8000/trac-nghiem.html'})
                await asyncio.sleep(2.5)
                res_quiz = await send('Runtime.evaluate', {
                    'expression': """
                    (() => {
                        const cards = document.querySelectorAll('.question-item-card');
                        const p1 = document.querySelectorAll('.question-item-card[data-part="I"]').length;
                        const p2 = document.querySelectorAll('.question-item-card[data-part="II"]').length;
                        const p3 = document.querySelectorAll('.question-item-card[data-part="III"]').length;
                        const shuffle = window.currentShuffleCode;
                        const isStarted = window.isExamStarted;
                        return { cardCount: cards.length, p1, p2, p3, shuffle, isStarted };
                    })()
                    """,
                    'returnByValue': True
                })
                print("trac-nghiem.html:", res_quiz.get('result', {}).get('value'))

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_live_site())
