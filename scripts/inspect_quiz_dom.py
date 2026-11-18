import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9283

async def inspect_quiz_dom():
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
    await asyncio.sleep(2.5)

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
                await asyncio.sleep(2.0)

                eval_dom = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const container = document.getElementById('quizQuestionsContainer');
                        const children = container ? container.children.length : 0;
                        const firstChildTag = container && container.children[0] ? container.children[0].className : 'none';
                        const firstCard = document.querySelector('.question-item-card');
                        const anyCard = document.querySelector('[class*="question"]');
                        return {
                            containerExists: !!container,
                            childrenCount: children,
                            firstChildTag,
                            hasItemCard: !!firstCard,
                            anyCardClass: anyCard ? anyCard.className : 'none',
                            containerSnippet: container ? container.innerHTML.slice(0, 300) : ''
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("DOM Inspection on trac-nghiem.html:", eval_dom.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(inspect_quiz_dom())
