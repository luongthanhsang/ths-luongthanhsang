import urllib.request
import json
import time
import subprocess
import asyncio
import aiohttp

cmd = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--remote-debugging-port=9235',
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=C:\\temp\\chrome_debug_hsg_2',
    'http://localhost:8000/thi-hsg.html'
]
proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    resp = urllib.request.urlopen('http://localhost:9235/json')
    tabs = json.loads(resp.read().decode())
    ws_url = tabs[0]['webSocketDebuggerUrl']
    
    async def test():
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                await ws.send_json({'id': 1, 'method': 'Page.enable'})
                await ws.send_json({'id': 2, 'method': 'Runtime.enable'})
                await asyncio.sleep(2)
                
                check_script = """
                (() => {
                    const titleFound = document.body.innerText.includes('Kỳ Thi Chọn HSG Cấp Tỉnh THPT Môn Toán 2025 – 2026');
                    const linkDrive = document.querySelector('a[href*="15IvacJ6ijo8OFszkmhVPrjQxHny5X_lb"]')?.href;
                    const linkPdf = document.querySelector('a[href*="De_va_Loi_giai_HSG_An_Giang_2025_2026.pdf"]')?.href;
                    const itemsCount = document.querySelectorAll('.hsg-module-card').length;
                    return {
                        titleFound: titleFound,
                        linkDrive: linkDrive,
                        linkPdf: linkPdf,
                        itemsCount: itemsCount
                    };
                })()
                """
                await ws.send_json({'id': 3, 'method': 'Runtime.evaluate', 'params': {'expression': check_script, 'returnByValue': True}})
                while True:
                    msg = await ws.receive()
                    data = json.loads(msg.data)
                    if data.get('id') == 3:
                        print('TEST RESULT:', data['result']['result']['value'])
                        break
                    
    asyncio.run(test())
finally:
    proc.terminate()
