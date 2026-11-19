# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, asyncio, os, base64
import aiohttp

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 9333
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def test_lesson(lesson_id, filename_prefix):
    target_url = f"http://localhost:8000/bai-hoc-so.html?grade=11&lesson={lesson_id}"
    print(f"\n==========================================")
    print(f"Testing URL: {target_url}")

    proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        target_url
    ])
    await asyncio.sleep(4.0)

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

                await send("Page.enable")
                await send("Runtime.enable")
                await asyncio.sleep(2.0)

                eval_res = await send("Runtime.evaluate", {
                    "expression": '''
                        (function() {
                            const mathJaxErrors = document.querySelectorAll('mjx-merr, [data-mjx-error], .MathJax_Error');
                            const errorTexts = Array.from(mathJaxErrors).map(el => el.innerText || el.getAttribute('title') || el.outerHTML);
                            
                            const bodyText = document.body.innerText;
                            const suspicious = [];
                            const patterns = [
                                'dfracpi', 'anx', 'cotx', 'mathbbR', 'mathbbZ', 'lesinx', 'lecosx',
                                '\\dfrac', '\\sin', '\\cos', '\\tan', '\\cot', 'Extra \\left', 'missing \\right'
                            ];
                            for (const p of patterns) {
                                if (bodyText.includes(p)) {
                                    suspicious.push(p);
                                }
                            }

                            const sidebarItems = Array.from(document.querySelectorAll('.tree-item-label')).map(el => el.innerText.trim());

                            return {
                                lessonTitle: document.title,
                                mathJaxErrorCount: mathJaxErrors.length,
                                errorTexts: errorTexts,
                                suspiciousTermsInText: suspicious,
                                sidebarItems: sidebarItems
                            };
                        })()
                    ''',
                    "returnByValue": True
                })

                val = eval_res.get("value", {})
                print(f"[{lesson_id}] Result:")
                print(json.dumps(val, indent=2, ensure_ascii=False))

                # Screenshot full page
                shot = await send("Page.captureScreenshot", {"format": "png"})
                if shot and shot.get("data"):
                    out_path = os.path.join(ARTIFACT_DIR, f"{filename_prefix}_page.png")
                    with open(out_path, "wb") as f:
                        f.write(base64.b64decode(shot["data"]))
                    print(f"Saved screenshot: {out_path}")
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

async def main():
    await test_lesson("11-c1-b3", "test_live_b11_3")
    await test_lesson("11-c1-b4", "test_live_b11_4")

if __name__ == "__main__":
    asyncio.run(main())
