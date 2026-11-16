# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, subprocess
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"

async def test_tick():
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9250",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9250/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                expr = """
                (() => {
                    // Clear previous localStorage
                    localStorage.removeItem('ths_sang_completed_steps_11-c1-b1');

                    // 1. Tick 1a
                    window.markStepCompleted('sec-1', 'a');
                    const parentMid = document.querySelector('.tree-node[data-step-id="sec-1"]');
                    const isParentMid = parentMid ? parentMid.classList.contains('is-completed') : false;

                    // 2. Tick 1b
                    window.markStepCompleted('sec-1', 'b');
                    const parentAfter = document.querySelector('.tree-node[data-step-id="sec-1"]');
                    const isParentAfter = parentAfter ? parentAfter.classList.contains('is-completed') : false;

                    const item1a = document.querySelector('.tree-sub-item[data-step-id="sec-1"][data-subkey="a"]');
                    const item1b = document.querySelector('.tree-sub-item[data-step-id="sec-1"][data-subkey="b"]');
                    const is1aDone = item1a ? item1a.classList.contains('is-completed') : false;
                    const is1bDone = item1b ? item1b.classList.contains('is-completed') : false;

                    return { isParentMid, is1aDone, is1bDone, isParentAfter };
                })()
                """
                await ws.send_json({"id": 1, "method": "Runtime.evaluate", "params": {"expression": expr, "returnByValue": True}})
                resp = await ws.receive_json()
                print("TICK TEST RESULT:", json.dumps(resp.get("result", {}).get("result", {}).get("value"), indent=2))

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(test_tick())
