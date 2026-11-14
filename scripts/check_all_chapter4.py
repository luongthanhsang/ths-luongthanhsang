import urllib.request
import json
import time
import subprocess
import asyncio
import aiohttp

lessons = [
    ("Bài 7", "10-c4-b7"),
    ("Bài 8", "10-c4-b8"),
    ("Bài 9", "10-c4-b9"),
    ("Bài 10", "10-c4-b10"),
    ("Bài 11", "10-c4-b11")
]

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--remote-debugging-port=9233",
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--user-data-dir=C:\\temp\\chrome_debug_check_all_2",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c4-b7"
]
proc = subprocess.Popen(cmd)
time.sleep(4)

try:
    resp = urllib.request.urlopen("http://localhost:9233/json")
    tabs = json.loads(resp.read().decode())
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    
    async def check_all():
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                await ws.send_json({"id": 1, "method": "Page.enable"})
                await ws.send_json({"id": 2, "method": "Runtime.enable"})
                
                for name, lid in lessons:
                    nav_url = f"http://localhost:8000/bai-hoc-so.html?grade=10&lesson={lid}"
                    await ws.send_json({"id": 10, "method": "Page.navigate", "params": {"url": nav_url}})
                    await asyncio.sleep(3)
                    
                    check_script = """
                    (() => {
                        const title = document.getElementById('lessonTitleText')?.innerText;
                        const mathErrors = document.body.innerHTML.includes('Math input error');
                        const undefinedTexts = document.body.innerText.includes('undefined');
                        const voiceBoxes = document.querySelectorAll('.teacher-voice-gold-box, .voice-box, .audio-player-card').length;
                        const poiMarkers = document.querySelectorAll('.gold-audio-poi-marker').length;
                        return { title, mathErrors, undefinedTexts, voiceBoxes, poiMarkers };
                    })()
                    """
                    await ws.send_json({"id": 20, "method": "Runtime.evaluate", "params": {"expression": check_script, "returnByValue": True}})
                    while True:
                        msg = await ws.receive()
                        data = json.loads(msg.data)
                        if data.get("id") == 20:
                            res = data["result"]["result"]["value"]
                            title = res.get("title")
                            m_err = res.get("mathErrors")
                            u_err = res.get("undefinedTexts")
                            v_box = res.get("voiceBoxes")
                            poi = res.get("poiMarkers")
                            print(f"[{name}] {title} => MathErrors: {m_err}, Undefined: {u_err}, VoiceBoxes: {v_box}, POIs: {poi}")
                            break
                            
    asyncio.run(check_all())
finally:
    proc.terminate()
