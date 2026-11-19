import asyncio, json, urllib.request, subprocess, aiohttp

async def check():
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9345",
        "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
    ])
    await asyncio.sleep(2.5)
    try:
        res = urllib.request.urlopen("http://localhost:9345/json")
        target = json.loads(res.read())[0]
        async with aiohttp.ClientSession() as s:
            async with s.ws_connect(target["webSocketDebuggerUrl"], max_msg_size=10*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id: return data.get("result", {})

                await send("Runtime.enable")
                await asyncio.sleep(2.0)

                # Open POI modal for poi-11-1-sec4b-2
                poi_open = await send("Runtime.evaluate", {
                    "expression": """
                        (async () => {
                            // Find POI data in window.LESSON_11_C1_B1_DATA
                            const b1 = window.LESSON_11_C1_B1_DATA;
                            let targetPoi = null;
                            b1.sections.forEach(s => {
                                (s.subsections || []).forEach(sub => {
                                    (sub.pois || []).forEach(p => {
                                        if (p.id === 'poi-11-1-sec4b-2') targetPoi = p;
                                    });
                                });
                            });
                            
                            if (targetPoi && typeof window.showPoiModal === 'function') {
                                window.showPoiModal(targetPoi);
                                if (window.MathJax && window.MathJax.typesetPromise) {
                                    await window.MathJax.typesetPromise();
                                }
                                return { opened: true, poiId: targetPoi.id };
                            }
                            return { opened: false, hasFunction: typeof window.showPoiModal === 'function', foundPoi: !!targetPoi };
                        })()
                    """,
                    "returnByValue": True,
                    "awaitPromise": True
                })
                print("POI modal open result:", poi_open.get("result", {}).get("value"))
                await asyncio.sleep(1.0)

                # Check MathJax errors in the modal
                modal_check = await send("Runtime.evaluate", {
                    "expression": """
                        (() => {
                            const modal = document.querySelector('.poi-modal, #poiModal, .modal.show, [id*=\"poi\"]');
                            const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror'));
                            const text = document.body.innerText;
                            const hasV10 = text.includes('VÍ DỤ 10');
                            const v10Idx = text.indexOf('VÍ DỤ 10');
                            const snippet = v10Idx !== -1 ? text.slice(v10Idx, v10Idx + 300) : null;
                            return {
                                errors: errEls.map(e => e.innerText || e.textContent),
                                hasV10,
                                snippet
                            };
                        })()
                    """,
                    "returnByValue": True
                })
                print("Modal MathJax check:", modal_check.get("result", {}).get("value"))
    finally:
        proc.kill()

asyncio.run(check())
