import re

def update_trac_nghiem(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update examStartBanner
    old_start_banner = """          <!-- BẢNG KHỞI ĐỘNG VÀ NÚT BẮT ĐẦU LÀM BÀI (NỀN XANH, CHỮ VÀNG ĐỒNG) -->
          <div class="exam-start-banner" id="examStartBanner">
            <div class="start-banner-card">
              <div class="start-banner-badge"><i class="fa-solid fa-graduation-cap"></i> CHUẨN BỊ LÀM BÀI THI</div>
              <h3 class="start-banner-title" id="startBannerTitle">Đề Thi Tốt Nghiệp THPT Năm 2026 - Môn Toán (Mã Đề 0101)</h3>
              <p class="start-banner-desc" id="startBannerDesc">
                Học sinh vui lòng chuẩn bị giấy nháp, bút viết và máy tính cầm tay trước khi bắt đầu. Khi em đã sẵn sàng, hãy bấm nút <strong>"Bắt đầu làm bài"</strong> bên dưới để hệ thống kích hoạt tính giờ đếm ngược!
              </p>
              <div class="start-banner-meta" id="startBannerMeta">
                <span><i class="fa-solid fa-clock"></i> Thời gian: <strong id="startMetaTime">90 phút</strong></span>
                <span><i class="fa-solid fa-list-check"></i> Số lượng: <strong id="startMetaCount">22 câu</strong></span>
                <span><i class="fa-solid fa-award"></i> Thang điểm: <strong>10.0 điểm</strong></span>
                <span><i class="fa-solid fa-user-tie"></i> Biên soạn: <strong>ThS. Lương Thanh Sáng</strong></span>
              </div>
              <div class="start-banner-action">
                <button type="button" class="btn-start-exam" id="btnStartExam" onclick="startExamSession()">
                  <i class="fa-solid fa-play"></i> BẮT ĐẦU LÀM BÀI
                </button>
              </div>
            </div>
          </div>"""

    new_start_banner = """          <!-- BẢNG KHỞI ĐỘNG VÀ NÚT BẮT ĐẦU LÀM BÀI (NỀN XANH, CHỮ VÀNG ĐỒNG) -->
          <div class="exam-start-banner" id="examStartBanner">
            <div class="start-banner-card">
              <div class="start-banner-badge"><i class="fa-solid fa-graduation-cap"></i> CHUẨN BỊ LÀM BÀI THI TRỰC TUYẾN</div>
              <h3 class="start-banner-title" id="startBannerTitle">Đề Thi Tốt Nghiệp THPT Năm 2026 - Môn Toán (Mã Đề 0101)</h3>
              <p class="start-banner-desc" id="startBannerDesc">
                Học sinh vui lòng chuẩn bị giấy nháp, bút viết và máy tính cầm tay trước khi bắt đầu. Khi em đã sẵn sàng, hãy bấm nút <strong>"Bắt đầu làm bài"</strong> bên dưới để hệ thống kích hoạt tính giờ đếm ngược!
              </p>

              <!-- FORM NHẬP THÔNG TIN HỌC SINH DỰ THI -->
              <div class="student-info-form-card" id="studentInfoFormCard">
                <div class="student-info-form-title">
                  <i class="fa-solid fa-id-card-clip"></i> Thông tin học sinh dự thi:
                </div>
                <div class="student-inputs-grid">
                  <div class="student-input-field">
                    <label for="studentNameInput"><i class="fa-solid fa-user-pen"></i> Họ và tên học sinh <span class="req-star">*</span>:</label>
                    <input type="text" id="studentNameInput" class="student-text-input" placeholder="Ví dụ: Nguyễn Văn An" autocomplete="name" required>
                  </div>
                  <div class="student-input-field">
                    <label for="studentClassInput"><i class="fa-solid fa-chalkboard-user"></i> Lớp học <span class="req-star">*</span>:</label>
                    <input type="text" id="studentClassInput" class="student-text-input" placeholder="Ví dụ: 12A1 (hoặc 11B2, 10A3...)" autocomplete="off" required>
                  </div>
                </div>
                <div class="student-info-note">
                  <i class="fa-solid fa-circle-check"></i> Thông tin được lưu tự động để xuất phiếu điểm &amp; nhận xét sư phạm chính thức từ ThS. Lương Thanh Sáng.
                </div>
              </div>

              <div class="start-banner-meta" id="startBannerMeta">
                <span><i class="fa-solid fa-clock"></i> Thời gian: <strong id="startMetaTime">90 phút</strong></span>
                <span><i class="fa-solid fa-list-check"></i> Số lượng: <strong id="startMetaCount">22 câu</strong></span>
                <span><i class="fa-solid fa-award"></i> Thang điểm: <strong>10.0 điểm</strong></span>
                <span class="shuffle-badge-meta"><i class="fa-solid fa-shuffle"></i> Hoán vị đề: <strong id="startMetaShuffleCode">HV-101</strong></span>
              </div>

              <div class="start-banner-action" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
                <button type="button" class="btn-start-exam" id="btnStartExam" onclick="startExamSession()">
                  <i class="fa-solid fa-play"></i> BẮT ĐẦU LÀM BÀI
                </button>
                <button type="button" class="btn-reshuffle-exam" id="btnReshuffleExam" onclick="reshuffleCurrentExam()" title="Xáo trộn lại thứ tự câu hỏi và phương án để làm đề hoán vị mới">
                  <i class="fa-solid fa-shuffle"></i> Đổi đề hoán vị mới
                </button>
              </div>
            </div>
          </div>"""

    if old_start_banner in content:
        content = content.replace(old_start_banner, new_start_banner)
        print(f"Updated examStartBanner in {file_path}")
    else:
        print(f"Warning: old_start_banner not found in {file_path}")

    # 2. Update quizResultCard
    old_result_card = """          <!-- Kết quả chấm điểm (Ẩn khi đang làm bài, hiện ra sau khi nộp bài) -->
          <div class="quiz-result-card" id="quizResultCard">
            <div class="result-badge-icon" id="resultIcon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 class="result-title" id="resultTitle">Hoàn Thành Bài Thi!</h3>
            <p class="result-message" id="resultMessage">Thầy Sáng chúc mừng em đã hoàn thành bài kiểm tra trực tuyến.</p>

            <div class="result-stats-row">
              <div class="result-stat-box">
                <div class="result-stat-val score" id="resScore">0.0</div>
                <div class="result-stat-lbl">Điểm số (Thang 10)</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val correct" id="resCorrect">0 / 21</div>
                <div class="result-stat-lbl">Số câu đúng</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val wrong" id="resWrong">0 / 21</div>
                <div class="result-stat-lbl">Số câu sai</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val" style="color: var(--primary-600);" id="resTimeUsed">00:00</div>
                <div class="result-stat-lbl">Thời gian làm bài</div>
              </div>
            </div>

            <div class="result-actions">
              <button class="btn btn-primary" id="btnToggleAllSolutions">
                <i class="fa-solid fa-list-check"></i> Xem đáp án & Lời giải chi tiết
              </button>
              <button class="btn btn-secondary" id="btnRetakeQuiz" style="color: var(--primary-800); border-color: var(--primary-300);">
                <i class="fa-solid fa-arrow-rotate-right"></i> Làm lại bài thi
              </button>
            </div>
          </div>"""

    new_result_card = """          <!-- Kết quả chấm điểm (Ẩn khi đang làm bài, hiện ra sau khi nộp bài) -->
          <div class="quiz-result-card" id="quizResultCard">
            <div class="result-badge-icon" id="resultIcon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 class="result-title" id="resultTitle">Hoàn Thành Bài Thi!</h3>

            <!-- THẺ THÔNG TIN HỌC SINH ĐÃ LÀM BÀI -->
            <div class="student-result-pill" id="studentResultPill">
              <span class="student-name-tag"><i class="fa-solid fa-user-graduate"></i> Học sinh: <strong id="resStudentName">Nguyễn Văn An</strong></span>
              <span class="student-class-tag"><i class="fa-solid fa-chalkboard"></i> Lớp: <strong id="resStudentClass">12A1</strong></span>
              <span class="student-exam-tag"><i class="fa-solid fa-file-signature"></i> Đề thi: <strong id="resExamCode">0110</strong> (<span id="resShuffleCode">HV-101</span>)</span>
              <span class="student-date-tag"><i class="fa-regular fa-clock"></i> <span id="resDateFormatted">18/11/2026</span></span>
            </div>

            <!-- KHUNG NHẬN XÉT SƯ PHẠM CỦA THS. LƯƠNG THANH SÁNG -->
            <div class="teacher-evaluation-box" id="teacherEvaluationBox">
              <div class="eval-box-header">
                <div class="eval-teacher-avatar">
                  <i class="fa-solid fa-chalkboard-user"></i>
                </div>
                <div>
                  <h4 class="eval-teacher-title" id="evalTeacherTitle"><i class="fa-solid fa-award"></i> NHẬN XÉT CỦA THS. LƯƠNG THANH SÁNG</h4>
                  <span class="eval-teacher-sub">Tổ trưởng chuyên môn Toán • THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang</span>
                </div>
              </div>
              <div class="eval-box-content" id="resTeacherComment">
                "Thầy Sáng chúc mừng em đã hoàn thành bài thi!..."
              </div>
            </div>

            <div class="result-stats-row">
              <div class="result-stat-box">
                <div class="result-stat-val score" id="resScore">0.0</div>
                <div class="result-stat-lbl">Điểm số (Thang 10)</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val correct" id="resCorrect">0 / 22</div>
                <div class="result-stat-lbl">Số câu đúng</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val wrong" id="resWrong">0 / 22</div>
                <div class="result-stat-lbl">Số câu sai</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-val" style="color: var(--primary-600);" id="resTimeUsed">00:00</div>
                <div class="result-stat-lbl">Thời gian làm bài</div>
              </div>
            </div>

            <div class="result-actions" style="margin-bottom: 20px;">
              <button class="btn btn-primary" id="btnToggleAllSolutions">
                <i class="fa-solid fa-list-check"></i> Xem đáp án &amp; Lời giải chi tiết
              </button>
              <button class="btn btn-secondary" id="btnRetakeQuiz" style="color: var(--primary-800); border-color: var(--primary-300);">
                <i class="fa-solid fa-arrow-rotate-right"></i> Làm lại bài thi (Đề hoán vị mới)
              </button>
              <button class="btn btn-accent" id="btnPrintResultBtn" onclick="printQuizResult()" style="background: linear-gradient(135deg, #059669, #10b981); color: #fff; border: none;">
                <i class="fa-solid fa-print"></i> In phiếu kết quả / Tải PDF
              </button>
            </div>

            <!-- BẢNG LỊCH SỬ CÁC LẦN THI CỦA HỌC SINH -->
            <div class="quiz-history-card" id="quizHistoryCard">
              <div class="history-card-header">
                <div class="history-card-title">
                  <i class="fa-solid fa-clock-rotate-left" style="color: #0284c7;"></i>
                  <span>Lịch sử các lần làm bài thi của em:</span>
                </div>
                <button type="button" class="btn-clear-history" onclick="clearQuizHistory()" title="Xóa toàn bộ lịch sử thi trên máy này">
                  <i class="fa-solid fa-trash-can"></i> Xóa lịch sử
                </button>
              </div>
              <div class="history-table-wrapper" id="historyTableWrapper">
                <!-- Render by JS -->
              </div>
            </div>

          </div>"""

    if old_result_card in content:
        content = content.replace(old_result_card, new_result_card)
        print(f"Updated quizResultCard in {file_path}")
    else:
        print(f"Warning: old_result_card not found in {file_path}")

    # 3. Add footer-stats-bar in footer
    footer_target = """      <div class="footer-bottom">"""
    footer_stats_code = """      <!-- Thanh thống kê lượt truy cập & tải về -->
      <div class="footer-stats-bar">
        <span><i class="fa-solid fa-users" style="color: #38bdf8;"></i> Lượt truy cập web: <strong id="footerVisitCount" style="color: #fef08a; font-size: 1.05rem;">52.480</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-cloud-arrow-down" style="color: #4ade80;"></i> Lượt tải tài liệu: <strong id="footerDownloadCount" style="color: #86efac; font-size: 1.05rem;">37.390</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-circle" style="color: #22c55e; font-size: 0.65rem; margin-right: 4px;"></i> Đang trực tuyến: <strong id="footerOnlineCount" style="color: #fff;">24</strong></span>
      </div>

      <div class="footer-bottom">"""

    if footer_target in content and 'footer-stats-bar' not in content:
        content = content.replace(footer_target, footer_stats_code)
        print(f"Added footer-stats-bar in {file_path}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved {file_path} successfully!")

update_trac_nghiem('trac-nghiem.html')
update_trac_nghiem('BAN_CAP_NHAT_NETLIFY/trac-nghiem.html')
