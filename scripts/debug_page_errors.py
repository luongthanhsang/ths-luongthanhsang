import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9278

async def debug_pages():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "http://localhost:8000/trac-nghiem.html"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.0)
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
                    await ws.send_str(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            d = json.loads(msg.data)
                            if d.get("id") == msg_id:
                                return d.get("result", {})

                # Listen to console
                await send("Console.enable")
                await send("Runtime.enable")
                await send("Page.enable")

                print("=== Checking console errors on trac-nghiem.html ===")
                eval_res = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        return {
                            hasExamsDB: typeof EXAMS_DATABASE !== 'undefined',
                            currentExamId: typeof currentExamId !== 'undefined' ? currentExamId : 'not defined',
                            banner: document.getElementById('examStartBanner')?.innerHTML?.slice(0, 200),
                            hasInitCounters: typeof initWebsiteCounters !== 'undefined'
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("JS Evaluation:", eval_res.get("result", {}).get("value"))

                # Check if there were JS runtime errors
                eval_errors = await send("Runtime.evaluate", {
                    "expression": "window.__errors || 'No custom errors array'",
                    "returnByValue": True
                })
                print("Errors:", eval_errors.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(debug_pages())
