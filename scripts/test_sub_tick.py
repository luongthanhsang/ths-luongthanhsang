# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, subprocess
import aiohttp

TARGET_URL = 'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b2'

async def test():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*',
        '--remote-debugging-port=9229', TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen('http://localhost:9229/json')
        target = [p for p in json.loads(res.read()) if p.get('type') == 'page'][0]
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(target['webSocketDebuggerUrl'], max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            if d.get('id') == msg_id: return d.get('result', {})

                await asyncio.sleep(2)
                eval_res = await send('Runtime.evaluate', {
                    'expression': """(() => {
                        // Find Section 1 sub-items checkboxes and click them!
                        const subIcons = Array.from(document.querySelectorAll('.tree-sub-item .tree-sub-status-icon'));
                        console.log('Found subIcons:', subIcons.length);
                        // Sub a, b, c of sec-1 are the first 3
                        subIcons[0].click(); // a
                        subIcons[1].click(); // b
                        subIcons[2].click(); // c

                        // Check state of Section 1 parent node
                        const sec1 = document.querySelector('.tree-node[data-step-id="sec-1"]');
                        const isSec1Done = sec1 ? sec1.classList.contains('is-completed') : false;
                        const sec1Text = sec1 ? sec1.innerText : '';
                        
                        return { isSec1Done, sec1Text, totalSubs: subIcons.length };
                    })()""",
                    'returnByValue': True
                })
                print('Interactive Sub-item Click Result:', eval_res.get('result', {}).get('value'))
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test())
