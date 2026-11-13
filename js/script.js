/**
 * SCRIPT ĐIỀU KHIỂN WEBSITE TOÁN THS. LƯƠNG THANH SÁNG
 * ====================================================================
 * Bao gồm các tính năng:
 * 1. Thanh điều hướng, cuộn mượt và Menu Mobile
 * 2. Kho tài liệu: Lọc theo khối, lọc phân môn, tìm kiếm, xem PDF modal, tải về
 * 3. Hệ thống thi trắc nghiệm online: Bấm giờ, chấm điểm, hiển thị MathJax, xem lời giải
 * 4. Form gửi thắc mắc bài tập cho Thầy Sáng
 * 5. Toast thông báo và nút Cuộn lên đầu trang
 */

document.addEventListener("DOMContentLoaded", () => {
  initDynamicSchoolYear();
  initNavigation();
  initDigitalLessons();
  initDocumentRepository();
  initQuizSystem();
  initContactForm();
  initBackToTop();
});

/**
 * Tự động tính toán và hiển thị năm học hiện tại theo lịch thực tế (lịch vạn niên):
 * - Năm học ở Việt Nam tính từ tháng 8 năm trước đến hết tháng 7 năm sau.
 * - Ví dụ: Từ tháng 08/2026 đến tháng 07/2027 => Năm học 2026 - 2027.
 * - Tự động cập nhật cho các năm tiếp theo (2027 - 2028, 2028 - 2029...) mà không cần sửa code.
 */
function initDynamicSchoolYear() {
  try {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1 -> 12

    // Năm học chuẩn 2026 - 2027 theo yêu cầu của Thầy Sáng,
    // và tự động tăng theo lịch vạn niên khi bước sang các năm học tiếp theo (2027 - 2028, 2028 - 2029...)
    let startYear = currentMonth >= 8 ? currentYear : currentYear - 1;
    if (startYear < 2026) {
      startYear = 2026;
    }
    const endYear = startYear + 1;
    const schoolYearString = `${startYear} - ${endYear}`;

    const elements = document.querySelectorAll(".school-year-display");
    elements.forEach(el => {
      el.textContent = schoolYearString;
    });
  } catch (err) {
    console.warn("Lỗi cập nhật năm học tự động:", err);
  }
}

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById("header");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  // Đổi bóng header khi cuộn trang
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // Toggle mobile menu
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = mobileMenuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Đóng menu khi click vào bất kỳ link nào
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Highlight menu mục đang xem khi cuộn trang
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            navItems.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* ==========================================================================
   2. KHO TÀI LIỆU (DOCUMENT REPOSITORY & PDF PREVIEW MODAL)
   ========================================================================== */
let currentGradeFilter = "all";
let currentCategoryFilter = "all";
let currentSearchKeyword = "";

function initDocumentRepository() {
  const grid = document.getElementById("documentsGrid");
  if (!grid) return;

  renderDocuments();

  // Sự kiện chọn tab Khối lớp (10, 11, 12, tất cả)
  const gradeTabBtns = document.querySelectorAll(".grade-tab-btn");
  gradeTabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      gradeTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGradeFilter = btn.getAttribute("data-grade");
      renderDocuments();
    });
  });

  // Sự kiện chọn lọc chuyên đề bộ môn
  const categoryFilterBtns = document.querySelectorAll(".filter-pill");
  categoryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.getAttribute("data-category");
      renderDocuments();
    });
  });

  // Sự kiện tìm kiếm tài liệu theo từ khóa
  const searchInput = document.getElementById("docSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchKeyword = e.target.value.trim().toLowerCase();
      renderDocuments();
    });
  }

  // Khởi tạo các sự kiện của Modal xem file trực tiếp
  initPreviewModal();
}

// Hàm hỗ trợ lọc ngoài menu gọi nhanh từ Footer hoặc các nút liên kết
window.filterByGrade = function(grade) {
  const gradeTabBtns = document.querySelectorAll(".grade-tab-btn");
  gradeTabBtns.forEach(btn => {
    if (btn.getAttribute("data-grade") === grade) {
      btn.click();
    }
  });
};

window.filterByCategory = function(category) {
  // Đặt lại lọc khối về tất cả
  window.filterByGrade("all");

  const categoryFilterBtns = document.querySelectorAll(".filter-pill");
  categoryFilterBtns.forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.click();
    }
  });

  const docSection = document.getElementById("documents");
  if (docSection) {
    docSection.scrollIntoView({ behavior: "smooth" });
  }
};

function renderDocuments() {
  const grid = document.getElementById("documentsGrid");
  if (!grid) return;

  if (typeof DOCUMENTS_DATA === "undefined" || !Array.isArray(DOCUMENTS_DATA)) {
    grid.innerHTML = "<p class='no-doc-found'>Dữ liệu tài liệu đang được cập nhật...</p>";
    return;
  }

  // Lọc theo Khối, Chuyên đề và Từ khóa tìm kiếm
  const filtered = DOCUMENTS_DATA.filter(doc => {
    const matchGrade = currentGradeFilter === "all" || doc.grade === currentGradeFilter || doc.grade === "all";
    const matchCategory = currentCategoryFilter === "all" || doc.category === currentCategoryFilter;
    
    let matchSearch = true;
    if (currentSearchKeyword !== "") {
      const fullText = (doc.title + " " + doc.description + " " + (doc.tag || "")).toLowerCase();
      matchSearch = fullText.includes(currentSearchKeyword);
    }

    return matchGrade && matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-doc-found">
        <i class="fa-regular fa-folder-open"></i>
        <h3>Không tìm thấy tài liệu phù hợp</h3>
        <p>Thầy Sáng đang biên soạn thêm. Thầy hoặc các em có thể thử đổi từ khóa tìm kiếm hoặc chọn khối lớp khác nhé!</p>
      </div>
    `;
    return;
  }

  // Render các thẻ tài liệu
  grid.innerHTML = filtered.map(doc => {
    const isPdf = doc.type === "pdf";
    const iconClass = isPdf ? "fa-solid fa-file-pdf" : "fa-solid fa-file-word";
    const boxClass = isPdf ? "doc-icon-box" : "doc-icon-box word";

    return `
      <div class="doc-card" data-id="${doc.id}">
        <div>
          <div class="doc-card-top">
            <div class="${boxClass}">
              <i class="${iconClass}"></i>
            </div>
            <div>
              <div class="doc-badges">
                <span class="doc-grade-badge">Khối ${doc.grade}</span>
                ${doc.tag ? `<span class="doc-tag-badge">${doc.tag}</span>` : ""}
              </div>
              <h3 class="doc-title">${escapeHtml(doc.title)}</h3>
            </div>
          </div>
          
          <p class="doc-desc">${escapeHtml(doc.description)}</p>
        </div>

        <div>
          <div class="doc-meta-info">
            <span><i class="fa-regular fa-file"></i> ${doc.pages} trang</span>
            <span><i class="fa-solid fa-hard-drive"></i> ${doc.size}</span>
            <span><i class="fa-regular fa-calendar"></i> ${doc.date}</span>
          </div>

          <div class="doc-actions">
            <button class="btn-preview" onclick="openDocPreview('${doc.id}')">
              <i class="fa-solid fa-eye"></i> Xem trực tiếp
            </button>
            <a href="${doc.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-download" onclick="handleDocDownload('${escapeHtml(doc.title)}')">
              <i class="fa-solid fa-download"></i> Tải về máy
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Khởi tạo Modal xem PDF trực tiếp
function initPreviewModal() {
  const modal = document.getElementById("pdfPreviewModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal || !closeBtn) return;

  // Đóng modal bằng nút X
  closeBtn.addEventListener("click", closeDocPreview);

  // Đóng modal khi bấm vào vùng nền đen mờ
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeDocPreview();
    }
  });

  // Đóng modal khi bấm phím ESC trên bàn phím
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeDocPreview();
    }
  });
}

// Hàm tự động chuẩn hóa link Google Drive thành link preview nhúng trực tiếp
function formatDrivePreviewUrl(url) {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

// Mở modal xem tài liệu trực tiếp
window.openDocPreview = function(docId) {
  const modal = document.getElementById("pdfPreviewModal");
  const modalDocTitle = document.getElementById("modalDocTitle");
  const modalDownloadBtn = document.getElementById("modalDownloadBtn");
  const modalOpenExternalBtn = document.getElementById("modalOpenExternalBtn");
  const modalBody = document.getElementById("modalBody");

  const doc = DOCUMENTS_DATA.find(d => d.id === docId);
  if (!doc) return;

  const previewSrc = formatDrivePreviewUrl(doc.previewUrl || doc.downloadUrl);

  modalDocTitle.textContent = doc.title;
  modalDownloadBtn.href = doc.downloadUrl || doc.previewUrl;
  if (modalOpenExternalBtn) {
    modalOpenExternalBtn.href = doc.downloadUrl || doc.previewUrl;
  }

  // Hiển thị khung xem tài liệu:
  modalBody.innerHTML = `
    <div style="width:100%; height:100%; display:flex; flex-direction:column;">
      <iframe 
        src="${previewSrc}" 
        style="width:100%; height:100%; border:none; background:#ffffff;" 
        allow="autoplay"
        title="${escapeHtml(doc.title)}"
      ></iframe>
      <div style="padding: 8px 16px; background: #e2e8f0; font-size: 0.8rem; color: #475569; display: flex; justify-content: space-between; align-items: center;">
        <span><i class="fa-solid fa-info-circle"></i> Tài liệu: ${escapeHtml(doc.title)} (Khối ${doc.grade} - ${doc.pages} trang)</span>
        <span>Nếu khung xem trước không tải được do chặn bên ngoài, vui lòng bấm nút "Tải về máy" ở góc phải</span>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Ngăn cuộn trang phía sau
};

window.closeDocPreview = function() {
  const modal = document.getElementById("pdfPreviewModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = ""; // Khôi phục cuộn trang
  if (modalBody) {
    modalBody.innerHTML = ""; // Dọn sạch iframe tránh chạy nền
  }
};

window.handleDocDownload = function(docTitle) {
  showToast(`Đang chuyển đến liên kết tải tài liệu: "${docTitle}"`, "info");
};

/* ==========================================================================
   3. KHU VỰC THI TRẮC NGHIỆM ONLINE (QUIZ SYSTEM) - TOÁN 11 & TOÁN 12
   ========================================================================== */
let currentExamId = "11_GK1_TK5"; // Mặc định tải lên đề Toán 11 mới nhất (TK5)
let currentQuizMode = "all";       // 'all', 'part1', 'part2', 'part3'
let activeQuizQuestions = [];       // Danh sách câu hỏi đang làm
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
window.isExamStarted = isExamStarted;
window.activeQuizQuestions = activeQuizQuestions;

function initQuizSystem() {
  const quizContainer = document.getElementById("quizQuestionsContainer");
  if (!quizContainer) return; // Chỉ khởi động khi đang ở trang trắc nghiệm

  updateModeButtonsLabels();
  loadQuestionsForMode(currentQuizMode);
  setupQuizModeButtons();

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

  const timeMins = Math.round(totalQuizSeconds / 60);
  const countQ = activeQuizQuestions.length;

  if (titleEl) titleEl.textContent = exam.config.title;
  if (timeEl) timeEl.textContent = `${timeMins} phút`;
  if (countEl) countEl.textContent = `${countQ} câu`;

  // Thêm trạng thái chờ vào vùng câu hỏi
  const container = document.getElementById("quizQuestionsContainer");
  if (container) container.classList.add("exam-waiting");

  const paletteBar = document.querySelector(".quiz-palette-bar");
  if (paletteBar) paletteBar.classList.add("exam-waiting");
}

// Kích hoạt làm bài khi học sinh nhấn "BẮT ĐẦU LÀM BÀI"
window.startExamSession = function() {
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
  showToast("🚀 Đã bắt đầu tính giờ làm bài! Chúc em làm bài thật tốt!", "info");

  // Cuộn mượt xuống câu hỏi đầu tiên
  const firstQ = document.querySelector(".question-card");
  if (firstQ) {
    firstQ.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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

  if (mode === "part1") {
    activeQuizQuestions = exam.part1;
    totalQuizSeconds = 45 * 60; // 45 phút
    const maxScoreP1 = currentExamId.startsWith("11_") ? "4.0 điểm" : "3.0 điểm";
    if (timeLabel) timeLabel.textContent = `45 phút (Phần I: ${exam.part1.length} câu trắc nghiệm - ${maxScoreP1})`;
    if (titleDisplay) titleDisplay.textContent = `Phần I: Câu Hỏi Trắc Nghiệm Nhiều Phương Án (${exam.config.title})`;
  } else if (mode === "part2") {
    activeQuizQuestions = exam.part2;
    totalQuizSeconds = 25 * 60; // 25 phút
    const maxScoreP2 = currentExamId.startsWith("11_") ? "3.0 điểm" : "4.0 điểm";
    if (timeLabel) timeLabel.textContent = `25 phút (Phần II: ${exam.part2.length} câu Đúng / Sai - ${maxScoreP2})`;
    if (titleDisplay) titleDisplay.textContent = `Phần II: Câu Hỏi Trắc Nghiệm Đúng / Sai (${exam.config.title})`;
  } else if (mode === "part3") {
    activeQuizQuestions = exam.part3;
    totalQuizSeconds = (currentExamId.startsWith("11_") ? 20 : 25) * 60;
    const p3Type = currentExamId.startsWith("11_") ? "Tự luận" : "Trả lời ngắn";
    if (timeLabel) timeLabel.textContent = `${currentExamId.startsWith("11_") ? "20" : "25"} phút (Phần III: ${exam.part3.length} câu ${p3Type} - 3.0 điểm)`;
    if (titleDisplay) titleDisplay.textContent = `Phần III: Câu Hỏi ${p3Type} (${exam.config.title})`;
  } else {
    // Chế độ: Toàn bộ đề thi (Cả 3 phần)
    activeQuizQuestions = [...exam.part1, ...exam.part2, ...exam.part3];
    totalQuizSeconds = 90 * 60; // 90 phút chuẩn
    if (timeLabel) timeLabel.textContent = `90 phút (Cả đề thi gồm 3 phần - ${exam.config.totalQuestions} câu)`;
    if (titleDisplay) titleDisplay.textContent = exam.config.title;
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

    // Render Banner phân tách từng phần khi chuyển phần
    if (currentQuizMode === "all" && qPart !== lastPart) {
      lastPart = qPart;
      if (qPart === "I") {
        const count = currentExamId.startsWith("11_") ? "từ câu 1 đến câu 16" : "từ câu 1 đến câu 12";
        const score = currentExamId.startsWith("11_") ? "Tối đa 4,0 điểm" : "Tối đa 3,0 điểm";
        html += `
          <div class="quiz-part-banner">
            <h4>PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN</h4>
            <p>Thí sinh trả lời ${count}. Mỗi câu hỏi chỉ chọn một phương án đúng (Mỗi câu 0,25 điểm - ${score}).</p>
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
            <i class="fa-solid fa-circle-question"></i> Câu ${q.id} (Phần ${qPart})
          </span>
          <span class="q-topic">${escapeHtml(q.topic || "")}</span>
        </div>

        <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>

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
    // Trắc nghiệm 4 lựa chọn A, B, C, D
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
              <!-- Tab Cơ bản -->
              <div class="symbol-group tab-group-common">
                <button type="button" class="math-sym-btn" title="Phân số (Bấm để nhập tử và mẫu)" onclick="toggleFractionPopover(${q.id}, event)"><span style="font-weight:700;">a/b</span></button>
                <button type="button" class="math-sym-btn" title="Căn bậc hai" onclick="insertMathSymbol(${q.id}, '√(x)', 2, 3)"><span style="font-weight:700;">√x</span></button>
                <button type="button" class="math-sym-btn" title="Bình phương" onclick="insertMathSymbol(${q.id}, '²')"><span style="font-weight:700;">x²</span></button>
                <button type="button" class="math-sym-btn" title="Lũy thừa n" onclick="insertMathSymbol(${q.id}, 'ⁿ')"><span style="font-weight:700;">xⁿ</span></button>
                <button type="button" class="math-sym-btn" title="Số Pi" onclick="insertMathSymbol(${q.id}, 'π')"><span style="font-weight:700;">π</span></button>
                <button type="button" class="math-sym-btn" title="Cộng trừ" onclick="insertMathSymbol(${q.id}, '±')"><span style="font-weight:700;">±</span></button>
                <button type="button" class="math-sym-btn" title="Tương đương" onclick="insertMathSymbol(${q.id}, ' ⇔ ')"><span style="font-weight:700;">⇔</span></button>
                <button type="button" class="math-sym-btn" title="Suy ra" onclick="insertMathSymbol(${q.id}, ' ⇒ ')"><span style="font-weight:700;">⇒</span></button>
                <button type="button" class="math-sym-btn" title="k thuộc Z" onclick="insertMathSymbol(${q.id}, ' (k ∈ ℤ)')"><span style="font-weight:700;">k∈ℤ</span></button>
                <button type="button" class="math-sym-btn" title="Họ nghiệm ngoặc vuông" onclick="insertMathSymbol(${q.id}, '⎡ x = \\n⎣ x = ', 4, 4)"><span style="font-weight:700;">[ Họ nghiệm</span></button>
                <button type="button" class="math-sym-btn" title="Hệ phương trình ngoặc nhọn" onclick="insertMathSymbol(${q.id}, '⎧ pt 1\\n⎩ pt 2', 4, 8)"><span style="font-weight:700;">{ Hệ pt</span></button>
              </div>

              <!-- Tab Lượng giác -->
              <div class="symbol-group tab-group-trig" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'sin(x)', 4, 5)"><span style="font-weight:600;">sin(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'cos(x)', 4, 5)"><span style="font-weight:600;">cos(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'tan(x)', 4, 5)"><span style="font-weight:600;">tan(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'cot(x)', 4, 5)"><span style="font-weight:600;">cot(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'k2π')"><span style="font-weight:700;">k2π</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'kπ')"><span style="font-weight:700;">kπ</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'π/2')"><span style="font-weight:700;">π/2</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'π/4')"><span style="font-weight:700;">π/4</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '3π/4')"><span style="font-weight:700;">3π/4</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '°')"><span style="font-weight:700;">° (độ)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'α')"><span style="font-weight:700;">α</span></button>
              </div>

              <!-- Tab Đại số -->
              <div class="symbol-group tab-group-algebra" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '×')"><span style="font-weight:700;">×</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '÷')"><span style="font-weight:700;">÷</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '≠')"><span style="font-weight:700;">≠</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '≤')"><span style="font-weight:700;">≤</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '≥')"><span style="font-weight:700;">≥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '|x|', 1, 2)"><span style="font-weight:700;">|x|</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Δ')"><span style="font-weight:700;">Δ</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∞')"><span style="font-weight:700;">∞</span></button>
              </div>

              <!-- Tab Hình học & Tập hợp -->
              <div class="symbol-group tab-group-geometry" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∈')"><span style="font-weight:700;">∈</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∉')"><span style="font-weight:700;">∉</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '⊂')"><span style="font-weight:700;">⊂</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∩')"><span style="font-weight:700;">∩</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∪')"><span style="font-weight:700;">∪</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∅')"><span style="font-weight:700;">∅</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'ℝ')"><span style="font-weight:700;">ℝ</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'ℤ')"><span style="font-weight:700;">ℤ</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '⊥')"><span style="font-weight:700;">⊥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '∥')"><span style="font-weight:700;">∥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '△')"><span style="font-weight:700;">△</span></button>
              </div>
            </div>
          </div>

          <!-- KHUNG NHẬP LIỆU BÀI LÀM -->
          <textarea 
            class="essay-textarea" 
            id="essay-input-${q.id}" 
            rows="5" 
            placeholder="Nhập bài làm hoặc chọn ký hiệu Toán ở trên... (hoặc bấm dấu '+' bên dưới để đính kèm ảnh bài làm viết tay)" 
            oninput="updatePart3Answer(${q.id}, this.value)"
          >${escapeHtml(savedText)}</textarea>

          <!-- KHUNG XEM TRƯỚC CÔNG THỨC TOÁN (MATHJAX LIVE PREVIEW) -->
          <div class="essay-math-preview">
            <div class="math-preview-label"><i class="fa-solid fa-eye"></i> Xem trước hiển thị công thức (MathJax):</div>
            <div class="math-preview-content" id="math-preview-${q.id}">
              <span class="math-preview-empty">(Gõ văn bản / công thức hoặc chọn ký hiệu ở trên để xem trước công thức Toán sắc nét)</span>
            </div>
          </div>

          <!-- NÚT "+" ĐÍNH KÈM ẢNH BÀI LÀM VIẾT TAY (GEMINI-STYLE) -->
          <div class="essay-attach-bar">
            <button type="button" class="btn-attach-image" onclick="triggerEssayImageUpload(${q.id})">
              <i class="fa-solid fa-plus"></i> Thêm ảnh bài làm viết tay / chụp màn hình
            </button>
            <input type="file" id="essay-file-input-${q.id}" accept="image/*" capture="environment" style="display:none;" onchange="handleEssayImageUpload(${q.id}, this)">
            <span class="attach-hint"><i class="fa-regular fa-image"></i> Chụp ảnh bằng điện thoại, tải từ máy tính hoặc nhấn <strong>Ctrl + V</strong> để dán ảnh</span>
          </div>

          <!-- DANH SÁCH ẢNH ĐÍNH KÈM -->
          <div class="essay-image-preview-list" id="essay-img-list-${q.id}"></div>

          <div class="essay-rubric-note">
            <i class="fa-solid fa-robot" style="color: var(--primary-600);"></i> 
            <span>Hệ thống tự động chấm điểm tự luận theo <strong>Barem chi tiết chia nhỏ đến 0,25 điểm</strong> ngay khi nộp bài. Em có thể nhập chữ hoặc chụp ảnh bài làm!</span>
          </div>
        </div>
      `;
    } else {
      // Dành cho đề trắc nghiệm trả lời ngắn (Toán 12)
      return `
        <div class="short-answer-wrapper" id="short-group-${qKey}">
          <div class="short-answer-input-group">
            <span style="font-weight: 700; color: var(--primary-900);"><i class="fa-solid fa-pencil"></i> Đáp số của em:</span>
            <input type="text" class="short-answer-input" id="short-input-${q.id}" placeholder="Ví dụ: -2,1 hoặc 30,3" oninput="updatePart3Answer(${q.id}, this.value)" autocomplete="off">
          </div>
          <div class="short-answer-hint"><i class="fa-solid fa-circle-info"></i> Nhập số thập phân (hệ thống chấp nhận cả dấu phẩy ',' hoặc dấu chấm '.')</div>
        </div>
      `;
    }
  }
  return "";
}

// Thanh định vị câu hỏi (Question Palette)
function renderQuestionPalette() {
  const palette = document.getElementById("paletteButtons");
  if (!palette) return;

  palette.innerHTML = activeQuizQuestions.map((q) => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    let label = `${q.id}`;
    if (currentQuizMode === "all") {
      if (qPart === "II") label = `II.${q.id}`;
      else if (qPart === "III") label = `III.${q.id}`;
    }

    return `
      <button type="button" class="q-nav-btn" id="nav-btn-${qKey}" onclick="scrollToQuestionKey('${qKey}')">
        ${label}
      </button>
    `;
  }).join("");
}

// Xử lý chọn đáp án Phần I
window.selectPart1Option = function(qId, optId) {
  if (isQuizSubmitted) return;

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

  if (!userAnswersPart2[qId]) {
    userAnswersPart2[qId] = {};
  }
  userAnswersPart2[qId][itemId] = isTrue;

  // Cập nhật giao diện nút
  const btnTrue = document.getElementById(`tf-btn-${qId}-${itemId}-true`);
  const btnFalse = document.getElementById(`tf-btn-${qId}-${itemId}-false`);

  if (btnTrue && btnFalse) {
    if (isTrue) {
      btnTrue.classList.add("selected-true");
      btnFalse.classList.remove("selected-false");
    } else {
      btnFalse.classList.add("selected-false");
      btnTrue.classList.remove("selected-true");
    }
  }

  updatePaletteStatus();
  updateAnsweredCount();
};

// Lấy hoặc khởi tạo dữ liệu bài làm tự luận của học sinh
function getEssayData(qId) {
  if (!userAnswersPart3[qId]) {
    userAnswersPart3[qId] = { text: "", images: [], rubricChecks: {} };
  } else if (typeof userAnswersPart3[qId] === "string") {
    userAnswersPart3[qId] = { text: userAnswersPart3[qId], images: [], rubricChecks: {} };
  }
  return userAnswersPart3[qId];
}

// Xử lý nhập đáp án Phần III (Trả lời ngắn hoặc Tự luận)
window.updatePart3Answer = function(qId, val) {
  if (isQuizSubmitted) return;

  const q = activeQuizQuestions.find(item => item.id == qId);
  if (q && q.type === "essay") {
    const data = getEssayData(qId);
    data.text = val;
    updateMathPreview(qId);
  } else {
    const trimmed = val.trim();
    if (trimmed === "") {
      delete userAnswersPart3[qId];
    } else {
      userAnswersPart3[qId] = trimmed;
    }
  }

  updatePaletteStatus();
  updateAnsweredCount();
};

// Chèn toán tử / ký hiệu toán học MathType vào vị trí con trỏ của textarea
window.insertMathSymbol = function(qId, symbol, selStartOffset, selEndOffset) {
  const textarea = document.getElementById("essay-input-" + qId);
  if (!textarea) return;

  textarea.focus();
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const before = text.substring(0, start);
  const after = text.substring(end, text.length);

  textarea.value = before + symbol + after;

  if (typeof selStartOffset === "number") {
    const newPosStart = start + selStartOffset;
    const newPosEnd = (typeof selEndOffset === "number") ? start + selEndOffset : newPosStart;
    textarea.setSelectionRange(newPosStart, newPosEnd);
  } else {
    const newPos = start + symbol.length;
    textarea.setSelectionRange(newPos, newPos);
  }

  updatePart3Answer(qId, textarea.value);
};

// Chuyển đổi tab trên thanh MathType (Cơ bản, Lượng giác, Đại số, Hình học)
window.switchMathTab = function(qId, tabName) {
  const toolbar = document.getElementById("math-toolbar-" + qId);
  if (!toolbar) return;

  toolbar.querySelectorAll(".toolbar-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === tabName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  toolbar.querySelectorAll(".symbol-group").forEach(group => {
    if (group.classList.contains("tab-group-" + tabName)) {
      group.style.display = "flex";
    } else {
      group.style.display = "none";
    }
  });
};

// Hộp thoại nhập phân số trực quan
window.toggleFractionPopover = function(qId, event) {
  if (event) event.stopPropagation();
  const existingPop = document.getElementById("frac-pop-" + qId);
  if (existingPop) {
    existingPop.remove();
    return;
  }

  const toolbar = document.getElementById("math-toolbar-" + qId);
  if (!toolbar) return;

  const popHtml = `
    <div class="fraction-popover" id="frac-pop-${qId}" onclick="event.stopPropagation()">
      <div class="fraction-popover-inputs">
        <input type="text" id="frac-num-${qId}" placeholder="Tử số (vd: 1, π)" class="fraction-input" autocomplete="off" />
        <div class="fraction-divider-line"></div>
        <input type="text" id="frac-den-${qId}" placeholder="Mẫu số (vd: 2, 6)" class="fraction-input" autocomplete="off" />
      </div>
      <button type="button" class="btn-insert-frac" onclick="insertFractionFromPopover(${qId})">Chèn</button>
      <button type="button" class="btn-close-frac" onclick="closeFractionPopover(${qId})">✕</button>
    </div>
  `;
  toolbar.insertAdjacentHTML("beforeend", popHtml);

  const numInput = document.getElementById("frac-num-" + qId);
  if (numInput) {
    numInput.focus();
    numInput.onkeydown = (e) => {
      if (e.key === "Enter") {
        document.getElementById("frac-den-" + qId)?.focus();
      }
    };
  }
  const denInput = document.getElementById("frac-den-" + qId);
  if (denInput) {
    denInput.onkeydown = (e) => {
      if (e.key === "Enter") {
        insertFractionFromPopover(qId);
      }
    };
  }
};

window.insertFractionFromPopover = function(qId) {
  const numInput = document.getElementById("frac-num-" + qId);
  const denInput = document.getElementById("frac-den-" + qId);
  const num = numInput ? numInput.value.trim() : "";
  const den = denInput ? denInput.value.trim() : "";

  let fracStr = "";
  if (num && den) {
    fracStr = `(${num})/(${den})`;
  } else if (num) {
    fracStr = `(${num})/(b)`;
  } else if (den) {
    fracStr = `(a)/(${den})`;
  } else {
    fracStr = `(a)/(b)`;
  }

  insertMathSymbol(qId, fracStr);
  closeFractionPopover(qId);
};

window.closeFractionPopover = function(qId) {
  const pop = document.getElementById("frac-pop-" + qId);
  if (pop) pop.remove();
};

// Đóng popover phân số khi click ra ngoài
document.addEventListener("click", () => {
  document.querySelectorAll(".fraction-popover").forEach(pop => pop.remove());
});

// Cập nhật khung xem trước công thức Toán MathJax (debounce 250ms)
let mathPreviewTimeouts = {};
window.updateMathPreview = function(qId) {
  clearTimeout(mathPreviewTimeouts[qId]);
  mathPreviewTimeouts[qId] = setTimeout(() => {
    const previewEl = document.getElementById("math-preview-" + qId);
    const textarea = document.getElementById("essay-input-" + qId);
    if (!previewEl || !textarea) return;

    const val = textarea.value.trim();
    if (!val) {
      previewEl.innerHTML = '<span class="math-preview-empty">(Gõ bài làm hoặc chọn ký hiệu Toán ở trên để xem bài thi được biên dịch công thức sắc nét tức thì)</span>';
      return;
    }

    // Bộ chuyển đổi trực quan (Smart Math Compiler) sang LaTeX để MathJax render
    let compiled = val;

    // Chuyển phân số (tử)/(mẫu) -> \dfrac{tử}{mẫu}
    compiled = compiled.replace(/\(([^\(\)\n]+)\)\s*\/\s*\(([^\(\)\n]+)\)/g, '\\dfrac{$1}{$2}');
    // Chuyển phân số a/b (dạng đơn giản: 1/2, 3/4, π/2, k180/2...)
    compiled = compiled.replace(/(\b[0-9a-zA-Z\u0370-\u03ff]+)\s*\/\s*([0-9a-zA-Z\u0370-\u03ff]+)\b/g, '\\dfrac{$1}{$2}');

    // Chuyển căn bậc hai √(x) -> \sqrt{x}
    compiled = compiled.replace(/√\(([^\(\)\n]+)\)/g, '\\sqrt{$1}');
    compiled = compiled.replace(/√([0-9a-zA-Z\u0370-\u03ff]+)/g, '\\sqrt{$1}');

    // Chuyển lũy thừa: ² -> ^{2}, ³ -> ^{3}, ⁿ -> ^{n}
    compiled = compiled.replace(/²/g, '^{2}').replace(/³/g, '^{3}').replace(/ⁿ/g, '^{n}');

    // Chuyển độ: ° -> ^\circ
    compiled = compiled.replace(/°/g, '^{\\circ}');

    // Chuyển hệ pt ngoặc nhọn: ⎧... ⎩...
    if (compiled.includes('⎧') || compiled.includes('{ pt') || /\{\s*[^\n]+\n\s*\{/.test(compiled)) {
      compiled = compiled.replace(/⎧\s*([^\n]+)\n\s*⎩\s*([^\n]+)/g, '\\begin{cases} $1 \\\\ $2 \\end{cases}');
      compiled = compiled.replace(/\{\s*([^\n]+)\n\s*\{\s*([^\n]+)/g, '\\begin{cases} $1 \\\\ $2 \\end{cases}');
    }

    // Chuyển họ nghiệm ngoặc vuông: ⎡... ⎣...
    if (compiled.includes('⎡') || compiled.includes('[ x') || /\[\s*[^\n]+\n\s*\[/.test(compiled)) {
      compiled = compiled.replace(/⎡\s*([^\n]+)\n\s*⎣\s*([^\n]+)/g, '\\left[\\begin{array}{l} $1 \\\\ $2 \\end{array}\\right.');
      compiled = compiled.replace(/\[\s*([^\n]+)\n\s*\[\s*([^\n]+)/g, '\\left[\\begin{array}{l} $1 \\\\ $2 \\end{array}\\right.');
    }

    // Ký hiệu tập hợp & đại số
    compiled = compiled.replace(/ℝ/g, '\\mathbb{R}').replace(/ℤ/g, '\\mathbb{Z}');
    compiled = compiled.replace(/⇔/g, ' \\Leftrightarrow ').replace(/⇒/g, ' \\Rightarrow ');
    compiled = compiled.replace(/∥/g, ' \\parallel ').replace(/⊥/g, ' \\perp ');
    compiled = compiled.replace(/△/g, ' \\triangle ').replace(/Δ/g, ' \\Delta ');
    compiled = compiled.replace(/∩/g, ' \\cap ').replace(/∪/g, ' \\cup ');
    compiled = compiled.replace(/∈/g, ' \\in ').replace(/∉/g, ' \\notin ');
    compiled = compiled.replace(/⊂/g, ' \\subset ').replace(/∅/g, ' \\emptyset ');
    compiled = compiled.replace(/±/g, ' \\pm ').replace(/π/g, ' \\pi ');
    compiled = compiled.replace(/×/g, ' \\times ').replace(/÷/g, ' \\div ');
    compiled = compiled.replace(/≠/g, ' \\ne ').replace(/≤/g, ' \\le ').replace(/≥/g, ' \\ge ');
    compiled = compiled.replace(/∞/g, ' \\infty ').replace(/α/g, ' \\alpha ');

    let formatted = compiled.replace(/\n/g, '<br>');
    if (!formatted.includes('$') && /\\(dfrac|frac|sqrt|cos|sin|tan|cot|pi|pm|begin|left|right|mathbb|Delta|alpha|cap|cup|in|parallel|perp)/.test(formatted)) {
      formatted = `$$${compiled}$$`.replace(/\n/g, '<br>');
    }

    previewEl.innerHTML = formatted;
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([previewEl]).catch(() => {});
    }
  }, 250);
};

// Kích hoạt hộp thoại chọn file ảnh (chụp từ điện thoại hoặc tải từ máy)
window.triggerEssayImageUpload = function(qId) {
  const fileInput = document.getElementById("essay-file-input-" + qId);
  if (fileInput) fileInput.click();
};

window.handleEssayImageUpload = function(qId, input) {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  readAndAddEssayImage(qId, file);
  input.value = "";
};

function readAndAddEssayImage(qId, file) {
  if (!file || !file.type.startsWith("image/")) {
    showToast("Vui lòng chọn file hình ảnh (PNG, JPG, JPEG, WEBP)!", "warning");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast("Dung lượng ảnh tối đa 10 MB!", "warning");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const data = getEssayData(qId);
    if (!data.images) data.images = [];
    data.images.push(dataUrl);

    renderEssayImageThumbnails(qId);
    updatePaletteStatus();
    updateAnsweredCount();
    showToast("Đã đính kèm ảnh bài làm viết tay thành công!", "success");
  };
  reader.readAsDataURL(file);
}

function renderEssayImageThumbnails(qId) {
  const listEl = document.getElementById("essay-img-list-" + qId);
  if (!listEl) return;

  const data = getEssayData(qId);
  const images = data.images || [];

  if (images.length === 0) {
    listEl.innerHTML = "";
    return;
  }

  listEl.innerHTML = images.map((imgSrc, index) => `
    <div class="essay-thumb-card" title="Bấm để xem phóng to ảnh">
      <img src="${imgSrc}" alt="Ảnh bài làm ${index + 1}" onclick="zoomEssayImage('${imgSrc}')">
      <button type="button" class="btn-remove-thumb" title="Xóa ảnh này" onclick="removeEssayImage(${qId}, ${index}, event)">✕</button>
    </div>
  `).join("");
}

window.removeEssayImage = function(qId, index, event) {
  if (event) event.stopPropagation();
  const data = getEssayData(qId);
  if (data.images && data.images[index]) {
    data.images.splice(index, 1);
    renderEssayImageThumbnails(qId);
    updatePaletteStatus();
    updateAnsweredCount();
    showToast("Đã xóa ảnh đính kèm", "info");
  }
};

// Phóng to ảnh bài làm toàn màn hình (Lightbox)
window.zoomEssayImage = function(imgSrc) {
  let modal = document.getElementById("imageZoomModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageZoomModal";
    modal.className = "image-zoom-modal";
    modal.innerHTML = `
      <div class="image-zoom-content">
        <button class="btn-close-zoom" onclick="closeImageZoom()">&times;</button>
        <img id="imageZoomImg" src="" alt="Ảnh bài làm phóng to">
      </div>
    `;
    modal.onclick = (e) => {
      if (e.target === modal) closeImageZoom();
    };
    document.body.appendChild(modal);
  }
  const imgEl = document.getElementById("imageZoomImg");
  if (imgEl) imgEl.src = imgSrc;
  modal.classList.add("active");
};

window.closeImageZoom = function() {
  const modal = document.getElementById("imageZoomModal");
  if (modal) modal.classList.remove("active");
};

// Lắng nghe sự kiện dán ảnh (Ctrl + V) và kéo thả ảnh vào khung bài làm
function setupEssayPasteAndDrop(qId) {
  const area = document.getElementById(`essay-group-III_${qId}`) || document.getElementById(`essay-input-${qId}`);
  if (!area) return;

  area.addEventListener("paste", function(e) {
    const items = (e.clipboardData || window.clipboardData)?.items;
    if (!items) return;
    for (let item of items) {
      if (item.kind === "file" && item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          readAndAddEssayImage(qId, file);
          e.preventDefault();
          break;
        }
      }
    }
  });

  area.addEventListener("dragover", function(e) {
    e.preventDefault();
    area.classList.add("drag-over");
  });
  area.addEventListener("dragleave", function(e) {
    area.classList.remove("drag-over");
  });
  area.addEventListener("drop", function(e) {
    e.preventDefault();
    area.classList.remove("drag-over");
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      for (let file of files) {
        if (file.type.startsWith("image/")) {
          readAndAddEssayImage(qId, file);
        }
      }
    }
  });
}

// ==========================================================================
// CÔNG CỤ CHẤM TỰ LUẬN TỰ ĐỘNG THEO BAREM 0,25Đ (AI / RULE-BASED ENGINE)
// ==========================================================================
function autoGradeEssayQuestion(q, studentData) {
  const rubric = q.rubric || [];
  const rawText = studentData?.text || "";
  const text = rawText.toLowerCase();

  // Chuẩn hóa biểu thức (hỗ trợ cả gõ Unicode trực quan, chữ thường lẫn LaTeX)
  const normalizeMath = (str) => {
    return str
      .toLowerCase()
      .replace(/\\left|\\right/g, "")
      .replace(/[{}\s]/g, "")
      .replace(/°/g, "^\\circ")
      .replace(/²/g, "^2")
      .replace(/³/g, "^3")
      .replace(/ⁿ/g, "^n")
      .replace(/√/g, "sqrt")
      .replace(/∩/g, "cap")
      .replace(/∪/g, "cup")
      .replace(/∈/g, "in")
      .replace(/∉/g, "notin")
      .replace(/⊂/g, "subset")
      .replace(/ℤ|\\mathbb{z}/gi, "z")
      .replace(/ℝ|\\mathbb{r}/gi, "r")
      .replace(/π|\\pi/gi, "pi")
      .replace(/±|\\pm/gi, "+-")
      .replace(/⇔|\\Leftrightarrow/gi, "<=>")
      .replace(/⇒|\\Rightarrow/gi, "=>")
      .replace(/∥|\\parallel/gi, "songsong")
      .replace(/⊥|\\perp/gi, "vuonggoc")
      .replace(/△|\\triangle/gi, "tamgiac");
  };

  const cleanText = normalizeMath(text);
  const manualChecks = studentData?.rubricChecks || {};
  const images = studentData?.images || [];
  const hasImages = images.length > 0;

  let earnedScore = 0;
  const stepResults = [];

  rubric.forEach(step => {
    let isMatched = false;

    // 1. Nếu có xác nhận thủ công (tự đối chiếu barem)
    if (manualChecks[step.id] !== undefined) {
      isMatched = !!manualChecks[step.id];
    } else {
      // 2. Tự động quét từ khóa và công thức toán học
      const keywords = step.keywords || [];
      for (let kw of keywords) {
        const kwClean = normalizeMath(kw);

        if (cleanText.includes(kwClean)) {
          isMatched = true;
          break;
        }

        if (kw.toLowerCase().includes("cap") && (text.includes("cắt") || text.includes("giao") || text.includes("∩") || text.includes("\\cap"))) {
          const parts = kw.toLowerCase().split("cap");
          if (parts.length === 2) {
            const p1 = normalizeMath(parts[0]);
            const p2 = normalizeMath(parts[1]);
            if (cleanText.includes(p1) && cleanText.includes(p2)) {
              isMatched = true;
              break;
            }
          }
        }
      }

      // Nếu học sinh đã tải ảnh bài làm lên và có viết chữ tóm tắt,
      // tự động công nhận các bước cơ bản nếu học sinh có làm bài
      if (!isMatched && hasImages && rawText.length > 20) {
        if (step.id === "step1" || step.id === "step2") {
          isMatched = true;
        }
      }
    }

    const points = isMatched ? step.points : 0;
    earnedScore += points;

    stepResults.push({
      step,
      isMatched,
      pointsAwarded: points
    });
  });

  earnedScore = Math.round(earnedScore * 100) / 100;
  if (earnedScore > (q.maxScore || 1.5)) {
    earnedScore = q.maxScore || 1.5;
  }

  return {
    earnedScore,
    maxScore: q.maxScore || 1.5,
    stepResults,
    hasImages,
    text: rawText,
    images: images
  };
}

// Dựng Bảng phân tích điểm tự luận theo Barem 0,25đ đưa vào lời giải
function renderAutoGradeRubricCard(q, qKey, gradeResult) {
  const solutionBox = document.getElementById(`solution-box-${qKey}`);
  if (!solutionBox) return;

  const existingCard = document.getElementById(`auto-rubric-card-${q.id}`);
  if (existingCard) existingCard.remove();

  const rubricHtml = `
    <div class="auto-grade-rubric-card" id="auto-rubric-card-${q.id}">
      <div class="rubric-header">
        <div class="rubric-title">
          <i class="fa-solid fa-robot" style="color: var(--primary-600);"></i>
          <span>Kết quả chấm tự luận tự động theo Barem Thầy Sáng:</span>
        </div>
        <div class="rubric-score-badge" id="rubric-badge-${q.id}">
          Điểm số: <strong id="rubric-score-val-${q.id}">${gradeResult.earnedScore.toFixed(2)}</strong> / ${(q.maxScore || 1.5).toFixed(2)} điểm
        </div>
      </div>

      <div class="rubric-step-list">
        ${gradeResult.stepResults.map((item, idx) => `
          <div class="rubric-step-item ${item.isMatched ? 'matched' : ''}" id="rubric-item-${q.id}-${item.step.id}">
            <div class="rubric-step-left">
              <input 
                type="checkbox" 
                class="rubric-checkbox" 
                id="rubric-chk-${q.id}-${item.step.id}" 
                ${item.isMatched ? 'checked' : ''} 
                onchange="toggleRubricManualCheck(${q.id}, '${item.step.id}', this)"
                title="Tích chọn để cập nhật điểm nếu bài làm viết tay của em có bước này"
              >
              <div class="rubric-step-text">
                <strong>Bước ${idx + 1} (${item.step.points.toFixed(2).replace('.', ',')}đ):</strong> ${item.step.label}
              </div>
            </div>
            <span class="rubric-points-tag ${item.isMatched ? 'earned' : 'unearned'}" id="rubric-tag-${q.id}-${item.step.id}">
              ${item.isMatched ? `+${item.step.points.toFixed(2).replace('.', ',')}đ` : '0,00đ'}
            </span>
          </div>
        `).join("")}
      </div>

      ${gradeResult.images && gradeResult.images.length > 0 ? `
        <div class="rubric-attached-images">
          <div class="rubric-attached-title">
            <i class="fa-solid fa-camera"></i> Ảnh bài làm học sinh đã nộp (${gradeResult.images.length} ảnh):
          </div>
          <div class="essay-image-preview-list">
            ${gradeResult.images.map((imgSrc, imgIdx) => `
              <div class="essay-thumb-card" title="Bấm để xem phóng to ảnh bài làm">
                <img src="${imgSrc}" alt="Ảnh bài làm ${imgIdx + 1}" onclick="zoomEssayImage('${imgSrc}')">
              </div>
            `).join("")}
          </div>
          <div style="font-size: 0.8rem; color: #64748b; margin-top: 6px;">
            <i class="fa-solid fa-circle-info"></i> <em>(Em có thể tích/bỏ tích các ô vuông ở trên để đối chiếu các bước trong ảnh bài làm viết tay với Barem chuẩn của Thầy Sáng, điểm tổng sẽ tự động cập nhật ngay lập tức!).</em>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  const solutionBody = solutionBox.querySelector(".solution-body");
  if (solutionBody) {
    solutionBody.insertAdjacentHTML("afterbegin", rubricHtml);
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([solutionBox]).catch(() => {});
    }
  }
}

// Bật tắt checkbox đối chiếu Barem từng bước 0,25đ
window.toggleRubricManualCheck = function(qId, stepId, checkbox) {
  const q = activeQuizQuestions.find(item => item.id == qId);
  if (!q || !q.rubric) return;

  const essayData = getEssayData(qId);
  if (!essayData.rubricChecks) essayData.rubricChecks = {};
  essayData.rubricChecks[stepId] = checkbox.checked;

  const gradeResult = autoGradeEssayQuestion(q, essayData);
  essayGradeResults[qId] = gradeResult;

  const itemEl = document.getElementById(`rubric-item-${qId}-${stepId}`);
  const tagEl = document.getElementById(`rubric-tag-${qId}-${stepId}`);
  const stepObj = q.rubric.find(s => s.id === stepId);
  const stepPts = stepObj ? stepObj.points : 0.25;

  if (itemEl) {
    if (checkbox.checked) itemEl.classList.add("matched");
    else itemEl.classList.remove("matched");
  }
  if (tagEl) {
    if (checkbox.checked) {
      tagEl.className = "rubric-points-tag earned";
      tagEl.textContent = `+${stepPts.toFixed(2).replace('.', ',')}đ`;
    } else {
      tagEl.className = "rubric-points-tag unearned";
      tagEl.textContent = "0,00đ";
    }
  }

  const scoreValEl = document.getElementById(`rubric-score-val-${qId}`);
  if (scoreValEl) scoreValEl.textContent = gradeResult.earnedScore.toFixed(2);

  recalculateSubmittedExamScores();
};

function recalculateSubmittedExamScores() {
  if (!isQuizSubmitted) return;

  let s1 = 0, s2 = 0, s3 = 0;
  let correctCount = 0, wrongCount = 0;

  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const navBtn = document.getElementById(`nav-btn-${qKey}`);

    if (qPart === "I") {
      if (userAnswersPart1[q.id] === q.correctAnswer) {
        s1 += 0.25;
        correctCount++;
      } else {
        wrongCount++;
      }
    } else if (qPart === "II") {
      const studentObj = userAnswersPart2[q.id] || {};
      let sc = 0;
      q.items.forEach(item => {
        if (studentObj[item.id] === item.correct) sc++;
      });
      if (sc === 1) s2 += 0.1;
      else if (sc === 2) s2 += 0.25;
      else if (sc === 3) s2 += 0.5;
      else if (sc === 4) s2 += 1.0;

      if (sc >= 3) correctCount++;
      else wrongCount++;
    } else if (qPart === "III") {
      if (q.type === "essay") {
        const res = essayGradeResults[q.id];
        const sc = res ? res.earnedScore : 0;
        s3 += sc;
        if (sc >= (q.maxScore || 1.5) * 0.5) correctCount++;
        else wrongCount++;

        if (navBtn) {
          navBtn.classList.remove("result-correct", "result-wrong");
          if (sc >= (q.maxScore || 1.5) * 0.5) navBtn.classList.add("result-correct");
          else navBtn.classList.add("result-wrong");
        }
      } else {
        const studentRaw = userAnswersPart3[q.id] || "";
        const normalized = studentRaw.replace(/\s+/g, "").replace(".", ",");
        const acceptable = (q.acceptableAnswers || [q.correctAnswer]).map(a => a.replace(/\s+/g, "").replace(".", ","));
        if (acceptable.includes(normalized)) {
          s3 += 0.5;
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    }
  });

  const isExam11 = currentExamId.startsWith("11_");
  let finalScore = 0;
  if (isExam11) {
    if (currentQuizMode === "part1") finalScore = (s1 / 4.0) * 10.0;
    else if (currentQuizMode === "part2") finalScore = (s2 / 3.0) * 10.0;
    else if (currentQuizMode === "part3") finalScore = (s3 / 3.0) * 10.0;
    else finalScore = s1 + s2 + s3;
  } else {
    if (currentQuizMode === "part1") finalScore = (s1 / 3.0) * 10.0;
    else if (currentQuizMode === "part2") finalScore = (s2 / 4.0) * 10.0;
    else if (currentQuizMode === "part3") finalScore = (s3 / 3.0) * 10.0;
    else finalScore = s1 + s2 + s3;
  }

  displayQuizResults(finalScore, s1, s2, s3, correctCount, wrongCount);
}

function updatePaletteStatus() {
  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;
    const btn = document.getElementById(`nav-btn-${qKey}`);
    if (!btn) return;

    let isAnswered = false;
    if (qPart === "I") {
      isAnswered = !!userAnswersPart1[q.id];
    } else if (qPart === "II") {
      const ans = userAnswersPart2[q.id];
      isAnswered = ans && Object.keys(ans).length === (q.items ? q.items.length : 4);
    } else if (qPart === "III") {
      const a3 = userAnswersPart3[q.id];
      if (a3) {
        if (typeof a3 === "string" && a3.trim().length > 0) isAnswered = true;
        else if (typeof a3 === "object") {
          if ((a3.text && a3.text.trim().length > 0) || (a3.images && a3.images.length > 0)) {
            isAnswered = true;
          }
        }
      }
    }

    if (isAnswered) {
      btn.classList.add("answered");
    } else {
      btn.classList.remove("answered");
    }
  });
}

function updateAnsweredCount() {
  let count = 0;
  activeQuizQuestions.forEach(q => {
    const qPart = q.part || "I";
    if (qPart === "I" && userAnswersPart1[q.id]) count++;
    else if (qPart === "II" && userAnswersPart2[q.id] && Object.keys(userAnswersPart2[q.id]).length > 0) count++;
    else if (qPart === "III") {
      const a3 = userAnswersPart3[q.id];
      if (a3) {
        if (typeof a3 === "string" && a3.trim().length > 0) count++;
        else if (typeof a3 === "object" && ((a3.text && a3.text.trim().length > 0) || (a3.images && a3.images.length > 0))) count++;
      }
    }
  });

  const el = document.getElementById("answeredCount");
  if (el) el.textContent = count;
}

window.scrollToQuestionKey = function(qKey) {
  const target = document.getElementById(`question-card-${qKey}`);
  if (target) {
    const offset = 90;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPos, behavior: "smooth" });

    target.style.transition = "border-color 0.4s";
    target.style.borderColor = "var(--primary-600)";
    setTimeout(() => {
      target.style.borderColor = "";
    }, 1200);
  }
};

function resetCurrentAnswers() {
  if (isQuizSubmitted) return;
  if (!confirm("Em có muốn xóa toàn bộ các câu trả lời hiện tại để làm lại từ đầu không?")) return;

  userAnswersPart1 = {};
  userAnswersPart2 = {};
  userAnswersPart3 = {};
  essayGradeResults = {};

  document.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
  document.querySelectorAll(".tf-btn").forEach(b => {
    b.classList.remove("selected-true", "selected-false");
  });
  document.querySelectorAll(".short-answer-input, .essay-textarea").forEach(i => {
    i.value = "";
  });

  activeQuizQuestions.forEach(q => {
    if (q.part === "III" && q.type === "essay") {
      renderEssayImageThumbnails(q.id);
      updateMathPreview(q.id);
    }
  });

  updatePaletteStatus();
  updateAnsweredCount();
  showToast("Đã xóa toàn bộ câu trả lời.", "info");
}

function confirmAndSubmitQuiz() {
  if (isQuizSubmitted) {
    showToast("Bài thi đã được nộp và chấm điểm rồi!", "info");
    return;
  }

  const answered = parseInt(document.getElementById("answeredCount")?.textContent || "0");
  const total = activeQuizQuestions.length;

  if (answered < total) {
    if (!confirm(`Em còn ${total - answered} câu chưa hoàn thành.
Em có chắc chắn muốn nộp bài ngay bây giờ không?`)) {
      return;
    }
  } else {
    if (!confirm("Em đã hoàn thành bài thi. Xác nhận nộp bài để xem điểm số ngay?")) {
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
        const normalized = studentRaw.replace(/\s+/g, "").replace(".", ",");
        const acceptable = (q.acceptableAnswers || [q.correctAnswer]).map(a => a.replace(/\s+/g, "").replace(".", ","));

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

function displayQuizResults(finalScore, s1, s2, s3, correctCount, wrongCount) {
  const resultCard = document.getElementById("quizResultCard");
  const resScore = document.getElementById("resScore");
  const resCorrect = document.getElementById("resCorrect");
  const resWrong = document.getElementById("resWrong");
  const resTimeUsed = document.getElementById("resTimeUsed");
  const resTitle = document.getElementById("resultTitle");
  const resMessage = document.getElementById("resultMessage");
  const resIcon = document.getElementById("resultIcon");

  const timeUsedSeconds = totalQuizSeconds - secondsRemaining;
  const timeUsedMinutes = Math.floor(timeUsedSeconds / 60);
  const timeUsedSecs = timeUsedSeconds % 60;
  const timeUsedStr = `${timeUsedMinutes}m ${timeUsedSecs < 10 ? '0' : ''}${timeUsedSecs}s`;

  const gradeName = currentExamId.startsWith("11_") ? "Toán 11" : "Toán 12";

  if (resScore) resScore.textContent = finalScore.toFixed(2);
  if (resCorrect) resCorrect.textContent = `${correctCount} / ${activeQuizQuestions.length}`;
  if (resWrong) resWrong.textContent = `${wrongCount} / ${activeQuizQuestions.length}`;
  if (resTimeUsed) resTimeUsed.textContent = timeUsedStr;

  if (finalScore >= 9.0) {
    if (resTitle) resTitle.textContent = "Xuất Sắc! Điểm Số Tuyệt Vời!";
    if (resMessage) resMessage.textContent = `Thầy Sáng chúc mừng em! Điểm số: ${finalScore.toFixed(2)}/10. Em nắm rất vững kiến thức và kỹ năng giải ${gradeName}!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-crown" style="color: #f59e0b;"></i>';
  } else if (finalScore >= 7.0) {
    if (resTitle) resTitle.textContent = "Kết Quả Khá Tốt!";
    if (resMessage) resMessage.textContent = `Thầy khen ngợi em đạt ${finalScore.toFixed(2)}/10 môn ${gradeName}! Hãy xem kỹ lời giải chi tiết để hoàn thiện các câu còn sai sót nhé!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-star" style="color: #2563eb;"></i>';
  } else if (finalScore >= 5.0) {
    if (resTitle) resTitle.textContent = "Đạt Yêu Cầu - Cần Ôn Luyện Thêm!";
    if (resMessage) resMessage.textContent = `Em đạt ${finalScore.toFixed(2)}/10 môn ${gradeName}. Em hãy bấm 'Xem đáp án & Lời giải chi tiết' bên dưới để ôn tập kỹ từng dạng bài nhé!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-award" style="color: #10b981;"></i>';
  } else {
    if (resTitle) resTitle.textContent = "Cần Cố Gắng Thêm Nhé!";
    if (resMessage) resMessage.textContent = `Kết quả: ${finalScore.toFixed(2)}/10. Đừng nản chí! Hãy đọc từng bước lời giải của Thầy Sáng bên dưới để rút kinh nghiệm.`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-book-open-reader" style="color: #ef4444;"></i>';
  }

  if (resultCard) {
    resultCard.classList.add("active");
    resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
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
  if (confirm("Em có muốn làm lại lượt thi này từ đầu không?")) {
    loadQuestionsForMode(currentQuizMode);
    const quizSection = document.getElementById("quiz");
    if (quizSection) quizSection.scrollIntoView({ behavior: "smooth" });
    showToast("Đã bắt đầu lượt làm bài mới. Chúc em đạt điểm cao!", "info");
  }
}

// Kích hoạt MathJax render lại công thức Toán học
function triggerMathJax() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch((err) => {
      console.warn("MathJax typeset error: ", err);
    });
  }
}


/* ==========================================================================
   4. FORM GỬI THẮC MẮC BÀI TẬP (CONTACT)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName")?.value.trim();
    const studentClass = document.getElementById("studentClass")?.value;
    const email = document.getElementById("studentEmail")?.value.trim();
    const topic = document.getElementById("subjectTopic")?.value;
    const content = document.getElementById("questionContent")?.value.trim();

    if (!name || !studentClass || !email || !content) {
      showToast("Vui lòng điền đầy đủ các mục có dấu sao (*)", "warning");
      return;
    }

    // Lưu vào LocalStorage để lưu vết tin nhắn
    try {
      const savedQuestions = JSON.parse(localStorage.getItem("thaySang_questions") || "[]");
      savedQuestions.unshift({
        id: Date.now(),
        name,
        studentClass,
        email,
        topic,
        content,
        timestamp: new Date().toLocaleString("vi-VN")
      });
      localStorage.setItem("thaySang_questions", JSON.stringify(savedQuestions));
    } catch (err) {
      console.log("LocalStorage save notice:", err);
    }

    // Thông báo phản hồi cho học sinh
    alert(`Cảm ơn em ${name} (Lớp ${studentClass})!\nThầy Sáng đã nhận được nội dung thắc mắc về "${topic}".\nThầy sẽ nghiên cứu câu hỏi và phản hồi chi tiết cho em qua email: ${email} hoặc giải đáp trực tiếp trên lớp sớm nhất nhé!`);

    form.reset();
    showToast("Đã gửi câu hỏi thành công đến Thầy Sáng!", "success");
  });
}

/* ==========================================================================
   5. TIỆN ÍCH: TOAST THÔNG BÁO & BACK TO TOP
   ========================================================================== */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "warning") icon = "fa-triangle-exclamation";
  if (type === "danger") icon = "fa-circle-xmark";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span style="font-size: 0.9rem;">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3500);
}

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   HỆ THỐNG BÀI HỌC SỐ MÔN TOÁN 3 TẦNG (DIGITAL LESSONS SYSTEM)
   ========================================================================== */
function initDigitalLessons() {
  const workspace = document.getElementById("lessonsWorkspace");
  if (!workspace) return; // Không ở trang bài học số

  // Lấy dữ liệu từ file lessons-data.js
  const db = window.LESSONS_DATABASE;
  if (!db) {
    console.error("Không tìm thấy dữ liệu LESSONS_DATABASE");
    return;
  }

  // Đọc URL params nếu có
  const urlParams = new URLSearchParams(window.location.search);
  let currentGrade = urlParams.get("grade") || "12";
  if (!["10", "11", "12"].includes(currentGrade)) {
    currentGrade = "10";
  }

  let currentVolume = "all"; // 'all', '1', '2'
  let currentSearch = "";
  let currentLessonId = urlParams.get("lesson") || "";

    if ((!urlParams.get("grade") || !currentLessonId) && window.location.hash) {
      try {
        const hashStr = window.location.hash.replace(/^#\/?/, "");
        const hashParams = new URLSearchParams(hashStr);
        if (hashParams.get("grade")) currentGrade = hashParams.get("grade");
        if (hashParams.get("lesson")) currentLessonId = hashParams.get("lesson");
      } catch(e) {}
    }

  // Các element DOM
  const gradeCards = document.querySelectorAll(".grade-tab-card");
  const volButtons = document.querySelectorAll(".btn-vol-filter");
  const searchInput = document.getElementById("searchLessonInput");
  const sidebarContainer = document.getElementById("sidebarLessonsList");
  const sidebarCounter = document.getElementById("sidebarCounter");
  const mobileToggleBtn = document.getElementById("mobileLessonsToggle");
  const sidebarEl = document.getElementById("lessonsSidebar");

  // Element nội dung bài học
  const breadcrumbGrade = document.getElementById("breadcrumbGrade");
  const breadcrumbChapter = document.getElementById("breadcrumbChapter");
  const breadcrumbLesson = document.getElementById("breadcrumbLesson");
  const lessonHeading = document.getElementById("lessonHeading");
  const lessonNumBadge = document.getElementById("lessonNumBadge");
  const lessonTitleText = document.getElementById("lessonTitleText");
  const lessonVolumePill = document.getElementById("lessonVolumePill");
  const btnPrevLesson = document.getElementById("btnPrevLesson");
  const btnNextLesson = document.getElementById("btnNextLesson");
  const tocLinksList = document.getElementById("tocLinksList");
  const sectionsContainer = document.getElementById("lessonSectionsContainer");

  // Tìm bài học đầu tiên của khối lớp hiện tại nếu chưa chỉ định
  function getDefaultLessonId(grade) {
    if (grade === "10") return "10-c4-b8"; // Mặc định mở Bài 8 (Tổng và hiệu của hai vectơ) mới biên soạn
    if (grade === "11") return "11-c4-b12";
    if (grade === "12") return "12-c2-b7"; // Mặc định mở Bài 7 (Hệ trục toạ độ trong không gian) mới biên soạn
    const gradeData = db[grade];
    if (gradeData && gradeData.chapters && gradeData.chapters.length > 0) {
      for (const ch of gradeData.chapters) {
        if (ch.lessons && ch.lessons.length > 0) {
          return ch.lessons[0].id;
        }
      }
    }
    return "";
  }

  if (!currentLessonId) {
    currentLessonId = getDefaultLessonId(currentGrade);
  }

  // Tìm tất cả bài học phẳng của khối lớp để hỗ trợ Prev / Next
  function getFlatLessonsList(grade) {
    const list = [];
    const gradeData = db[grade];
    if (gradeData && gradeData.chapters) {
      gradeData.chapters.forEach(ch => {
        if (ch.lessons) {
          ch.lessons.forEach(lesson => {
            list.push({
              lesson: lesson,
              chapter: ch
            });
          });
        }
      });
    }
    return list;
  }

  // 1. Cập nhật giao diện Tầng 1 (Khối lớp)
  function updateGradeTabUI() {
    gradeCards.forEach(card => {
      if (card.dataset.grade === currentGrade) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  // 2. Render Tầng 2: Danh sách Chương & Bài học trong Sidebar
  function renderSidebar() {
    const gradeData = db[currentGrade];
    if (!gradeData) return;

    let chapters = gradeData.chapters || [];

    // Lọc theo tập
    if (currentVolume !== "all") {
      const volNum = parseInt(currentVolume, 10);
      chapters = chapters.filter(ch => ch.volume === volNum);
    }

    // Lọc theo từ khoá tìm kiếm
    const search = currentSearch.trim().toLowerCase();
    let totalMatchingLessons = 0;

    let html = "";

    chapters.forEach(ch => {
      let filteredLessons = ch.lessons || [];
      if (search) {
        filteredLessons = filteredLessons.filter(l => 
          l.title.toLowerCase().includes(search) || 
          l.number.toLowerCase().includes(search) ||
          ch.title.toLowerCase().includes(search) ||
          ch.number.toLowerCase().includes(search)
        );
      }

      if (filteredLessons.length === 0 && search) {
        return; // Bỏ qua chương không có bài học khớp
      }

      totalMatchingLessons += filteredLessons.length;

      // Xác định chương có chứa bài học đang chọn không để tự động mở (open)
      const hasActiveLesson = filteredLessons.some(l => l.id === currentLessonId);
      const isOpen = hasActiveLesson || search.length > 0;

      html += `
        <div class="chapter-accordion-card ${isOpen ? "open" : ""}" data-chapter-id="${ch.id}">
          <div class="chapter-card-header ${hasActiveLesson ? "active-chapter" : ""}">
            <div class="chapter-title-group">
              <span class="chapter-badge-tag">
                <i class="fa-solid fa-book"></i> ${ch.volumeLabel} • ${escapeHtml(ch.number)}
              </span>
              <span class="chapter-name-text">${escapeHtml(ch.title)}</span>
            </div>
            <i class="fa-solid fa-chevron-down chapter-toggle-icon"></i>
          </div>
          <div class="chapter-lessons-container">
            ${filteredLessons.map(l => `
              <button class="lesson-nav-btn ${l.id === currentLessonId ? "active" : ""}" data-lesson-id="${l.id}">
                <span class="lesson-btn-num">${escapeHtml(l.number)}</span>
                <span class="lesson-btn-title">${escapeHtml(l.title)}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;
    });

    if (totalMatchingLessons === 0) {
      html = `
        <div style="text-align: center; padding: 30px 15px; color: #64748b;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 10px;"></i>
          <p style="font-size: 0.9rem; margin: 0;">Không tìm thấy bài học nào phù hợp với từ khoá "<strong>${escapeHtml(currentSearch)}</strong>".</p>
        </div>
      `;
    }

    sidebarContainer.innerHTML = html;
    sidebarCounter.textContent = `${totalMatchingLessons} bài học`;

    // Gắn sự kiện click vào header chương (Accordion)
    sidebarContainer.querySelectorAll(".chapter-card-header").forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".chapter-accordion-card");
        if (card) {
          card.classList.toggle("open");
        }
      });
    });

    // Gắn sự kiện click vào nút bài học
    sidebarContainer.querySelectorAll(".lesson-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lessonId = btn.dataset.lessonId;
        selectLesson(lessonId);
      });
    });
  }

  // 3. Render Tầng 3: Chi tiết Bài học
  function renderLessonViewer() {
    const flatList = getFlatLessonsList(currentGrade);
    const currentIndex = flatList.findIndex(item => item.lesson.id === currentLessonId);

    if (currentIndex === -1) {
      if (flatList.length > 0) {
        currentLessonId = flatList[0].lesson.id;
        renderLessonViewer();
      }
      return;
    }

    const { lesson, chapter } = flatList[currentIndex];

    // Cập nhật Breadcrumbs
    breadcrumbGrade.textContent = `Toán Lớp ${currentGrade}`;
    breadcrumbChapter.textContent = `${chapter.number}: ${chapter.title}`;
    breadcrumbLesson.textContent = `${lesson.number}: ${lesson.title}`;

    // Cập nhật Header
    lessonNumBadge.textContent = lesson.number;
    lessonTitleText.textContent = lesson.title;
    lessonVolumePill.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${chapter.volumeLabel}`;

    // Nút Prev / Next
    if (currentIndex > 0) {
      btnPrevLesson.disabled = false;
      btnPrevLesson.dataset.targetId = flatList[currentIndex - 1].lesson.id;
    } else {
      btnPrevLesson.disabled = true;
      btnPrevLesson.removeAttribute("data-target-id");
    }

    if (currentIndex < flatList.length - 1) {
      btnNextLesson.disabled = false;
      btnNextLesson.dataset.targetId = flatList[currentIndex + 1].lesson.id;
    } else {
      btnNextLesson.disabled = true;
      btnNextLesson.removeAttribute("data-target-id");
    }

    // Render Mục lục nhanh trong bài (Quick TOC)
    const sections = lesson.sections || [];
    if (sections.length > 0) {
      tocLinksList.innerHTML = sections.map((sec, idx) => `
        <a href="#sec-${idx + 1}" class="toc-link-item">Mục ${sec.num}. ${escapeHtml(sec.title)}</a>
      `).join("");
      document.getElementById("lessonQuickToc").style.display = "block";
    } else {
      document.getElementById("lessonQuickToc").style.display = "none";
    }

    // Render Tầng 3: Khung Mục lớn & Khung phụ a), b), c)...
    let sectionsHtml = "";

    // 0. THANH TIẾN ĐỘ HỌC TẬP (% PROGRESS BAR) & GAMIFICATION CHUẨN OLM
    if (lesson.isOlmInteractive) {
      sectionsHtml += `
        <div class="olm-progress-sticky-wrapper" id="olmStickyProgressBar">
          <div class="olm-progress-inner">
            <div class="olm-progress-meta-left">
              <span class="olm-badge-level"><i class="fa-solid fa-graduation-cap"></i> Tiến trình học tập số</span>
              <h4 class="olm-progress-title"><i class="fa-solid fa-list-check" style="color: #0284c7;"></i> Mức độ hoàn thành</h4>
            </div>
            <div class="olm-progress-track-wrap">
              <div class="olm-progress-track">
                <div class="olm-progress-fill" id="olmProgressFill" style="width: 0%;"></div>
              </div>
              <span class="olm-progress-percent" id="olmProgressPercent">0%</span>
            </div>
            <div class="olm-gamification-badges">
              <span class="olm-xp-pill" id="olmXpDisplay"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> 0 XP</span>
              <span class="olm-stars-pill" id="olmStarsDisplay"><i class="fa-solid fa-star" style="color: #8b5cf6;"></i> ⭐ 0</span>
            </div>
          </div>
        </div>
      `;
    }

    // Helper tạo hộp thoại âm thanh vàng đồng Thầy Sáng
    function renderTeacherGoldVoiceBoxHtml(btnTitle, scriptText, audioUrl, customId) {
      const idAttr = customId ? ` id="${customId}"` : "";
      return `
        <div class="teacher-voice-gold-box"${idAttr}>
          <div class="teacher-voice-gold-meta">
            <div class="teacher-voice-gold-avatar"><i class="fa-solid fa-chalkboard-user"></i></div>
            <div class="teacher-voice-gold-info">
              <span class="voice-ai-label">Giọng đọc AI của ThS. Lương Thanh Sáng</span>
              <span class="voice-audio-status">Trầm ấm, truyền cảm, chuẩn sư phạm</span>
            </div>
          </div>
          <div class="teacher-voice-gold-controls">
            <button class="btn-voice-gold-sang btn-play-gold-voice" data-audio="${audioUrl || ''}" data-script="${escapeHtml(scriptText || '')}">
              <i class="fa-solid fa-circle-play"></i> ${escapeHtml(btnTitle || 'Nghe thầy Sáng giảng bài')}
            </button>
            <button class="btn-voice-stop-sang btn-stop-gold-voice" title="Dừng phát">
              <i class="fa-solid fa-stop"></i> Dừng
            </button>
            <div class="voice-speed-pill-group">
              <button class="btn-speed-pill" data-speed="0.75">0.75x</button>
              <button class="btn-speed-pill active" data-speed="1.0">1.0x</button>
              <button class="btn-speed-pill" data-speed="1.25">1.25x</button>
              <button class="btn-speed-pill" data-speed="1.5">1.5x</button>
            </div>
          </div>
        </div>
      `;
    }

    // 1. Khung Lời chào sư phạm đầu giờ & Giọng đọc mục tiêu của Thầy Sáng
    if (lesson.teacherWelcome) {
      sectionsHtml += `
        <div class="teacher-welcome-card" id="lessonWelcomeCard">
          <div class="welcome-top-bar">
            <div class="teacher-badge-profile">
              <div class="avatar-ring-box">
                <i class="fa-solid fa-chalkboard-user"></i>
              </div>
              <div class="teacher-titles">
                <span class="welcome-heart-tag"><i class="fa-solid fa-heart" style="color: #ef4444;"></i> Lời chào sư phạm thân thương đầu giờ</span>
                <h3 class="teacher-display-name">ThS. Lương Thanh Sáng</h3>
                <p class="teacher-school-sub">Giáo viên Toán • Trường THPT Nguyễn Văn Thoại, An Giang</p>
              </div>
            </div>
          </div>

          <div class="welcome-quote-body">
            <i class="fa-solid fa-quote-left quote-corner-icon"></i>
            <p class="welcome-quote-msg">"${escapeHtml(lesson.teacherWelcome.greetingText)}"</p>
          </div>

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.teacherWelcome.buttonLabel || "Lời chào của thầy Sáng",
            lesson.teacherWelcome.greetingText,
            lesson.teacherWelcome.audioUrl || ""
          )}
        </div>
      `;
    }

    // 2. Khung Mục tiêu & Yêu cầu cần đạt bài học
    if (lesson.learningGoals && lesson.learningGoals.length > 0) {
      sectionsHtml += `
        <div class="lesson-goals-box">
          <h4><i class="fa-solid fa-bullseye"></i> Mục tiêu &amp; Yêu cầu cần đạt của bài học (Chuẩn SGK trang 51):</h4>
          <ul class="lesson-goals-list">
            ${lesson.learningGoals.map(g => `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${escapeHtml(g)}</li>`).join("")}
          </ul>
          ${renderTeacherGoldVoiceBoxHtml(
            lesson.goalsButtonLabel || "Giọng đọc AI của Thầy Sáng",
            lesson.learningGoals.join(". "),
            lesson.goalsAudioUrl || ""
          )}
        </div>
      `;
    }

    // 3. Khung Tình huống mở đầu thực tế (Hook)
    if (lesson.hook) {
      sectionsHtml += `
        <div class="lesson-hook-card">
          <div class="hook-badge"><i class="fa-solid fa-compass"></i> Tình huống thực tiễn mở đầu</div>
          <h3 class="hook-title">${escapeHtml(lesson.hook.title)}</h3>
          <p class="hook-story">${escapeHtml(lesson.hook.story)}</p>

          ${lesson.hook.illustration ? `
            <div class="lesson-illustration-box">
              <img src="${lesson.hook.illustration}" alt="${escapeHtml(lesson.hook.title)}" class="lesson-responsive-img">
              ${lesson.hook.illustrationCaption ? `<div class="img-caption"><i class="fa-solid fa-circle-info"></i> ${escapeHtml(lesson.hook.illustrationCaption)}</div>` : ''}
            </div>
          ` : ''}

          ${lesson.hook.question ? `
            <div class="hook-question-box">
              <i class="fa-solid fa-circle-question" style="color: #f59e0b; margin-right: 6px;"></i>
              <strong>Câu hỏi khơi gợi tư duy:</strong> ${escapeHtml(lesson.hook.question)}
            </div>
          ` : ''}

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.hook.buttonLabel || "Nghe thầy Sáng giảng bài",
            lesson.hook.story,
            lesson.hook.audioUrl || ""
          )}
        </div>
      `;
    }

    // 4. Khung Giọng giảng bài AI của ThS. Lương Thanh Sáng (Toàn bài có POI)
    if (lesson.interactiveAudio) {
      sectionsHtml += `
        <div class="olm-interactive-player-card" id="olmInteractivePlayer">
          <div class="olm-player-top-row">
            <div class="olm-teacher-avatar-badge">
              <div class="olm-teacher-avatar-circle">
                <i class="fa-solid fa-chalkboard-user"></i>
                <div class="olm-pulse-dot"></div>
              </div>
              <div class="olm-player-title-box">
                <h4><i class="fa-solid fa-headphones"></i> ${escapeHtml(lesson.interactiveAudio.title)}</h4>
                <p>Giọng AI ThS. Lương Thanh Sáng • Tích hợp các điểm dừng kiểm tra tư duy tự động (POI)</p>
              </div>
            </div>
          </div>
          <div class="olm-timeline-container">
            <div class="olm-audio-seekbar" id="olmAudioSeekbar" title="Nhấn để tua bài (bị khóa khi đến điểm dừng câu hỏi)">
              <div class="olm-audio-progress-bar" id="olmAudioProgress"></div>
              <div id="olmPoiMarkersContainer"></div>
            </div>
            <div class="olm-time-display">
              <span id="olmCurrentTime">00:00</span>
              <span id="olmDurationTime">00:00</span>
            </div>
          </div>
          <div class="olm-player-controls-row">
            <button class="olm-btn-play-interactive" id="olmBtnPlayInteractive">
              <i class="fa-solid fa-play"></i> Nghe Thầy Sáng giảng bài tương tác
            </button>
            <span style="font-size: 0.85rem; color: #94a3b8;"><i class="fa-solid fa-circle-info"></i> Audio sẽ tự động tạm dừng khi chạm các mốc tròn vàng để hỏi nhanh</span>
          </div>
        </div>

        <!-- MODAL CÂU HỎI TƯƠNG TÁC POI -->
        <div class="olm-poi-modal-backdrop" id="olmPoiModalBackdrop">
          <div class="olm-poi-modal-card">
            <div class="olm-poi-modal-header">
              <i class="fa-solid fa-circle-question"></i>
              <h3>Thầy Sáng hỏi nhanh: Kiểm tra mức độ tập trung</h3>
            </div>
            <div class="olm-poi-modal-body">
              <div class="olm-poi-question" id="olmPoiQuestionText"></div>
              <div class="olm-poi-options-list" id="olmPoiOptionsList"></div>
              <div class="olm-poi-feedback-box" id="olmPoiFeedbackBox"></div>
              <div class="olm-poi-modal-footer">
                <button class="olm-btn-resume" id="olmBtnResumeAudio" disabled>
                  <i class="fa-solid fa-forward"></i> Học tiếp bài giảng
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 5. Các Mục lớn và Tiểu mục chi tiết chuẩn SGK
    sections.forEach((sec, sIdx) => {
      const subsections = sec.subsections || [];
      const secAnchor = `sec-${sIdx + 1}`;

      sectionsHtml += `
        <!-- MỤC ${sec.num} -->
        <article class="lesson-section-card" id="${secAnchor}">
          <div class="section-card-header">
            <div class="section-title-wrap">
              <div class="section-num-circle">${escapeHtml(sec.num)}</div>
              <h2 class="section-heading-h2">${escapeHtml(sec.title)}</h2>
            </div>
          </div>
          <div class="section-body-wrap">
            ${subsections.map((sub, subIdx) => {
              const exId = `ex-sol-${sIdx}-${sub.key || subIdx}`;
              return `
              <!-- Khung phụ ${sub.key}) -->
              <div class="subsection-card">
                <div class="subsection-header">
                  <span class="sub-key-badge">${escapeHtml(sub.key)}</span>
                  <h3 class="subsection-heading-h3">${escapeHtml(sub.key)}) ${escapeHtml(sub.title)}</h3>
                </div>

                ${sub.contentHtml ? `
                  <div class="sub-rich-content">
                    ${sub.contentHtml}
                  </div>
                ` : `
                  <div class="lesson-placeholder-box">
                    <p>${escapeHtml(sub.summary || '')}</p>
                  </div>
                `}

                ${sub.audioUrl ? renderTeacherGoldVoiceBoxHtml(
                  sub.buttonLabel || "Nghe thầy Sáng giảng bài",
                  sub.summary || sub.title,
                  sub.audioUrl
                ) : ""}

                ${sub.workedExample ? `
                  <div class="worked-example-card">
                    <div class="worked-example-header">
                      <span class="example-pill"><i class="fa-solid fa-pencil"></i> ${escapeHtml(sub.workedExample.title || "Ví dụ minh họa")}</span>
                    </div>
                    <div class="example-problem">
                      <strong>Đề bài:</strong> ${sub.workedExample.problem}
                    </div>

                    <!-- Ghi chú sư phạm: Học sinh làm bài tập vào vở -->
                    <div class="student-task-note">
                      <div class="note-icon"><i class="fa-solid fa-pen-to-square"></i></div>
                      <div class="note-content">
                        <strong>Nhiệm vụ của học sinh:</strong>
                        <span>Các em hãy tạm dừng ít phút, lấy vở ghi bài tập và thước kẻ ra tự vẽ hình, giải bài tập này vào vở trước khi xem lời giải của Thầy nhé!</span>
                      </div>
                    </div>

                    <!-- Nút bấm ẩn/hiện lời giải chi tiết & Bài tập tương tự -->
                    <div class="solution-toggle-bar" style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-top: 12px;">
                      <button class="btn-toggle-solution" data-target="${exId}">
                        <i class="fa-solid fa-eye"></i> Lời giải chi tiết của thầy Sáng
                      </button>
                      ${sub.workedExample.similarProblem ? `
                        <button class="btn-toggle-solution btn-toggle-similar-style" data-target="${exId}-similar" style="background: linear-gradient(135deg, #059669, #10b981); color: #fff; border: none; border-radius: 8px; padding: 10px 18px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                          <i class="fa-solid fa-arrows-rotate"></i> Bài tập tương tự
                        </button>
                      ` : ''}
                    </div>

                    ${sub.workedExample.similarProblem ? `
                      <div class="solution-collapse-body" id="${exId}-similar" style="display: none; border-left: 4px solid #10b981; margin-top: 10px;">
                        <div class="solution-inner-wrap" style="background: #f0fdf4; padding: 16px; border-radius: 8px;">
                          <div class="solution-title-tag" style="color: #047857; font-weight: bold; margin-bottom: 8px;"><i class="fa-solid fa-pen-ruler"></i> Bài tập tương tự để học sinh tự rèn luyện:</div>
                          <div class="solution-content-text" style="color: #065f46;">${sub.workedExample.similarProblem}</div>
                        </div>
                      </div>
                    ` : ''}

                    <!-- Khung lời giải chi tiết (Mặc định ẩn) -->
                    <div class="solution-collapse-body" id="${exId}" style="display: none;">
                      <div class="solution-inner-wrap">
                        <div class="solution-title-tag"><i class="fa-solid fa-circle-check text-success"></i> Lời giải chi tiết chuẩn SGK:</div>
                        <div class="solution-content-text">${sub.workedExample.solution}</div>

                        ${sub.workedExample.teacherGuidance ? `
                          <div class="teacher-thinking-note">
                            <div class="thinking-title"><i class="fa-solid fa-lightbulb"></i> Lời khuyên của Thầy Sáng:</div>
                            <p>${escapeHtml(sub.workedExample.teacherGuidance)}</p>
                          </div>
                        ` : ""}
                      </div>
                    </div>
                  </div>
                ` : ""}

              </div>
              `;
            }).join("")}
          </div>
        </article>
      `;
    });

    // 6. Khung Vận dụng thực tế: Chốt bài học
    if (lesson.realworldWrapup) {
      const wrapupSolId = "wrapup-sol-body";
      sectionsHtml += `
        <div class="realworld-wrapup-card">
          <div class="wrapup-header">
            <span class="wrapup-badge"><i class="fa-solid fa-compass"></i> Chốt bài học</span>
            <h3 class="wrapup-title">${escapeHtml(lesson.realworldWrapup.title || "QUAY LẠI GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG MỞ ĐẦU")}</h3>
          </div>

          <div class="wrapup-recap-box">
            <div class="recap-label"><i class="fa-solid fa-rotate-left"></i> Nhắc lại bài toán mở đầu:</div>
            <p class="recap-text">${escapeHtml(lesson.realworldWrapup.recap)}</p>
          </div>

          <div class="solution-toggle-bar" style="margin: 14px 0;">
            <button class="btn-toggle-solution" data-target="${wrapupSolId}">
              <i class="fa-solid fa-eye"></i> Xem lời giải chi tiết của Thầy Sáng
            </button>
          </div>

          <div class="solution-collapse-body" id="${wrapupSolId}" style="display: none;">
            <div class="solution-inner-wrap">
              <div class="wrapup-solution-box">
                <h4 class="wrapup-solution-head"><i class="fa-solid fa-chalkboard-user"></i> Mô hình hóa Toán học &amp; Lời giải chi tiết của Thầy Sáng:</h4>
                <div class="wrapup-solution-content">
                  ${lesson.realworldWrapup.solution}
                </div>
              </div>
            </div>
          </div>

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.realworldWrapup.buttonLabel || "Nghe thầy Sáng giảng bài",
            lesson.realworldWrapup.recap,
            lesson.realworldWrapup.audioUrl || ""
          )}
        </div>
      `;
    }

    // 7. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN 3 DẠNG THỨC THI MỚI 2025)
    if (lesson.examFormatPractice) {
      const ef = lesson.examFormatPractice;
      sectionsHtml += `
        <div class="exam-format-wrap" id="examFormatPracticeSection">
          <div class="exam-format-main-title">
            <i class="fa-solid fa-file-signature" style="font-size: 1.4rem; color: #fef08a;"></i>
            <h3>${escapeHtml(ef.title || "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)")}</h3>
          </div>

          <!-- DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU) -->
          ${ef.part1MultipleChoice && ef.part1MultipleChoice.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-list-ol" style="color: #0284c7;"></i> DẠNG 1. CÂU HỎI TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 câu cốt lõi - Nhận biết)</h4>
              </div>
              <div class="exam-list-mc">
                ${ef.part1MultipleChoice.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge"><i class="fa-solid fa-circle-question"></i> Câu ${q.num}</span>
                      <div class="exam-item-actions-bar">
                        ${q.similarVariation ? `
                          <button class="btn-dynamic-param-btn" data-qid="${q.id}" title="Đổi sang câu hỏi tương tự với số liệu mới">
                            <i class="fa-solid fa-shuffle"></i> Bài toán tương tự
                          </button>
                        ` : ''}
                        <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                          <i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết
                        </button>
                      </div>
                    </div>
                    <div class="exam-item-prompt" id="prompt-${q.id}">${q.prompt}</div>
                    <div class="checkpoint-options-grid" id="options-${q.id}" style="margin-top: 12px;">
                      ${q.options.map((opt, oIdx) => `
                        <button class="btn-cp-opt" data-correct="${oIdx === q.correctIndex}" data-qid="${q.id}">
                          ${opt}
                        </button>
                      `).join("")}
                    </div>
                    <div class="exam-solution-collapse" id="sol-${q.id}">
                      <strong>Lời giải chi tiết của Thầy Sáng:</strong><br>
                      ${q.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (3 CÂU) -->
          ${ef.part2TrueFalse && ef.part2TrueFalse.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-square-check" style="color: #059669;"></i> DẠNG 2. CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (3 câu cốt lõi - Thông hiểu)</h4>
              </div>
              <div class="exam-list-tf">
                ${ef.part2TrueFalse.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #dcfce7; color: #15803d;"><i class="fa-solid fa-circle-question"></i> Câu ${q.num}</span>
                      <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                        <i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết
                      </button>
                    </div>
                    <div class="exam-item-prompt">${q.prompt}</div>
                    <table class="tf-4part-table">
                      <thead>
                        <tr>
                          <th style="width: 75%;">Ý mệnh đề</th>
                          <th style="width: 25%; text-align: center;">Khẳng định của em</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${q.items.map((it, iIdx) => `
                          <tr class="tf-item-row" data-qid="${q.id}" data-item-idx="${iIdx}" data-correct="${it.isTrue}">
                            <td><strong>${it.label})</strong> ${it.text}</td>
                            <td style="text-align: center;">
                              <button class="btn-tf-toggle" data-val="true" style="margin-right: 6px;">Đ</button>
                              <button class="btn-tf-toggle" data-val="false">S</button>
                            </td>
                          </tr>
                        `).join("")}
                      </tbody>
                    </table>
                    <div style="text-align: right; margin-top: 10px;">
                      <button class="btn-check-tf-group" data-qid="${q.id}" style="background: #059669; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; cursor: pointer;">
                        <i class="fa-solid fa-check"></i> Kiểm tra câu ${q.num}
                      </button>
                    </div>
                    <div class="exam-solution-collapse" id="sol-${q.id}">
                      <strong>Lời giải chi tiết của Thầy Sáng:</strong><br>
                      ${q.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU) -->
          ${ef.part3ShortAnswer && ef.part3ShortAnswer.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-pen-clip" style="color: #d97706;"></i> DẠNG 3. CÂU HỎI TRẢ LỜI NGẮN (2 câu Toán thực tế - Vận dụng)</h4>
              </div>
              <div class="exam-list-sa">
                ${ef.part3ShortAnswer.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #fef3c7; color: #b45309;"><i class="fa-solid fa-circle-question"></i> Câu ${q.num}</span>
                      <div class="exam-item-actions-bar">
                        ${q.similarVariation ? `
                          <button class="btn-dynamic-param-btn" data-qid="${q.id}" title="Đổi sang bài toán tương tự với số liệu mới">
                            <i class="fa-solid fa-shuffle"></i> Bài toán tương tự
                          </button>
                        ` : ''}
                        <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                          <i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết
                        </button>
                      </div>
                    </div>
                    <div class="exam-item-prompt" id="prompt-${q.id}">${q.prompt}</div>
                    <div class="short-ans-row">
                      <label style="font-weight: 700; color: #1e293b;">Đáp số của em:</label>
                      <input type="text" class="short-ans-input" id="input-${q.id}" placeholder="Nhập số..." data-ans="${q.correctAnswer}">
                      <span style="font-weight: 700; color: #64748b;">${q.unit || ''}</span>
                      <button class="btn-check-short-ans" data-qid="${q.id}">
                        <i class="fa-solid fa-check"></i> Trả lời
                      </button>
                      <span class="sa-feedback-badge" id="feedback-${q.id}" style="display: none; font-weight: 700;"></span>
                    </div>
                    <div class="exam-solution-collapse" id="sol-${q.id}">
                      <strong>Lời giải chi tiết của Thầy Sáng:</strong><br>
                      ${q.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 7. Khung Bài tập tương tác đa dạng (Interactive Challenges & Activities)
    const challenges = lesson.interactiveChallenges || lesson.interactiveActivities || [];
    if (challenges.length > 0) {
      sectionsHtml += `
        <div class="interactive-section-wrap" id="interactivePracticeArea">
          <div class="interactive-main-title">
            <i class="fa-solid fa-gamepad" style="color: #0284c7;"></i>
            <span>Không Gian Rèn Luyện &amp; Thử Thách Tương Tác Trực Tuyến</span>
          </div>

          ${challenges.map((act, aIdx) => {
            if (act.type === "quiz" || act.type === "multiple_choice") {
              const correctIdx = act.correctIndex !== undefined ? act.correctIndex : act.correctAnswerIndex;
              return `
                <div class="quiz-card" data-act-idx="${aIdx}">
                  <div class="quiz-card-header">
                    <i class="fa-solid fa-circle-check" style="color: #0284c7;"></i> ${escapeHtml(act.title)}
                  </div>
                  <div class="quiz-question-text">${act.question}</div>
                  <div class="quiz-options-list">
                    ${act.options.map((opt, optIdx) => `
                      <button class="btn-quiz-option" data-opt-idx="${optIdx}" data-correct="${optIdx === correctIdx}">
                        ${opt}
                      </button>
                    `).join("")}
                  </div>
                  <div class="quiz-feedback-box" id="feedback-mc-${aIdx}">
                    <p style="margin: 0;"><strong>Giải thích chi tiết:</strong> ${escapeHtml(act.explanation)}</p>
                  </div>
                </div>
              `;
            } else if (act.type === "matching") {
              return `
                <div class="quiz-card" data-act-idx="${aIdx}" id="matchingGameCard">
                  <div class="quiz-card-header">
                    <i class="fa-solid fa-link" style="color: #059669;"></i> ${escapeHtml(act.title)}
                  </div>
                  <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 12px;">${escapeHtml(act.instruction)}</p>
                  <div class="matching-board">
                    <div class="matching-col col-left" id="matchColLeft">
                      ${act.pairs.map((p, pIdx) => `
                        <div class="btn-match-item left-item" data-pair-idx="${pIdx}">
                          <span style="color: #0284c7; font-weight: 800; margin-right: 6px;">[${pIdx + 1}]</span>
                          ${p.left}
                        </div>
                      `).join("")}
                    </div>
                    <div class="matching-col col-right" id="matchColRight">
                      ${[...act.pairs].sort(() => 0.5 - Math.random()).map((p, pIdx) => `
                        <div class="btn-match-item right-item" data-match-text="${escapeHtml(p.right)}">
                          <span style="color: #059669; font-weight: 800; margin-right: 6px;">[&#10004;]</span>
                          ${p.right}
                        </div>
                      `).join("")}
                    </div>
                  </div>
                  <div class="matching-status-bar" id="matchStatusBar" style="margin-top: 14px; font-weight: 600; color: #0284c7;">
                    Nhấn vào 1 ô ở Cột A, sau đó nhấn ô tương ứng ở Cột B để nối cặp!
                  </div>
                </div>
              `;
            } else if (act.type === "true_false") {
              return `
                <div class="quiz-card" data-act-idx="${aIdx}" id="trueFalseCard">
                  <div class="quiz-card-header">
                    <i class="fa-solid fa-list-check" style="color: #d97706;"></i> ${escapeHtml(act.title)}
                  </div>
                  <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 12px;">${escapeHtml(act.instruction)}</p>
                  <table class="true-false-table">
                    <thead>
                      <tr>
                        <th style="width: 70%;">Mệnh đề khẳng định</th>
                        <th style="text-align: center; width: 15%;">Đúng</th>
                        <th style="text-align: center; width: 15%;">Sai</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${act.statements.map((st, stIdx) => `
                        <tr class="tf-row" data-st-idx="${stIdx}" data-is-true="${st.isTrue}">
                          <td>
                            <div class="tf-text">${st.text}</div>
                            <div class="tf-explain-text" style="display: none; font-size: 0.85rem; color: #059669; margin-top: 4px;">
                              <em>${escapeHtml(st.explain)}</em>
                            </div>
                          </td>
                          <td style="text-align: center;">
                            <button class="btn-tf-choice" data-choice="true">Đ</button>
                          </td>
                          <td style="text-align: center;">
                            <button class="btn-tf-choice" data-choice="false">S</button>
                          </td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                  <div style="margin-top: 14px; text-align: right;">
                    <button class="btn-submit-tf" id="btnCheckTrueFalse" style="padding: 8px 18px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                      <i class="fa-solid fa-check"></i> Kiểm tra kết quả
                    </button>
                  </div>
                </div>
              `;
            }
            return "";
          }).join("")}
        </div>
      `;
    }

    // 7b. KHUNG LUYỆN TẬP THÍCH ỨNG 4 MỨC ĐỘ & ĐỔI SỐ TỰ ĐỘNG CHUẨN OLM
    if (lesson.isOlmInteractive) {
      sectionsHtml += `
        <div class="olm-adaptive-wrapper" id="olmAdaptiveArea">
          <div class="olm-adaptive-header">
            <div class="olm-adaptive-title">
              <i class="fa-solid fa-brain"></i>
              <h3>Luyện tập thích ứng thông minh (Tự động đổi dữ kiện không học vẹt)</h3>
            </div>
            <div class="olm-level-tabs">
              <button class="olm-tab-level active" data-level="1">Mức độ 1 (Nhận biết)</button>
              <button class="olm-tab-level" data-level="2">Mức độ 2 (Thông hiểu)</button>
              <button class="olm-tab-level" data-level="3">Mức độ 3 (Vận dụng)</button>
              <button class="olm-tab-level" data-level="4">Mức độ 4 (Vận dụng cao)</button>
            </div>
          </div>
          <div class="olm-question-card" id="olmAdaptiveQuestionCard">
            <!-- Được render động bởi olm-lesson-engine.js -->
          </div>
        </div>
      `;
    }

    sectionsContainer.innerHTML = sectionsHtml;

    // Kích hoạt MathJax hiển thị công thức Toán
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([sectionsContainer]).catch(err => console.warn("MathJax error:", err));
    }

    // Gắn sự kiện Giọng đọc AI & Các bài tập tương tác
    bindDigitalLessonEvents(sectionsContainer);

    // Kích hoạt OLM Interactive Engine nếu bài học có tính năng OLM tương tác
    if (lesson.isOlmInteractive && typeof window.initOlmLessonEngine === 'function') {
      window.initOlmLessonEngine(lesson);
    }

    // Cập nhật URL trình duyệt (không tải lại trang)
    try {
      const newUrl = `${window.location.pathname}?grade=${currentGrade}&lesson=${currentLessonId}`;
      window.history.replaceState({ grade: currentGrade, lesson: currentLessonId }, "", newUrl);
    } catch (e) {
      // bỏ qua lỗi nếu ở file:// protocol
    }
  }

  // Chọn bài học mới
  function selectLesson(lessonId) {
    currentLessonId = lessonId;
    renderSidebar();
    renderLessonViewer();

    // Ẩn sidebar trên mobile sau khi chọn bài
    if (window.innerWidth <= 992) {
      sidebarEl.classList.remove("mobile-open");
    }

    // Cuộn mượt tới khung bài học
    const viewer = document.getElementById("lessonDetailViewer");
    if (viewer) {
      viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // GẮN SỰ KIỆN TẦNG 1: CHỌN KHỐI LỚP
  gradeCards.forEach(card => {
    card.addEventListener("click", () => {
      const selectedGrade = card.dataset.grade;
      if (selectedGrade !== currentGrade) {
        currentGrade = selectedGrade;
        currentSearch = "";
        searchInput.value = "";
        currentVolume = "all";
        volButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.vol === "all"));
        currentLessonId = getDefaultLessonId(currentGrade);

        updateGradeTabUI();
        renderSidebar();
        renderLessonViewer();
      }
    });
  });

  // GẮN SỰ KIỆN: LỌC TẬP
  volButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      volButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentVolume = btn.dataset.vol;
      renderSidebar();
    });
  });

  // GẮN SỰ KIỆN: TÌM KIẾM BÀI HỌC
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderSidebar();
    });
  }

  // GẮN SỰ KIỆN NÚT PREV / NEXT
  btnPrevLesson.addEventListener("click", () => {
    const targetId = btnPrevLesson.dataset.targetId;
    if (targetId) selectLesson(targetId);
  });

  btnNextLesson.addEventListener("click", () => {
    const targetId = btnNextLesson.dataset.targetId;
    if (targetId) selectLesson(targetId);
  });

  // GẮN SỰ KIỆN: TOGGLE SIDEBAR TRÊN MOBILE
  if (mobileToggleBtn && sidebarEl) {
    mobileToggleBtn.addEventListener("click", () => {
      sidebarEl.classList.toggle("mobile-open");
    });
  }

  // =========================================================================
  // BỘ TỔNG HỢP GIỌNG GIẢNG BÀI AI THẦY SÁNG (CHUẨN 100% TIẾNG VIỆT TỰ NHIÊN)
  // =========================================================================
  let currentUtterance = null;
  let activeVoicePlayer = null;
  let currentSpeed = 1.0;
  let audioQueue = [];
  let audioIndex = 0;
  let isSpeechActive = false;
  let keepAliveTimer = null;
  let cachedVoices = [];

  function updateVoices() {
    if ("speechSynthesis" in window) {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    }
  }

  if ("speechSynthesis" in window) {
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }

  function getVietnameseVoice() {
    if ((!cachedVoices || cachedVoices.length === 0) && "speechSynthesis" in window) {
      updateVoices();
    }
    if (!cachedVoices || cachedVoices.length === 0) return null;

    // Ưu tiên 1: Giọng tiếng Việt chất lượng cao (Google tiếng Việt, Edge Natural Online)
    let v = cachedVoices.find(voice => {
      const n = (voice.name || "").toLowerCase();
      const l = (voice.lang || "").toLowerCase();
      return (l === "vi-vn" || l === "vi_vn" || l.startsWith("vi")) &&
             (n.includes("natural") || n.includes("online") || n.includes("google") || n.includes("namminh") || n.includes("hoaimy"));
    });
    if (v) return v;

    // Ưu tiên 2: Bất kỳ giọng nào có mã ngôn ngữ vi hoặc vi-VN
    v = cachedVoices.find(voice => {
      const l = (voice.lang || "").toLowerCase();
      return l === "vi-vn" || l === "vi_vn" || l.startsWith("vi");
    });
    if (v) return v;

    // Ưu tiên 3: Tên giọng có chứa các từ khóa tiếng Việt
    v = cachedVoices.find(voice => {
      const n = (voice.name || "").toLowerCase();
      return n.includes("vietnam") || n.includes("tiếng việt") || n.includes("vietnamese");
    });
    return v || null;
  }

  function startKeepAlive() {
    stopKeepAlive();
    keepAliveTimer = setInterval(() => {
      if (window.speechSynthesis && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);
  }

  function stopKeepAlive() {
    if (keepAliveTimer) {
      clearInterval(keepAliveTimer);
      keepAliveTimer = null;
    }
  }

  function mathToVietnameseSpeech(text) {
    if (!text) return "";
    let s = text;
    // Bỏ thẻ HTML
    s = s.replace(/<[^>]+>/g, " ");
    // Chuyển ký hiệu Toán học sang lời phát biểu tiếng Việt chuẩn mực của Thầy Sáng
    s = s.replace(/\\vec\{0\}/g, " vectơ-không ");
    s = s.replace(/\\vec\{([A-Za-z0-9]+)\}/g, " vectơ $1 ");
    s = s.replace(/\\vec\s+([A-Za-z0-9]+)/g, " vectơ $1 ");
    s = s.replace(/\|\\vec\{([^}]+)\}\|/g, " độ dài vectơ $1 ");
    s = s.replace(/\|\\vec\s+([^|]+)\|/g, " độ dài vectơ $1 ");
    s = s.replace(/\\parallel/g, " song song với ");
    s = s.replace(/\/\//g, " song song với ");
    s = s.replace(/\\not\\subset/g, " không nằm trong ");
    s = s.replace(/\\subset/g, " nằm trong ");
    s = s.replace(/\\cap/g, " giao với ");
    s = s.replace(/\\cup/g, " hợp với ");
    s = s.replace(/\\emptyset/g, " tập rỗng ");
    s = s.replace(/\\perp/g, " vuông góc với ");
    s = s.replace(/\\cdot/g, " nhân vô hướng với ");
    s = s.replace(/\\cos/g, " cô-sin ");
    s = s.replace(/\\sin/g, " sin ");
    s = s.replace(/\\tan/g, " tang ");
    s = s.replace(/\\cot/g, " cô-tang ");
    s = s.replace(/\\widehat\{([^}]+)\}/g, " góc $1 ");
    s = s.replace(/\\alpha/g, " an-pha ");
    s = s.replace(/\\beta/g, " bê-ta ");
    s = s.replace(/\\gamma/g, " gam-ma ");
    s = s.replace(/\\varphi/g, " phi ");
    s = s.replace(/\\sqrt\{([^}]+)\}/g, " căn bậc hai của $1 ");
    s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, " $1 phần $2 ");
    s = s.replace(/\^2/g, " bình phương ");
    s = s.replace(/\^3/g, " lập phương ");
    s = s.replace(/\^\\circ/g, " độ ");
    s = s.replace(/\^\circ/g, " độ ");
    s = s.replace(/\\ge/g, " lớn hơn hoặc bằng ");
    s = s.replace(/\\le/g, " nhỏ hơn hoặc bằng ");
    s = s.replace(/\\ne/g, " khác ");
    s = s.replace(/\\implies/g, " suy ra ");
    s = s.replace(/\\iff/g, " khi và chỉ khi ");
    s = s.replace(/\\times/g, " nhân ");
    s = s.replace(/\\pm/g, " cộng trừ ");
    s = s.replace(/[\$\{\}\_]/g, " ");
    s = s.replace(/\\/g, " ");
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }

  let currentHtml5Audio = null;

  function stopTeacherSpeech() {
    if (currentHtml5Audio) {
      try {
        currentHtml5Audio.pause();
        currentHtml5Audio.currentTime = 0;
      } catch (e) {}
      currentHtml5Audio = null;
    }
    stopKeepAlive();
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    isSpeechActive = false;
    audioQueue = [];
    audioIndex = 0;

    if (activeVoicePlayer) {
      activeVoicePlayer.classList.remove("playing");
      const playBtn = activeVoicePlayer.querySelector(".btn-voice-play, #btnPlayTeacherWelcome, .btn-play-welcome-voice, .btn-mini-voice-play, .btn-wrapup-voice-play");
      if (playBtn) {
        if (playBtn.id === "btnPlayTeacherWelcome" || playBtn.classList.contains("btn-play-welcome-voice")) {
          playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i> Nghe Thầy Sáng chào lớp &amp; hướng dẫn mục tiêu';
        } else if (playBtn.classList.contains("btn-wrapup-voice-play")) {
          playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i> Nghe Thầy Sáng phân tích ý nghĩa thực tế của bài học';
        } else if (playBtn.classList.contains("btn-voice-play") && playBtn.id === "btnPlayMainVoice") {
          playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Nghe Thầy Sáng giảng bài';
        } else {
          playBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Nghe giảng';
        }
      }
      activeVoicePlayer = null;
    }
  }

  function chunkTextForTTS(text, maxLength = 120) {
    const rawSentences = text.match(/[^.!?;\n]+[.!?;\n]*/g) || [text];
    const chunks = [];
    let cur = "";

    for (let s of rawSentences) {
      s = s.trim();
      if (!s) continue;
      if ((cur + " " + s).length <= maxLength) {
        cur = cur ? (cur + " " + s) : s;
      } else {
        if (cur) chunks.push(cur);
        if (s.length <= maxLength) {
          cur = s;
        } else {
          const parts = s.split(/([,]+)/);
          let sub = "";
          for (let p of parts) {
            p = p.trim();
            if (!p) continue;
            if ((sub + " " + p).length <= maxLength) {
              sub = sub ? (sub + " " + p) : p;
            } else {
              if (sub) chunks.push(sub);
              sub = p;
            }
          }
          cur = sub;
        }
      }
    }
    if (cur) chunks.push(cur);
    return chunks.filter(c => c.length > 0);
  }

  function playTeacherSpeech(rawText, playerElement, speed = 1.0, audioUrl = null) {
    if (activeVoicePlayer === playerElement && isSpeechActive) {
      stopTeacherSpeech();
      return;
    }

    stopTeacherSpeech();

    // Tự động tìm thuộc tính data-audio từ nút bấm hoặc khung bao quanh
    if (!audioUrl && playerElement) {
      const btn = playerElement.querySelector("[data-audio]");
      if (btn && btn.dataset.audio) {
        audioUrl = btn.dataset.audio;
      } else if (playerElement.dataset.audio) {
        audioUrl = playerElement.dataset.audio;
      }
    }

    activeVoicePlayer = playerElement;
    activeVoicePlayer.classList.add("playing");
    isSpeechActive = true;

    const playBtn = activeVoicePlayer.querySelector(".btn-voice-play, #btnPlayTeacherWelcome, .btn-play-welcome-voice, .btn-mini-voice-play, .btn-wrapup-voice-play");
    if (playBtn) {
      playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i> Tạm dừng bài giảng';
    }

    // 1. NẾU CÓ TỆP MP3 THỰC TẾ (GIỌNG NAM MINH CHUẨN SƯ PHẠM ĐƯỢC TÍCH HỢP SẴN)
    if (audioUrl) {
      try {
        currentHtml5Audio = new Audio(audioUrl);
        currentHtml5Audio.playbackRate = speed;
        
        currentHtml5Audio.onended = () => {
          stopTeacherSpeech();
        };

        currentHtml5Audio.onerror = (e) => {
          console.warn("HTML5 audio playback failed, falling back to Web Speech:", e);
          currentHtml5Audio = null;
          startWebSpeechSynthesis(rawText, speed);
        };

        const playPromise = currentHtml5Audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.warn("HTML5 audio play blocked, falling back to Web Speech:", e);
            currentHtml5Audio = null;
            startWebSpeechSynthesis(rawText, speed);
          });
        }
        return;
      } catch (e) {
        console.warn("Cannot create HTML5 Audio, fallback to Web Speech:", e);
        currentHtml5Audio = null;
      }
    }

    // 2. NẾU KHÔNG CÓ TỆP MP3: DÙNG BỘ MÁY WEB SPEECH API CHUẨN HÓA TIẾNG VIỆT
    startWebSpeechSynthesis(rawText, speed);
  }

  function startWebSpeechSynthesis(rawText, speed = 1.0) {
    const spokenText = mathToVietnameseSpeech(rawText);
    if (!spokenText) {
      stopTeacherSpeech();
      return;
    }

    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt chưa hỗ trợ công nghệ Web Speech. Quý Thầy Cô và các em học sinh vui lòng mở trang web trên Google Chrome hoặc Microsoft Edge để lắng nghe giọng đọc Thầy Sáng nhé!");
      stopTeacherSpeech();
      return;
    }

    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    audioQueue = chunkTextForTTS(spokenText, 120);
    audioIndex = 0;
    startKeepAlive();

    function speakNextChunk() {
      if (!isSpeechActive || audioIndex >= audioQueue.length) {
        stopTeacherSpeech();
        return;
      }

      const chunk = audioQueue[audioIndex];
      const utter = new SpeechSynthesisUtterance(chunk);
      utter.lang = "vi-VN";
      utter.rate = speed;
      utter.pitch = 0.95;

      const viVoice = getVietnameseVoice();
      if (viVoice) {
        utter.voice = viVoice;
      }

      utter.onend = () => {
        if (!isSpeechActive) return;
        audioIndex++;
        speakNextChunk();
      };

      utter.onerror = (e) => {
        console.warn("Speech chunk warning:", e);
        if (!isSpeechActive) return;
        audioIndex++;
        speakNextChunk();
      };

      currentUtterance = utter;
      window.speechSynthesis.speak(utter);
    }

    speakNextChunk();
  }

  function bindDigitalLessonEvents(container) {
    // 0. XỬ LÝ HỘP PHÁT ÂM THANH VÀNG ĐỒNG THẦY SÁNG (GIỌNG ĐỌC AI CỦA THS. LƯƠNG THANH SÁNG)
    container.querySelectorAll(".btn-play-gold-voice").forEach(btn => {
      btn.addEventListener("click", () => {
        const script = btn.dataset.script;
        const audioUrl = btn.dataset.audio || "";
        const parentBox = btn.closest(".teacher-voice-gold-box") || btn;
        playTeacherSpeech(script, parentBox, currentSpeed, audioUrl);
      });
    });

    container.querySelectorAll(".btn-stop-gold-voice").forEach(btn => {
      btn.addEventListener("click", () => {
        stopTeacherSpeech();
      });
    });

    container.querySelectorAll(".voice-speed-pill-group .btn-speed-pill").forEach(sb => {
      sb.addEventListener("click", function () {
        const group = this.closest(".voice-speed-pill-group");
        if (group) group.querySelectorAll(".btn-speed-pill").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentSpeed = parseFloat(this.dataset.speed);
        if (currentHtml5Audio && isSpeechActive) {
          currentHtml5Audio.playbackRate = currentSpeed;
        }
      });
    });

    // 0b. XỬ LÝ CÂU HỎI CHECKPOINT TRONG TIỂU MỤC & TRẮC NGHIỆM DẠNG 1 PHẦN IV
    container.querySelectorAll(".btn-cp-opt").forEach(btn => {
      btn.addEventListener("click", function () {
        const isCorrect = this.dataset.correct === "true";
        const parentCard = this.closest(".sub-checkpoint-card") || this.closest(".exam-item-card");
        if (!parentCard) return;

        const allOpts = parentCard.querySelectorAll(".btn-cp-opt");
        if (isCorrect) {
          this.classList.add("selected-correct");
          allOpts.forEach(b => b.disabled = true);
          const feedback = parentCard.querySelector(".checkpoint-feedback") || parentCard.querySelector(".exam-solution-collapse");
          if (feedback) feedback.classList.add("show");
          if (typeof window.triggerConfettiFireworks === "function") window.triggerConfettiFireworks();
          if (typeof window.showToast === "function") window.showToast("🎉 Chính xác! Thầy khen em đã trả lời rất chuẩn!", "success");
        } else {
          this.classList.add("selected-wrong");
          if (typeof window.showToast === "function") window.showToast("Chưa chính xác rồi! Em hãy suy nghĩ và chọn lại nhé!", "warning");
        }
      });
    });

    // 0c. XỬ LÝ NÚT ẨN/HIỆN LỜI GIẢI CHI TIẾT TRONG PHẦN IV
    container.querySelectorAll(".btn-show-solution-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const targetId = this.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.classList.toggle("show");
          if (targetEl.classList.contains("show")) {
            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Đóng lời giải';
            if (window.MathJax && window.MathJax.typesetPromise) {
              window.MathJax.typesetPromise([targetEl]).catch(e => console.warn(e));
            }
          } else {
            this.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết';
          }
        }
      });
    });

    // 0d. XỬ LÝ NÚT BÀI TOÁN TƯƠNG TỰ (DYNAMIC PARAMETERS)
    container.querySelectorAll(".btn-dynamic-param-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const qid = this.dataset.qid;
        let foundQ = null;

        // Tìm trong bài học hiện tại hoặc qua toàn bộ dữ liệu bài học đã nạp
        const allLessons = [
          window.LESSON_10_C4_B7_DATA,
          window.LESSON_10_C4_B8_DATA,
          window.LESSON_11_C4_B11_DATA,
          window.LESSON_11_C4_B12_DATA,
          window.LESSON_12_C2_B6_DATA,
          window.LESSON_12_C2_B7_DATA
        ].filter(Boolean);

        for (let i = 0; i < allLessons.length; i++) {
          const ef = allLessons[i].examFormatPractice;
          if (ef) {
            foundQ = (ef.part1MultipleChoice || []).find(q => q.id === qid) || (ef.part3ShortAnswer || []).find(q => q.id === qid);
            if (foundQ) break;
          }
        }

        if (foundQ && foundQ.similarVariation) {
          const sim = foundQ.similarVariation;
          const promptEl = document.getElementById(`prompt-${qid}`);
          if (promptEl) promptEl.innerHTML = sim.prompt;
          const cardEl = document.getElementById(`card-${qid}`);
          if (cardEl) {
            if (sim.options) {
              const optsEl = document.getElementById(`options-${qid}`);
              if (optsEl) {
                optsEl.innerHTML = sim.options.map((opt, oIdx) => `
                  <button class="btn-cp-opt" data-correct="${oIdx === sim.correctIndex}" data-qid="${qid}">
                    ${opt}
                  </button>
                `).join("");
                bindDigitalLessonEvents(cardEl);
              }
            }
            if (sim.correctAnswer) {
              const inputEl = document.getElementById(`input-${qid}`);
              if (inputEl) {
                inputEl.value = "";
                inputEl.dataset.ans = sim.correctAnswer;
              }
            }
            const solEl = document.getElementById(`sol-${qid}`);
            if (solEl) solEl.innerHTML = `<strong>Lời giải bài toán tương tự của Thầy Sáng:</strong><br>${sim.solution}`;
          }
          if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([cardEl]);
          if (typeof window.showToast === "function") window.showToast("🔄 Đã đổi sang bài toán tương tự với số liệu mới!", "info");
        }
      });
    });

    // 0e. XỬ LÝ TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (DẠNG 2)
    container.querySelectorAll(".btn-tf-toggle").forEach(btn => {
      btn.addEventListener("click", function () {
        const row = this.closest(".tf-item-row");
        if (row) {
          row.querySelectorAll(".btn-tf-toggle").forEach(b => b.classList.remove("selected-true", "selected-false"));
          const val = this.dataset.val === "true";
          this.classList.add(val ? "selected-true" : "selected-false");
          row.dataset.userChoice = val ? "true" : "false";
        }
      });
    });

    container.querySelectorAll(".btn-check-tf-group").forEach(btn => {
      btn.addEventListener("click", function () {
        const qid = this.dataset.qid;
        const card = document.getElementById(`card-${qid}`);
        if (!card) return;
        const rows = card.querySelectorAll(".tf-item-row");
        let allAnswered = true;
        let allCorrect = true;
        rows.forEach(r => {
          const userChoice = r.dataset.userChoice;
          const correctChoice = r.dataset.correct;
          if (userChoice === undefined) allAnswered = false;
          if (userChoice !== correctChoice) allCorrect = false;
        });

        if (!allAnswered) {
          if (typeof window.showToast === "function") window.showToast("Em hãy chọn đầy đủ Đúng hoặc Sai cho cả 4 ý nhé!", "warning");
          return;
        }

        if (allCorrect) {
          rows.forEach(r => r.style.backgroundColor = "#f0fdf4");
          if (typeof window.triggerConfettiFireworks === "function") window.triggerConfettiFireworks();
          if (typeof window.showToast === "function") window.showToast("🎉 Xuất sắc! Em đã phán đoán chính xác cả 4 ý!", "success");
        } else {
          rows.forEach(r => {
            const isMatch = r.dataset.userChoice === r.dataset.correct;
            r.style.backgroundColor = isMatch ? "#f0fdf4" : "#fef2f2";
          });
          if (typeof window.showToast === "function") window.showToast("Có ý chưa đúng, em hãy xem gợi ý hoặc lời giải chi tiết nhé!", "warning");
        }
      });
    });

    // 0f. XỬ LÝ TRẮC NGHIỆM TRẢ LỜI NGẮN SỐ HỌC (DẠNG 3)
    container.querySelectorAll(".btn-check-short-ans").forEach(btn => {
      btn.addEventListener("click", function () {
        const qid = this.dataset.qid;
        const input = document.getElementById(`input-${qid}`);
        const feedback = document.getElementById(`feedback-${qid}`);
        if (!input) return;
        const val = input.value.trim().replace(",", ".");
        const correct = input.dataset.ans.trim();
        if (!val) {
          if (typeof window.showToast === "function") window.showToast("Em hãy nhập đáp số trước khi bấm kiểm tra nhé!", "warning");
          return;
        }

        if (feedback) feedback.style.display = "inline-block";
        if (val === correct) {
          if (feedback) {
            feedback.innerHTML = '<span style="color: #16a34a;"><i class="fa-solid fa-circle-check"></i> Chính xác!</span>';
          }
          input.style.borderColor = "#16a34a";
          if (typeof window.triggerConfettiFireworks === "function") window.triggerConfettiFireworks();
          if (typeof window.showToast === "function") window.showToast("🎉 Xuất sắc! Đáp số hoàn toàn chính xác!", "success");
        } else {
          if (feedback) {
            feedback.innerHTML = '<span style="color: #dc2626;"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng, thử lại!</span>';
          }
          input.style.borderColor = "#dc2626";
          if (typeof window.showToast === "function") window.showToast("Đáp số chưa chính xác, em hãy kiểm tra lại phép tính nhé!", "warning");
        }
      });
    });

    // 1. Lời chào sư phạm đầu giờ từ Thầy Sáng
    const welcomeCard = container.querySelector("#lessonWelcomeCard");
    if (welcomeCard) {
      const btnPlay = welcomeCard.querySelector("#btnPlayTeacherWelcome");
      const btnStop = welcomeCard.querySelector("#btnStopTeacherWelcome");
      const script = btnPlay ? btnPlay.dataset.script : "";
      const audioUrl = btnPlay ? btnPlay.dataset.audio : "";
      const speedBtns = welcomeCard.querySelectorAll(".btn-speed");

      if (btnPlay) {
        btnPlay.addEventListener("click", () => {
          playTeacherSpeech(script, welcomeCard, currentSpeed, audioUrl);
        });
      }
      if (btnStop) {
        btnStop.addEventListener("click", () => {
          stopTeacherSpeech();
        });
      }
      speedBtns.forEach(sb => {
        sb.addEventListener("click", () => {
          speedBtns.forEach(b => b.classList.remove("active"));
          sb.classList.add("active");
          currentSpeed = parseFloat(sb.dataset.speed);
          if (currentHtml5Audio && isSpeechActive) {
            currentHtml5Audio.playbackRate = currentSpeed;
          } else if (activeVoicePlayer === welcomeCard && isSpeechActive) {
            playTeacherSpeech(script, welcomeCard, currentSpeed, audioUrl);
          }
        });
      });
    }

    // 2. Voice Player Chính
    const mainVoice = container.querySelector("#mainVoicePlayer");
    if (mainVoice) {
      const btnPlay = mainVoice.querySelector("#btnPlayMainVoice");
      const btnStop = mainVoice.querySelector("#btnStopMainVoice");
      const btnToggle = mainVoice.querySelector("#btnToggleTranscript");
      const transcriptDrawer = mainVoice.querySelector("#mainVoiceTranscript");
      const speedBtns = mainVoice.querySelectorAll(".btn-speed");
      const scriptText = mainVoice.dataset.script;
      const audioUrl = mainVoice.dataset.audio || "";

      if (btnPlay) {
        btnPlay.addEventListener("click", () => {
          playTeacherSpeech(scriptText, mainVoice, currentSpeed, audioUrl);
        });
      }

      if (btnStop) {
        btnStop.addEventListener("click", () => {
          stopTeacherSpeech();
        });
      }

      if (btnToggle && transcriptDrawer) {
        btnToggle.addEventListener("click", () => {
          transcriptDrawer.classList.toggle("open");
          btnToggle.classList.toggle("active");
        });
      }

      speedBtns.forEach(sb => {
        sb.addEventListener("click", () => {
          speedBtns.forEach(b => b.classList.remove("active"));
          sb.classList.add("active");
          currentSpeed = parseFloat(sb.dataset.speed);
          if (currentHtml5Audio && isSpeechActive) {
            currentHtml5Audio.playbackRate = currentSpeed;
          } else if (activeVoicePlayer === mainVoice && isSpeechActive) {
            playTeacherSpeech(scriptText, mainVoice, currentSpeed, audioUrl);
          }
        });
      });
    }

    // 3. Mini Voice Players trong từng tiểu mục
    container.querySelectorAll(".btn-mini-voice-play").forEach(btn => {
      btn.addEventListener("click", () => {
        const script = btn.dataset.script;
        const audioUrl = btn.dataset.audio || "";
        const parentBox = btn.closest(".mini-voice-lecture-box") || btn.closest(".worked-example-card") || btn;
        playTeacherSpeech(script, parentBox, currentSpeed, audioUrl);
      });
    });

    // 4. Wrapup Voice Player (Vận dụng thực tế)
    const wrapupCard = container.querySelector(".realworld-wrapup-card");
    if (wrapupCard) {
      const btnWrapup = wrapupCard.querySelector(".btn-wrapup-voice-play");
      if (btnWrapup) {
        btnWrapup.addEventListener("click", () => {
          const script = btnWrapup.dataset.script;
          const audioUrl = btnWrapup.dataset.audio || "";
          playTeacherSpeech(script, wrapupCard, currentSpeed, audioUrl);
        });
      }
    }

    // 5. Nút ẩn / hiện lời giải chi tiết của các Ví dụ
    container.querySelectorAll(".btn-toggle-solution").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const solEl = document.getElementById(targetId);
        if (!solEl) return;

        const isHidden = solEl.style.display === "none" || !solEl.style.display;
        const isSimilar = btn.classList.contains("btn-toggle-similar-style");
        if (isHidden) {
          solEl.style.display = "block";
          btn.innerHTML = isSimilar ? '<i class="fa-solid fa-eye-slash"></i> Đóng bài tập tương tự' : '<i class="fa-solid fa-eye-slash"></i> Đóng lời giải chi tiết';
          btn.classList.add("active-toggle");
          if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([solEl]).catch(e => console.warn(e));
          }
        } else {
          solEl.style.display = "none";
          btn.innerHTML = isSimilar ? '<i class="fa-solid fa-arrows-rotate"></i> Bài tập tương tự' : '<i class="fa-solid fa-eye"></i> Lời giải chi tiết của thầy Sáng';
          btn.classList.remove("active-toggle");
        }
      });
    });

    // 6. Bài tập trắc nghiệm 4 lựa chọn (Instant Feedback)
    container.querySelectorAll(".btn-quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".quiz-card");
        if (!card) return;

        const isCorrect = btn.dataset.correct === "true";
        const allBtns = card.querySelectorAll(".btn-quiz-option");
        allBtns.forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === "true") {
            b.classList.add("btn-option-correct");
          }
        });

        if (!isCorrect) {
          btn.classList.add("btn-option-wrong");
        }

        const actIdx = card.dataset.actIdx;
        const feedbackEl = card.querySelector(`#feedback-mc-${actIdx}`);
        if (feedbackEl) {
          feedbackEl.style.display = "block";
          if (isCorrect) {
            feedbackEl.style.borderColor = "#10b981";
            feedbackEl.style.background = "#f0fdf4";
          } else {
            feedbackEl.style.borderColor = "#ef4444";
            feedbackEl.style.background = "#fef2f2";
          }
        }
      });
    });

    // 7. Bàn cờ nối cột khái niệm (Matching Board)
    const matchCard = container.querySelector("#matchingGameCard");
    if (matchCard) {
      let selectedLeft = null;
      const leftItems = matchCard.querySelectorAll(".left-item");
      const rightItems = matchCard.querySelectorAll(".right-item");
      const statusBar = matchCard.querySelector("#matchStatusBar");

      leftItems.forEach(item => {
        item.addEventListener("click", () => {
          if (item.classList.contains("matched")) return;
          leftItems.forEach(l => l.classList.remove("selected"));
          item.classList.add("selected");
          selectedLeft = item;
          if (statusBar) statusBar.innerHTML = `Đã chọn: "<strong>${item.textContent.trim()}</strong>". Hãy nhấn ô tương ứng ở Cột B!`;
        });
      });

      rightItems.forEach(item => {
        item.addEventListener("click", () => {
          if (!selectedLeft || item.classList.contains("matched")) return;

          const leftIdx = parseInt(selectedLeft.dataset.pairIdx, 10);
          const pairs = (lesson.interactiveChallenges || lesson.interactiveActivities || [])
            .find(a => a.type === "matching")?.pairs || [];

          if (pairs[leftIdx] && item.dataset.matchText === pairs[leftIdx].right) {
            selectedLeft.classList.remove("selected");
            selectedLeft.classList.add("matched");
            item.classList.add("matched");
            selectedLeft = null;

            const remaining = matchCard.querySelectorAll(".left-item:not(.matched)").length;
            if (remaining === 0) {
              if (statusBar) statusBar.innerHTML = `🎉 <strong>Tuyệt vời!</strong> Em đã ghép đúng 100% tất cả các cặp khái niệm!`;
            } else {
              if (statusBar) statusBar.innerHTML = `✅ Ghép nối chính xác! Còn ${remaining} cặp nữa, cố lên em!`;
            }
          } else {
            item.classList.add("shake-wrong");
            setTimeout(() => item.classList.remove("shake-wrong"), 500);
            if (statusBar) statusBar.innerHTML = `❌ Chưa chính xác rồi, em hãy thử nối lại với ô khác nhé!`;
          }
        });
      });
    }

    // 8. Bảng Khảo sát Đúng / Sai 4 ý (True / False Table)
    const tfCard = container.querySelector("#trueFalseCard");
    if (tfCard) {
      const rows = tfCard.querySelectorAll(".tf-row");
      const btnCheckTF = tfCard.querySelector("#btnCheckTrueFalse");

      rows.forEach(row => {
        const choiceBtns = row.querySelectorAll(".btn-tf-choice");
        choiceBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            choiceBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            row.dataset.userChoice = btn.dataset.choice;
          });
        });
      });

      if (btnCheckTF) {
        btnCheckTF.addEventListener("click", () => {
          let correctCount = 0;
          rows.forEach(row => {
            const isTrue = row.dataset.isTrue === "true";
            const userChoice = row.dataset.userChoice;
            const explainEl = row.querySelector(".tf-explain-text");
            if (explainEl) explainEl.style.display = "block";

            if (userChoice !== undefined) {
              const userBool = userChoice === "true";
              if (userBool === isTrue) {
                row.style.background = "#f0fdf4";
                correctCount++;
              } else {
                row.style.background = "#fef2f2";
              }
            }
          });
          alert(`Thầy Sáng chúc mừng em đã hoàn thành! Em đã trả lời đúng ${correctCount}/${rows.length} mệnh đề.`);
        });
      }
    }
  }

  

  // Khởi chạy hiển thị ban đầu
  updateGradeTabUI();
  renderSidebar();
  renderLessonViewer();
}



