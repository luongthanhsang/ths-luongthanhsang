import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

TARGET_URL = "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c1-b1"

async def test():
    # Start headless Chrome on port 9225
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9225",
        TARGET_URL
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

    try:
        res = urllib.request.urlopen("http://localhost:9225/json")
        pages = json.loads(res.read())
        target = [p for p in pages if p.get("type") == "page"][0]
        ws_url = target["webSocketDebuggerUrl"]
        print("Connected to ws:", ws_url)

        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url, max_msg_size=30*1024*1024) as ws:
                msg_id = 0
                async def send(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    await ws.send_str(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                    while True:
                        msg = await ws.receive()
                        if msg.type == aiohttp.WSMsgType.TEXT:
                            data = json.loads(msg.data)
                            if data.get("id") == msg_id:
                                return data.get("result", {})

                await asyncio.sleep(2)

                # Inspect Sidebar tree structure
                tree_eval = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const title = document.querySelector('.structure-lesson-title')?.innerText || '';
                        const nodes = Array.from(document.querySelectorAll('.tree-node, .tree-sub-item')).map(el => {
                            const isSub = el.classList.contains('tree-sub-item');
                            const label = (el.querySelector('.tree-item-label, .tree-sub-title')?.innerText || '').trim();
                            const letter = (el.querySelector('.tree-sub-letter')?.innerText || '').trim();
                            const secNum = (el.querySelector('.sec-num-circle')?.innerText || '').trim();
                            return {
                                isSub,
                                stepId: el.dataset.stepId || '',
                                subkey: el.dataset.subkey || '',
                                label: isSub ? `${letter} ${label}` : (secNum ? `Mục ${secNum}. ${label}` : label),
                                isDone: el.classList.contains('is-completed')
                            };
                        });
                        return { title, nodes };
                    })()
                    """,
                    "returnByValue": True
                })
                tree_res = tree_eval.get("result", {}).get("value", {})
                print("=== SIDEBAR STRUCTURE ===")
                print("Title:", tree_res.get("title"))
                for idx, n in enumerate(tree_res.get("nodes", [])):
                    indent = "    " if n["isSub"] else "  "
                    print(f"{indent}[{idx+1}] {n['label']} (stepId={n.get('stepId')}, subkey={n.get('subkey')})")

                # Test Hierarchical Ticking logic
                tick_test = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        // Find sub 1a and click its tick icon
                        const sub1a = document.querySelector('.tree-sub-item[data-subkey="a"][data-step-id="sec-1"] .tree-sub-status-icon');
                        if (sub1a) sub1a.click();
                        
                        const parentSec1_after_1a = document.querySelector('.tree-node[data-step-id="sec-1"]')?.classList.contains('is-completed');
                        const sub1a_after = document.querySelector('.tree-sub-item[data-subkey="a"][data-step-id="sec-1"]')?.classList.contains('is-completed');

                        // Find sub 1b and click its tick icon
                        const sub1b = document.querySelector('.tree-sub-item[data-subkey="b"][data-step-id="sec-1"] .tree-sub-status-icon');
                        if (sub1b) sub1b.click();

                        const parentSec1_after_both = document.querySelector('.tree-node[data-step-id="sec-1"]')?.classList.contains('is-completed');
                        const sub1b_after = document.querySelector('.tree-sub-item[data-subkey="b"][data-step-id="sec-1"]')?.classList.contains('is-completed');

                        // Find sec-2 (which has no subsections) and click its tick icon
                        const sec2Icon = document.querySelector('.tree-node[data-step-id="sec-2"] .tree-status-icon');
                        if (sec2Icon) sec2Icon.click();
                        const sec2_after = document.querySelector('.tree-node[data-step-id="sec-2"]')?.classList.contains('is-completed');

                        return {
                            parentSec1_after_1a,
                            sub1a_after,
                            parentSec1_after_both,
                            sub1b_after,
                            sec2_after
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                tick_res = tick_test.get("result", {}).get("value", {})
                print("\n=== HIERARCHICAL TICKING TEST ===")
                print("After ticking 1a only:")
                print("  - Sub-item 1a is completed:", tick_res.get("sub1a_after"))
                print("  - Parent Mục 1 is completed (should be FALSE):", tick_res.get("parentSec1_after_1a"))
                print("After ticking 1b as well:")
                print("  - Sub-item 1b is completed:", tick_res.get("sub1b_after"))
                print("  - Parent Mục 1 is completed (should be TRUE):", tick_res.get("parentSec1_after_both"))
                print("Mục 2 (no subsections) ticked directly (should be TRUE):", tick_res.get("sec2_after"))

                # Test Luyện tập 1 Table
                lt1_test = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        window.activateStep('sec-1', 'a');
                        const table = document.querySelector('.sgk-exercise-table-wrap table');
                        const rows = table ? table.querySelectorAll('tbody tr').length : 0;
                        const radios = table ? table.querySelectorAll('input[type="radio"]').length : 0;
                        const btn = document.querySelector('.btn-check-table-lt1');
                        if (btn) { if (btn.onclick) btn.onclick(); else btn.click(); }
                        const feedbackVisible = document.getElementById('lt1-feedback-box')?.style.display !== 'none';
                        return { hasTable: !!table, rows, radios, feedbackVisible };
                    })()
                    """,
                    "returnByValue": True
                })
                lt1_res = lt1_test.get("result", {}).get("value", {})
                print("\n=== LUYỆN TẬP 1 TABLE TEST ===")
                print("Has Table:", lt1_res.get("hasTable"))
                print("Rows (should be 4):", lt1_res.get("rows"))
                print("Radios (should be 12):", lt1_res.get("radios"))
                print("Feedback Box visible after click:", lt1_res.get("feedbackVisible"))

                # Test Part IV MC Answer Permutation
                quiz_test = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const lesson = window.LESSON_10_C1_B1_DATA;
                        const mc = lesson?.examFormatPractice?.part1MultipleChoice || [];
                        const correctLetters = mc.map(q => {
                            const opt = q.options[q.correctIndex] || '';
                            return opt.trim().substring(0, 1);
                        });
                        return { correctLetters };
                    })()
                    """,
                    "returnByValue": True
                })
                quiz_res = quiz_test.get("result", {}).get("value", {})
                print("\n=== PART IV MC ANSWER PERMUTATION ===")
                print("Correct Answers (expected ['B', 'D', 'A', 'C', 'B']):", quiz_res.get("correctLetters"))

                # Capture Screenshot
                shot_res = await send("Page.captureScreenshot", {"format": "png"})
                shot_data = shot_res.get("data", "")
                if shot_data:
                    with open("C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/verified_lesson_10_1.png", "wb") as f:
                        f.write(base64.b64decode(shot_data))
                    print("\nSaved screenshot to verified_lesson_10_1.png")

    finally:
        proc.kill()

asyncio.run(test())
