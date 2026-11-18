import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9286

async def test_fetch_script():
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

                await send("Runtime.enable")
                await send("Page.enable")
                await asyncio.sleep(1.5)

                eval_fetch = await send("Runtime.evaluate", {
                    "expression": """
                    (async () => {
                        try {
                            const res = await fetch('js/script.js?v=' + Date.now());
                            const text = await res.text();
                            
                            // Thử eval mã script.js để xem có lỗi cú pháp không
                            let evalError = null;
                            try {
                                new Function(text);
                            } catch(err) {
                                evalError = err.message + ' at ' + err.stack;
                            }

                            return {
                                status: res.status,
                                len: text.length,
                                evalError: evalError
                            };
                        } catch(e) {
                            return { error: e.message };
                        }
                    })()
                    """,
                    "awaitPromise": True,
                    "returnByValue": True
                })
                print("EVAL FETCH & PARSE:", eval_fetch.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(test_fetch_script())
