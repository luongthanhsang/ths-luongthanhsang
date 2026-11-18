with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9288

async def test_sublines():
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
                async def eval_code(c):
                    payload = json.dumps({
                        'id': 1,
                        'method': 'Runtime.evaluate',
                        'params': {
                            'expression': f'(() => {{ try {{ new Function({json.dumps(c)}); return "OK"; }} catch(e) {{ return e.message; }} }})()',
                            'returnByValue': True
                        }
                    })
                    await ws.send_str(payload)
                    msg = await ws.receive()
                    return json.loads(msg.data)['result']['result']['value']

                print('Lines 1 to 380:', await eval_code(''.join(lines[:380])))
                print('Lines 1 to 381:', await eval_code(''.join(lines[:381])))
                print('Lines 1 to 384:', await eval_code(''.join(lines[:384])))
                print('Lines 1 to 385:', await eval_code(''.join(lines[:385])))
                print('Lines 1 to 395:', await eval_code(''.join(lines[:395])))

                # Let's test lines 1 to 381 + '}' to close function
                # What opened before 381?
                # Let's count { and } in lines[:381]
                code381 = ''.join(lines[:381])
                print('Count { in lines[:381]:', code381.count('{'))
                print('Count } in lines[:381]:', code381.count('}'))
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(test_sublines())
