import asyncio, json, urllib.request, subprocess, aiohttp

async def test():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9228",
        "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b1"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9228/json")
        pages = json.loads(res.read())
        ws_url = pages[0]["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id:
                                return data.get("result", {})

                await asyncio.sleep(2)
                eval_res = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                        const box = document.getElementById('lt1-feedback-box');
                        const btn = document.querySelector('.btn-check-table-lt1');
                        const initialDisplay = box ? box.style.display : 'NO_BOX';
                        if (btn) btn.click();
                        const afterClickDisplay = box ? box.style.display : 'NO_BOX';
                        return { hasBtn: !!btn, initialDisplay, afterClickDisplay };
                    })()
                    """,
                    "returnByValue": True
                })
                print("BOX EVAL:", eval_res.get("result", {}).get("value"))

    finally:
        proc.kill()

asyncio.run(test())
