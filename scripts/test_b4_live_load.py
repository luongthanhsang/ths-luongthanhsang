import asyncio, json, urllib.request, subprocess

async def test_page_load():
    target_url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4'
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*', '--remote-debugging-port=9330', target_url
    ])
    await asyncio.sleep(5.0)
    try:
        res = urllib.request.urlopen('http://localhost:9330/json')
        pages = json.loads(res.read())
        ws_url = pages[0]['webSocketDebuggerUrl']
        
        import aiohttp
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
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
                            return {
                                readyState: document.readyState,
                                title: document.title,
                                b4_var: typeof window.LESSON_11_C1_B4_DATA,
                                current_lesson: window.CURRENT_LESSON_DATA ? window.CURRENT_LESSON_DATA.id : null,
                                sidebar_links_count: document.querySelectorAll('.tree-node').length,
                                sidebar_titles: Array.from(document.querySelectorAll('.tree-item-label')).map(el => el.textContent.trim())
                            };
                        })()
                    ''',
                    'returnByValue': True
                })
                print('Live Page Load Result:', json.dumps(eval_res.get('result', {}).get('value'), ensure_ascii=False, indent=2))
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(test_page_load())
