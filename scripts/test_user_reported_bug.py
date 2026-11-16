# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b2"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

async def main():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1400,1000",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9228",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(3.0)

    try:
        res = urllib.request.urlopen("http://localhost:9228/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]
        print("Connected to WebSocket:", ws_url)

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

                await send("Runtime.enable")
                await send("DOM.enable")
                await asyncio.sleep(2.0)

                # 1. Inspect Checkpoints in DOM
                check_pois_js = """
                (() => {
                    const pois = document.querySelectorAll('.sub-checkpoint-card');
                    const results = [];
                    pois.forEach(p => {
                        const title = p.querySelector('div')?.innerText || '';
                        const qtext = p.children[1]?.innerText || '';
                        const opts = Array.from(p.querySelectorAll('.btn-cp-opt')).map(b => ({
                            text: b.innerText,
                            correct: b.dataset.correct
                        }));
                        results.push({ title, qtext, opts });
                    });
                    return results;
                })()
                """
                r_pois = await send("Runtime.evaluate", {"expression": check_pois_js, "returnByValue": True})
                pois = r_pois.get("result", {}).get("value", [])
                print(f"\n[POI CHECKPOINTS] Found {len(pois)} interactive checkpoint cards:")
                for p in pois:
                    print(f"  - {p['title'][:60]}: {len(p['opts'])} options")
                    for opt in p['opts']:
                        if opt['correct'] == 'true':
                            print(f"      -> Correct Option: {opt['text'][:40]}")

                # 2. Inspect MC Questions in Part IV
                check_mc_js = """
                (() => {
                    const cards = document.querySelectorAll('.exam-item-card[data-qid^="mc-"]');
                    const results = [];
                    cards.forEach(c => {
                        const qid = c.dataset.qid;
                        const opts = Array.from(c.querySelectorAll('.btn-cp-opt')).map(b => ({
                            text: b.innerText,
                            correct: b.dataset.correct
                        }));
                        results.push({ qid, opts });
                    });
                    return results;
                })()
                """
                r_mc = await send("Runtime.evaluate", {"expression": check_mc_js, "returnByValue": True})
                mc_cards = r_mc.get("result", {}).get("value", [])
                print(f"\n[PART IV MCQS] Found {len(mc_cards)} MC questions:")
                for c in mc_cards:
                    print(f"  Question {c['qid']}:")
                    for o in c['opts']:
                        print(f"    {'[CORRECT]' if o['correct'] == 'true' else '[WRONG]'} {o['text'][:40]}")

                # 3. Simulate clicking Câu 1 (Option C) and Câu 2 (Option A)
                click_test_js = """
                (() => {
                    // Click Câu 1 - Option C (index 2)
                    const c1Opts = document.querySelectorAll('#card-mc-10-2-1 .btn-cp-opt');
                    if (c1Opts.length >= 3) {
                        c1Opts[2].click(); // Option C
                    }
                    
                    // Click Câu 2 - Option A (index 0)
                    const c2Opts = document.querySelectorAll('#card-mc-10-2-2 .btn-cp-opt');
                    if (c2Opts.length >= 1) {
                        c2Opts[0].click(); // Option A
                    }

                    // Check classes after click
                    const c1C = c1Opts[2];
                    const c2A = c2Opts[0];
                    return {
                        c1_clicked_is_correct: c1C ? c1C.classList.contains('selected-correct') : false,
                        c1_clicked_is_wrong: c1C ? c1C.classList.contains('selected-wrong') : false,
                        c2_clicked_is_correct: c2A ? c2A.classList.contains('selected-correct') : false,
                        c2_clicked_is_wrong: c2A ? c2A.classList.contains('selected-wrong') : false
                    };
                })()
                """
                r_click = await send("Runtime.evaluate", {"expression": click_test_js, "returnByValue": True})
                click_res = r_click.get("result", {}).get("value", {})
                print(f"\n[CLICK TEST RESULTS]:")
                print(f"  Câu 1 Option C: selected-correct={click_res.get('c1_clicked_is_correct')}, selected-wrong={click_res.get('c1_clicked_is_wrong')}")
                print(f"  Câu 2 Option A: selected-correct={click_res.get('c2_clicked_is_correct')}, selected-wrong={click_res.get('c2_clicked_is_wrong')}")

                # Scroll into view and capture screenshot of Part IV
                await send("Runtime.evaluate", {"expression": "document.getElementById('card-mc-10-2-1')?.scrollIntoView({behavior: 'instant', block: 'center'});"})
                await asyncio.sleep(1.0)
                shot1 = await send("Page.captureScreenshot", {"format": "png"})
                p1_path = os.path.join(ARTIFACT_DIR, "verified_part4_fixed_green.png")
                with open(p1_path, "wb") as f:
                    f.write(base64.b64decode(shot1["data"]))
                print(f"Saved Part IV screenshot: {p1_path}")

                # Scroll into view and capture screenshot of Checkpoint 1 (Hook POI)
                await send("Runtime.evaluate", {"expression": "document.getElementById('poi-inline-poi-10-2-hook-1')?.scrollIntoView({behavior: 'instant', block: 'center'});"})
                await asyncio.sleep(1.0)
                # Also click correct option of hook checkpoint
                await send("Runtime.evaluate", {"expression": """
                (() => {
                    const hookOpts = document.querySelectorAll('#poi-inline-poi-10-2-hook-1 .btn-cp-opt');
                    if (hookOpts.length >= 3) hookOpts[2].click();
                })()
                """})
                await asyncio.sleep(0.8)
                shot2 = await send("Page.captureScreenshot", {"format": "png"})
                p2_path = os.path.join(ARTIFACT_DIR, "verified_hook_checkpoint_green.png")
                with open(p2_path, "wb") as f:
                    f.write(base64.b64decode(shot2["data"]))
                print(f"Saved Hook Checkpoint screenshot: {p2_path}")

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except:
            proc.kill()

if __name__ == "__main__":
    asyncio.run(main())
