import re

# Read current script.js
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Locate section 3 start and retakeQuiz end
start_marker = '/* ==========================================================================\n   3. KHU VỰC THI TRẮC NGHIỆM ONLINE (QUIZ SYSTEM)'
end_marker = 'function retakeQuiz() {'

idx_start = text.find(start_marker)
idx_end_func = text.find(end_marker)
if idx_start == -1 or idx_end_func == -1:
    print("Markers not found! start:", idx_start, "end:", idx_end_func)
    exit(1)

# Find closing brace of retakeQuiz
idx_end = text.find('}', text.find('}', idx_end_func) + 1) + 1
old_quiz_block = text[idx_start:idx_end]
print(f"Old quiz block size: {len(old_quiz_block)} bytes")

new_quiz_block = """/* ==========================================================================
   3. KHU VỰC THI TRẮC NGHIỆM ONLINE (QUIZ SYSTEM) - TOÁN 11 & TOÁN 12
   CHUẨN THẦY SÁNG: LƯU THÔNG TIN HỌC SINH, NHẬN XÉT, TỰ ĐỘNG HOÁN VỊ ĐỀ
   ========================================================================== */
let currentExamId = (typeof DEFAULT_ACTIVE_EXAM_ID !== "undefined") ? DEFAULT_ACTIVE_EXAM_ID : "12_BGD_0110"; // Mặc định tải lên Đề Bộ GD&ĐT 2026 - Lần 2 (Mã đề 0110)
let currentQuizMode = "all";       // 'all', 'part1', 'part2', 'part3'
let currentShuffleCode = "HV-" + Math.floor(100 + Math.random() * 900); // Mã đề hoán vị ngẫu nhiên
let activeQuizQuestions = [];       // Danh sách câu hỏi đang làm (đã hoán vị)
let userAnswersPart1 = {};          // { "1": "C", "2": "A", ... }
let userAnswersPart2 = {};          // { "1": { "a": true, "b": false, ... }, ... }
let userAnswersPart3 = {};          // { "20": { text: "...", images: [] }, "21": ... }
let essayGradeResults = {};         // Lưu kết quả chấm tự luận tự động { 20: {...}, 21: {...} }
let quizTimerInterval = null;
let secondsRemaining = 90 * 60;
let totalQuizSeconds = 90 * 60;
let isQuizSubmitted = false;
let isShowingAllSolutions = false;
let isExamStarted = false;          // Trạng thái đã bấm "Bắt đầu làm bài" hay chưa

// Gắn các biến vào window để tiện truy cập toàn cục
window.currentExamId = currentExamId;
window.currentShuffleCode = currentShuffleCode;
window.isExamStarted = isExamStarted;
window.activeQuizQuestions = activeQuizQuestions;

// Thuật toán Fisher-Yates xáo trộn mảng ngẫu nhiên độc lập
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Deep clone câu hỏi để không ảnh hưởng dữ liệu gốc
function cloneQuestion(q) {
  const copy = JSON.parse(JSON.stringify(q));
  copy.origId = q.id;
  copy.origPart = q.part;
  return copy;
}

// Hàm chuẩn bị đề thi hoán vị tự động theo từng phần độc lập
function prepareShuffledQuestions(exam, mode) {
  currentShuffleCode = "HV-" + Math.floor(100 + Math.random() * 900);
  window.currentShuffleCode = currentShuffleCode;

  // 1. Hoán vị Phần I & hoán vị phương án A, B, C, D của từng câu
  let p1 = (exam.part1 || []).map(cloneQuestion);
  p1 = shuffleArray(p1);
  p1.forEach(q => {
    if (Array.isArray(q.options) && q.options.length === 4) {
      const origCorrect = q.correctAnswer;
      const origCorrectOpt = q.options.find(o => o.id === origCorrect);
      const origCorrectText = origCorrectOpt ? origCorrectOpt.text : "";

      const shuffledOptions = shuffleArray(q.options);
      const labels = ["A", "B", "C", "D"];
      let newCorrect = origCorrect;

      shuffledOptions.forEach((opt, oIdx) => {
        const newLabel = labels[oIdx];
        if (opt.text === origCorrectText) {
          newCorrect = newLabel;
        }
        opt.id = newLabel;
      });

      q.options = shuffledOptions;
      q.correctAnswer = newCorrect;
    }
  });

  // 2. Hoán vị Phần II (Đúng / Sai)
  let p2 = (exam.part2 || []).map(cloneQuestion);
  p2 = shuffleArray(p2);

  // 3. Hoán vị Phần III (Trả lời ngắn / Tự luận)
  let p3 = (exam.part3 || []).map(cloneQuestion);
  p3 = shuffleArray(p3);

  // Lọc theo chế độ thi
  let selected = [];
  if (mode === "part1") {
    selected = p1;
  } else if (mode === "part2") {
    selected = p2;
  } else if (mode === "part3") {
    selected = p3;
  } else {
    selected = [...p1, ...p2, ...p3];
  }

  // Đánh số thứ tự hiển thị tuần tự 1 -> N
  selected.forEach((q, idx) => {
    q.displayNum = idx + 1;
  });

  return { p1, p2, p3, selected };
}

function initQuizSystem() {
  const quizContainer = document.getElementById("quizQuestionsContainer");
  if (!quizContainer) return; // Chỉ khởi động khi đang ở trang trắc nghiệm

  // Khôi phục thông tin học sinh đã lưu trước đó nếu có
  const savedName = localStorage.getItem("ths_sang_student_name") || "";
  const savedClass = localStorage.getItem("ths_sang_student_class") || "";
  const nameInp = document.getElementById("studentNameInput");
  const classInp = document.getElementById("studentClassInput");
  if (nameInp && savedName) nameInp.value = savedName;
  if (classInp && savedClass) classInp.value = savedClass;

  updateModeButtonsLabels();
  loadQuestionsForMode(currentQuizMode);
  setupQuizModeButtons();
  renderQuizHistoryTable();

  // Nút nộp bài
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.onclick = () => confirmAndSubmitQuiz();
  }

  // Nút xóa lựa chọn
  const btnReset = document.getElementById("btnResetCurrent");
  if (btnReset) {
    btnReset.onclick = () => resetCurrentAnswers();
  }

  // Nút xem lời giải chi tiết
  const btnToggleSolutions = document.getElementById("btnToggleAllSolutions");
  if (btnToggleSolutions) {
    btnToggleSolutions.onclick = () => toggleAllSolutions();
  }

  // Nút làm lại bài thi
  const btnRetake = document.getElementById("btnRetakeQuiz");
  if (btnRetake) {
    btnRetake.onclick = () => retakeQuiz();
  }
}

// Chuyển đổi giữa các bộ đề thi (Toán 11 & Toán 12)
window.switchExam = function(examId) {
  if (typeof EXAMS_DATABASE === "undefined" || !EXAMS_DATABASE[examId]) return;

  if (!isQuizSubmitted && isExamStarted && (Object.keys(userAnswersPart1).length + Object.keys(userAnswersPart2).length + Object.keys(userAnswersPart3).length > 0)) {
    if (!confirm("Chuyển đề thi sẽ làm mới các câu trả lời của đề hiện tại. Em có chắc chắn muốn chuyển không?")) {
      return;
    }
  }

  currentExamId = examId;
  window.currentExamId = examId;
  const exam = EXAMS_DATABASE[examId];

  // Cập nhật trạng thái active của nút chọn đề
  document.querySelectorAll(".exam-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-exam") === examId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateModeButtonsLabels();
  loadQuestionsForMode(currentQuizMode);
  showToast(`Đã chọn: ${exam.config.title}`, "info");
};

// Cập nhật nhãn và mô tả trên các nút chế độ thi (Phần I, II, III)
function updateModeButtonsLabels() {
  const exam = (typeof EXAMS_DATABASE !== "undefined" && EXAMS_DATABASE[currentExamId]) 
               ? EXAMS_DATABASE[currentExamId] 
               : (typeof EXAM_11_GK1_TK5 !== "undefined" ? EXAM_11_GK1_TK5 : null);
  if (!exam) return;

  const btnAll = document.getElementById("modeBtnAll") || document.querySelector('.quiz-mode-btn[data-mode="all"]');
  const btnP1 = document.getElementById("modeBtnPart1") || document.querySelector('.quiz-mode-btn[data-mode="part1"]');
  const btnP2 = document.getElementById("modeBtnPart2") || document.querySelector('.quiz-mode-btn[data-mode="part2"]');
  const btnP3 = document.getElementById("modeBtnPart3") || document.querySelector('.quiz-mode-btn[data-mode="part3"]');

  if (currentExamId.startsWith("11_")) {
    if (btnAll) btnAll.innerHTML = '<i class="fa-solid fa-file-lines"></i> Cả đề thi (21 câu - 90 phút)';
    if (btnP1) btnP1.innerHTML = '<i class="fa-solid fa-list-check"></i> Phần I: Trắc nghiệm (16 câu - 4.0đ)';
    if (btnP2) btnP2.innerHTML = '<i class="fa-solid fa-square-check"></i> Phần II: Đúng / Sai (3 câu - 3.0đ)';
    if (btnP3) btnP3.innerHTML = '<i class="fa-solid fa-pen-nib"></i> Phần III: Tự luận (2 câu - 3.0đ)';
  } else {
    if (btnAll) btnAll.innerHTML = '<i class="fa-solid fa-file-lines"></i> Cả đề thi (22 câu - 90 phút)';
    if (btnP1) btnP1.innerHTML = '<i class="fa-solid fa-list-check"></i> Phần I: Trắc nghiệm (12 câu - 3.0đ)';
    if (btnP2) btnP2.innerHTML = '<i class="fa-solid fa-square-check"></i> Phần II: Đúng / Sai (4 câu - 4.0đ)';
    if (btnP3) btnP3.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Phần III: Trả lời ngắn (6 câu - 3.0đ)';
  }
}

// Cập nhật bảng thông báo khởi động và nút Bắt đầu làm bài
function updateExamStartBanner(exam, mode) {
  const banner = document.getElementById("examStartBanner");
  if (!banner) return;
  banner.classList.remove("started");

  const titleEl = document.getElementById("startBannerTitle");
  const timeEl = document.getElementById("startMetaTime");
  const countEl = document.getElementById("startMetaCount");
  const shuffleMetaEl = document.getElementById("startMetaShuffleCode");

  const timeMins = Math.round(totalQuizSeconds / 60);
  const countQ = activeQuizQuestions.length;

  if (titleEl) titleEl.textContent = exam.config.title;
  if (timeEl) timeEl.textContent = `${timeMins} phút`;
  if (countEl) countEl.textContent = `${countQ} câu`;
  if (shuffleMetaEl) shuffleMetaEl.textContent = currentShuffleCode;

  // Thêm trạng thái chờ vào vùng câu hỏi
  const container = document.getElementById("quizQuestionsContainer");
  if (container) container.classList.add("exam-waiting");

  const paletteBar = document.querySelector(".quiz-palette-bar");
  if (paletteBar) paletteBar.classList.add("exam-waiting");
}

// Kích hoạt làm bài khi học sinh nhấn "BẮT ĐẦU LÀM BÀI"
window.startExamSession = function() {
  const nameInput = document.getElementById("studentNameInput");
  const classInput = document.getElementById("studentClassInput");

  const studentName = (nameInput ? nameInput.value : "").trim();
  const studentClass = (classInput ? classInput.value : "").trim();

  if (!studentName) {
    showToast("⚠️ Em vui lòng nhập Họ và tên để Thầy Sáng ghi nhận kết quả nhé!", "warning");
    if (nameInput) {
      nameInput.focus();
      nameInput.style.borderColor = "#ef4444";
    }
    return;
  }

  if (!studentClass) {
    showToast("⚠️ Em vui lòng nhập Lớp của em (Ví dụ: 12A1) nhé!", "warning");
    if (classInput) {
      classInput.focus();
      classInput.style.borderColor = "#ef4444";
    }
    return;
  }

  if (nameInput) nameInput.style.borderColor = "";
  if (classInput) classInput.style.borderColor = "";

  localStorage.setItem("ths_sang_student_name", studentName);
  localStorage.setItem("ths_sang_student_class", studentClass);

  isExamStarted = true;
  window.isExamStarted = true;
  const banner = document.getElementById("examStartBanner");
  if (banner) banner.classList.add("started");

  const container = document.getElementById("quizQuestionsContainer");
  if (container) container.classList.remove("exam-waiting");

  const paletteBar = document.querySelector(".quiz-palette-bar");
  if (paletteBar) paletteBar.classList.remove("exam-waiting");

  const timerTextEl = document.querySelector(".quiz-timer-text");
  if (timerTextEl) timerTextEl.textContent = "Thời gian còn lại";

  startQuizTimer();
  showToast(`🚀 Chúc em ${studentName} (Lớp ${studentClass}) làm bài thi thật tốt! Mã đề hoán vị: ${currentShuffleCode}`, "info");

  // Cuộn mượt xuống câu hỏi đầu tiên
  const firstQ = document.querySelector(".question-item-card");
  if (firstQ) {
    firstQ.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Đổi đề thi hoán vị ngẫu nhiên mới
window.reshuffleCurrentExam = function() {
  loadQuestionsForMode(currentQuizMode);
  showToast(`🎲 Đã tạo đề hoán vị ngẫu nhiên mới (${currentShuffleCode})!`, "info");
};

// Cấu hình danh sách câu hỏi và thời gian theo từng chế độ
function loadQuestionsForMode(mode) {
  currentQuizMode = mode;
  userAnswersPart1 = {};
  userAnswersPart2 = {};
  userAnswersPart3 = {};
  essayGradeResults = {};
  isQuizSubmitted = false;
  isShowingAllSolutions = false;

  const exam = (typeof EXAMS_DATABASE !== "undefined" && EXAMS_DATABASE[currentExamId]) 
               ? EXAMS_DATABASE[currentExamId] 
               : (typeof EXAM_11_GK1_TK5 !== "undefined" ? EXAM_11_GK1_TK5 : null);
  if (!exam) return;

  const clockEl = document.getElementById("quizClock");
  const timeLabel = document.getElementById("quizTimeLabel");
  const titleDisplay = document.getElementById("quizTitleDisplay");

  // Chuẩn bị câu hỏi hoán vị ngẫu nhiên theo phần cho mỗi lần truy cập
  const shuffledData = prepareShuffledQuestions(exam, mode);
  activeQuizQuestions = shuffledData.selected;

  if (mode === "part1") {
    totalQuizSeconds = 45 * 60; // 45 phút
    const maxScoreP1 = currentExamId.startsWith("11_") ? "4.0 điểm" : "3.0 điểm";
    if (timeLabel) timeLabel.textContent = `45 phút (Phần I: ${activeQuizQuestions.length} câu trắc nghiệm - ${maxScoreP1} • ${currentShuffleCode})`;
    if (titleDisplay) titleDisplay.textContent = `Phần I: Câu Hỏi Trắc Nghiệm Nhiều Phương Án (${exam.config.title})`;
  } else if (mode === "part2") {
    totalQuizSeconds = 25 * 60; // 25 phút
    const maxScoreP2 = currentExamId.startsWith("11_") ? "3.0 điểm" : "4.0 điểm";
    if (timeLabel) timeLabel.textContent = `25 phút (Phần II: ${activeQuizQuestions.length} câu Đúng / Sai - ${maxScoreP2} • ${currentShuffleCode})`;
    if (titleDisplay) titleDisplay.textContent = `Phần II: Câu Hỏi Trắc Nghiệm Đúng / Sai (${exam.config.title})`;
  } else if (mode === "part3") {
    totalQuizSeconds = (currentExamId.startsWith("11_") ? 20 : 25) * 60;
    const p3Type = currentExamId.startsWith("11_") ? "Tự luận" : "Trả lời ngắn";
    if (timeLabel) timeLabel.textContent = `${currentExamId.startsWith("11_") ? "20" : "25"} phút (Phần III: ${activeQuizQuestions.length} câu ${p3Type} - 3.0 điểm • ${currentShuffleCode})`;
    if (titleDisplay) titleDisplay.textContent = `Phần III: Câu Hỏi ${p3Type} (${exam.config.title})`;
  } else {
    // Chế độ: Toàn bộ đề thi (Cả 3 phần)
    totalQuizSeconds = 90 * 60; // 90 phút chuẩn
    if (timeLabel) timeLabel.textContent = `90 phút (Cả đề thi gồm 3 phần - ${activeQuizQuestions.length} câu • ${currentShuffleCode})`;
    if (titleDisplay) titleDisplay.textContent = `${exam.config.title} [${currentShuffleCode}]`;
  }

  secondsRemaining = totalQuizSeconds;

  // Ẩn bảng kết quả cũ
  const resultCard = document.getElementById("quizResultCard");
  if (resultCard) resultCard.classList.remove("active");

  // Mở khóa nút nộp bài
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Nộp bài thi';
  }

  // Đặt lại đồng hồ đếm ngược và trạng thái chờ bấm "Bắt đầu làm bài"
  isExamStarted = false;
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  if (clockEl) {
    updateClockDisplay(clockEl, secondsRemaining);
    clockEl.classList.remove("warning");
  }
  const timerTextEl = document.querySelector(".quiz-timer-text");
  if (timerTextEl) timerTextEl.textContent = "Chờ bắt đầu";

  updateExamStartBanner(exam, mode);
  window.activeQuizQuestions = activeQuizQuestions;
  window.currentExamId = currentExamId;
  window.isExamStarted = isExamStarted;
  renderQuizQuestions();
  renderQuestionPalette();
  updateAnsweredCount();
}

function setupQuizModeButtons() {
  const modeBtns = document.querySelectorAll(".quiz-mode-btn");
  modeBtns.forEach(btn => {
    btn.onclick = () => {
      const mode = btn.getAttribute("data-mode");
      if (mode === currentQuizMode) return;

      if (!isQuizSubmitted && Object.keys(userAnswersPart1).length + Object.keys(userAnswersPart2).length + Object.keys(userAnswersPart3).length > 0) {
        if (!confirm("Chuyển chế độ sẽ làm mới các câu trả lời hiện tại. Em có chắc chắn muốn chuyển không?")) {
          return;
        }
      }

      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadQuestionsForMode(mode);
    };
  });
}

window.switchQuizMode = function(mode) {
  const btn = document.querySelector(`.quiz-mode-btn[data-mode="${mode}"]`);
  if (btn) btn.click();
};

// Đồng hồ đếm ngược
function startQuizTimer() {
  const clockDisplay = document.getElementById("quizClock");
  if (!clockDisplay) return;

  clearInterval(quizTimerInterval);
  updateClockDisplay(clockDisplay, secondsRemaining);

  quizTimerInterval = setInterval(() => {
    if (secondsRemaining <= 0) {
      clearInterval(quizTimerInterval);
      showToast("Đã hết thời gian làm bài! Hệ thống đang tự động nộp bài...", "warning");
      submitQuiz(true);
      return;
    }

    secondsRemaining--;
    updateClockDisplay(clockDisplay, secondsRemaining);

    // Cảnh báo khi còn dưới 3 phút
    if (secondsRemaining <= 180) {
      clockDisplay.classList.add("warning");
    } else {
      clockDisplay.classList.remove("warning");
    }
  }, 1000);
}

function updateClockDisplay(el, secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  el.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// Render danh sách câu hỏi
function renderQuizQuestions() {
  const container = document.getElementById("quizQuestionsContainer");
  if (!container) return;

  let html = "";
  let lastPart = null;

  activeQuizQuestions.forEach((q, index) => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const displayNum = q.displayNum || (index + 1);

    // Render Banner phân tách từng phần khi chuyển phần
    if (currentQuizMode === "all" && qPart !== lastPart) {
      lastPart = qPart;
      if (qPart === "I") {
        const count = currentExamId.startsWith("11_") ? "từ câu 1 đến câu 16" : "từ câu 1 đến câu 12";
        const score = currentExamId.startsWith("11_") ? "Tối đa 4,0 điểm" : "Tối đa 3,0 điểm";
        html += `
          <div class="quiz-part-banner">
            <h4>PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN</h4>
            <p>Thí sinh trả lời ${count}. Mỗi câu hỏi chỉ chọn một phương án đúng (Mỗi câu 0,25 điểm - ${score}). Đề thi đã được tự động hoán vị ngẫu nhiên câu hỏi và phương án.</p>
          </div>
        `;
      } else if (qPart === "II") {
        const count = currentExamId.startsWith("11_") ? "từ câu 17 đến câu 19" : "từ câu 1 đến câu 4";
        const score = currentExamId.startsWith("11_") ? "Tối đa 3,0 điểm" : "Tối đa 4,0 điểm";
        html += `
          <div class="quiz-part-banner" style="border-left-color: #38bdf8;">
            <h4>PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI</h4>
            <p>Thí sinh trả lời ${count}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng (Đ) hoặc sai (S) (${score}).</p>
          </div>
        `;
      } else if (qPart === "III") {
        if (currentExamId.startsWith("11_")) {
          html += `
            <div class="quiz-part-banner" style="border-left-color: #10b981;">
              <h4>PHẦN III. CÂU TỰ LUẬN</h4>
              <p>Thí sinh giải chi tiết câu 20 và 21 (Mỗi câu 1,5 điểm - Tối đa 3,0 điểm). Thí sinh có thể ghi nháp vào ô bên dưới, đối chiếu lời giải và barem từng bước của Thầy Sáng sau khi nộp bài.</p>
            </div>
          `;
        } else {
          html += `
            <div class="quiz-part-banner" style="border-left-color: #4ade80;">
              <h4>PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN</h4>
              <p>Thí sinh trả lời từ câu 1 đến câu 6. Thí sinh giải toán và điền đáp số vào ô trống (Mỗi câu 0,5 điểm - Tối đa 3,0 điểm).</p>
            </div>
          `;
        }
      }
    }

    // Card câu hỏi
    html += `
      <div class="question-item-card" id="question-card-${qKey}" data-part="${qPart}" data-qid="${q.id}">
        <div class="question-header">
          <span class="q-badge">
            <i class="fa-solid fa-circle-question"></i> Câu ${displayNum} (Phần ${qPart})
          </span>
          <span class="q-topic">${escapeHtml(q.topic || "")}</span>
          <span style="font-size: 0.76rem; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-weight: 600;" title="Mã gốc câu hỏi">
            <i class="fa-solid fa-shuffle"></i> Mã gốc: C${q.origId || q.id}
          </span>
        </div>

        <div class="question-text">${q.question.replace(/\\n/g, '<br>')}</div>

        ${q.svg ? `<div class="tikz-diagram-wrapper">${q.svg}</div>` : ""}

        <!-- Khung tương tác làm bài theo từng phần -->
        ${renderQuestionInputArea(q, qKey, qPart)}

        <!-- Khung lời giải chi tiết (ẩn mặc định, mở sau khi nộp bài) -->
        <div class="solution-box" id="solution-box-${qKey}">
          <div class="solution-box-title">
            <i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết từ ThS. Lương Thanh Sáng:
          </div>
          <div class="solution-body">
            ${q.explanation}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Cập nhật tổng số câu
  const totalCountEl = document.getElementById("totalQuestionsCount");
  if (totalCountEl) totalCountEl.textContent = activeQuizQuestions.length;

  // Khởi tạo các tiện ích tự luận (MathType, đính kèm ảnh, xem trước MathJax)
  activeQuizQuestions.forEach(q => {
    if (q.part === "III" && q.type === "essay") {
      renderEssayImageThumbnails(q.id);
      setupEssayPasteAndDrop(q.id);
      updateMathPreview(q.id);
    }
  });

  triggerMathJax();
}

function renderQuestionInputArea(q, qKey, qPart) {
  if (qPart === "I") {
    // Trắc nghiệm 4 lựa chọn A, B, C, D (đã hoán vị ngẫu nhiên)
    return `
      <div class="options-grid" id="options-group-${qKey}">
        ${q.options.map(opt => `
          <label class="option-label" data-qkey="${qKey}" data-opt="${opt.id}" onclick="selectPart1Option('${q.id}', '${opt.id}')">
            <input type="radio" name="opt_${qKey}" value="${opt.id}" class="option-radio">
            <span class="option-badge">${opt.id}</span>
            <span class="option-text">${opt.text}</span>
          </label>
        `).join("")}
      </div>
    `;
  } else if (qPart === "II") {
    // Trắc nghiệm Đúng / Sai (4 ý a, b, c, d)
    return `
      <div class="tf-table" id="tf-group-${qKey}">
        ${q.items.map(item => `
          <div class="tf-row" id="tf-row-${q.id}-${item.id}">
            <div class="tf-text"><strong>${item.id})</strong> ${item.text}</div>
            <div class="tf-actions">
              <button type="button" class="tf-btn" id="tf-btn-${q.id}-${item.id}-true" onclick="selectPart2Choice(${q.id}, '${item.id}', true)">
                <i class="fa-solid fa-check"></i> Đúng
              </button>
              <button type="button" class="tf-btn" id="tf-btn-${q.id}-${item.id}-false" onclick="selectPart2Choice(${q.id}, '${item.id}', false)">
                <i class="fa-solid fa-xmark"></i> Sai
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (qPart === "III") {
    if (q.type === "essay") {
      // Dành cho đề tự luận (Toán 11)
      const essayData = getEssayData(q.id);
      const savedText = essayData.text || "";
      return `
        <div class="essay-workspace" id="essay-group-${qKey}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
            <label class="essay-label" for="essay-input-${q.id}" style="margin-bottom: 0;">
              <i class="fa-solid fa-pen-nib"></i> Bài làm / Các bước giải của em:
            </label>
            <span style="font-size: 0.82rem; color: #475569; font-weight: 600;">
              <i class="fa-solid fa-award" style="color: var(--accent-gold);"></i> Thang điểm: <strong>${q.maxScore || 1.5} điểm</strong> (chia nhỏ đến 0,25đ)
            </span>
          </div>

          <!-- THANH TOÁN TỬ & KÝ HIỆU TOÁN HỌC (MATHTYPE / EQUATION TOOLBAR) -->
          <div class="math-editor-toolbar" id="math-toolbar-${q.id}">
            <div class="toolbar-header">
              <span class="toolbar-title"><i class="fa-solid fa-calculator"></i> Bảng ký hiệu Toán (MathType / Equation):</span>
              <div class="toolbar-tabs">
                <button type="button" class="toolbar-tab active" data-tab="common" onclick="switchMathTab(${q.id}, 'common')">Cơ bản</button>
                <button type="button" class="toolbar-tab" data-tab="trig" onclick="switchMathTab(${q.id}, 'trig')">Lượng giác</button>
                <button type="button" class="toolbar-tab" data-tab="algebra" onclick="switchMathTab(${q.id}, 'algebra')">Đại số</button>
                <button type="button" class="toolbar-tab" data-tab="geometry" onclick="switchMathTab(${q.id}, 'geometry')">Hình học & Tập hợp</button>
              </div>
            </div>
            <div class="toolbar-palette">
              <div class="symbol-group tab-group-common">
                <button type="button" class="math-sym-btn" title="Phân số" onclick="toggleFractionPopover(${q.id}, event)"><span style="font-weight:700;">a/b</span></button>
                <button type="button" class="math-sym-btn" title="Căn bậc hai" onclick="insertMathSymbol(${q.id}, '√(x)', 2, 3)"><span style="font-weight:700;">√x</span></button>
                <button type="button" class="math-sym-btn" title="Bình phương" onclick="insertMathSymbol(${q.id}, '²')"><span style="font-weight:700;">x²</span></button>
                <button type="button" class="math-sym-btn" title="Lũy thừa n" onclick="insertMathSymbol(${q.id}, 'ⁿ')"><span style="font-weight:700;">xⁿ</span></button>
                <button type="button" class="math-sym-btn" title="Số Pi" onclick="insertMathSymbol(${q.id}, 'π')"><span style="font-weight:700;">π</span></button>
                <button type="button" class="math-sym-btn" title="Cộng trừ" onclick="insertMathSymbol(${q.id}, '±')"><span style="font-weight:700;">±</span></button>
                <button type="button" class="math-sym-btn" title="Tương đương" onclick="insertMathSymbol(${q.id}, ' ⇔ ')"><span style="font-weight:700;">⇔</span></button>
                <button type="button" class="math-sym-btn" title="Suy ra" onclick="insertMathSymbol(${q.id}, ' ⇒ ')"><span style="font-weight:700;">⇒</span></button>
                <button type="button" class="math-sym-btn" title="k thuộc Z" onclick="insertMathSymbol(${q.id}, ' (k ∈ ℤ)')"><span style="font-weight:700;">k∈ℤ</span></button>
              </div>
            </div>
          </div>

          <textarea 
            id="essay-input-${q.id}" 
            class="essay-textarea" 
            placeholder="Nhập chi tiết lời giải hoặc các bước biến đổi của em tại đây..." 
            oninput="handleEssayTextInput(${q.id}, this.value)"
          >${escapeHtml(savedText)}</textarea>
        </div>
      `;
    } else {
      // Trả lời ngắn (Toán 12)
      return `
        <div class="short-answer-group" id="short-group-${qKey}">
          <label class="short-answer-label" for="short-input-${q.id}">
            <i class="fa-solid fa-keyboard"></i> Đáp số của em:
          </label>
          <div class="short-input-row">
            <input 
              type="text" 
              id="short-input-${q.id}" 
              class="short-answer-input" 
              placeholder="Nhập số nguyên hoặc số thập phân (Ví dụ: -2 hoặc 3,5 hoặc 0.25)" 
              value="${escapeHtml(userAnswersPart3[q.id] || '')}" 
              oninput="handleShortAnswerInput(${q.id}, this.value)"
            >
            <span class="short-answer-hint"><i class="fa-solid fa-circle-info"></i> Điền số</span>
          </div>
        </div>
      `;
    }
  }
  return "";
}

function renderQuestionPalette() {
  const palette = document.getElementById("paletteButtons");
  if (!palette) return;

  palette.innerHTML = activeQuizQuestions.map((q, idx) => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const displayNum = q.displayNum || (idx + 1);

    return `
      <button type="button" class="q-nav-btn" id="nav-btn-${qKey}" onclick="scrollToQuestionKey('${qKey}')" title="Câu ${displayNum} (Phần ${qPart})">
        ${displayNum}
      </button>
    `;
  }).join("");
}

// Xử lý chọn đáp án Phần I
window.selectPart1Option = function(qId, optId) {
  if (isQuizSubmitted) return;
  if (!isExamStarted && typeof startExamSession === "function") {
    startExamSession();
  }

  userAnswersPart1[qId] = optId;

  const qKey = `I_${qId}`;
  const group = document.getElementById(`options-group-${qKey}`);
  if (group) {
    group.querySelectorAll(".option-label").forEach(lbl => {
      if (lbl.getAttribute("data-opt") === optId) {
        lbl.classList.add("selected");
      } else {
        lbl.classList.remove("selected");
      }
    });
  }

  updatePaletteStatus();
  updateAnsweredCount();
};

// Xử lý chọn Đúng / Sai cho Phần II
window.selectPart2Choice = function(qId, itemId, isTrue) {
  if (isQuizSubmitted) return;
  if (!isExamStarted && typeof startExamSession === "function") {
    startExamSession();
  }

  if (!userAnswersPart2[qId]) {
    userAnswersPart2[qId] = {};
  }
  userAnswersPart2[qId][itemId] = isTrue;

  const btnTrue = document.getElementById(`tf-btn-${qId}-${itemId}-true`);
  const btnFalse = document.getElementById(`tf-btn-${qId}-${itemId}-false`);

  if (isTrue) {
    if (btnTrue) btnTrue.classList.add("selected");
    if (btnFalse) btnFalse.classList.remove("selected");
  } else {
    if (btnFalse) btnFalse.classList.add("selected");
    if (btnTrue) btnTrue.classList.remove("selected");
  }

  updatePaletteStatus();
  updateAnsweredCount();
};

// Xử lý nhập đáp án ngắn Phần III
window.handleShortAnswerInput = function(qId, value) {
  if (isQuizSubmitted) return;
  if (!isExamStarted && typeof startExamSession === "function") {
    startExamSession();
  }

  const trimmed = value.trim();
  if (trimmed === "") {
    delete userAnswersPart3[qId];
  } else {
    userAnswersPart3[qId] = trimmed;
  }

  updatePaletteStatus();
  updateAnsweredCount();
};

function scrollToQuestionKey(qKey) {
  const card = document.getElementById(`question-card-${qKey}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("highlight");
    setTimeout(() => card.classList.remove("highlight"), 1200);
  }
}

function updatePaletteStatus() {
  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const navBtn = document.getElementById(`nav-btn-${qKey}`);
    if (!navBtn) return;

    let isAnswered = false;
    if (qPart === "I") {
      isAnswered = !!userAnswersPart1[q.id];
    } else if (qPart === "II") {
      const ansObj = userAnswersPart2[q.id] || {};
      const count = Object.keys(ansObj).length;
      isAnswered = count === 4;
    } else if (qPart === "III") {
      if (q.type === "essay") {
        const ed = getEssayData(q.id);
        isAnswered = !!(ed && (ed.text || (ed.images && ed.images.length > 0)));
      } else {
        isAnswered = !!userAnswersPart3[q.id];
      }
    }

    if (isAnswered) {
      navBtn.classList.add("answered");
    } else {
      navBtn.classList.remove("answered");
    }
  });
}

function updateAnsweredCount() {
  let count = 0;
  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    if (qPart === "I" && userAnswersPart1[q.id]) count++;
    else if (qPart === "II") {
      const obj = userAnswersPart2[q.id] || {};
      if (Object.keys(obj).length === 4) count++;
    } else if (qPart === "III") {
      if (q.type === "essay") {
        const ed = getEssayData(q.id);
        if (ed && (ed.text || (ed.images && ed.images.length > 0))) count++;
      } else if (userAnswersPart3[q.id]) {
        count++;
      }
    }
  });

  const el = document.getElementById("answeredCount");
  if (el) el.textContent = count;
}

function resetCurrentAnswers() {
  if (isQuizSubmitted) {
    showToast("Bài thi đã nộp, không thể xóa lựa chọn!", "warning");
    return;
  }

  if (confirm("Em có chắc chắn muốn xóa toàn bộ các câu trả lời hiện tại không?")) {
    userAnswersPart1 = {};
    userAnswersPart2 = {};
    userAnswersPart3 = {};
    renderQuizQuestions();
    renderQuestionPalette();
    updateAnsweredCount();
    showToast("Đã làm mới bảng trả lời!", "info");
  }
}

function confirmAndSubmitQuiz() {
  if (isQuizSubmitted) {
    showToast("Bài thi đã được nộp và chấm điểm rồi!", "info");
    return;
  }

  const answered = parseInt(document.getElementById("answeredCount")?.textContent || "0");
  const total = activeQuizQuestions.length;

  if (answered < total) {
    if (!confirm(`Em còn ${total - answered} câu chưa hoàn thành.\nEm có chắc chắn muốn nộp bài ngay bây giờ không?`)) {
      return;
    }
  } else {
    if (!confirm("Em đã hoàn thành bài thi. Xác nhận nộp bài để xem điểm số và lời nhận xét ngay?")) {
      return;
    }
  }

  submitQuiz(false);
}

// Chấm điểm chuẩn theo quy định của Bộ Giáo dục & Đào tạo
function submitQuiz(isAuto = false) {
  if (isQuizSubmitted) return;
  isQuizSubmitted = true;
  clearInterval(quizTimerInterval);

  let scorePart1 = 0;
  let scorePart2 = 0;
  let scorePart3 = 0;

  let correctCountTotal = 0;
  let wrongCountTotal = 0;

  const isExam11 = currentExamId.startsWith("11_");

  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const card = document.getElementById(`question-card-${qKey}`);
    const navBtn = document.getElementById(`nav-btn-${qKey}`);

    if (qPart === "I") {
      const studentAns = userAnswersPart1[q.id];
      const isCorrect = studentAns === q.correctAnswer;

      if (isCorrect) {
        scorePart1 += 0.25;
        correctCountTotal++;
        if (navBtn) {
          navBtn.classList.remove("answered");
          navBtn.classList.add("result-correct");
        }
      } else {
        wrongCountTotal++;
        if (navBtn) {
          navBtn.classList.remove("answered");
          navBtn.classList.add("result-wrong");
        }
      }

      // Tô màu đáp án
      if (card) {
        card.querySelectorAll(".option-label").forEach(lbl => {
          const opt = lbl.getAttribute("data-opt");
          if (opt === q.correctAnswer) {
            lbl.classList.add("correct-answer");
          } else if (opt === studentAns && !isCorrect) {
            lbl.classList.add("wrong-answer");
          }
        });
      }

    } else if (qPart === "II") {
      // Đề thi đúng/sai: 1 ý đúng = 0.1đ; 2 ý đúng = 0.25đ; 3 ý đúng = 0.5đ; 4 ý đúng = 1.0đ
      const studentObj = userAnswersPart2[q.id] || {};
      let subCorrectCount = 0;

      q.items.forEach(item => {
        const studentChoice = studentObj[item.id];
        const isItemCorrect = studentChoice === item.correct;
        if (isItemCorrect) subCorrectCount++;

        // Tô màu nút True / False
        const btnTrue = document.getElementById(`tf-btn-${q.id}-${item.id}-true`);
        const btnFalse = document.getElementById(`tf-btn-${q.id}-${item.id}-false`);

        if (item.correct === true) {
          if (btnTrue) btnTrue.classList.add("correct-state");
          if (studentChoice === false && btnFalse) btnFalse.classList.add("wrong-state");
        } else {
          if (btnFalse) btnFalse.classList.add("correct-state");
          if (studentChoice === true && btnTrue) btnTrue.classList.add("wrong-state");
        }
      });

      let qScore = 0;
      if (subCorrectCount === 1) qScore = 0.1;
      else if (subCorrectCount === 2) qScore = 0.25;
      else if (subCorrectCount === 3) qScore = 0.5;
      else if (subCorrectCount === 4) qScore = 1.0;

      scorePart2 += qScore;
      if (subCorrectCount === 4) correctCountTotal++;
      else wrongCountTotal++;

      if (navBtn) {
        navBtn.classList.remove("answered");
        if (subCorrectCount >= 3) navBtn.classList.add("result-correct");
        else navBtn.classList.add("result-wrong");
      }

    } else if (qPart === "III") {
      if (q.type === "essay") {
        // Tự luận (Toán 11 - Mỗi câu 1.5đ - Chấm tự động theo Barem 0.25đ)
        const essayData = getEssayData(q.id);
        const gradeResult = autoGradeEssayQuestion(q, essayData);
        essayGradeResults[q.id] = gradeResult;

        scorePart3 += gradeResult.earnedScore;

        if (gradeResult.earnedScore >= (q.maxScore || 1.5) * 0.5) {
          correctCountTotal++;
          if (navBtn) {
            navBtn.classList.remove("answered");
            navBtn.classList.add("result-correct");
          }
        } else {
          wrongCountTotal++;
          if (navBtn) {
            navBtn.classList.remove("answered");
            navBtn.classList.add("result-wrong");
          }
        }

        renderAutoGradeRubricCard(q, qKey, gradeResult);
      } else {
        // Trả lời ngắn (Toán 12 - Mỗi câu 0.5đ)
        const studentRaw = userAnswersPart3[q.id] || "";
        const normalized = studentRaw.replace(/\\s+/g, "").replace(".", ",");
        const acceptable = (q.acceptableAnswers || [q.correctAnswer]).map(a => a.replace(/\\s+/g, "").replace(".", ","));

        const isCorrect = acceptable.includes(normalized);
        const inputEl = document.getElementById(`short-input-${q.id}`);

        if (isCorrect) {
          scorePart3 += 0.5;
          correctCountTotal++;
          if (inputEl) inputEl.classList.add("correct");
          if (navBtn) {
            navBtn.classList.remove("answered");
            navBtn.classList.add("result-correct");
          }
        } else {
          wrongCountTotal++;
          if (inputEl) inputEl.classList.add("wrong");
          if (navBtn) {
            navBtn.classList.remove("answered");
            navBtn.classList.add("result-wrong");
          }
        }
      }
    }
  });

  // Tính tổng điểm theo chế độ
  let finalScore = 0;
  if (isExam11) {
    if (currentQuizMode === "part1") {
      finalScore = (scorePart1 / 4.0) * 10.0;
    } else if (currentQuizMode === "part2") {
      finalScore = (scorePart2 / 3.0) * 10.0;
    } else if (currentQuizMode === "part3") {
      finalScore = (scorePart3 / 3.0) * 10.0;
    } else {
      finalScore = scorePart1 + scorePart2 + scorePart3;
    }
  } else {
    if (currentQuizMode === "part1") {
      finalScore = (scorePart1 / 3.0) * 10.0;
    } else if (currentQuizMode === "part2") {
      finalScore = (scorePart2 / 4.0) * 10.0;
    } else if (currentQuizMode === "part3") {
      finalScore = (scorePart3 / 3.0) * 10.0;
    } else {
      finalScore = scorePart1 + scorePart2 + scorePart3;
    }
  }

  // Khóa nút nộp bài
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i class="fa-solid fa-check-double"></i> Đã nộp bài';
  }

  // Khóa các ô input ngắn và tự luận
  document.querySelectorAll(".short-answer-input, .essay-textarea").forEach(inp => {
    inp.disabled = true;
  });

  // Hiển thị Card kết quả
  displayQuizResults(finalScore, scorePart1, scorePart2, scorePart3, correctCountTotal, wrongCountTotal);
}

// Sinh lời nhận xét sư phạm chi tiết của Thầy Sáng
function generateTeacherFeedback(score, studentName, studentClass, examTitle) {
  if (score >= 9.0) {
    return {
      level: "Xuất sắc",
      badgeColor: "#f59e0b",
      icon: "fa-crown",
      headerTitle: "Xuất Sắc! Điểm Số Tuyệt Vời!",
      title: "KẾT QUẢ XUẤT SẮC - THẦY SÁNG BIỂU DƯƠNG!",
      comment: `Thầy Sáng nhiệt liệt biểu dương em ${studentName} (Lớp ${studentClass})! Em đã đạt điểm số xuất sắc (${score.toFixed(2)}/10.0 điểm). Tư duy toán học của em rất sắc sảo, kỹ năng phân tích bẫy đề thi và giải quyết câu hỏi vận dụng cao đạt độ chính xác tuyệt vời. Hãy giữ vững phong độ đỉnh cao này để chinh phục điểm 10 trong kỳ thi chính thức sắp tới nhé!`
    };
  } else if (score >= 8.0) {
    return {
      level: "Giỏi",
      badgeColor: "#2563eb",
      icon: "fa-award",
      headerTitle: "Kết Quả Giỏi - Rất Đáng Khen Ngợi!",
      title: "KẾT QUẢ GIỎI - THẦY KHEN NGỢI SỰ NỖ LỰC!",
      comment: `Thầy Sáng khen ngợi em ${studentName} (Lớp ${studentClass})! Bài làm đạt kết quả rất tốt (${score.toFixed(2)}/10.0 điểm). Nền tảng kiến thức và phản xạ tư duy toán học của em rất vững vàng. Em hãy xem lại lời giải chi tiết của Thầy ở các câu còn sai sót để hoàn thiện kỹ năng và bứt phá chạm mốc 9+ ở lần thi tới nhé!`
    };
  } else if (score >= 6.5) {
    return {
      level: "Khá",
      badgeColor: "#0284c7",
      icon: "fa-thumbs-up",
      headerTitle: "Kết Quả Khá - Có Tiến Bộ Rõ Rệt!",
      title: "KẾT QUẢ KHÁ - CẦN RÈN LUYỆN TỐC ĐỘ!",
      comment: `Em ${studentName} (Lớp ${studentClass}) đã hoàn thành khá tốt bài thi (${score.toFixed(2)}/10.0 điểm). Em đã nắm vững các kiến thức nhận biết và thông hiểu cốt lõi. Để nâng cao điểm số lên mức Giỏi, em cần chú ý rà soát kỹ tính toán ở phần Trả lời ngắn và phân tích cẩn thận các mệnh đề Đúng/Sai để tránh mất điểm đáng tiếc nhé!`
    };
  } else if (score >= 5.0) {
    return {
      level: "Trung bình khá",
      badgeColor: "#d97706",
      icon: "fa-book-open-reader",
      headerTitle: "Đạt Yêu Cầu - Cần Ôn Luyện Thêm!",
      title: "KẾT QUẢ ĐẠT YÊU CẦU - CẦN CỦNG CỐ CÔNG THỨC!",
      comment: `Em ${studentName} (Lớp ${studentClass}) đạt mức điểm trung bình khá (${score.toFixed(2)}/10.0 điểm). Em cần dành thêm thời gian ôn lại các công thức toán trọng tâm, đọc kỹ các phương án bẫy và tham khảo thêm bài giảng chuyên đề trong kho tài liệu của Thầy trước khi bấm làm lại bài thi nhé!`
    };
  } else {
    return {
      level: "Cần nỗ lực hơn",
      badgeColor: "#ef4444",
      icon: "fa-fire",
      headerTitle: "Cần Cố Gắng Hơn - Đừng Nản Lòng!",
      title: "THẦY SÁNG ĐỘNG VIÊN - HÃY NỖ LỰC CỐ GẮNG!",
      comment: `Em ${studentName} (Lớp ${studentClass}) thân mến, đừng nản lòng nhé! 'Thất bại là mẹ của thành công'. Điểm số hôm nay là cơ hội quý báu để em nhận diện những phần kiến thức mình chưa vững. Em hãy bấm 'Xem đáp án & Lời giải chi tiết' phía dưới, ghi chép cẩn thận các bước giải của Thầy vào vở và bấm 'Làm lại bài thi' để chinh phục thử thách này!`
    };
  }
}

// Lưu thông tin bài thi vào lịch sử
function saveQuizAttemptRecord(record) {
  try {
    let history = [];
    const saved = localStorage.getItem("ths_sang_quiz_history");
    if (saved) {
      history = JSON.parse(saved);
      if (!Array.isArray(history)) history = [];
    }
    history.unshift(record);
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem("ths_sang_quiz_history", JSON.stringify(history));
  } catch (err) {
    console.warn("Lỗi lưu lịch sử thi:", err);
  }
}

// Render bảng lịch sử làm bài thi
function renderQuizHistoryTable() {
  const card = document.getElementById("quizHistoryCard");
  const wrapper = document.getElementById("historyTableWrapper");
  if (!wrapper) return;

  let history = [];
  try {
    const saved = localStorage.getItem("ths_sang_quiz_history");
    if (saved) {
      history = JSON.parse(saved);
      if (!Array.isArray(history)) history = [];
    }
  } catch (e) {
    history = [];
  }

  if (history.length === 0) {
    if (card) card.style.display = "none";
    return;
  }

  if (card) card.style.display = "block";

  wrapper.innerHTML = `
    <table class="history-table">
      <thead>
        <tr>
          <th style="width: 50px;">STT</th>
          <th style="width: 140px;">Thời gian thi</th>
          <th>Thí sinh</th>
          <th>Đề thi &amp; Mã hoán vị</th>
          <th style="width: 90px; text-align: center;">Điểm số</th>
          <th style="width: 90px; text-align: center;">Số câu đúng</th>
          <th style="width: 90px; text-align: center;">Thời gian</th>
          <th>Nhận xét của Thầy Sáng</th>
        </tr>
      </thead>
      <tbody>
        ${history.map((item, idx) => {
          let scoreClass = "needs-work";
          if (item.score >= 9.0) scoreClass = "excellent";
          else if (item.score >= 8.0) scoreClass = "good";
          else if (item.score >= 5.0) scoreClass = "average";

          return `
            <tr>
              <td><strong>${idx + 1}</strong></td>
              <td style="font-size: 0.82rem; color: #64748b;"><i class="fa-regular fa-clock"></i> ${escapeHtml(item.date || "")}</td>
              <td><strong>${escapeHtml(item.studentName || "Học sinh")}</strong> <span style="font-size: 0.8rem; color: #0284c7; background: #e0f2fe; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${escapeHtml(item.studentClass || "")}</span></td>
              <td>
                <div style="font-weight: 600; color: #0f172a;">${escapeHtml(item.examTitle || item.examId)}</div>
                <span style="font-size: 0.75rem; color: #475569; background: #f1f5f9; padding: 1px 6px; border-radius: 4px;"><i class="fa-solid fa-shuffle"></i> ${escapeHtml(item.shuffleCode || "")}</span>
              </td>
              <td style="text-align: center;">
                <span class="score-badge-hist ${scoreClass}">${item.score.toFixed(2)}</span>
              </td>
              <td style="text-align: center; font-weight: 700; color: #16a34a;">
                ${item.correctCount} / ${item.totalCount}
              </td>
              <td style="text-align: center; font-size: 0.85rem; color: #475569;">
                ${escapeHtml(item.timeUsed || "")}
              </td>
              <td style="font-size: 0.85rem; color: #334155; max-width: 280px; line-height: 1.4;">
                <em>"${escapeHtml(item.comment || "")}"</em>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

window.clearQuizHistory = function() {
  if (confirm("Em có chắc chắn muốn xóa toàn bộ lịch sử thi trên máy này không?")) {
    localStorage.removeItem("ths_sang_quiz_history");
    renderQuizHistoryTable();
    showToast("Đã xóa sạch lịch sử thi!", "info");
  }
};

window.printQuizResult = function() {
  window.print();
};

function displayQuizResults(finalScore, s1, s2, s3, correctCount, wrongCount) {
  const resultCard = document.getElementById("quizResultCard");
  const resScore = document.getElementById("resScore");
  const resCorrect = document.getElementById("resCorrect");
  const resWrong = document.getElementById("resWrong");
  const resTimeUsed = document.getElementById("resTimeUsed");
  const resTitle = document.getElementById("resultTitle");
  const resIcon = document.getElementById("resultIcon");

  const timeUsedSeconds = totalQuizSeconds - secondsRemaining;
  const timeUsedMinutes = Math.floor(timeUsedSeconds / 60);
  const timeUsedSecs = timeUsedSeconds % 60;
  const timeUsedStr = `${timeUsedMinutes}m ${timeUsedSecs < 10 ? '0' : ''}${timeUsedSecs}s`;

  const exam = (typeof EXAMS_DATABASE !== "undefined" && EXAMS_DATABASE[currentExamId]) 
               ? EXAMS_DATABASE[currentExamId] 
               : (typeof EXAM_11_GK1_TK5 !== "undefined" ? EXAM_11_GK1_TK5 : { config: { title: "Đề Thi Trực Tuyến" } });

  const studentName = localStorage.getItem("ths_sang_student_name") || "Học sinh";
  const studentClass = localStorage.getItem("ths_sang_student_class") || "12A1";
  const nowFormatted = new Date().toLocaleString("vi-VN");

  if (resScore) resScore.textContent = finalScore.toFixed(2);
  if (resCorrect) resCorrect.textContent = `${correctCount} / ${activeQuizQuestions.length}`;
  if (resWrong) resWrong.textContent = `${wrongCount} / ${activeQuizQuestions.length}`;
  if (resTimeUsed) resTimeUsed.textContent = timeUsedStr;

  // Cập nhật thông tin học sinh trên phiếu điểm
  const resStudentNameEl = document.getElementById("resStudentName");
  if (resStudentNameEl) resStudentNameEl.textContent = studentName;

  const resStudentClassEl = document.getElementById("resStudentClass");
  if (resStudentClassEl) resStudentClassEl.textContent = studentClass;

  const resExamCodeEl = document.getElementById("resExamCode");
  if (resExamCodeEl) resExamCodeEl.textContent = exam.config.title;

  const resShuffleCodeEl = document.getElementById("resShuffleCode");
  if (resShuffleCodeEl) resShuffleCodeEl.textContent = currentShuffleCode;

  const resDateEl = document.getElementById("resDateFormatted");
  if (resDateEl) resDateEl.textContent = nowFormatted;

  // Tạo nhận xét đánh giá của Thầy Sáng
  const feedback = generateTeacherFeedback(finalScore, studentName, studentClass, exam.config.title);

  if (resTitle) resTitle.textContent = feedback.headerTitle;
  if (resIcon) resIcon.innerHTML = `<i class="fa-solid ${feedback.icon}" style="color: ${feedback.badgeColor};"></i>`;

  const evalTitleEl = document.getElementById("evalTeacherTitle");
  if (evalTitleEl) {
    evalTitleEl.innerHTML = `<i class="fa-solid fa-award"></i> ${feedback.title}`;
  }

  const commentEl = document.getElementById("resTeacherComment");
  if (commentEl) {
    commentEl.innerHTML = `"${feedback.comment}"`;
  }

  // Lưu lịch sử làm bài vào localStorage
  saveQuizAttemptRecord({
    id: "att_" + Date.now(),
    studentName: studentName,
    studentClass: studentClass,
    examId: currentExamId,
    examTitle: exam.config.title,
    shuffleCode: currentShuffleCode,
    score: parseFloat(finalScore.toFixed(2)),
    scorePart1: parseFloat(s1.toFixed(2)),
    scorePart2: parseFloat(s2.toFixed(2)),
    scorePart3: parseFloat(s3.toFixed(2)),
    correctCount: correctCount,
    totalCount: activeQuizQuestions.length,
    timeUsed: timeUsedStr,
    date: nowFormatted,
    comment: feedback.comment,
    level: feedback.level
  });

  // Render lại bảng lịch sử làm bài
  renderQuizHistoryTable();

  if (resultCard) {
    resultCard.classList.add("active");
    resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast(`Chấm điểm hoàn tất: ${finalScore.toFixed(2)} / 10 điểm!`, "success");
}

function toggleAllSolutions() {
  if (!isQuizSubmitted) {
    showToast("Vui lòng nộp bài để xem lời giải chi tiết nhé!", "warning");
    return;
  }

  isShowingAllSolutions = !isShowingAllSolutions;
  const boxes = document.querySelectorAll(".solution-box");
  const btn = document.getElementById("btnToggleAllSolutions");

  boxes.forEach(box => {
    if (isShowingAllSolutions) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });

  if (btn) {
    if (isShowingAllSolutions) {
      btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Thu gọn lời giải';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-list-check"></i> Xem đáp án & Lời giải chi tiết';
    }
  }

  triggerMathJax();
}

function retakeQuiz() {
  if (confirm("Em có muốn làm lại lượt thi này với một bộ câu hỏi và phương án được hoán vị mới không?")) {
    currentShuffleCode = "HV-" + Math.floor(100 + Math.random() * 900);
    window.currentShuffleCode = currentShuffleCode;
    loadQuestionsForMode(currentQuizMode);
    const quizSection = document.getElementById("quiz");
    if (quizSection) quizSection.scrollIntoView({ behavior: "smooth" });
    showToast(`Đã tạo đề hoán vị ngẫu nhiên mới (${currentShuffleCode}). Chúc em đạt điểm cao!`, "info");
  }
}"""

# Replace in code
code_updated = text[:idx_start] + new_quiz_block + text[idx_end:]

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(code_updated)

with open('BAN_CAP_NHAT_NETLIFY/js/script.js', 'w', encoding='utf-8') as f:
    f.write(code_updated)

print("Replaced quiz system in js/script.js and BAN_CAP_NHAT_NETLIFY/js/script.js successfully!")
