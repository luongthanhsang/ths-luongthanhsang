with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove line 1767 (0-indexed: 1766)
del lines[1766]
new_code = "".join(lines)

import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9290

async def test_fixed():
    chrome_cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--disable-gpu',
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
                payload = json.dumps({
                    'id': 1,
                    'method': 'Runtime.evaluate',
                    'params': {
                        'expression': f'(() => {{ try {{ new Function({json.dumps(new_code)}); return "ENTIRE_SCRIPT_OK"; }} catch(e) {{ return e.message + " at " + e.stack; }} }})()',
                        'returnByValue': True
                    }
                })
                await ws.send_str(payload)
                msg = await ws.receive()
                result = json.loads(msg.data)['result']['result']['value']
                print("ENTIRE SCRIPT TEST RESULT:", result)
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_fixed())
