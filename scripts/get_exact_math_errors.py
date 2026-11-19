# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio
import aiohttp

PORT = 9338

async def get_exact_math_errors(lesson_id):
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1200,800",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        f"http://localhost:8000/bai-hoc-so.html?grade=11&lesson={lesson_id}"
    ])
    await asyncio.sleep(3.5)

    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    payload = {"id": msg_id, "method": method, "params": params or {}}
                    await ws.send_str(json.dumps(payload))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id:
                                return data

                await send("Runtime.enable")

                eval_res = await send("Runtime.evaluate", {
                    "expression": '''
                        (function() {
                            const errElements = document.querySelectorAll('mjx-merr, [data-mjx-error]');
                            const res = [];
                            errElements.forEach(el => {
                                const container = el.closest('mjx-container');
                                res.push({
                                    errorMsg: el.innerText || el.getAttribute('data-mjx-error'),
                                    texSource: container ? (container.getAttribute('tex') || container.getAttribute('aria-label') || container.innerText) : el.innerText,
                                    surroundingText: el.parentElement ? el.parentElement.innerText : ''
                                });
                            });
                            return res;
                        })()
                    ''',
                    "returnByValue": True
                })

                res_val = eval_res.get("result", {}).get("value") or eval_res.get("result", {}).get("result", {}).get("value")
                print(f"\n[{lesson_id}] EXACT FAILED TEX STRINGS:")
                print(json.dumps(res_val, indent=2, ensure_ascii=False))

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

async def main():
    await get_exact_math_errors("11-c1-b3")
    await get_exact_math_errors("11-c1-b4")

asyncio.run(main())
