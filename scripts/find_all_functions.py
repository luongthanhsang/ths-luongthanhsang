with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9289

async def find_all_functions():
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

                # Find line where syntax error occurs
                # We know a complete valid JS chunk up to some function
                # Let's find all function declarations or top-level blocks
                import re
                fn_indices = [0]
                for i, l in enumerate(lines):
                    if re.match(r'^(function\s+\w+|const\s+\w+\s*=|let\s+\w+\s*=|var\s+\w+\s*=|window\.\w+\s*=|\/\*\*)', l):
                        fn_indices.append(i)
                fn_indices.append(len(lines))

                print(f"Total top-level blocks: {len(fn_indices)}")

                for k in range(len(fn_indices)-1):
                    start = fn_indices[k]
                    end = fn_indices[k+1]
                    block = "".join(lines[start:end])
                    # If this block alone or up to end is valid
                    err = await eval_code("".join(lines[:end]))
                    if err != "OK" and "Unexpected end of input" not in err:
                        print(f"Block {k} (lines {start+1} - {end}) failed: {err}")
                        print("Block preview:")
                        for line in lines[start:min(end, start+15)]:
                            print("  ", line.rstrip())
                        break

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(find_all_functions())
