import asyncio, json, urllib.request, subprocess, aiohttp

PORT = 9284

async def test_page_load():
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
                await asyncio.sleep(2.0)

                eval_info = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        let res = {};
                        res.hasExams = typeof EXAMS_DATABASE !== 'undefined';
                        res.currentExamId = window.currentExamId;
                        res.activeQuestionsLen = window.activeQuizQuestions ? window.activeQuizQuestions.length : -1;
                        res.isExamStarted = window.isExamStarted;
                        
                        // Thử gọi thủ công loadQuestionsForMode('all') nếu chưa có câu hỏi
                        if (res.activeQuestionsLen <= 0 && typeof loadQuestionsForMode === 'function') {
                            try {
                                loadQuestionsForMode('all');
                                res.afterManualLoad = window.activeQuizQuestions ? window.activeQuizQuestions.length : -1;
                            } catch(e) {
                                res.loadError = e.message;
                            }
                        }

                        res.domCardCount = document.querySelectorAll('.question-item-card').length;
                        return res;
                    })()
                    """,
                    "returnByValue": True
                })
                print("EVAL INFO:", eval_info.get("result", {}).get("value"))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(test_page_load())
