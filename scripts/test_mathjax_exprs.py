# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio
import aiohttp

PORT = 9335

async def test_latex_exprs():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=800,600",
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

                # Test several expressions in MathJax
                eval_res = await send("Runtime.evaluate", {
                    "expression": '''
                        (async function() {
                            const tests = [
                                "$$\\\\left\\\\{ x \\\\in \\\\mathbb{R} \\\\right\\\\}$$",
                                "$$\\\\left\\\\{ x \\\\middle| y \\\\right\\\\}$$",
                                "$$\\\\left\\\\{ \\\\dfrac{\\\\pi}{2} \\\\right\\\\}$$",
                                "$$D = \\\\mathbb{R} \\\\setminus \\\\left\\\\{ \\\\dfrac{\\\\pi}{2} + k\\\\pi \\\\right\\\\}$$",
                                "$$D = \\\\mathbb{R} \\\\setminus \\\\{ \\\\dfrac{\\\\pi}{2} + k\\\\pi \\\\mid k \\\\in \\\\mathbb{Z} \\\\}$$"
                            ];
                            const results = [];
                            const div = document.createElement("div");
                            document.body.appendChild(div);
                            for (const t of tests) {
                                div.innerHTML = t;
                                try {
                                    await MathJax.typesetPromise([div]);
                                    const err = div.querySelector("mjx-merr, [data-mjx-error]");
                                    results.push({ latex: t, success: !err, err: err ? err.innerText : null });
                                } catch (e) {
                                    results.push({ latex: t, success: false, err: e.message });
                                }
                            }
                            return results;
                        })()
                    ''',
                    "returnByValue": True,
                    "awaitPromise": True
                })

                val = eval_res.get("result", {}).get("result", {}).get("value")
                print("MathJax Test Results:")
                print(json.dumps(val, indent=2, ensure_ascii=False))

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

asyncio.run(test_latex_exprs())
