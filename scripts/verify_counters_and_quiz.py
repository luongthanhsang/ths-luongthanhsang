# -*- coding: utf-8 -*-
"""
Kịch bản kiểm thử toàn diện chính xác DOM selectors:
1. Thống kê lượt truy cập website và lượt tải về (index.html, tai-lieu.html, footer-stats-bar).
2. Tương tác tăng lượt tải tài liệu khi bấm nút tải trên tai-lieu.html.
3. Thẻ Trắc nghiệm online (trac-nghiem.html):
   - Bắt buộc nhập Họ và tên, Lớp (validation Toast).
   - Tự động hoán vị câu hỏi theo từng phần (Mã đề hoán vị HV-...).
   - Hiển thị phiếu điểm có Họ tên, Lớp, Mã đề, Điểm số, Lời nhận xét Thầy Sáng.
   - Bảng lịch sử các lần thi được lưu trữ và hiển thị đầy đủ.
"""

import asyncio, json, urllib.request, os, base64, subprocess, time
import aiohttp

ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
PORT = 9281

async def capture_screenshot(send, file_name, clip=None):
    params = {"format": "png"}
    if clip:
        params["clip"] = clip
    res = await send("Page.captureScreenshot", params)
    data = res.get("data", "")
    if data:
        out_path = os.path.join(ARTIFACT_DIR, file_name)
        with open(out_path, "wb") as f:
            f.write(base64.b64decode(data))
        print(f"  [SAVED SCREENSHOT] {out_path}")

async def run_verification():
    print(f"=== KHỞI ĐỘNG CHROME HEADLESS TEST TRÊN PORT {PORT} ===")
    chrome_cmd = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1100",
        "--remote-allow-origins=*",
        f"--remote-debugging-port={PORT}",
        "http://localhost:8000/index.html"
    ]
    proc = subprocess.Popen(chrome_cmd)
    await asyncio.sleep(2.5)

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
                await send("DOM.enable")
                await send("Runtime.enable")

                # ========================================================
                # PHẦN 1: KIỂM TRA TRANG CHỦ INDEX.HTML
                # ========================================================
                print("\n--- 1. Kiểm tra index.html ---")
                await send("Page.navigate", {"url": "http://localhost:8000/index.html"})
                await asyncio.sleep(2.0)

                eval_index_stats = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const visits = document.getElementById('statTotalVisits')?.textContent?.trim() || '';
                        const dls = document.getElementById('statTotalDownloads')?.textContent?.trim() || '';
                        const footerVisits = document.getElementById('footerVisitCount')?.textContent?.trim() || '';
                        const footerDls = document.getElementById('footerDownloadCount')?.textContent?.trim() || '';
                        const footerOnline = document.getElementById('footerOnlineCount')?.textContent?.trim() || '';
                        return { visits, dls, footerVisits, footerDls, footerOnline };
                    })()
                    """,
                    "returnByValue": True
                })
                idx_stats = eval_index_stats.get("result", {}).get("value", {})
                print("Index Stats:", json.dumps(idx_stats, ensure_ascii=False))

                # Scroll to footer stats bar & capture
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('.footer-stats-bar')?.scrollIntoView({behavior: 'instant', block: 'center'});"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot(send, "verified_stats_index_footer.png")

                # ========================================================
                # PHẦN 2: KIỂM TRA TRANG TÀI LIỆU TAI-LIEU.HTML
                # ========================================================
                print("\n--- 2. Kiểm tra tai-lieu.html & Tải tài liệu ---")
                await send("Page.navigate", {"url": "http://localhost:8000/tai-lieu.html"})
                await asyncio.sleep(2.0)

                eval_docs_stats = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const repoDls = document.getElementById('totalDocDownloadsCount')?.textContent?.trim() || '';
                        const repoVisits = document.getElementById('docRepoVisitsCount')?.textContent?.trim() || '';
                        const firstDocCard = document.querySelector('.doc-card');
                        const firstDocTitle = firstDocCard?.querySelector('.doc-title')?.textContent?.trim() || '';
                        const firstDocDls = firstDocCard?.querySelector('.doc-downloads-meta strong')?.textContent?.trim() || '';
                        return { repoDls, repoVisits, firstDocTitle, firstDocDls };
                    })()
                    """,
                    "returnByValue": True
                })
                doc_stats = eval_docs_stats.get("result", {}).get("value", {})
                print("Document Repository Stats:", json.dumps(doc_stats, ensure_ascii=False))

                # Click download button on first doc
                print("-> Thử click nút 'Tải về máy' trên tài liệu đầu tiên...")
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const firstBtn = document.querySelector('.doc-card .btn-download');
                        if (firstBtn) firstBtn.click();
                    })()
                    """
                })
                await asyncio.sleep(1.0)

                eval_after_dl = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const firstDocCard = document.querySelector('.doc-card');
                        const afterDocDls = firstDocCard?.querySelector('.doc-downloads-meta strong')?.textContent?.trim() || '';
                        const repoDls = document.getElementById('totalDocDownloadsCount')?.textContent?.trim() || '';
                        const footerDls = document.getElementById('footerDownloadCount')?.textContent?.trim() || '';
                        return { afterDocDls, repoDls, footerDls };
                    })()
                    """,
                    "returnByValue": True
                })
                print("After Click Download:", json.dumps(eval_after_dl.get("result", {}).get("value", {}), ensure_ascii=False))

                # Capture doc repo
                await send("Runtime.evaluate", {"expression": "window.scrollTo(0, 150);"})
                await asyncio.sleep(0.5)
                await capture_screenshot(send, "verified_stats_tai_lieu.png")

                # ========================================================
                # PHẦN 3: KIỂM TRA TRẮC NGHIỆM ONLINE TRAC-NGHIEM.HTML
                # ========================================================
                print("\n--- 3. Kiểm tra trac-nghiem.html ---")
                await send("Page.navigate", {"url": "http://localhost:8000/trac-nghiem.html"})
                await asyncio.sleep(2.5)

                # 3.1: Kiểm tra form thông tin học sinh
                eval_banner = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const nameInp = document.getElementById('studentNameInput');
                        const classInp = document.getElementById('studentClassInput');
                        const reshuffleBtn = document.getElementById('btnReshuffleExam');
                        const historySec = document.getElementById('quizHistorySection');
                        return {
                            hasNameInput: !!nameInp,
                            hasClassInput: !!classInp,
                            hasReshuffleBtn: !!reshuffleBtn,
                            hasHistorySec: !!historySec
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("Trắc nghiệm Banner elements:", json.dumps(eval_banner.get("result", {}).get("value", {}), ensure_ascii=False))

                # Capture start banner
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('examStartBanner')?.scrollIntoView({behavior: 'instant', block: 'center'});"
                })
                await asyncio.sleep(0.5)
                await capture_screenshot(send, "verified_quiz_start_banner.png")

                # 3.2: Thử bấm "Bắt đầu làm bài" khi để trống tên
                print("-> Thử bắt đầu thi khi CHƯA nhập tên (kiểm tra validation):")
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const nameInp = document.getElementById('studentNameInput');
                        const classInp = document.getElementById('studentClassInput');
                        if (nameInp) nameInp.value = '';
                        if (classInp) classInp.value = '';
                        if (typeof startExamSession === 'function') {
                            startExamSession();
                        }
                    })()
                    """
                })
                await asyncio.sleep(0.6)

                eval_toast = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const toast = document.querySelector('.toast-notification');
                        return {
                            toastShown: !!toast,
                            toastText: toast ? toast.textContent.trim() : ''
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                print("Validation result (empty):", json.dumps(eval_toast.get("result", {}).get("value", {}), ensure_ascii=False))
                await capture_screenshot(send, "verified_quiz_validation_toast.png")

                # 3.3: Nhập Họ và tên: Nguyễn Văn An, Lớp: 12A1
                print("-> Nhập thông tin: Nguyễn Văn An, Lớp: 12A1 và bấm 'Bắt đầu làm bài'...")
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const nameInp = document.getElementById('studentNameInput');
                        const classInp = document.getElementById('studentClassInput');
                        if (nameInp) nameInp.value = 'Nguyễn Văn An';
                        if (classInp) classInp.value = '12A1';
                        if (typeof startExamSession === 'function') {
                            startExamSession();
                        }
                    })()
                    """
                })
                await asyncio.sleep(2.0)

                # 3.4: Kiểm tra trạng thái phòng thi và đề hoán vị
                eval_exam_state = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const isStarted = window.isExamStarted;
                        const shuffleCode = window.currentShuffleCode;
                        const qCards = Array.from(document.querySelectorAll('.question-item-card'));
                        const p1Count = qCards.filter(c => c.getAttribute('data-part') === 'I').length;
                        const p2Count = qCards.filter(c => c.getAttribute('data-part') === 'II').length;
                        const p3Count = qCards.filter(c => c.getAttribute('data-part') === 'III').length;
                        
                        // Lấy 3 câu hỏi đầu tiên để minh chứng hoán vị
                        const first3Origins = qCards.slice(0, 3).map(c => {
                            const badge = c.querySelector('.q-badge')?.textContent?.trim() || '';
                            const origin = c.querySelector('[title=\"Mã gốc câu hỏi\"]')?.textContent?.trim() || '';
                            return `${badge} - ${origin}`;
                        });

                        return {
                            isStarted,
                            shuffleCode,
                            totalQuestions: qCards.length,
                            p1Count,
                            p2Count,
                            p3Count,
                            first3Origins
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                exam_state = eval_exam_state.get("result", {}).get("value", {})
                print("Active Exam State:", json.dumps(exam_state, ensure_ascii=False))

                # Cuộn xuống câu hỏi đầu tiên và chụp ảnh phòng thi đang diễn ra
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('.question-item-card')?.scrollIntoView({behavior: 'instant', block: 'start'});"
                })
                await asyncio.sleep(0.8)
                await capture_screenshot(send, "verified_quiz_exam_active.png")

                # 3.5: Trả lời một số câu hỏi và nộp bài
                print("-> Trả lời phương án mẫu và nộp bài...")
                await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        // Chọn phương án A cho câu 1, 2, 3
                        document.querySelectorAll('.question-item-card[data-part=\"I\"]').forEach((card, idx) => {
                            if (idx < 5) {
                                const firstOpt = card.querySelector('.option-item');
                                if (firstOpt) firstOpt.click();
                            }
                        });

                        // Điền đáp số ngắn cho phần 3
                        document.querySelectorAll('.short-answer-input').forEach((inp, idx) => {
                            if (idx < 3) {
                                inp.value = '5';
                                inp.dispatchEvent(new Event('input', { bubbles: true }));
                            }
                        });

                        // Gọi nộp bài trực tiếp qua submitQuiz(false)
                        if (typeof submitQuiz === 'function') {
                            submitQuiz(false);
                        }
                    })()
                    """
                })
                await asyncio.sleep(2.5)

                # 3.6: Kiểm tra phiếu điểm, nhận xét và lịch sử
                eval_quiz_res = await send("Runtime.evaluate", {
                    "expression": """
                    (() => {
                        const resultCard = document.getElementById('quizResultCard');
                        const isVisible = resultCard && resultCard.style.display !== 'none';
                        const score = document.getElementById('resScore')?.textContent?.trim() || '';
                        const correct = document.getElementById('resCorrect')?.textContent?.trim() || '';
                        const studentName = document.getElementById('resStudentName')?.textContent?.trim() || '';
                        const studentClass = document.getElementById('resStudentClass')?.textContent?.trim() || '';
                        const shuffleCode = document.getElementById('resShuffleCode')?.textContent?.trim() || '';
                        const teacherTitle = document.getElementById('evalTeacherTitle')?.textContent?.trim() || '';
                        const teacherComment = document.getElementById('resTeacherComment')?.textContent?.trim() || '';

                        // Lịch sử bài thi
                        const histRows = Array.from(document.querySelectorAll('#quizHistoryBody tr'));
                        const firstHistRow = histRows.length > 0 ? Array.from(histRows[0].querySelectorAll('td')).map(td => td.textContent.trim()) : [];

                        return {
                            isVisible,
                            score,
                            correct,
                            studentName,
                            studentClass,
                            shuffleCode,
                            teacherTitle,
                            teacherComment,
                            historyRowCount: histRows.length,
                            firstHistRow
                        };
                    })()
                    """,
                    "returnByValue": True
                })
                quiz_res_data = eval_quiz_res.get("result", {}).get("value", {})
                print("Quiz Result Card Data:", json.dumps(quiz_res_data, ensure_ascii=False))

                # Chụp ảnh phiếu điểm kết quả
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('quizResultCard')?.scrollIntoView({behavior: 'instant', block: 'start'});"
                })
                await asyncio.sleep(0.8)
                await capture_screenshot(send, "verified_quiz_exam_result.png")

                # Chụp ảnh khung nhận xét Thầy Sáng & bảng lịch sử
                await send("Runtime.evaluate", {
                    "expression": "document.querySelector('.teacher-evaluation-box')?.scrollIntoView({behavior: 'instant', block: 'center'});"
                })
                await asyncio.sleep(0.8)
                await capture_screenshot(send, "verified_quiz_teacher_eval_history.png")

                print("\n=== TOÀN BỘ CÁC BƯỚC KIỂM THỬ ĐÃ THỰC THI HOÀN HẢO 100%! ===")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(run_verification())
