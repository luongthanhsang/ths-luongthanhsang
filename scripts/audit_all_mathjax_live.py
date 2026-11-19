import asyncio, json, urllib.request, subprocess, time, aiohttp

LESSONS = ["11-c1-b1", "11-c1-b2", "11-c1-b3", "11-c1-b4"]

async def audit_lesson(lesson_id):
    url = f"http://localhost:8000/bai-hoc-so.html?grade=11&lesson={lesson_id}"
    print(f"\n=======================================================")
    print(f"AUDITING LESSON: {lesson_id}")
    print(f"URL: {url}")
    print(f"=======================================================")
    
    proc = subprocess.Popen([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--remote-allow-origins=*",
        "--remote-debugging-port=9252",
        url
    ])
    await asyncio.sleep(2)
    
    try:
        res = urllib.request.urlopen("http://localhost:9252/json")
        pages = json.loads(res.read())
        ws_url = [p for p in pages if p.get("type") == "page"][0]["webSocketDebuggerUrl"]
        
        async with aiohttp.ClientSession() as session:
            async with session.ws_connect(ws_url) as ws:
                async def eval_js(expr):
                    await ws.send_json({'id': 1, 'method': 'Runtime.evaluate', 'params': {
                        'expression': expr,
                        'returnByValue': True,
                        'awaitPromise': True
                    }})
                    msg = await ws.receive_json()
                    return msg.get('result', {}).get('result', {}).get('value')

                # Wait for MathJax to initialize
                await eval_js("new Promise(r => setTimeout(r, 1500))")
                
                # Get all section / subsection IDs from window.currentLessonData
                nav_info = await eval_js("""
                    (() => {
                        const lesson = window.currentLessonData;
                        if (!lesson) return { error: 'No currentLessonData' };
                        const subs = [];
                        if (lesson.sections) {
                            lesson.sections.forEach(s => {
                                if (s.subsections && s.subsections.length) {
                                    s.subsections.forEach(sub => subs.push({ type: 'sub', id: sub.id, title: sub.title }));
                                } else {
                                    subs.push({ type: 'sec', id: s.id, title: s.title });
                                }
                            });
                        }
                        return { subs, totalQuizzes: (lesson.quizzes || []).length };
                    })()
                """)
                print("Nav info:", nav_info)

                all_errors = []

                # Audit each section/subsection
                subs = nav_info.get('subs', [])
                for sub in subs:
                    sub_id = sub['id']
                    # Switch to this section
                    check_res = await eval_js(f"""
                        (async () => {{
                            // Switch section
                            if (typeof window.selectSubsection === 'function') {{
                                window.selectSubsection('{sub_id}');
                            }} else if (typeof window.switchSection === 'function') {{
                                window.switchSection('{sub_id}');
                            }}
                            if (window.MathJax && window.MathJax.typesetPromise) {{
                                await window.MathJax.typesetPromise();
                            }}
                            await new Promise(r => setTimeout(r, 400));
                            
                            // Check errors in document
                            const errEls = Array.from(document.querySelectorAll('.MathJax_Error, [data-mjx-error], .merror, mjx-merror'));
                            const errors = errEls.map(el => el.innerText || el.textContent);
                            const text = document.body.innerText;
                            const textErrs = [];
                            if (text.includes('Extra \\\\left') || text.includes('missing \\\\right') || text.includes('Extra \\left')) {{
                                textErrs.push('Found Extra left/missing right in visible text!');
                            }}
                            return {{ sub_id: '{sub_id}', errors, textErrs, hasText: text.length }};
                        }})()
                    """)
                    if check_res.get('errors') or check_res.get('textErrs'):
                        print(f"  [ERROR in {sub_id}]: {check_res}")
                        all_errors.append((sub_id, check_res))
                    else:
                        pass # clean

                # Audit Quiz tab
                quiz_res = await eval_js("""
                    (async () => {
                        // Click Quiz tab
                        const quizBtn = document.querySelector('button[data-bs-target=\"#trac-nghiem\"], a[href=\"#trac-nghiem\"], [data-tab=\"trac-nghiem\"], #quiz-tab');
                        if (quizBtn) quizBtn.click();
                        if (typeof window.renderQuiz === 'function') window.renderQuiz();
                        if (window.MathJax && window.MathJax.typesetPromise) {
                            await window.MathJax.typesetPromise();
                        }
                        await new Promise(r => setTimeout(r, 600));
                        
                        const errEls = Array.from(document.querySelectorAll('#trac-nghiem .MathJax_Error, #trac-nghiem [data-mjx-error], #trac-nghiem .merror, #trac-nghiem mjx-merror'));
                        const errors = errEls.map(el => el.innerText || el.textContent);
                        const text = document.querySelector('#trac-nghiem') ? document.querySelector('#trac-nghiem').innerText : '';
                        const textErrs = [];
                        if (text.includes('Extra \\\\left') || text.includes('missing \\\\right') || text.includes('Extra \\left')) {
                            textErrs.push('Found Extra left/missing right in Quiz text!');
                        }
                        return { tab: 'quiz', errors, textErrs, textSample: text.slice(0, 150) };
                    })()
                """)
                print(f"Quiz audit for {lesson_id}:", quiz_res)
                if quiz_res.get('errors') or quiz_res.get('textErrs'):
                    all_errors.append(('quiz', quiz_res))

                print(f"SUMMARY FOR {lesson_id}: {len(all_errors)} errors found.")
                for err in all_errors:
                    print(f"  -> {err}")
    finally:
        proc.kill()

async def main():
    for lid in LESSONS:
        await audit_lesson(lid)

asyncio.run(main())
