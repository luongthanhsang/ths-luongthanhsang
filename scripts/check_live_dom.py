# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"

async def check_dom():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1400,1050",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9254",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9254/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    cur = msg_id
                    await ws.send_json({"id": cur, "method": method, "params": params or {}})
                    while True:
                        msg = await ws.receive_json()
                        if msg.get("id") == cur:
                            return msg.get("result")

                async def eval_js(expr):
                    r = await send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
                    return r.get("result", {}).get("value")

                await send("Runtime.enable")
                await send("Page.enable")
                await asyncio.sleep(2.5)

                info = await eval_js("""
                (() => {
                    const l = window.CURRENT_LESSON_DATA || window.LESSON_DATA || {};
                    const b11 = window.LESSON_11_C1_B1_DATA || {};
                    const ef = b11.examFormatPractice || {};
                    return {
                        current_id: l.id,
                        b11_id: b11.id,
                        b11_title: b11.title,
                        has_ef: !!b11.examFormatPractice,
                        mc_len: (ef.part1MultipleChoice || []).length,
                        tf_len: (ef.part2TrueFalse || []).length,
                        sa_len: (ef.part3ShortAnswer || []).length,
                        hook_cps: (b11.hook && b11.hook.checkpoints || []).length,
                        has_audio_cache: typeof window.B11_1_AUDIO_CACHE !== 'undefined',
                        audio_keys_count: Object.keys(window.B11_1_AUDIO_CACHE || {}).length,
                        rendered_sections: document.querySelectorAll('.lesson-section').length,
                        exam_wrap: !!document.getElementById('examFormatPracticeSection'),
                        mc_dom_count: document.querySelectorAll('.exam-list-mc .exam-item-card').length,
                        tf_dom_count: document.querySelectorAll('.exam-list-tf .exam-item-card').length,
                        sa_dom_count: document.querySelectorAll('.exam-list-sa .exam-item-card').length
                    };
                })()
                """)
                print("DOM & DATA REPORT:")
                print(json.dumps(info, indent=2))
    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(check_dom())
