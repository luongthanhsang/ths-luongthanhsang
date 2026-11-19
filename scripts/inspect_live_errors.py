# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio
import aiohttp

PORT = 9336

async def inspect_live_errors(lesson_id):
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
            async with session.ws_connect(ws_url) as ws:
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
                            const errors = document.querySelectorAll('mjx-merr, [data-mjx-error]');
                            const details = [];
                            errors.forEach((errEl, idx) => {
                                const parent = errEl.closest('.lesson-section-card, .hook-card, .tree-group-box, .modal-content, .card, body');
                                const formula = errEl.closest('mjx-container');
                                details.push({
                                    idx: idx,
                                    errorText: errEl.innerText || errEl.getAttribute('data-mjx-error'),
                                    formulaHtml: formula ? formula.outerHTML.substring(0, 300) : null,
                                    parentSnippet: parent ? parent.outerHTML.substring(0, 200).replace(/\\s+/g, ' ') : null
                                });
                            });
                            return details;
                        })()
                    ''',
                    "returnByValue": True
                })

                val = eval_res.get("result", {}).get("result", {}).get("value")
                print(f"[{lesson_id}] Live MathJax Errors Detail:")
                print(json.dumps(val, indent=2, ensure_ascii=False))

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

async def main():
    await inspect_live_errors("11-c1-b3")
    await inspect_live_errors("11-c1-b4")

asyncio.run(main())
