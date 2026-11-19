# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio
import aiohttp

PORT = 9340

async def print_math_items_b4():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1200,800",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4"
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
                            const mathList = MathJax.startup.document.math;
                            const errs = [];
                            for (let m of mathList) {
                                if (m.typesetRoot && m.typesetRoot.querySelector('mjx-merror')) {
                                    errs.push({
                                        math: m.math,
                                        display: m.display
                                    });
                                }
                            }
                            return errs;
                        })()
                    ''',
                    "returnByValue": True
                })

                val = eval_res.get("result", {}).get("result", {}).get("value")
                print("FAILED MATH STRINGS IN B4:")
                print(json.dumps(val, indent=2, ensure_ascii=False))

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

asyncio.run(print_math_items_b4())
