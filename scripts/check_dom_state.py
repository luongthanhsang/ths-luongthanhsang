# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, subprocess, time, aiohttp

PORT = 9297
TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b4"

async def main():
    cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        f"--remote-debugging-port={PORT}",
        TARGET_URL
    ]
    proc = subprocess.Popen(cmd)
    await asyncio.sleep(3.5)
    try:
        res = urllib.request.urlopen(f"http://localhost:{PORT}/json")
        pages = json.loads(res.read())
        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(pages[0]['webSocketDebuggerUrl']) as ws:
                # Evaluate DOM state
                await ws.send_str(json.dumps({
                    'id': 1,
                    'method': 'Runtime.evaluate',
                    'params': {
                        'expression': '''
                        (() => {
                            return {
                                currentGrade: window.currentGrade,
                                currentLessonId: window.currentLessonId,
                                heading: document.querySelector('#lessonHeading')?.innerText,
                                structureHeader: document.querySelector('.lesson-structure-header')?.innerText,
                                sectionsCount: document.querySelectorAll('.lesson-section-card').length,
                                subSectionsCount: document.querySelectorAll('.subsection-card').length
                            };
                        })()
                        ''',
                        'returnByValue': True
                    }
                }))
                msg = await ws.receive()
                data = json.loads(msg.data)
                print("DOM State:", json.dumps(data.get("result", {}).get("result", {}).get("value"), indent=2, ensure_ascii=False))
    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(main())
