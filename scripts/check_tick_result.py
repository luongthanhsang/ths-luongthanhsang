import asyncio, json, urllib.request, os, base64, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b2"
PORT = 9291

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

                # Test hierarchical tick via localStorage
                res_tick = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const key = 'ths_sang_completed_steps_11-c1-b2';
                        localStorage.removeItem(key);

                        // Mark only 1a
                        window.markStepCompleted('sec-1', 'a');
                        const after1a = JSON.parse(localStorage.getItem(key) || '[]');
                        const sec1DoneAfter1a = after1a.includes('sec-1');
                        const sec1aDone = after1a.includes('sec-1-a');

                        // Mark 1b
                        window.markStepCompleted('sec-1', 'b');
                        const after1b = JSON.parse(localStorage.getItem(key) || '[]');
                        const sec1DoneAfterBoth = after1b.includes('sec-1');
                        const sec1bDone = after1b.includes('sec-1-b');

                        return JSON.stringify({
                            after1a: after1a,
                            sec1aDone: sec1aDone,
                            sec1DoneAfter1a: sec1DoneAfter1a,
                            afterBoth: after1b,
                            sec1bDone: sec1bDone,
                            sec1DoneAfterBoth: sec1DoneAfterBoth
                        });
                    })()
                    """,
                    "returnByValue": True
                })
                print("TICK RESULT:", res_tick.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(check())
