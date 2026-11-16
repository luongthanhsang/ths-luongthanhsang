import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b2"
PORT = 9289

async def check():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(3.0)

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
                                return data.get("result", {})
                        elif msg.type in (aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR):
                            break

                await send("Runtime.enable")
                await asyncio.sleep(2.0)

                # Test isolation of 1a
                res_iso = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                        const cardA = document.querySelector('[data-step-block="sec-1"] [data-subkey="a"]');
                        const cardB = document.querySelector('[data-step-block="sec-1"] [data-subkey="b"]');
                        return JSON.stringify({
                            activeStep: window.currentActiveStepId,
                            activeSub: window.currentActiveSubKey,
                            cardA_display: cardA ? cardA.style.display : 'not_found',
                            cardB_display: cardB ? cardB.style.display : 'not_found'
                        });
                    })()
                    """,
                    "returnByValue": True
                })
                print("1A ISOLATION:", res_iso.get("result", {}).get("value"))

                # Test isolation of 1b
                res_iso_b = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'b');
                        const cardA = document.querySelector('[data-step-block="sec-1"] [data-subkey="a"]');
                        const cardB = document.querySelector('[data-step-block="sec-1"] [data-subkey="b"]');
                        return JSON.stringify({
                            activeStep: window.currentActiveStepId,
                            activeSub: window.currentActiveSubKey,
                            cardA_display: cardA ? cardA.style.display : 'not_found',
                            cardB_display: cardB ? cardB.style.display : 'not_found'
                        });
                    })()
                    """,
                    "returnByValue": True
                })
                print("1B ISOLATION:", res_iso_b.get("result", {}).get("value"))

                # Test hierarchical tick
                res_tick = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const completed = window.getLessonCompletedSteps('11-c1-b2');
                        completed.clear(); // Reset

                        // Mark only 1a
                        window.markStepCompleted('sec-1', 'a');
                        const sec1DoneAfter1a = completed.has('sec-1');

                        // Mark 1b
                        window.markStepCompleted('sec-1', 'b');
                        const sec1DoneAfterBoth = completed.has('sec-1');

                        return JSON.stringify({
                            has1a: completed.has('sec-1-a'),
                            has1b: completed.has('sec-1-b'),
                            sec1DoneAfter1a: sec1DoneAfter1a,
                            sec1DoneAfterBoth: sec1DoneAfterBoth
                        });
                    })()
                    """,
                    "returnByValue": True
                })
                print("HIERARCHICAL TICK:", res_tick.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(check())
