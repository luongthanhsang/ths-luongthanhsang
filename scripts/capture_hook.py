# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, base64, subprocess
import aiohttp

TARGET_URL = 'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b2'

async def test():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new', '--disable-gpu', '--remote-allow-origins=*',
        '--remote-debugging-port=9228', TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen('http://localhost:9228/json')
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
                await send('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1000, 'deviceScaleFactor': 1, 'mobile': False})
                await send('Runtime.evaluate', {
                    'expression': """(() => {
                        const hookItem = Array.from(document.querySelectorAll('.tree-node')).find(el => el.innerText.includes('Tình huống mở đầu'));
                        if (hookItem) hookItem.click();
                    })()"""
                })
                await asyncio.sleep(1)
                await send('Runtime.evaluate', {
                    'expression': """(() => {
                        const svg = document.querySelector('svg[viewBox*="0 0 860 330"]');
                        if (svg) svg.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()"""
                })
                await asyncio.sleep(1)
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                with open('C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_hook_meeting_screens.png', 'wb') as f:
                    f.write(base64.b64decode(shot['data']))
                print('Saved verified_hook_meeting_screens.png successfully!')
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test())
