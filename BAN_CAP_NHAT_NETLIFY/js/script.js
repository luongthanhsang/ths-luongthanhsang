/**
 * SCRIPT ÄIá»€U KHIá»‚N WEBSITE TOÃN THS. LÆ¯Æ NG THANH SÃNG
 * ====================================================================
 * Bao gá»“m cÃ¡c tÃ­nh nÄƒng:
 * 1. Thanh Ä‘iá»u hÆ°á»›ng, cuá»™n mÆ°á»£t vÃ  Menu Mobile
 * 2. Kho tÃ i liá»‡u: Lá»c theo khá»‘i, lá»c phÃ¢n mÃ´n, tÃ¬m kiáº¿m, xem PDF modal, táº£i vá»
 * 3. Há»‡ thá»‘ng thi tráº¯c nghiá»‡m online: Báº¥m giá», cháº¥m Ä‘iá»ƒm, hiá»ƒn thá»‹ MathJax, xem lá»i giáº£i
 * 4. Form gá»­i tháº¯c máº¯c bÃ i táº­p cho Tháº§y SÃ¡ng
 * 5. Toast thÃ´ng bÃ¡o vÃ  nÃºt Cuá»™n lÃªn Ä‘áº§u trang
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
 * Tá»± Ä‘á»™ng tÃ­nh toÃ¡n vÃ  hiá»ƒn thá»‹ nÄƒm há»c hiá»‡n táº¡i theo lá»‹ch thá»±c táº¿ (lá»‹ch váº¡n niÃªn):
 * - NÄƒm há»c á»Ÿ Viá»‡t Nam tÃ­nh tá»« thÃ¡ng 8 nÄƒm trÆ°á»›c Ä‘áº¿n háº¿t thÃ¡ng 7 nÄƒm sau.
 * - VÃ­ dá»¥: Tá»« thÃ¡ng 08/2026 Ä‘áº¿n thÃ¡ng 07/2027 => NÄƒm há»c 2026 - 2027.
 * - Tá»± Ä‘á»™ng cáº­p nháº­t cho cÃ¡c nÄƒm tiáº¿p theo (2027 - 2028, 2028 - 2029...) mÃ  khÃ´ng cáº§n sá»­a code.
 */
function initDynamicSchoolYear() {
  try {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1 -> 12

    // NÄƒm há»c chuáº©n 2026 - 2027 theo yÃªu cáº§u cá»§a Tháº§y SÃ¡ng,
    // vÃ  tá»± Ä‘á»™ng tÄƒng theo lá»‹ch váº¡n niÃªn khi bÆ°á»›c sang cÃ¡c nÄƒm há»c tiáº¿p theo (2027 - 2028, 2028 - 2029...)
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
    console.warn("Lá»—i cáº­p nháº­t nÄƒm há»c tá»± Ä‘á»™ng:", err);
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

  // Äá»•i bÃ³ng header khi cuá»™n trang
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

    // ÄÃ³ng menu khi click vÃ o báº¥t ká»³ link nÃ o
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

  // Highlight menu má»¥c Ä‘ang xem khi cuá»™n trang
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
   2. KHO TÃ€I LIá»†U (DOCUMENT REPOSITORY & PDF PREVIEW MODAL)
   ========================================================================== */
let currentGradeFilter = "all";
let currentCategoryFilter = "all";
let currentSearchKeyword = "";

function initDocumentRepository() {
  const grid = document.getElementById("documentsGrid");
  if (!grid) return;

  renderDocuments();

  // Sá»± kiá»‡n chá»n tab Khá»‘i lá»›p (10, 11, 12, táº¥t cáº£)
  const gradeTabBtns = document.querySelectorAll(".grade-tab-btn");
  gradeTabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      gradeTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGradeFilter = btn.getAttribute("data-grade");
      renderDocuments();
    });
  });

  // Sá»± kiá»‡n chá»n lá»c chuyÃªn Ä‘á» bá»™ mÃ´n
  const categoryFilterBtns = document.querySelectorAll(".filter-pill");
  categoryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.getAttribute("data-category");
      renderDocuments();
    });
  });

  // Sá»± kiá»‡n tÃ¬m kiáº¿m tÃ i liá»‡u theo tá»« khÃ³a
  const searchInput = document.getElementById("docSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchKeyword = e.target.value.trim().toLowerCase();
      renderDocuments();
    });
  }

  // Khá»Ÿi táº¡o cÃ¡c sá»± kiá»‡n cá»§a Modal xem file trá»±c tiáº¿p
  initPreviewModal();
}

// HÃ m há»— trá»£ lá»c ngoÃ i menu gá»i nhanh tá»« Footer hoáº·c cÃ¡c nÃºt liÃªn káº¿t
window.filterByGrade = function(grade) {
  const gradeTabBtns = document.querySelectorAll(".grade-tab-btn");
  gradeTabBtns.forEach(btn => {
    if (btn.getAttribute("data-grade") === grade) {
      btn.click();
    }
  });
};

window.filterByCategory = function(category) {
  // Äáº·t láº¡i lá»c khá»‘i vá» táº¥t cáº£
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
    grid.innerHTML = "<p class='no-doc-found'>Dá»¯ liá»‡u tÃ i liá»‡u Ä‘ang Ä‘Æ°á»£c cáº­p nháº­t...</p>";
    return;
  }

  // Lá»c theo Khá»‘i, ChuyÃªn Ä‘á» vÃ  Tá»« khÃ³a tÃ¬m kiáº¿m
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
        <h3>KhÃ´ng tÃ¬m tháº¥y tÃ i liá»‡u phÃ¹ há»£p</h3>
        <p>Tháº§y SÃ¡ng Ä‘ang biÃªn soáº¡n thÃªm. Tháº§y hoáº·c cÃ¡c em cÃ³ thá»ƒ thá»­ Ä‘á»•i tá»« khÃ³a tÃ¬m kiáº¿m hoáº·c chá»n khá»‘i lá»›p khÃ¡c nhÃ©!</p>
      </div>
    `;
    return;
  }

  // Render cÃ¡c tháº» tÃ i liá»‡u
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
                <span class="doc-grade-badge">Khá»‘i ${doc.grade}</span>
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
              <i class="fa-solid fa-eye"></i> Xem trá»±c tiáº¿p
            </button>
            <a href="${doc.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-download" onclick="handleDocDownload('${escapeHtml(doc.title)}')">
              <i class="fa-solid fa-download"></i> Táº£i vá» mÃ¡y
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Khá»Ÿi táº¡o Modal xem PDF trá»±c tiáº¿p
function initPreviewModal() {
  const modal = document.getElementById("pdfPreviewModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal || !closeBtn) return;

  // ÄÃ³ng modal báº±ng nÃºt X
  closeBtn.addEventListener("click", closeDocPreview);

  // ÄÃ³ng modal khi báº¥m vÃ o vÃ¹ng ná»n Ä‘en má»
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeDocPreview();
    }
  });

  // ÄÃ³ng modal khi báº¥m phÃ­m ESC trÃªn bÃ n phÃ­m
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeDocPreview();
    }
  });
}

// HÃ m tá»± Ä‘á»™ng chuáº©n hÃ³a link Google Drive thÃ nh link preview nhÃºng trá»±c tiáº¿p
function formatDrivePreviewUrl(url) {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

// Má»Ÿ modal xem tÃ i liá»‡u trá»±c tiáº¿p
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

  // Hiá»ƒn thá»‹ khung xem tÃ i liá»‡u:
  modalBody.innerHTML = `
    <div style="width:100%; height:100%; display:flex; flex-direction:column;">
      <iframe 
        src="${previewSrc}" 
        style="width:100%; height:100%; border:none; background:#ffffff;" 
        allow="autoplay"
        title="${escapeHtml(doc.title)}"
      ></iframe>
      <div style="padding: 8px 16px; background: #e2e8f0; font-size: 0.8rem; color: #475569; display: flex; justify-content: space-between; align-items: center;">
        <span><i class="fa-solid fa-info-circle"></i> TÃ i liá»‡u: ${escapeHtml(doc.title)} (Khá»‘i ${doc.grade} - ${doc.pages} trang)</span>
        <span>Náº¿u khung xem trÆ°á»›c khÃ´ng táº£i Ä‘Æ°á»£c do cháº·n bÃªn ngoÃ i, vui lÃ²ng báº¥m nÃºt "Táº£i vá» mÃ¡y" á»Ÿ gÃ³c pháº£i</span>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // NgÄƒn cuá»™n trang phÃ­a sau
};

window.closeDocPreview = function() {
  const modal = document.getElementById("pdfPreviewModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = ""; // KhÃ´i phá»¥c cuá»™n trang
  if (modalBody) {
    modalBody.innerHTML = ""; // Dá»n sáº¡ch iframe trÃ¡nh cháº¡y ná»n
  }
};

window.handleDocDownload = function(docTitle) {
  showToast(`Äang chuyá»ƒn Ä‘áº¿n liÃªn káº¿t táº£i tÃ i liá»‡u: "${docTitle}"`, "info");
};

/* ==========================================================================
   3. KHU Vá»°C THI TRáº®C NGHIá»†M ONLINE (QUIZ SYSTEM) - TOÃN 11 & TOÃN 12
   ========================================================================== */
let currentExamId = "11_GK1_TK5"; // Máº·c Ä‘á»‹nh táº£i lÃªn Ä‘á» ToÃ¡n 11 má»›i nháº¥t (TK5)
let currentQuizMode = "all";       // 'all', 'part1', 'part2', 'part3'
let activeQuizQuestions = [];       // Danh sÃ¡ch cÃ¢u há»i Ä‘ang lÃ m
let userAnswersPart1 = {};          // { "1": "C", "2": "A", ... }
let userAnswersPart2 = {};          // { "1": { "a": true, "b": false, ... }, ... }
let userAnswersPart3 = {};          // { "20": { text: "...", images: [] }, "21": ... }
let essayGradeResults = {};         // LÆ°u káº¿t quáº£ cháº¥m tá»± luáº­n tá»± Ä‘á»™ng { 20: {...}, 21: {...} }
let quizTimerInterval = null;
let secondsRemaining = 90 * 60;
let totalQuizSeconds = 90 * 60;
let isQuizSubmitted = false;
let isShowingAllSolutions = false;
let isExamStarted = false;          // Tráº¡ng thÃ¡i Ä‘Ã£ báº¥m "Báº¯t Ä‘áº§u lÃ m bÃ i" hay chÆ°a

// Gáº¯n cÃ¡c biáº¿n vÃ o window Ä‘á»ƒ tiá»‡n truy cáº­p toÃ n cá»¥c
window.currentExamId = currentExamId;
window.isExamStarted = isExamStarted;
window.activeQuizQuestions = activeQuizQuestions;

function initQuizSystem() {
  const quizContainer = document.getElementById("quizQuestionsContainer");
  if (!quizContainer) return; // Chá»‰ khá»Ÿi Ä‘á»™ng khi Ä‘ang á»Ÿ trang tráº¯c nghiá»‡m

  updateModeButtonsLabels();
  loadQuestionsForMode(currentQuizMode);
  setupQuizModeButtons();

  // NÃºt ná»™p bÃ i
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.onclick = () => confirmAndSubmitQuiz();
  }

  // NÃºt xÃ³a lá»±a chá»n
  const btnReset = document.getElementById("btnResetCurrent");
  if (btnReset) {
    btnReset.onclick = () => resetCurrentAnswers();
  }

  // NÃºt xem lá»i giáº£i chi tiáº¿t
  const btnToggleSolutions = document.getElementById("btnToggleAllSolutions");
  if (btnToggleSolutions) {
    btnToggleSolutions.onclick = () => toggleAllSolutions();
  }

  // NÃºt lÃ m láº¡i bÃ i thi
  const btnRetake = document.getElementById("btnRetakeQuiz");
  if (btnRetake) {
    btnRetake.onclick = () => retakeQuiz();
  }
}

// Chuyá»ƒn Ä‘á»•i giá»¯a cÃ¡c bá»™ Ä‘á» thi (ToÃ¡n 11 & ToÃ¡n 12)
window.switchExam = function(examId) {
  if (typeof EXAMS_DATABASE === "undefined" || !EXAMS_DATABASE[examId]) return;

  if (!isQuizSubmitted && isExamStarted && (Object.keys(userAnswersPart1).length + Object.keys(userAnswersPart2).length + Object.keys(userAnswersPart3).length > 0)) {
    if (!confirm("Chuyá»ƒn Ä‘á» thi sáº½ lÃ m má»›i cÃ¡c cÃ¢u tráº£ lá»i cá»§a Ä‘á» hiá»‡n táº¡i. Em cÃ³ cháº¯c cháº¯n muá»‘n chuyá»ƒn khÃ´ng?")) {
      return;
    }
  }

  currentExamId = examId;
  window.currentExamId = examId;
  const exam = EXAMS_DATABASE[examId];

  // Cáº­p nháº­t tráº¡ng thÃ¡i active cá»§a nÃºt chá»n Ä‘á»
  document.querySelectorAll(".exam-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-exam") === examId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateModeButtonsLabels();
  loadQuestionsForMode(currentQuizMode);
  showToast(`ÄÃ£ chá»n: ${exam.config.title}`, "info");
};

// Cáº­p nháº­t nhÃ£n vÃ  mÃ´ táº£ trÃªn cÃ¡c nÃºt cháº¿ Ä‘á»™ thi (Pháº§n I, II, III)
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
    if (btnAll) btnAll.innerHTML = '<i class="fa-solid fa-file-lines"></i> Cáº£ Ä‘á» thi (21 cÃ¢u - 90 phÃºt)';
    if (btnP1) btnP1.innerHTML = '<i class="fa-solid fa-list-check"></i> Pháº§n I: Tráº¯c nghiá»‡m (16 cÃ¢u - 4.0Ä‘)';
    if (btnP2) btnP2.innerHTML = '<i class="fa-solid fa-square-check"></i> Pháº§n II: ÄÃºng / Sai (3 cÃ¢u - 3.0Ä‘)';
    if (btnP3) btnP3.innerHTML = '<i class="fa-solid fa-pen-nib"></i> Pháº§n III: Tá»± luáº­n (2 cÃ¢u - 3.0Ä‘)';
  } else {
    if (btnAll) btnAll.innerHTML = '<i class="fa-solid fa-file-lines"></i> Cáº£ Ä‘á» thi (22 cÃ¢u - 90 phÃºt)';
    if (btnP1) btnP1.innerHTML = '<i class="fa-solid fa-list-check"></i> Pháº§n I: Tráº¯c nghiá»‡m (12 cÃ¢u - 3.0Ä‘)';
    if (btnP2) btnP2.innerHTML = '<i class="fa-solid fa-square-check"></i> Pháº§n II: ÄÃºng / Sai (4 cÃ¢u - 4.0Ä‘)';
    if (btnP3) btnP3.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Pháº§n III: Tráº£ lá»i ngáº¯n (6 cÃ¢u - 3.0Ä‘)';
  }
}

// Cáº­p nháº­t báº£ng thÃ´ng bÃ¡o khá»Ÿi Ä‘á»™ng vÃ  nÃºt Báº¯t Ä‘áº§u lÃ m bÃ i
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
  if (timeEl) timeEl.textContent = `${timeMins} phÃºt`;
  if (countEl) countEl.textContent = `${countQ} cÃ¢u`;

  // ThÃªm tráº¡ng thÃ¡i chá» vÃ o vÃ¹ng cÃ¢u há»i
  const container = document.getElementById("quizQuestionsContainer");
  if (container) container.classList.add("exam-waiting");

  const paletteBar = document.querySelector(".quiz-palette-bar");
  if (paletteBar) paletteBar.classList.add("exam-waiting");
}

// KÃ­ch hoáº¡t lÃ m bÃ i khi há»c sinh nháº¥n "Báº®T Äáº¦U LÃ€M BÃ€I"
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
  if (timerTextEl) timerTextEl.textContent = "Thá»i gian cÃ²n láº¡i";

  startQuizTimer();
  showToast("ðŸš€ ÄÃ£ báº¯t Ä‘áº§u tÃ­nh giá» lÃ m bÃ i! ChÃºc em lÃ m bÃ i tháº­t tá»‘t!", "info");

  // Cuá»™n mÆ°á»£t xuá»‘ng cÃ¢u há»i Ä‘áº§u tiÃªn
  const firstQ = document.querySelector(".question-card");
  if (firstQ) {
    firstQ.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Cáº¥u hÃ¬nh danh sÃ¡ch cÃ¢u há»i vÃ  thá»i gian theo tá»«ng cháº¿ Ä‘á»™
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
    totalQuizSeconds = 45 * 60; // 45 phÃºt
    const maxScoreP1 = currentExamId.startsWith("11_") ? "4.0 Ä‘iá»ƒm" : "3.0 Ä‘iá»ƒm";
    if (timeLabel) timeLabel.textContent = `45 phÃºt (Pháº§n I: ${exam.part1.length} cÃ¢u tráº¯c nghiá»‡m - ${maxScoreP1})`;
    if (titleDisplay) titleDisplay.textContent = `Pháº§n I: CÃ¢u Há»i Tráº¯c Nghiá»‡m Nhiá»u PhÆ°Æ¡ng Ãn (${exam.config.title})`;
  } else if (mode === "part2") {
    activeQuizQuestions = exam.part2;
    totalQuizSeconds = 25 * 60; // 25 phÃºt
    const maxScoreP2 = currentExamId.startsWith("11_") ? "3.0 Ä‘iá»ƒm" : "4.0 Ä‘iá»ƒm";
    if (timeLabel) timeLabel.textContent = `25 phÃºt (Pháº§n II: ${exam.part2.length} cÃ¢u ÄÃºng / Sai - ${maxScoreP2})`;
    if (titleDisplay) titleDisplay.textContent = `Pháº§n II: CÃ¢u Há»i Tráº¯c Nghiá»‡m ÄÃºng / Sai (${exam.config.title})`;
  } else if (mode === "part3") {
    activeQuizQuestions = exam.part3;
    totalQuizSeconds = (currentExamId.startsWith("11_") ? 20 : 25) * 60;
    const p3Type = currentExamId.startsWith("11_") ? "Tá»± luáº­n" : "Tráº£ lá»i ngáº¯n";
    if (timeLabel) timeLabel.textContent = `${currentExamId.startsWith("11_") ? "20" : "25"} phÃºt (Pháº§n III: ${exam.part3.length} cÃ¢u ${p3Type} - 3.0 Ä‘iá»ƒm)`;
    if (titleDisplay) titleDisplay.textContent = `Pháº§n III: CÃ¢u Há»i ${p3Type} (${exam.config.title})`;
  } else {
    // Cháº¿ Ä‘á»™: ToÃ n bá»™ Ä‘á» thi (Cáº£ 3 pháº§n)
    activeQuizQuestions = [...exam.part1, ...exam.part2, ...exam.part3];
    totalQuizSeconds = 90 * 60; // 90 phÃºt chuáº©n
    if (timeLabel) timeLabel.textContent = `90 phÃºt (Cáº£ Ä‘á» thi gá»“m 3 pháº§n - ${exam.config.totalQuestions} cÃ¢u)`;
    if (titleDisplay) titleDisplay.textContent = exam.config.title;
  }

  secondsRemaining = totalQuizSeconds;

  // áº¨n báº£ng káº¿t quáº£ cÅ©
  const resultCard = document.getElementById("quizResultCard");
  if (resultCard) resultCard.classList.remove("active");

  // Má»Ÿ khÃ³a nÃºt ná»™p bÃ i
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Ná»™p bÃ i thi';
  }

  // Äáº·t láº¡i Ä‘á»“ng há»“ Ä‘áº¿m ngÆ°á»£c vÃ  tráº¡ng thÃ¡i chá» báº¥m "Báº¯t Ä‘áº§u lÃ m bÃ i"
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
  if (timerTextEl) timerTextEl.textContent = "Chá» báº¯t Ä‘áº§u";

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
        if (!confirm("Chuyá»ƒn cháº¿ Ä‘á»™ sáº½ lÃ m má»›i cÃ¡c cÃ¢u tráº£ lá»i hiá»‡n táº¡i. Em cÃ³ cháº¯c cháº¯n muá»‘n chuyá»ƒn khÃ´ng?")) {
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

// Äá»“ng há»“ Ä‘áº¿m ngÆ°á»£c
function startQuizTimer() {
  const clockDisplay = document.getElementById("quizClock");
  if (!clockDisplay) return;

  clearInterval(quizTimerInterval);
  updateClockDisplay(clockDisplay, secondsRemaining);

  quizTimerInterval = setInterval(() => {
    if (secondsRemaining <= 0) {
      clearInterval(quizTimerInterval);
      showToast("ÄÃ£ háº¿t thá»i gian lÃ m bÃ i! Há»‡ thá»‘ng Ä‘ang tá»± Ä‘á»™ng ná»™p bÃ i...", "warning");
      submitQuiz(true);
      return;
    }

    secondsRemaining--;
    updateClockDisplay(clockDisplay, secondsRemaining);

    // Cáº£nh bÃ¡o khi cÃ²n dÆ°á»›i 3 phÃºt
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

// Render danh sÃ¡ch cÃ¢u há»i
function renderQuizQuestions() {
  const container = document.getElementById("quizQuestionsContainer");
  if (!container) return;

  let html = "";
  let lastPart = null;

  activeQuizQuestions.forEach((q, index) => {
    const qPart = q.part || "I";
    const qKey = `${qPart}_${q.id}`;

    // Render Banner phÃ¢n tÃ¡ch tá»«ng pháº§n khi chuyá»ƒn pháº§n
    if (currentQuizMode === "all" && qPart !== lastPart) {
      lastPart = qPart;
      if (qPart === "I") {
        const count = currentExamId.startsWith("11_") ? "tá»« cÃ¢u 1 Ä‘áº¿n cÃ¢u 16" : "tá»« cÃ¢u 1 Ä‘áº¿n cÃ¢u 12";
        const score = currentExamId.startsWith("11_") ? "Tá»‘i Ä‘a 4,0 Ä‘iá»ƒm" : "Tá»‘i Ä‘a 3,0 Ä‘iá»ƒm";
        html += `
          <div class="quiz-part-banner">
            <h4>PHáº¦N I. CÃ‚U TRáº®C NGHIá»†M NHIá»€U PHÆ¯Æ NG ÃN Lá»°A CHá»ŒN</h4>
            <p>ThÃ­ sinh tráº£ lá»i ${count}. Má»—i cÃ¢u há»i chá»‰ chá»n má»™t phÆ°Æ¡ng Ã¡n Ä‘Ãºng (Má»—i cÃ¢u 0,25 Ä‘iá»ƒm - ${score}).</p>
          </div>
        `;
      } else if (qPart === "II") {
        const count = currentExamId.startsWith("11_") ? "tá»« cÃ¢u 17 Ä‘áº¿n cÃ¢u 19" : "tá»« cÃ¢u 1 Ä‘áº¿n cÃ¢u 4";
        const score = currentExamId.startsWith("11_") ? "Tá»‘i Ä‘a 3,0 Ä‘iá»ƒm" : "Tá»‘i Ä‘a 4,0 Ä‘iá»ƒm";
        html += `
          <div class="quiz-part-banner" style="border-left-color: #38bdf8;">
            <h4>PHáº¦N II. CÃ‚U TRáº®C NGHIá»†M ÄÃšNG SAI</h4>
            <p>ThÃ­ sinh tráº£ lá»i ${count}. Trong má»—i Ã½ a), b), c), d) á»Ÿ má»—i cÃ¢u, thÃ­ sinh chá»n Ä‘Ãºng (Ä) hoáº·c sai (S) (${score}).</p>
          </div>
        `;
      } else if (qPart === "III") {
        if (currentExamId.startsWith("11_")) {
          html += `
            <div class="quiz-part-banner" style="border-left-color: #10b981;">
              <h4>PHáº¦N III. CÃ‚U Tá»° LUáº¬N</h4>
              <p>ThÃ­ sinh giáº£i chi tiáº¿t cÃ¢u 20 vÃ  21 (Má»—i cÃ¢u 1,5 Ä‘iá»ƒm - Tá»‘i Ä‘a 3,0 Ä‘iá»ƒm). ThÃ­ sinh cÃ³ thá»ƒ ghi nhÃ¡p vÃ o Ã´ bÃªn dÆ°á»›i, Ä‘á»‘i chiáº¿u lá»i giáº£i vÃ  barem tá»«ng bÆ°á»›c cá»§a Tháº§y SÃ¡ng sau khi ná»™p bÃ i.</p>
            </div>
          `;
        } else {
          html += `
            <div class="quiz-part-banner" style="border-left-color: #4ade80;">
              <h4>PHáº¦N III. CÃ‚U TRáº®C NGHIá»†M TRáº¢ Lá»œI NGáº®N</h4>
              <p>ThÃ­ sinh tráº£ lá»i tá»« cÃ¢u 1 Ä‘áº¿n cÃ¢u 6. ThÃ­ sinh giáº£i toÃ¡n vÃ  Ä‘iá»n Ä‘Ã¡p sá»‘ vÃ o Ã´ trá»‘ng (Má»—i cÃ¢u 0,5 Ä‘iá»ƒm - Tá»‘i Ä‘a 3,0 Ä‘iá»ƒm).</p>
            </div>
          `;
        }
      }
    }

    // Card cÃ¢u há»i
    html += `
      <div class="question-item-card" id="question-card-${qKey}" data-part="${qPart}" data-qid="${q.id}">
        <div class="question-header">
          <span class="q-badge">
            <i class="fa-solid fa-circle-question"></i> CÃ¢u ${q.id} (Pháº§n ${qPart})
          </span>
          <span class="q-topic">${escapeHtml(q.topic || "")}</span>
        </div>

        <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>

        ${q.svg ? `<div class="tikz-diagram-wrapper">${q.svg}</div>` : ""}

        <!-- Khung tÆ°Æ¡ng tÃ¡c lÃ m bÃ i theo tá»«ng pháº§n -->
        ${renderQuestionInputArea(q, qKey, qPart)}

        <!-- Khung lá»i giáº£i chi tiáº¿t (áº©n máº·c Ä‘á»‹nh, má»Ÿ sau khi ná»™p bÃ i) -->
        <div class="solution-box" id="solution-box-${qKey}">
          <div class="solution-box-title">
            <i class="fa-solid fa-lightbulb"></i> Lá»i giáº£i chi tiáº¿t tá»« ThS. LÆ°Æ¡ng Thanh SÃ¡ng:
          </div>
          <div class="solution-body">
            ${q.explanation}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Cáº­p nháº­t tá»•ng sá»‘ cÃ¢u
  const totalCountEl = document.getElementById("totalQuestionsCount");
  if (totalCountEl) totalCountEl.textContent = activeQuizQuestions.length;

  // Khá»Ÿi táº¡o cÃ¡c tiá»‡n Ã­ch tá»± luáº­n (MathType, Ä‘Ã­nh kÃ¨m áº£nh, xem trÆ°á»›c MathJax)
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
    // Tráº¯c nghiá»‡m 4 lá»±a chá»n A, B, C, D
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
    // Tráº¯c nghiá»‡m ÄÃºng / Sai (4 Ã½ a, b, c, d)
    return `
      <div class="tf-table" id="tf-group-${qKey}">
        ${q.items.map(item => `
          <div class="tf-row" id="tf-row-${q.id}-${item.id}">
            <div class="tf-text"><strong>${item.id})</strong> ${item.text}</div>
            <div class="tf-actions">
              <button type="button" class="tf-btn" id="tf-btn-${q.id}-${item.id}-true" onclick="selectPart2Choice(${q.id}, '${item.id}', true)">
                <i class="fa-solid fa-check"></i> ÄÃºng
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
      // DÃ nh cho Ä‘á» tá»± luáº­n (ToÃ¡n 11)
      const essayData = getEssayData(q.id);
      const savedText = essayData.text || "";
      return `
        <div class="essay-workspace" id="essay-group-${qKey}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
            <label class="essay-label" for="essay-input-${q.id}" style="margin-bottom: 0;">
              <i class="fa-solid fa-pen-nib"></i> BÃ i lÃ m / CÃ¡c bÆ°á»›c giáº£i cá»§a em:
            </label>
            <span style="font-size: 0.82rem; color: #475569; font-weight: 600;">
              <i class="fa-solid fa-award" style="color: var(--accent-gold);"></i> Thang Ä‘iá»ƒm: <strong>${q.maxScore || 1.5} Ä‘iá»ƒm</strong> (chia nhá» Ä‘áº¿n 0,25Ä‘)
            </span>
          </div>

          <!-- THANH TOÃN Tá»¬ & KÃ HIá»†U TOÃN Há»ŒC (MATHTYPE / EQUATION TOOLBAR) -->
          <div class="math-editor-toolbar" id="math-toolbar-${q.id}">
            <div class="toolbar-header">
              <span class="toolbar-title"><i class="fa-solid fa-calculator"></i> Báº£ng kÃ½ hiá»‡u ToÃ¡n (MathType / Equation):</span>
              <div class="toolbar-tabs">
                <button type="button" class="toolbar-tab active" data-tab="common" onclick="switchMathTab(${q.id}, 'common')">CÆ¡ báº£n</button>
                <button type="button" class="toolbar-tab" data-tab="trig" onclick="switchMathTab(${q.id}, 'trig')">LÆ°á»£ng giÃ¡c</button>
                <button type="button" class="toolbar-tab" data-tab="algebra" onclick="switchMathTab(${q.id}, 'algebra')">Äáº¡i sá»‘</button>
                <button type="button" class="toolbar-tab" data-tab="geometry" onclick="switchMathTab(${q.id}, 'geometry')">HÃ¬nh há»c & Táº­p há»£p</button>
              </div>
            </div>
            <div class="toolbar-palette">
              <!-- Tab CÆ¡ báº£n -->
              <div class="symbol-group tab-group-common">
                <button type="button" class="math-sym-btn" title="PhÃ¢n sá»‘ (Báº¥m Ä‘á»ƒ nháº­p tá»­ vÃ  máº«u)" onclick="toggleFractionPopover(${q.id}, event)"><span style="font-weight:700;">a/b</span></button>
                <button type="button" class="math-sym-btn" title="CÄƒn báº­c hai" onclick="insertMathSymbol(${q.id}, 'âˆš(x)', 2, 3)"><span style="font-weight:700;">âˆšx</span></button>
                <button type="button" class="math-sym-btn" title="BÃ¬nh phÆ°Æ¡ng" onclick="insertMathSymbol(${q.id}, 'Â²')"><span style="font-weight:700;">xÂ²</span></button>
                <button type="button" class="math-sym-btn" title="LÅ©y thá»«a n" onclick="insertMathSymbol(${q.id}, 'â¿')"><span style="font-weight:700;">xâ¿</span></button>
                <button type="button" class="math-sym-btn" title="Sá»‘ Pi" onclick="insertMathSymbol(${q.id}, 'Ï€')"><span style="font-weight:700;">Ï€</span></button>
                <button type="button" class="math-sym-btn" title="Cá»™ng trá»«" onclick="insertMathSymbol(${q.id}, 'Â±')"><span style="font-weight:700;">Â±</span></button>
                <button type="button" class="math-sym-btn" title="TÆ°Æ¡ng Ä‘Æ°Æ¡ng" onclick="insertMathSymbol(${q.id}, ' â‡” ')"><span style="font-weight:700;">â‡”</span></button>
                <button type="button" class="math-sym-btn" title="Suy ra" onclick="insertMathSymbol(${q.id}, ' â‡’ ')"><span style="font-weight:700;">â‡’</span></button>
                <button type="button" class="math-sym-btn" title="k thuá»™c Z" onclick="insertMathSymbol(${q.id}, ' (k âˆˆ â„¤)')"><span style="font-weight:700;">kâˆˆâ„¤</span></button>
                <button type="button" class="math-sym-btn" title="Há» nghiá»‡m ngoáº·c vuÃ´ng" onclick="insertMathSymbol(${q.id}, 'âŽ¡ x = \\nâŽ£ x = ', 4, 4)"><span style="font-weight:700;">[ Há» nghiá»‡m</span></button>
                <button type="button" class="math-sym-btn" title="Há»‡ phÆ°Æ¡ng trÃ¬nh ngoáº·c nhá»n" onclick="insertMathSymbol(${q.id}, 'âŽ§ pt 1\\nâŽ© pt 2', 4, 8)"><span style="font-weight:700;">{ Há»‡ pt</span></button>
              </div>

              <!-- Tab LÆ°á»£ng giÃ¡c -->
              <div class="symbol-group tab-group-trig" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'sin(x)', 4, 5)"><span style="font-weight:600;">sin(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'cos(x)', 4, 5)"><span style="font-weight:600;">cos(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'tan(x)', 4, 5)"><span style="font-weight:600;">tan(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'cot(x)', 4, 5)"><span style="font-weight:600;">cot(x)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'k2Ï€')"><span style="font-weight:700;">k2Ï€</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'kÏ€')"><span style="font-weight:700;">kÏ€</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Ï€/2')"><span style="font-weight:700;">Ï€/2</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Ï€/4')"><span style="font-weight:700;">Ï€/4</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '3Ï€/4')"><span style="font-weight:700;">3Ï€/4</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Â°')"><span style="font-weight:700;">Â° (Ä‘á»™)</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Î±')"><span style="font-weight:700;">Î±</span></button>
              </div>

              <!-- Tab Äáº¡i sá»‘ -->
              <div class="symbol-group tab-group-algebra" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Ã—')"><span style="font-weight:700;">Ã—</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Ã·')"><span style="font-weight:700;">Ã·</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â‰ ')"><span style="font-weight:700;">â‰ </span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â‰¤')"><span style="font-weight:700;">â‰¤</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â‰¥')"><span style="font-weight:700;">â‰¥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, '|x|', 1, 2)"><span style="font-weight:700;">|x|</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'Î”')"><span style="font-weight:700;">Î”</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆž')"><span style="font-weight:700;">âˆž</span></button>
              </div>

              <!-- Tab HÃ¬nh há»c & Táº­p há»£p -->
              <div class="symbol-group tab-group-geometry" style="display:none;">
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆˆ')"><span style="font-weight:700;">âˆˆ</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆ‰')"><span style="font-weight:700;">âˆ‰</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âŠ‚')"><span style="font-weight:700;">âŠ‚</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆ©')"><span style="font-weight:700;">âˆ©</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆª')"><span style="font-weight:700;">âˆª</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆ…')"><span style="font-weight:700;">âˆ…</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â„')"><span style="font-weight:700;">â„</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â„¤')"><span style="font-weight:700;">â„¤</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âŠ¥')"><span style="font-weight:700;">âŠ¥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'âˆ¥')"><span style="font-weight:700;">âˆ¥</span></button>
                <button type="button" class="math-sym-btn" onclick="insertMathSymbol(${q.id}, 'â–³')"><span style="font-weight:700;">â–³</span></button>
              </div>
            </div>
          </div>

          <!-- KHUNG NHáº¬P LIá»†U BÃ€I LÃ€M -->
          <textarea 
            class="essay-textarea" 
            id="essay-input-${q.id}" 
            rows="5" 
            placeholder="Nháº­p bÃ i lÃ m hoáº·c chá»n kÃ½ hiá»‡u ToÃ¡n á»Ÿ trÃªn... (hoáº·c báº¥m dáº¥u '+' bÃªn dÆ°á»›i Ä‘á»ƒ Ä‘Ã­nh kÃ¨m áº£nh bÃ i lÃ m viáº¿t tay)" 
            oninput="updatePart3Answer(${q.id}, this.value)"
          >${escapeHtml(savedText)}</textarea>

          <!-- KHUNG XEM TRÆ¯á»šC CÃ”NG THá»¨C TOÃN (MATHJAX LIVE PREVIEW) -->
          <div class="essay-math-preview">
            <div class="math-preview-label"><i class="fa-solid fa-eye"></i> Xem trÆ°á»›c hiá»ƒn thá»‹ cÃ´ng thá»©c (MathJax):</div>
            <div class="math-preview-content" id="math-preview-${q.id}">
              <span class="math-preview-empty">(GÃµ vÄƒn báº£n / cÃ´ng thá»©c hoáº·c chá»n kÃ½ hiá»‡u á»Ÿ trÃªn Ä‘á»ƒ xem trÆ°á»›c cÃ´ng thá»©c ToÃ¡n sáº¯c nÃ©t)</span>
            </div>
          </div>

          <!-- NÃšT "+" ÄÃNH KÃˆM áº¢NH BÃ€I LÃ€M VIáº¾T TAY (GEMINI-STYLE) -->
          <div class="essay-attach-bar">
            <button type="button" class="btn-attach-image" onclick="triggerEssayImageUpload(${q.id})">
              <i class="fa-solid fa-plus"></i> ThÃªm áº£nh bÃ i lÃ m viáº¿t tay / chá»¥p mÃ n hÃ¬nh
            </button>
            <input type="file" id="essay-file-input-${q.id}" accept="image/*" capture="environment" style="display:none;" onchange="handleEssayImageUpload(${q.id}, this)">
            <span class="attach-hint"><i class="fa-regular fa-image"></i> Chá»¥p áº£nh báº±ng Ä‘iá»‡n thoáº¡i, táº£i tá»« mÃ¡y tÃ­nh hoáº·c nháº¥n <strong>Ctrl + V</strong> Ä‘á»ƒ dÃ¡n áº£nh</span>
          </div>

          <!-- DANH SÃCH áº¢NH ÄÃNH KÃˆM -->
          <div class="essay-image-preview-list" id="essay-img-list-${q.id}"></div>

          <div class="essay-rubric-note">
            <i class="fa-solid fa-robot" style="color: var(--primary-600);"></i> 
            <span>Há»‡ thá»‘ng tá»± Ä‘á»™ng cháº¥m Ä‘iá»ƒm tá»± luáº­n theo <strong>Barem chi tiáº¿t chia nhá» Ä‘áº¿n 0,25 Ä‘iá»ƒm</strong> ngay khi ná»™p bÃ i. Em cÃ³ thá»ƒ nháº­p chá»¯ hoáº·c chá»¥p áº£nh bÃ i lÃ m!</span>
          </div>
        </div>
      `;
    } else {
      // DÃ nh cho Ä‘á» tráº¯c nghiá»‡m tráº£ lá»i ngáº¯n (ToÃ¡n 12)
      return `
        <div class="short-answer-wrapper" id="short-group-${qKey}">
          <div class="short-answer-input-group">
            <span style="font-weight: 700; color: var(--primary-900);"><i class="fa-solid fa-pencil"></i> ÄÃ¡p sá»‘ cá»§a em:</span>
            <input type="text" class="short-answer-input" id="short-input-${q.id}" placeholder="VÃ­ dá»¥: -2,1 hoáº·c 30,3" oninput="updatePart3Answer(${q.id}, this.value)" autocomplete="off">
          </div>
          <div class="short-answer-hint"><i class="fa-solid fa-circle-info"></i> Nháº­p sá»‘ tháº­p phÃ¢n (há»‡ thá»‘ng cháº¥p nháº­n cáº£ dáº¥u pháº©y ',' hoáº·c dáº¥u cháº¥m '.')</div>
        </div>
      `;
    }
  }
  return "";
}

// Thanh Ä‘á»‹nh vá»‹ cÃ¢u há»i (Question Palette)
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

// Xá»­ lÃ½ chá»n Ä‘Ã¡p Ã¡n Pháº§n I
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

// Xá»­ lÃ½ chá»n ÄÃºng / Sai cho Pháº§n II
window.selectPart2Choice = function(qId, itemId, isTrue) {
  if (isQuizSubmitted) return;

  if (!userAnswersPart2[qId]) {
    userAnswersPart2[qId] = {};
  }
  userAnswersPart2[qId][itemId] = isTrue;

  // Cáº­p nháº­t giao diá»‡n nÃºt
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

// Láº¥y hoáº·c khá»Ÿi táº¡o dá»¯ liá»‡u bÃ i lÃ m tá»± luáº­n cá»§a há»c sinh
function getEssayData(qId) {
  if (!userAnswersPart3[qId]) {
    userAnswersPart3[qId] = { text: "", images: [], rubricChecks: {} };
  } else if (typeof userAnswersPart3[qId] === "string") {
    userAnswersPart3[qId] = { text: userAnswersPart3[qId], images: [], rubricChecks: {} };
  }
  return userAnswersPart3[qId];
}

// Xá»­ lÃ½ nháº­p Ä‘Ã¡p Ã¡n Pháº§n III (Tráº£ lá»i ngáº¯n hoáº·c Tá»± luáº­n)
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

// ChÃ¨n toÃ¡n tá»­ / kÃ½ hiá»‡u toÃ¡n há»c MathType vÃ o vá»‹ trÃ­ con trá» cá»§a textarea
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

// Chuyá»ƒn Ä‘á»•i tab trÃªn thanh MathType (CÆ¡ báº£n, LÆ°á»£ng giÃ¡c, Äáº¡i sá»‘, HÃ¬nh há»c)
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

// Há»™p thoáº¡i nháº­p phÃ¢n sá»‘ trá»±c quan
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
        <input type="text" id="frac-num-${qId}" placeholder="Tá»­ sá»‘ (vd: 1, Ï€)" class="fraction-input" autocomplete="off" />
        <div class="fraction-divider-line"></div>
        <input type="text" id="frac-den-${qId}" placeholder="Máº«u sá»‘ (vd: 2, 6)" class="fraction-input" autocomplete="off" />
      </div>
      <button type="button" class="btn-insert-frac" onclick="insertFractionFromPopover(${qId})">ChÃ¨n</button>
      <button type="button" class="btn-close-frac" onclick="closeFractionPopover(${qId})">âœ•</button>
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

// ÄÃ³ng popover phÃ¢n sá»‘ khi click ra ngoÃ i
document.addEventListener("click", () => {
  document.querySelectorAll(".fraction-popover").forEach(pop => pop.remove());
});

// Cáº­p nháº­t khung xem trÆ°á»›c cÃ´ng thá»©c ToÃ¡n MathJax (debounce 250ms)
let mathPreviewTimeouts = {};
window.updateMathPreview = function(qId) {
  clearTimeout(mathPreviewTimeouts[qId]);
  mathPreviewTimeouts[qId] = setTimeout(() => {
    const previewEl = document.getElementById("math-preview-" + qId);
    const textarea = document.getElementById("essay-input-" + qId);
    if (!previewEl || !textarea) return;

    const val = textarea.value.trim();
    if (!val) {
      previewEl.innerHTML = '<span class="math-preview-empty">(GÃµ bÃ i lÃ m hoáº·c chá»n kÃ½ hiá»‡u ToÃ¡n á»Ÿ trÃªn Ä‘á»ƒ xem bÃ i thi Ä‘Æ°á»£c biÃªn dá»‹ch cÃ´ng thá»©c sáº¯c nÃ©t tá»©c thÃ¬)</span>';
      return;
    }

    // Bá»™ chuyá»ƒn Ä‘á»•i trá»±c quan (Smart Math Compiler) sang LaTeX Ä‘á»ƒ MathJax render
    let compiled = val;

    // Chuyá»ƒn phÃ¢n sá»‘ (tá»­)/(máº«u) -> \dfrac{tá»­}{máº«u}
    compiled = compiled.replace(/\(([^\(\)\n]+)\)\s*\/\s*\(([^\(\)\n]+)\)/g, '\\dfrac{$1}{$2}');
    // Chuyá»ƒn phÃ¢n sá»‘ a/b (dáº¡ng Ä‘Æ¡n giáº£n: 1/2, 3/4, Ï€/2, k180/2...)
    compiled = compiled.replace(/(\b[0-9a-zA-Z\u0370-\u03ff]+)\s*\/\s*([0-9a-zA-Z\u0370-\u03ff]+)\b/g, '\\dfrac{$1}{$2}');

    // Chuyá»ƒn cÄƒn báº­c hai âˆš(x) -> \sqrt{x}
    compiled = compiled.replace(/âˆš\(([^\(\)\n]+)\)/g, '\\sqrt{$1}');
    compiled = compiled.replace(/âˆš([0-9a-zA-Z\u0370-\u03ff]+)/g, '\\sqrt{$1}');

    // Chuyá»ƒn lÅ©y thá»«a: Â² -> ^{2}, Â³ -> ^{3}, â¿ -> ^{n}
    compiled = compiled.replace(/Â²/g, '^{2}').replace(/Â³/g, '^{3}').replace(/â¿/g, '^{n}');

    // Chuyá»ƒn Ä‘á»™: Â° -> ^\circ
    compiled = compiled.replace(/Â°/g, '^{\\circ}');

    // Chuyá»ƒn há»‡ pt ngoáº·c nhá»n: âŽ§... âŽ©...
    if (compiled.includes('âŽ§') || compiled.includes('{ pt') || /\{\s*[^\n]+\n\s*\{/.test(compiled)) {
      compiled = compiled.replace(/âŽ§\s*([^\n]+)\n\s*âŽ©\s*([^\n]+)/g, '\\begin{cases} $1 \\\\ $2 \\end{cases}');
      compiled = compiled.replace(/\{\s*([^\n]+)\n\s*\{\s*([^\n]+)/g, '\\begin{cases} $1 \\\\ $2 \\end{cases}');
    }

    // Chuyá»ƒn há» nghiá»‡m ngoáº·c vuÃ´ng: âŽ¡... âŽ£...
    if (compiled.includes('âŽ¡') || compiled.includes('[ x') || /\[\s*[^\n]+\n\s*\[/.test(compiled)) {
      compiled = compiled.replace(/âŽ¡\s*([^\n]+)\n\s*âŽ£\s*([^\n]+)/g, '\\left[\\begin{array}{l} $1 \\\\ $2 \\end{array}\\right.');
      compiled = compiled.replace(/\[\s*([^\n]+)\n\s*\[\s*([^\n]+)/g, '\\left[\\begin{array}{l} $1 \\\\ $2 \\end{array}\\right.');
    }

    // KÃ½ hiá»‡u táº­p há»£p & Ä‘áº¡i sá»‘
    compiled = compiled.replace(/â„/g, '\\mathbb{R}').replace(/â„¤/g, '\\mathbb{Z}');
    compiled = compiled.replace(/â‡”/g, ' \\Leftrightarrow ').replace(/â‡’/g, ' \\Rightarrow ');
    compiled = compiled.replace(/âˆ¥/g, ' \\parallel ').replace(/âŠ¥/g, ' \\perp ');
    compiled = compiled.replace(/â–³/g, ' \\triangle ').replace(/Î”/g, ' \\Delta ');
    compiled = compiled.replace(/âˆ©/g, ' \\cap ').replace(/âˆª/g, ' \\cup ');
    compiled = compiled.replace(/âˆˆ/g, ' \\in ').replace(/âˆ‰/g, ' \\notin ');
    compiled = compiled.replace(/âŠ‚/g, ' \\subset ').replace(/âˆ…/g, ' \\emptyset ');
    compiled = compiled.replace(/Â±/g, ' \\pm ').replace(/Ï€/g, ' \\pi ');
    compiled = compiled.replace(/Ã—/g, ' \\times ').replace(/Ã·/g, ' \\div ');
    compiled = compiled.replace(/â‰ /g, ' \\ne ').replace(/â‰¤/g, ' \\le ').replace(/â‰¥/g, ' \\ge ');
    compiled = compiled.replace(/âˆž/g, ' \\infty ').replace(/Î±/g, ' \\alpha ');

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

// KÃ­ch hoáº¡t há»™p thoáº¡i chá»n file áº£nh (chá»¥p tá»« Ä‘iá»‡n thoáº¡i hoáº·c táº£i tá»« mÃ¡y)
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
    showToast("Vui lÃ²ng chá»n file hÃ¬nh áº£nh (PNG, JPG, JPEG, WEBP)!", "warning");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast("Dung lÆ°á»£ng áº£nh tá»‘i Ä‘a 10 MB!", "warning");
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
    showToast("ÄÃ£ Ä‘Ã­nh kÃ¨m áº£nh bÃ i lÃ m viáº¿t tay thÃ nh cÃ´ng!", "success");
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
    <div class="essay-thumb-card" title="Báº¥m Ä‘á»ƒ xem phÃ³ng to áº£nh">
      <img src="${imgSrc}" alt="áº¢nh bÃ i lÃ m ${index + 1}" onclick="zoomEssayImage('${imgSrc}')">
      <button type="button" class="btn-remove-thumb" title="XÃ³a áº£nh nÃ y" onclick="removeEssayImage(${qId}, ${index}, event)">âœ•</button>
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
    showToast("ÄÃ£ xÃ³a áº£nh Ä‘Ã­nh kÃ¨m", "info");
  }
};

// PhÃ³ng to áº£nh bÃ i lÃ m toÃ n mÃ n hÃ¬nh (Lightbox)
window.zoomEssayImage = function(imgSrc) {
  let modal = document.getElementById("imageZoomModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageZoomModal";
    modal.className = "image-zoom-modal";
    modal.innerHTML = `
      <div class="image-zoom-content">
        <button class="btn-close-zoom" onclick="closeImageZoom()">&times;</button>
        <img id="imageZoomImg" src="" alt="áº¢nh bÃ i lÃ m phÃ³ng to">
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

// Láº¯ng nghe sá»± kiá»‡n dÃ¡n áº£nh (Ctrl + V) vÃ  kÃ©o tháº£ áº£nh vÃ o khung bÃ i lÃ m
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
// CÃ”NG Cá»¤ CHáº¤M Tá»° LUáº¬N Tá»° Äá»˜NG THEO BAREM 0,25Ä (AI / RULE-BASED ENGINE)
// ==========================================================================
function autoGradeEssayQuestion(q, studentData) {
  const rubric = q.rubric || [];
  const rawText = studentData?.text || "";
  const text = rawText.toLowerCase();

  // Chuáº©n hÃ³a biá»ƒu thá»©c (há»— trá»£ cáº£ gÃµ Unicode trá»±c quan, chá»¯ thÆ°á»ng láº«n LaTeX)
  const normalizeMath = (str) => {
    return str
      .toLowerCase()
      .replace(/\\left|\\right/g, "")
      .replace(/[{}\s]/g, "")
      .replace(/Â°/g, "^\\circ")
      .replace(/Â²/g, "^2")
      .replace(/Â³/g, "^3")
      .replace(/â¿/g, "^n")
      .replace(/âˆš/g, "sqrt")
      .replace(/âˆ©/g, "cap")
      .replace(/âˆª/g, "cup")
      .replace(/âˆˆ/g, "in")
      .replace(/âˆ‰/g, "notin")
      .replace(/âŠ‚/g, "subset")
      .replace(/â„¤|\\mathbb{z}/gi, "z")
      .replace(/â„|\\mathbb{r}/gi, "r")
      .replace(/Ï€|\\pi/gi, "pi")
      .replace(/Â±|\\pm/gi, "+-")
      .replace(/â‡”|\\Leftrightarrow/gi, "<=>")
      .replace(/â‡’|\\Rightarrow/gi, "=>")
      .replace(/âˆ¥|\\parallel/gi, "songsong")
      .replace(/âŠ¥|\\perp/gi, "vuonggoc")
      .replace(/â–³|\\triangle/gi, "tamgiac");
  };

  const cleanText = normalizeMath(text);
  const manualChecks = studentData?.rubricChecks || {};
  const images = studentData?.images || [];
  const hasImages = images.length > 0;

  let earnedScore = 0;
  const stepResults = [];

  rubric.forEach(step => {
    let isMatched = false;

    // 1. Náº¿u cÃ³ xÃ¡c nháº­n thá»§ cÃ´ng (tá»± Ä‘á»‘i chiáº¿u barem)
    if (manualChecks[step.id] !== undefined) {
      isMatched = !!manualChecks[step.id];
    } else {
      // 2. Tá»± Ä‘á»™ng quÃ©t tá»« khÃ³a vÃ  cÃ´ng thá»©c toÃ¡n há»c
      const keywords = step.keywords || [];
      for (let kw of keywords) {
        const kwClean = normalizeMath(kw);

        if (cleanText.includes(kwClean)) {
          isMatched = true;
          break;
        }

        if (kw.toLowerCase().includes("cap") && (text.includes("cáº¯t") || text.includes("giao") || text.includes("âˆ©") || text.includes("\\cap"))) {
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

      // Náº¿u há»c sinh Ä‘Ã£ táº£i áº£nh bÃ i lÃ m lÃªn vÃ  cÃ³ viáº¿t chá»¯ tÃ³m táº¯t,
      // tá»± Ä‘á»™ng cÃ´ng nháº­n cÃ¡c bÆ°á»›c cÆ¡ báº£n náº¿u há»c sinh cÃ³ lÃ m bÃ i
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

// Dá»±ng Báº£ng phÃ¢n tÃ­ch Ä‘iá»ƒm tá»± luáº­n theo Barem 0,25Ä‘ Ä‘Æ°a vÃ o lá»i giáº£i
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
          <span>Káº¿t quáº£ cháº¥m tá»± luáº­n tá»± Ä‘á»™ng theo Barem Tháº§y SÃ¡ng:</span>
        </div>
        <div class="rubric-score-badge" id="rubric-badge-${q.id}">
          Äiá»ƒm sá»‘: <strong id="rubric-score-val-${q.id}">${gradeResult.earnedScore.toFixed(2)}</strong> / ${(q.maxScore || 1.5).toFixed(2)} Ä‘iá»ƒm
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
                title="TÃ­ch chá»n Ä‘á»ƒ cáº­p nháº­t Ä‘iá»ƒm náº¿u bÃ i lÃ m viáº¿t tay cá»§a em cÃ³ bÆ°á»›c nÃ y"
              >
              <div class="rubric-step-text">
                <strong>BÆ°á»›c ${idx + 1} (${item.step.points.toFixed(2).replace('.', ',')}Ä‘):</strong> ${item.step.label}
              </div>
            </div>
            <span class="rubric-points-tag ${item.isMatched ? 'earned' : 'unearned'}" id="rubric-tag-${q.id}-${item.step.id}">
              ${item.isMatched ? `+${item.step.points.toFixed(2).replace('.', ',')}Ä‘` : '0,00Ä‘'}
            </span>
          </div>
        `).join("")}
      </div>

      ${gradeResult.images && gradeResult.images.length > 0 ? `
        <div class="rubric-attached-images">
          <div class="rubric-attached-title">
            <i class="fa-solid fa-camera"></i> áº¢nh bÃ i lÃ m há»c sinh Ä‘Ã£ ná»™p (${gradeResult.images.length} áº£nh):
          </div>
          <div class="essay-image-preview-list">
            ${gradeResult.images.map((imgSrc, imgIdx) => `
              <div class="essay-thumb-card" title="Báº¥m Ä‘á»ƒ xem phÃ³ng to áº£nh bÃ i lÃ m">
                <img src="${imgSrc}" alt="áº¢nh bÃ i lÃ m ${imgIdx + 1}" onclick="zoomEssayImage('${imgSrc}')">
              </div>
            `).join("")}
          </div>
          <div style="font-size: 0.8rem; color: #64748b; margin-top: 6px;">
            <i class="fa-solid fa-circle-info"></i> <em>(Em cÃ³ thá»ƒ tÃ­ch/bá» tÃ­ch cÃ¡c Ã´ vuÃ´ng á»Ÿ trÃªn Ä‘á»ƒ Ä‘á»‘i chiáº¿u cÃ¡c bÆ°á»›c trong áº£nh bÃ i lÃ m viáº¿t tay vá»›i Barem chuáº©n cá»§a Tháº§y SÃ¡ng, Ä‘iá»ƒm tá»•ng sáº½ tá»± Ä‘á»™ng cáº­p nháº­t ngay láº­p tá»©c!).</em>
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

// Báº­t táº¯t checkbox Ä‘á»‘i chiáº¿u Barem tá»«ng bÆ°á»›c 0,25Ä‘
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
      tagEl.textContent = `+${stepPts.toFixed(2).replace('.', ',')}Ä‘`;
    } else {
      tagEl.className = "rubric-points-tag unearned";
      tagEl.textContent = "0,00Ä‘";
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
  if (!confirm("Em cÃ³ muá»‘n xÃ³a toÃ n bá»™ cÃ¡c cÃ¢u tráº£ lá»i hiá»‡n táº¡i Ä‘á»ƒ lÃ m láº¡i tá»« Ä‘áº§u khÃ´ng?")) return;

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
  showToast("ÄÃ£ xÃ³a toÃ n bá»™ cÃ¢u tráº£ lá»i.", "info");
}

function confirmAndSubmitQuiz() {
  if (isQuizSubmitted) {
    showToast("BÃ i thi Ä‘Ã£ Ä‘Æ°á»£c ná»™p vÃ  cháº¥m Ä‘iá»ƒm rá»“i!", "info");
    return;
  }

  const answered = parseInt(document.getElementById("answeredCount")?.textContent || "0");
  const total = activeQuizQuestions.length;

  if (answered < total) {
    if (!confirm(`Em cÃ²n ${total - answered} cÃ¢u chÆ°a hoÃ n thÃ nh.
Em cÃ³ cháº¯c cháº¯n muá»‘n ná»™p bÃ i ngay bÃ¢y giá» khÃ´ng?`)) {
      return;
    }
  } else {
    if (!confirm("Em Ä‘Ã£ hoÃ n thÃ nh bÃ i thi. XÃ¡c nháº­n ná»™p bÃ i Ä‘á»ƒ xem Ä‘iá»ƒm sá»‘ ngay?")) {
      return;
    }
  }

  submitQuiz(false);
}

// Cháº¥m Ä‘iá»ƒm chuáº©n theo quy Ä‘á»‹nh cá»§a Bá»™ GiÃ¡o dá»¥c & ÄÃ o táº¡o
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

      // TÃ´ mÃ u Ä‘Ã¡p Ã¡n
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
      // Äá» thi Ä‘Ãºng/sai: 1 Ã½ Ä‘Ãºng = 0.1Ä‘; 2 Ã½ Ä‘Ãºng = 0.25Ä‘; 3 Ã½ Ä‘Ãºng = 0.5Ä‘; 4 Ã½ Ä‘Ãºng = 1.0Ä‘
      const studentObj = userAnswersPart2[q.id] || {};
      let subCorrectCount = 0;

      q.items.forEach(item => {
        const studentChoice = studentObj[item.id];
        const isItemCorrect = studentChoice === item.correct;
        if (isItemCorrect) subCorrectCount++;

        // TÃ´ mÃ u nÃºt True / False
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
        // Tá»± luáº­n (ToÃ¡n 11 - Má»—i cÃ¢u 1.5Ä‘ - Cháº¥m tá»± Ä‘á»™ng theo Barem 0.25Ä‘)
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
        // Tráº£ lá»i ngáº¯n (ToÃ¡n 12 - Má»—i cÃ¢u 0.5Ä‘)
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

  // TÃ­nh tá»•ng Ä‘iá»ƒm theo cháº¿ Ä‘á»™
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

  // KhÃ³a nÃºt ná»™p bÃ i
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i class="fa-solid fa-check-double"></i> ÄÃ£ ná»™p bÃ i';
  }

  // KhÃ³a cÃ¡c Ã´ input ngáº¯n vÃ  tá»± luáº­n
  document.querySelectorAll(".short-answer-input, .essay-textarea").forEach(inp => {
    inp.disabled = true;
  });

  // Hiá»ƒn thá»‹ Card káº¿t quáº£
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

  const gradeName = currentExamId.startsWith("11_") ? "ToÃ¡n 11" : "ToÃ¡n 12";

  if (resScore) resScore.textContent = finalScore.toFixed(2);
  if (resCorrect) resCorrect.textContent = `${correctCount} / ${activeQuizQuestions.length}`;
  if (resWrong) resWrong.textContent = `${wrongCount} / ${activeQuizQuestions.length}`;
  if (resTimeUsed) resTimeUsed.textContent = timeUsedStr;

  if (finalScore >= 9.0) {
    if (resTitle) resTitle.textContent = "Xuáº¥t Sáº¯c! Äiá»ƒm Sá»‘ Tuyá»‡t Vá»i!";
    if (resMessage) resMessage.textContent = `Tháº§y SÃ¡ng chÃºc má»«ng em! Äiá»ƒm sá»‘: ${finalScore.toFixed(2)}/10. Em náº¯m ráº¥t vá»¯ng kiáº¿n thá»©c vÃ  ká»¹ nÄƒng giáº£i ${gradeName}!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-crown" style="color: #f59e0b;"></i>';
  } else if (finalScore >= 7.0) {
    if (resTitle) resTitle.textContent = "Káº¿t Quáº£ KhÃ¡ Tá»‘t!";
    if (resMessage) resMessage.textContent = `Tháº§y khen ngá»£i em Ä‘áº¡t ${finalScore.toFixed(2)}/10 mÃ´n ${gradeName}! HÃ£y xem ká»¹ lá»i giáº£i chi tiáº¿t Ä‘á»ƒ hoÃ n thiá»‡n cÃ¡c cÃ¢u cÃ²n sai sÃ³t nhÃ©!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-star" style="color: #2563eb;"></i>';
  } else if (finalScore >= 5.0) {
    if (resTitle) resTitle.textContent = "Äáº¡t YÃªu Cáº§u - Cáº§n Ã”n Luyá»‡n ThÃªm!";
    if (resMessage) resMessage.textContent = `Em Ä‘áº¡t ${finalScore.toFixed(2)}/10 mÃ´n ${gradeName}. Em hÃ£y báº¥m 'Xem Ä‘Ã¡p Ã¡n & Lá»i giáº£i chi tiáº¿t' bÃªn dÆ°á»›i Ä‘á»ƒ Ã´n táº­p ká»¹ tá»«ng dáº¡ng bÃ i nhÃ©!`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-award" style="color: #10b981;"></i>';
  } else {
    if (resTitle) resTitle.textContent = "Cáº§n Cá»‘ Gáº¯ng ThÃªm NhÃ©!";
    if (resMessage) resMessage.textContent = `Káº¿t quáº£: ${finalScore.toFixed(2)}/10. Äá»«ng náº£n chÃ­! HÃ£y Ä‘á»c tá»«ng bÆ°á»›c lá»i giáº£i cá»§a Tháº§y SÃ¡ng bÃªn dÆ°á»›i Ä‘á»ƒ rÃºt kinh nghiá»‡m.`;
    if (resIcon) resIcon.innerHTML = '<i class="fa-solid fa-book-open-reader" style="color: #ef4444;"></i>';
  }

  if (resultCard) {
    resultCard.classList.add("active");
    resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  showToast(`Cháº¥m Ä‘iá»ƒm hoÃ n táº¥t: ${finalScore.toFixed(2)} / 10 Ä‘iá»ƒm!`, "success");
}

function toggleAllSolutions() {
  if (!isQuizSubmitted) {
    showToast("Vui lÃ²ng ná»™p bÃ i Ä‘á»ƒ xem lá»i giáº£i chi tiáº¿t nhÃ©!", "warning");
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
      btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Thu gá»n lá»i giáº£i';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-list-check"></i> Xem Ä‘Ã¡p Ã¡n & Lá»i giáº£i chi tiáº¿t';
    }
  }

  triggerMathJax();
}

function retakeQuiz() {
  if (confirm("Em cÃ³ muá»‘n lÃ m láº¡i lÆ°á»£t thi nÃ y tá»« Ä‘áº§u khÃ´ng?")) {
    loadQuestionsForMode(currentQuizMode);
    const quizSection = document.getElementById("quiz");
    if (quizSection) quizSection.scrollIntoView({ behavior: "smooth" });
    showToast("ÄÃ£ báº¯t Ä‘áº§u lÆ°á»£t lÃ m bÃ i má»›i. ChÃºc em Ä‘áº¡t Ä‘iá»ƒm cao!", "info");
  }
}

// KÃ­ch hoáº¡t MathJax render láº¡i cÃ´ng thá»©c ToÃ¡n há»c
function triggerMathJax() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch((err) => {
      console.warn("MathJax typeset error: ", err);
    });
  }
}


/* ==========================================================================
   4. FORM Gá»¬I THáº®C Máº®C BÃ€I Táº¬P (CONTACT)
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
      showToast("Vui lÃ²ng Ä‘iá»n Ä‘áº§y Ä‘á»§ cÃ¡c má»¥c cÃ³ dáº¥u sao (*)", "warning");
      return;
    }

    // LÆ°u vÃ o LocalStorage Ä‘á»ƒ lÆ°u váº¿t tin nháº¯n
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

    // ThÃ´ng bÃ¡o pháº£n há»“i cho há»c sinh
    alert(`Cáº£m Æ¡n em ${name} (Lá»›p ${studentClass})!\nTháº§y SÃ¡ng Ä‘Ã£ nháº­n Ä‘Æ°á»£c ná»™i dung tháº¯c máº¯c vá» "${topic}".\nTháº§y sáº½ nghiÃªn cá»©u cÃ¢u há»i vÃ  pháº£n há»“i chi tiáº¿t cho em qua email: ${email} hoáº·c giáº£i Ä‘Ã¡p trá»±c tiáº¿p trÃªn lá»›p sá»›m nháº¥t nhÃ©!`);

    form.reset();
    showToast("ÄÃ£ gá»­i cÃ¢u há»i thÃ nh cÃ´ng Ä‘áº¿n Tháº§y SÃ¡ng!", "success");
  });
}

/* ==========================================================================
   5. TIá»†N ÃCH: TOAST THÃ”NG BÃO & BACK TO TOP
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
   Há»† THá»NG BÃ€I Há»ŒC Sá» MÃ”N TOÃN 3 Táº¦NG (DIGITAL LESSONS SYSTEM)
   ========================================================================== */
function initDigitalLessons() {
  const workspace = document.getElementById("lessonsWorkspace");
  if (!workspace) return; // KhÃ´ng á»Ÿ trang bÃ i há»c sá»‘

  // Láº¥y dá»¯ liá»‡u tá»« file lessons-data.js
  const db = window.LESSONS_DATABASE;
  if (!db) {
    console.error("KhÃ´ng tÃ¬m tháº¥y dá»¯ liá»‡u LESSONS_DATABASE");
    return;
  }

  // Äá»c URL params náº¿u cÃ³
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

  // CÃ¡c element DOM
  const gradeCards = document.querySelectorAll(".grade-tab-card");
  const volButtons = document.querySelectorAll(".btn-vol-filter");
  const searchInput = document.getElementById("searchLessonInput");
  const sidebarContainer = document.getElementById("sidebarLessonsList");
  const sidebarCounter = document.getElementById("sidebarCounter");
  const mobileToggleBtn = document.getElementById("mobileLessonsToggle");
  const sidebarEl = document.getElementById("lessonsSidebar");

  // Element ná»™i dung bÃ i há»c
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

  // TÃ¬m bÃ i há»c Ä‘áº§u tiÃªn cá»§a khá»‘i lá»›p hiá»‡n táº¡i náº¿u chÆ°a chá»‰ Ä‘á»‹nh
  function getDefaultLessonId(grade) {
    if (grade === "10") return "10-c4-b8"; // Máº·c Ä‘á»‹nh má»Ÿ BÃ i 8 (Tá»•ng vÃ  hiá»‡u cá»§a hai vectÆ¡) má»›i biÃªn soáº¡n
    if (grade === "11") return "11-c4-b12";
    if (grade === "12") return "12-c2-b7"; // Máº·c Ä‘á»‹nh má»Ÿ BÃ i 7 (Há»‡ trá»¥c toáº¡ Ä‘á»™ trong khÃ´ng gian) má»›i biÃªn soáº¡n
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

  // TÃ¬m táº¥t cáº£ bÃ i há»c pháº³ng cá»§a khá»‘i lá»›p Ä‘á»ƒ há»— trá»£ Prev / Next
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

  // 1. Cáº­p nháº­t giao diá»‡n Táº§ng 1 (Khá»‘i lá»›p)
  function updateGradeTabUI() {
    gradeCards.forEach(card => {
      if (card.dataset.grade === currentGrade) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  // 2. Render Táº§ng 2: Danh sÃ¡ch ChÆ°Æ¡ng & BÃ i há»c trong Sidebar
  function renderSidebar() {
    const gradeData = db[currentGrade];
    if (!gradeData) return;

    let chapters = gradeData.chapters || [];

    // Lá»c theo táº­p
    if (currentVolume !== "all") {
      const volNum = parseInt(currentVolume, 10);
      chapters = chapters.filter(ch => ch.volume === volNum);
    }

    // Lá»c theo tá»« khoÃ¡ tÃ¬m kiáº¿m
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
        return; // Bá» qua chÆ°Æ¡ng khÃ´ng cÃ³ bÃ i há»c khá»›p
      }

      totalMatchingLessons += filteredLessons.length;

      // XÃ¡c Ä‘á»‹nh chÆ°Æ¡ng cÃ³ chá»©a bÃ i há»c Ä‘ang chá»n khÃ´ng Ä‘á»ƒ tá»± Ä‘á»™ng má»Ÿ (open)
      const hasActiveLesson = filteredLessons.some(l => l.id === currentLessonId);
      const isOpen = hasActiveLesson || search.length > 0;

      html += `
        <div class="chapter-accordion-card ${isOpen ? "open" : ""}" data-chapter-id="${ch.id}">
          <div class="chapter-card-header ${hasActiveLesson ? "active-chapter" : ""}">
            <div class="chapter-title-group">
              <span class="chapter-badge-tag">
                <i class="fa-solid fa-book"></i> ${ch.volumeLabel} â€¢ ${escapeHtml(ch.number)}
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
          <p style="font-size: 0.9rem; margin: 0;">KhÃ´ng tÃ¬m tháº¥y bÃ i há»c nÃ o phÃ¹ há»£p vá»›i tá»« khoÃ¡ "<strong>${escapeHtml(currentSearch)}</strong>".</p>
        </div>
      `;
    }

    sidebarContainer.innerHTML = html;
    sidebarCounter.textContent = `${totalMatchingLessons} bÃ i há»c`;

    // Gáº¯n sá»± kiá»‡n click vÃ o header chÆ°Æ¡ng (Accordion)
    sidebarContainer.querySelectorAll(".chapter-card-header").forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".chapter-accordion-card");
        if (card) {
          card.classList.toggle("open");
        }
      });
    });

    // Gáº¯n sá»± kiá»‡n click vÃ o nÃºt bÃ i há»c
    sidebarContainer.querySelectorAll(".lesson-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lessonId = btn.dataset.lessonId;
        selectLesson(lessonId);
      });
    });
  }

  // 3. Render Táº§ng 3: Chi tiáº¿t BÃ i há»c
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

    // Cáº­p nháº­t Breadcrumbs
    breadcrumbGrade.textContent = `ToÃ¡n Lá»›p ${currentGrade}`;
    breadcrumbChapter.textContent = `${chapter.number}: ${chapter.title}`;
    breadcrumbLesson.textContent = `${lesson.number}: ${lesson.title}`;

    // Cáº­p nháº­t Header
    lessonNumBadge.textContent = lesson.number;
    lessonTitleText.textContent = lesson.title;
    lessonVolumePill.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${chapter.volumeLabel}`;

    // NÃºt Prev / Next
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

    // Render Má»¥c lá»¥c nhanh trong bÃ i (Quick TOC)
    const sections = lesson.sections || [];
    if (sections.length > 0) {
      tocLinksList.innerHTML = sections.map((sec, idx) => `
        <a href="#sec-${idx + 1}" class="toc-link-item">Má»¥c ${sec.num}. ${escapeHtml(sec.title)}</a>
      `).join("");
      document.getElementById("lessonQuickToc").style.display = "block";
    } else {
      document.getElementById("lessonQuickToc").style.display = "none";
    }

    // Render Táº§ng 3: Khung Má»¥c lá»›n & Khung phá»¥ a), b), c)...
    let sectionsHtml = "";

    // 0. THANH TIáº¾N Äá»˜ Há»ŒC Táº¬P (% PROGRESS BAR) & GAMIFICATION CHUáº¨N OLM
    if (lesson.isOlmInteractive || lesson.isInteractiveDigitalLesson) {
      sectionsHtml += `
        <div class="olm-progress-sticky-wrapper" id="olmStickyProgressBar">
          <div class="olm-progress-inner">
            <div class="olm-progress-meta-left">
              <span class="olm-badge-level"><i class="fa-solid fa-graduation-cap"></i> Tiáº¿n trÃ¬nh há»c táº­p sá»‘</span>
              <h4 class="olm-progress-title"><i class="fa-solid fa-list-check" style="color: #0284c7;"></i> Má»©c Ä‘á»™ hoÃ n thÃ nh</h4>
            </div>
            <div class="olm-progress-track-wrap">
              <div class="olm-progress-track">
                <div class="olm-progress-fill" id="olmProgressFill" style="width: 0%;"></div>
              </div>
              <span class="olm-progress-percent" id="olmProgressPercent">0%</span>
            </div>
            <div class="olm-gamification-badges">
              <span class="olm-xp-pill" id="olmXpDisplay"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> 0 XP</span>
              <span class="olm-stars-pill" id="olmStarsDisplay"><i class="fa-solid fa-star" style="color: #8b5cf6;"></i> â­ 0</span>
            </div>
          </div>
        </div>
      `;
    }

    // Helper táº¡o há»™p thoáº¡i Ã¢m thanh vÃ ng Ä‘á»“ng Tháº§y SÃ¡ng
    function renderTeacherGoldVoiceBoxHtml(btnTitle, scriptText, audioUrl, customId) {
      const idAttr = customId ? ` id="${customId}"` : "";
      return `
        <div class="teacher-voice-gold-box"${idAttr}>
          <div class="teacher-voice-gold-meta">
            <div class="teacher-voice-gold-avatar"><i class="fa-solid fa-chalkboard-user"></i></div>
            <div class="teacher-voice-gold-info">
              <span class="voice-ai-label">Giá»ng Ä‘á»c AI cá»§a ThS. LÆ°Æ¡ng Thanh SÃ¡ng</span>
              <span class="voice-audio-status">Tráº§m áº¥m, truyá»n cáº£m, chuáº©n sÆ° pháº¡m</span>
            </div>
          </div>
          <div class="teacher-voice-gold-controls">
            <button class="btn-voice-gold-sang btn-play-gold-voice" data-audio="${audioUrl || ''}" data-script="${escapeHtml(scriptText || '')}">
              <i class="fa-solid fa-circle-play"></i> ${escapeHtml(btnTitle || 'Nghe tháº§y SÃ¡ng giáº£ng bÃ i')}
            </button>
            <button class="btn-voice-stop-sang btn-stop-gold-voice" title="Dá»«ng phÃ¡t">
              <i class="fa-solid fa-stop"></i> Dá»«ng
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

    // 1. Khung Lá»i chÃ o sÆ° pháº¡m Ä‘áº§u giá» & Giá»ng Ä‘á»c má»¥c tiÃªu cá»§a Tháº§y SÃ¡ng
    if (lesson.teacherWelcome) {
      sectionsHtml += `
        <div class="teacher-welcome-card" id="lessonWelcomeCard">
          <div class="welcome-top-bar">
            <div class="teacher-badge-profile">
              <div class="avatar-ring-box">
                <i class="fa-solid fa-chalkboard-user"></i>
              </div>
              <div class="teacher-titles">
                <span class="welcome-heart-tag"><i class="fa-solid fa-heart" style="color: #ef4444;"></i> Lá»i chÃ o sÆ° pháº¡m thÃ¢n thÆ°Æ¡ng Ä‘áº§u giá»</span>
                <h3 class="teacher-display-name">ThS. LÆ°Æ¡ng Thanh SÃ¡ng</h3>
                <p class="teacher-school-sub">GiÃ¡o viÃªn ToÃ¡n â€¢ TrÆ°á»ng THPT Nguyá»…n VÄƒn Thoáº¡i, An Giang</p>
              </div>
            </div>
          </div>

          <div class="welcome-quote-body">
            <i class="fa-solid fa-quote-left quote-corner-icon"></i>
            <p class="welcome-quote-msg">"${escapeHtml(lesson.teacherWelcome.greetingText)}"</p>
          </div>

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.teacherWelcome.buttonLabel || "Lá»i chÃ o cá»§a tháº§y SÃ¡ng",
            lesson.teacherWelcome.greetingText,
            lesson.teacherWelcome.audioUrl || ""
          )}
        </div>
      `;
    }

    // 2. Khung Má»¥c tiÃªu & YÃªu cáº§u cáº§n Ä‘áº¡t bÃ i há»c
    if (lesson.learningGoals && lesson.learningGoals.length > 0) {
      sectionsHtml += `
        <div class="lesson-goals-box">
          <h4><i class="fa-solid fa-bullseye"></i> Má»¥c tiÃªu &amp; YÃªu cáº§u cáº§n Ä‘áº¡t cá»§a bÃ i há»c (Chuáº©n SGK trang 51):</h4>
          <ul class="lesson-goals-list">
            ${lesson.learningGoals.map(g => `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${escapeHtml(g)}</li>`).join("")}
          </ul>
          ${renderTeacherGoldVoiceBoxHtml(
            lesson.goalsButtonLabel || "Giá»ng Ä‘á»c AI cá»§a Tháº§y SÃ¡ng",
            lesson.learningGoals.join(". "),
            lesson.goalsAudioUrl || ""
          )}
        </div>
      `;
    }

    // 3. Khung TÃ¬nh huá»‘ng má»Ÿ Ä‘áº§u thá»±c táº¿ (Hook)
    if (lesson.hook) {
      sectionsHtml += `
        <div class="lesson-hook-card">
          <div class="hook-badge"><i class="fa-solid fa-compass"></i> TÃ¬nh huá»‘ng thá»±c tiá»…n má»Ÿ Ä‘áº§u</div>
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
              <strong>CÃ¢u há»i khÆ¡i gá»£i tÆ° duy:</strong> ${escapeHtml(lesson.hook.question)}
            </div>
          ` : ''}

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.hook.buttonLabel || "Nghe tháº§y SÃ¡ng giáº£ng bÃ i",
            lesson.hook.story,
            lesson.hook.audioUrl || ""
          )}
        </div>
      `;
    }

    // 4. Khung Giá»ng giáº£ng bÃ i AI cá»§a ThS. LÆ°Æ¡ng Thanh SÃ¡ng (ToÃ n bÃ i cÃ³ POI)
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
                <p>Giá»ng AI ThS. LÆ°Æ¡ng Thanh SÃ¡ng â€¢ TÃ­ch há»£p cÃ¡c Ä‘iá»ƒm dá»«ng kiá»ƒm tra tÆ° duy tá»± Ä‘á»™ng (POI)</p>
              </div>
            </div>
          </div>
          <div class="olm-timeline-container">
            <div class="olm-audio-seekbar" id="olmAudioSeekbar" title="Nháº¥n Ä‘á»ƒ tua bÃ i (bá»‹ khÃ³a khi Ä‘áº¿n Ä‘iá»ƒm dá»«ng cÃ¢u há»i)">
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
              <i class="fa-solid fa-play"></i> Nghe Tháº§y SÃ¡ng giáº£ng bÃ i tÆ°Æ¡ng tÃ¡c
            </button>
            <span style="font-size: 0.85rem; color: #94a3b8;"><i class="fa-solid fa-circle-info"></i> Audio sáº½ tá»± Ä‘á»™ng táº¡m dá»«ng khi cháº¡m cÃ¡c má»‘c trÃ²n vÃ ng Ä‘á»ƒ há»i nhanh</span>
          </div>
        </div>

        <!-- MODAL CÃ‚U Há»ŽI TÆ¯Æ NG TÃC POI -->
        <div class="olm-poi-modal-backdrop" id="olmPoiModalBackdrop">
          <div class="olm-poi-modal-card">
            <div class="olm-poi-modal-header">
              <i class="fa-solid fa-circle-question"></i>
              <h3>Tháº§y SÃ¡ng há»i nhanh: Kiá»ƒm tra má»©c Ä‘á»™ táº­p trung</h3>
            </div>
            <div class="olm-poi-modal-body">
              <div class="olm-poi-question" id="olmPoiQuestionText"></div>
              <div class="olm-poi-options-list" id="olmPoiOptionsList"></div>
              <div class="olm-poi-feedback-box" id="olmPoiFeedbackBox"></div>
              <div class="olm-poi-modal-footer">
                <button class="olm-btn-resume" id="olmBtnResumeAudio" disabled>
                  <i class="fa-solid fa-forward"></i> Há»c tiáº¿p bÃ i giáº£ng
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 5. CÃ¡c Má»¥c lá»›n vÃ  Tiá»ƒu má»¥c chi tiáº¿t chuáº©n SGK
    sections.forEach((sec, sIdx) => {
      const subsections = sec.subsections || [];
      const secAnchor = `sec-${sIdx + 1}`;

      sectionsHtml += `
        <!-- Má»¤C ${sec.num} -->
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
              <!-- Khung phá»¥ ${sub.key}) -->
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
                  sub.buttonLabel || "Nghe tháº§y SÃ¡ng giáº£ng bÃ i",
                  sub.summary || sub.title,
                  sub.audioUrl
                ) : ""}

                ${sub.workedExample ? `
                  <div class="worked-example-card">
                    <div class="worked-example-header">
                      <span class="example-pill"><i class="fa-solid fa-pencil"></i> ${escapeHtml(sub.workedExample.title || "VÃ­ dá»¥ minh há»a")}</span>
                    </div>
                    <div class="example-problem">
                      <strong>Äá» bÃ i:</strong> ${sub.workedExample.problem}
                    </div>

                    <!-- Ghi chÃº sÆ° pháº¡m: Há»c sinh lÃ m bÃ i táº­p vÃ o vá»Ÿ -->
                    <div class="student-task-note">
                      <div class="note-icon"><i class="fa-solid fa-pen-to-square"></i></div>
                      <div class="note-content">
                        <strong>Nhiá»‡m vá»¥ cá»§a há»c sinh:</strong>
                        <span>CÃ¡c em hÃ£y táº¡m dá»«ng Ã­t phÃºt, láº¥y vá»Ÿ ghi bÃ i táº­p vÃ  thÆ°á»›c káº» ra tá»± váº½ hÃ¬nh, giáº£i bÃ i táº­p nÃ y vÃ o vá»Ÿ trÆ°á»›c khi xem lá»i giáº£i cá»§a Tháº§y nhÃ©!</span>
                      </div>
                    </div>

                    <!-- NÃºt báº¥m áº©n/hiá»‡n lá»i giáº£i chi tiáº¿t -->
                    <div class="solution-toggle-bar">
                      <button class="btn-toggle-solution" data-target="${exId}">
                        <i class="fa-solid fa-eye"></i> Xem lá»i giáº£i chi tiáº¿t &amp; Äá»‹nh hÆ°á»›ng cá»§a Tháº§y SÃ¡ng
                      </button>
                    </div>

                    <!-- Khung lá»i giáº£i chi tiáº¿t (Máº·c Ä‘á»‹nh áº©n) -->
                    <div class="solution-collapse-body" id="${exId}" style="display: none;">
                      <div class="solution-inner-wrap">
                        <div class="solution-title-tag"><i class="fa-solid fa-circle-check text-success"></i> Lá»i giáº£i chi tiáº¿t chuáº©n SGK:</div>
                        <div class="solution-content-text">${sub.workedExample.solution}</div>

                        ${sub.workedExample.teacherGuidance ? `
                          <div class="teacher-thinking-note">
                            <div class="thinking-title"><i class="fa-solid fa-lightbulb"></i> Lá»i khuyÃªn cá»§a Tháº§y SÃ¡ng:</div>
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

    // 6. Khung Váº­n dá»¥ng thá»±c táº¿: Chá»‘t bÃ i há»c
    if (lesson.realworldWrapup) {
      const wrapupSolId = "wrapup-sol-body";
      sectionsHtml += `
        <div class="realworld-wrapup-card">
          <div class="wrapup-header">
            <span class="wrapup-badge"><i class="fa-solid fa-compass"></i> Chá»‘t bÃ i há»c</span>
            <h3 class="wrapup-title">${escapeHtml(lesson.realworldWrapup.title || "QUAY Láº I GIáº¢I QUYáº¾T BÃ€I TOÃN TÃŒNH HUá»NG Má»ž Äáº¦U")}</h3>
          </div>

          <div class="wrapup-recap-box">
            <div class="recap-label"><i class="fa-solid fa-rotate-left"></i> Nháº¯c láº¡i bÃ i toÃ¡n má»Ÿ Ä‘áº§u:</div>
            <p class="recap-text">${escapeHtml(lesson.realworldWrapup.recap)}</p>
          </div>

          <div class="solution-toggle-bar" style="margin: 14px 0;">
            <button class="btn-toggle-solution" data-target="${wrapupSolId}">
              <i class="fa-solid fa-eye"></i> Xem lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng
            </button>
          </div>

          <div class="solution-collapse-body" id="${wrapupSolId}" style="display: none;">
            <div class="solution-inner-wrap">
              <div class="wrapup-solution-box">
                <h4 class="wrapup-solution-head"><i class="fa-solid fa-chalkboard-user"></i> MÃ´ hÃ¬nh hÃ³a ToÃ¡n há»c &amp; Lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng:</h4>
                <div class="wrapup-solution-content">
                  ${lesson.realworldWrapup.solution}
                </div>
              </div>
            </div>
          </div>

          ${renderTeacherGoldVoiceBoxHtml(
            lesson.realworldWrapup.buttonLabel || "Nghe tháº§y SÃ¡ng giáº£ng bÃ i",
            lesson.realworldWrapup.recap,
            lesson.realworldWrapup.audioUrl || ""
          )}
        </div>
      `;
    }

    // 7. BÃ€I Táº¬P TRáº®C NGHIá»†M Tá»”NG Há»¢P (CHUáº¨N 3 Dáº NG THá»¨C THI Má»šI 2025)
    if (lesson.examFormatPractice) {
      const ef = lesson.examFormatPractice;
      sectionsHtml += `
        <div class="exam-format-wrap" id="examFormatPracticeSection">
          <div class="exam-format-main-title">
            <i class="fa-solid fa-file-signature" style="font-size: 1.4rem; color: #fef08a;"></i>
            <h3>${escapeHtml(ef.title || "PHáº¦N IV. BÃ€I Táº¬P TRáº®C NGHIá»†M Tá»”NG Há»¢P (CHUáº¨N Cáº¤U TRÃšC Äá»€ THI Má»šI 2025 Bá»˜ GD&ÄT)")}</h3>
          </div>

          <!-- Dáº NG 1: TRáº®C NGHIá»†M NHIá»€U Lá»°A CHá»ŒN (5 CÃ‚U) -->
          ${ef.part1MultipleChoice && ef.part1MultipleChoice.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-list-ol" style="color: #0284c7;"></i> Dáº NG 1. CÃ‚U Há»ŽI TRáº®C NGHIá»†M NHIá»€U Lá»°A CHá»ŒN (5 cÃ¢u cá»‘t lÃµi - Nháº­n biáº¿t)</h4>
              </div>
              <div class="exam-list-mc">
                ${ef.part1MultipleChoice.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge"><i class="fa-solid fa-circle-question"></i> CÃ¢u ${q.num}</span>
                      <div class="exam-item-actions-bar">
                        ${q.similarVariation ? `
                          <button class="btn-dynamic-param-btn" data-qid="${q.id}" title="Äá»•i sang cÃ¢u há»i tÆ°Æ¡ng tá»± vá»›i sá»‘ liá»‡u má»›i">
                            <i class="fa-solid fa-shuffle"></i> BÃ i toÃ¡n tÆ°Æ¡ng tá»±
                          </button>
                        ` : ''}
                        <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                          <i class="fa-solid fa-lightbulb"></i> Lá»i giáº£i chi tiáº¿t
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
                      <strong>Lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng:</strong><br>
                      ${q.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- Dáº NG 2: TRáº®C NGHIá»†M ÄÃšNG / SAI 4 Ã (3 CÃ‚U) -->
          ${ef.part2TrueFalse && ef.part2TrueFalse.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-square-check" style="color: #059669;"></i> Dáº NG 2. CÃ‚U Há»ŽI TRáº®C NGHIá»†M ÄÃšNG / SAI (3 cÃ¢u cá»‘t lÃµi - ThÃ´ng hiá»ƒu)</h4>
              </div>
              <div class="exam-list-tf">
                ${ef.part2TrueFalse.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #dcfce7; color: #15803d;"><i class="fa-solid fa-circle-question"></i> CÃ¢u ${q.num}</span>
                      <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                        <i class="fa-solid fa-lightbulb"></i> Lá»i giáº£i chi tiáº¿t
                      </button>
                    </div>
                    <div class="exam-item-prompt">${q.prompt}</div>
                    <table class="tf-4part-table">
                      <thead>
                        <tr>
                          <th style="width: 75%;">Ã má»‡nh Ä‘á»</th>
                          <th style="width: 25%; text-align: center;">Kháº³ng Ä‘á»‹nh cá»§a em</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${q.items.map((it, iIdx) => `
                          <tr class="tf-item-row" data-qid="${q.id}" data-item-idx="${iIdx}" data-correct="${it.isTrue}">
                            <td><strong>${it.label})</strong> ${it.text}</td>
                            <td style="text-align: center;">
                              <button class="btn-tf-toggle" data-val="true" style="margin-right: 6px;">Ä</button>
                              <button class="btn-tf-toggle" data-val="false">S</button>
                            </td>
                          </tr>
                        `).join("")}
                      </tbody>
                    </table>
                    <div style="text-align: right; margin-top: 10px;">
                      <button class="btn-check-tf-group" data-qid="${q.id}" style="background: #059669; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; cursor: pointer;">
                        <i class="fa-solid fa-check"></i> Kiá»ƒm tra cÃ¢u ${q.num}
                      </button>
                    </div>
                    <div class="exam-solution-collapse" id="sol-${q.id}">
                      <strong>Lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng:</strong><br>
                      ${q.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- Dáº NG 3: TRáº®C NGHIá»†M TRáº¢ Lá»œI NGáº®N (2 CÃ‚U) -->
          ${ef.part3ShortAnswer && ef.part3ShortAnswer.length > 0 ? `
            <div class="exam-sub-section">
              <div class="exam-sub-title-bar">
                <h4><i class="fa-solid fa-pen-clip" style="color: #d97706;"></i> Dáº NG 3. CÃ‚U Há»ŽI TRáº¢ Lá»œI NGáº®N (2 cÃ¢u ToÃ¡n thá»±c táº¿ - Váº­n dá»¥ng)</h4>
              </div>
              <div class="exam-list-sa">
                ${ef.part3ShortAnswer.map((q, idx) => `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #fef3c7; color: #b45309;"><i class="fa-solid fa-circle-question"></i> CÃ¢u ${q.num}</span>
                      <div class="exam-item-actions-bar">
                        ${q.similarVariation ? `
                          <button class="btn-dynamic-param-btn" data-qid="${q.id}" title="Äá»•i sang bÃ i toÃ¡n tÆ°Æ¡ng tá»± vá»›i sá»‘ liá»‡u má»›i">
                            <i class="fa-solid fa-shuffle"></i> BÃ i toÃ¡n tÆ°Æ¡ng tá»±
                          </button>
                        ` : ''}
                        <button class="btn-show-solution-btn" data-target="sol-${q.id}">
                          <i class="fa-solid fa-lightbulb"></i> Lá»i giáº£i chi tiáº¿t
                        </button>
                      </div>
                    </div>
                    <div class="exam-item-prompt" id="prompt-${q.id}">${q.prompt}</div>
                    <div class="short-ans-row">
                      <label style="font-weight: 700; color: #1e293b;">ÄÃ¡p sá»‘ cá»§a em:</label>
                      <input type="text" class="short-ans-input" id="input-${q.id}" placeholder="Nháº­p sá»‘..." data-ans="${q.correctAnswer || q.correctValue}">
                      <span style="font-weight: 700; color: #64748b;">${q.unit || ''}</span>
                      <button class="btn-check-short-ans" data-qid="${q.id}">
                        <i class="fa-solid fa-check"></i> Tráº£ lá»i
                      </button>
                      <span class="sa-feedback-badge" id="feedback-${q.id}" style="display: none; font-weight: 700;"></span>
                    </div>
                    <div class="exam-solution-collapse" id="sol-${q.id}">
                      <strong>Lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng:</strong><br>
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

    // 7. Khung BÃ i táº­p tÆ°Æ¡ng tÃ¡c Ä‘a dáº¡ng (Interactive Challenges & Activities)
    const challenges = lesson.interactiveChallenges || lesson.interactiveActivities || [];
    if (challenges.length > 0) {
      sectionsHtml += `
        <div class="interactive-section-wrap" id="interactivePracticeArea">
          <div class="interactive-main-title">
            <i class="fa-solid fa-gamepad" style="color: #0284c7;"></i>
            <span>KhÃ´ng Gian RÃ¨n Luyá»‡n &amp; Thá»­ ThÃ¡ch TÆ°Æ¡ng TÃ¡c Trá»±c Tuyáº¿n</span>
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
                    <p style="margin: 0;"><strong>Giáº£i thÃ­ch chi tiáº¿t:</strong> ${escapeHtml(act.explanation)}</p>
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
                    Nháº¥n vÃ o 1 Ã´ á»Ÿ Cá»™t A, sau Ä‘Ã³ nháº¥n Ã´ tÆ°Æ¡ng á»©ng á»Ÿ Cá»™t B Ä‘á»ƒ ná»‘i cáº·p!
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
                        <th style="width: 70%;">Má»‡nh Ä‘á» kháº³ng Ä‘á»‹nh</th>
                        <th style="text-align: center; width: 15%;">ÄÃºng</th>
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
                            <button class="btn-tf-choice" data-choice="true">Ä</button>
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
                      <i class="fa-solid fa-check"></i> Kiá»ƒm tra káº¿t quáº£
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

    // 7b. KHUNG LUYá»†N Táº¬P THÃCH á»¨NG 4 Má»¨C Äá»˜ & Äá»”I Sá» Tá»° Äá»˜NG CHUáº¨N OLM
    if (lesson.isOlmInteractive || lesson.isInteractiveDigitalLesson) {
      sectionsHtml += `
        <div class="olm-adaptive-wrapper" id="olmAdaptiveArea">
          <div class="olm-adaptive-header">
            <div class="olm-adaptive-title">
              <i class="fa-solid fa-brain"></i>
              <h3>Luyá»‡n táº­p thÃ­ch á»©ng thÃ´ng minh (Tá»± Ä‘á»™ng Ä‘á»•i dá»¯ kiá»‡n khÃ´ng há»c váº¹t)</h3>
            </div>
            <div class="olm-level-tabs">
              <button class="olm-tab-level active" data-level="1">Má»©c Ä‘á»™ 1 (Nháº­n biáº¿t)</button>
              <button class="olm-tab-level" data-level="2">Má»©c Ä‘á»™ 2 (ThÃ´ng hiá»ƒu)</button>
              <button class="olm-tab-level" data-level="3">Má»©c Ä‘á»™ 3 (Váº­n dá»¥ng)</button>
              <button class="olm-tab-level" data-level="4">Má»©c Ä‘á»™ 4 (Váº­n dá»¥ng cao)</button>
            </div>
          </div>
          <div class="olm-question-card" id="olmAdaptiveQuestionCard">
            <!-- ÄÆ°á»£c render Ä‘á»™ng bá»Ÿi olm-lesson-engine.js -->
          </div>
        </div>
      `;
    }

    sectionsContainer.innerHTML = sectionsHtml;

    // KÃ­ch hoáº¡t MathJax hiá»ƒn thá»‹ cÃ´ng thá»©c ToÃ¡n
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([sectionsContainer]).catch(err => console.warn("MathJax error:", err));
    }

    // Gáº¯n sá»± kiá»‡n Giá»ng Ä‘á»c AI & CÃ¡c bÃ i táº­p tÆ°Æ¡ng tÃ¡c
    bindDigitalLessonEvents(sectionsContainer);

    // KÃ­ch hoáº¡t OLM Interactive Engine náº¿u bÃ i há»c cÃ³ tÃ­nh nÄƒng OLM tÆ°Æ¡ng tÃ¡c
    if ((lesson.isOlmInteractive || lesson.isInteractiveDigitalLesson) && (typeof window.initInteractiveLessonEngine === 'function' || typeof window.initOlmLessonEngine === 'function')) {
      const initFn = window.initInteractiveLessonEngine || window.initOlmLessonEngine;
      initFn(lesson);
    }

    // Cáº­p nháº­t URL trÃ¬nh duyá»‡t (khÃ´ng táº£i láº¡i trang)
    try {
      const newUrl = `${window.location.pathname}?grade=${currentGrade}&lesson=${currentLessonId}`;
      window.history.replaceState({ grade: currentGrade, lesson: currentLessonId }, "", newUrl);
    } catch (e) {
      // bá» qua lá»—i náº¿u á»Ÿ file:// protocol
    }
  }

  // Chá»n bÃ i há»c má»›i
  function selectLesson(lessonId) {
    currentLessonId = lessonId;
    renderSidebar();
    renderLessonViewer();

    // áº¨n sidebar trÃªn mobile sau khi chá»n bÃ i
    if (window.innerWidth <= 992) {
      sidebarEl.classList.remove("mobile-open");
    }

    // Cuá»™n mÆ°á»£t tá»›i khung bÃ i há»c
    const viewer = document.getElementById("lessonDetailViewer");
    if (viewer) {
      viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Gáº®N Sá»° KIá»†N Táº¦NG 1: CHá»ŒN KHá»I Lá»šP
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

  // Gáº®N Sá»° KIá»†N: Lá»ŒC Táº¬P
  volButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      volButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentVolume = btn.dataset.vol;
      renderSidebar();
    });
  });

  // Gáº®N Sá»° KIá»†N: TÃŒM KIáº¾M BÃ€I Há»ŒC
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderSidebar();
    });
  }

  // Gáº®N Sá»° KIá»†N NÃšT PREV / NEXT
  btnPrevLesson.addEventListener("click", () => {
    const targetId = btnPrevLesson.dataset.targetId;
    if (targetId) selectLesson(targetId);
  });

  btnNextLesson.addEventListener("click", () => {
    const targetId = btnNextLesson.dataset.targetId;
    if (targetId) selectLesson(targetId);
  });

  // Gáº®N Sá»° KIá»†N: TOGGLE SIDEBAR TRÃŠN MOBILE
  if (mobileToggleBtn && sidebarEl) {
    mobileToggleBtn.addEventListener("click", () => {
      sidebarEl.classList.toggle("mobile-open");
    });
  }

  // =========================================================================
  // Bá»˜ Tá»”NG Há»¢P GIá»ŒNG GIáº¢NG BÃ€I AI THáº¦Y SÃNG (CHUáº¨N 100% TIáº¾NG VIá»†T Tá»° NHIÃŠN)
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

    // Æ¯u tiÃªn 1: Giá»ng tiáº¿ng Viá»‡t cháº¥t lÆ°á»£ng cao (Google tiáº¿ng Viá»‡t, Edge Natural Online)
    let v = cachedVoices.find(voice => {
      const n = (voice.name || "").toLowerCase();
      const l = (voice.lang || "").toLowerCase();
      return (l === "vi-vn" || l === "vi_vn" || l.startsWith("vi")) &&
             (n.includes("natural") || n.includes("online") || n.includes("google") || n.includes("namminh") || n.includes("hoaimy"));
    });
    if (v) return v;

    // Æ¯u tiÃªn 2: Báº¥t ká»³ giá»ng nÃ o cÃ³ mÃ£ ngÃ´n ngá»¯ vi hoáº·c vi-VN
    v = cachedVoices.find(voice => {
      const l = (voice.lang || "").toLowerCase();
      return l === "vi-vn" || l === "vi_vn" || l.startsWith("vi");
    });
    if (v) return v;

    // Æ¯u tiÃªn 3: TÃªn giá»ng cÃ³ chá»©a cÃ¡c tá»« khÃ³a tiáº¿ng Viá»‡t
    v = cachedVoices.find(voice => {
      const n = (voice.name || "").toLowerCase();
      return n.includes("vietnam") || n.includes("tiáº¿ng viá»‡t") || n.includes("vietnamese");
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
    // Bá» tháº» HTML
    s = s.replace(/<[^>]+>/g, " ");
    // Chuyá»ƒn kÃ½ hiá»‡u ToÃ¡n há»c sang lá»i phÃ¡t biá»ƒu tiáº¿ng Viá»‡t chuáº©n má»±c cá»§a Tháº§y SÃ¡ng
    s = s.replace(/\\vec\{0\}/g, " vectÆ¡-khÃ´ng ");
    s = s.replace(/\\vec\{([A-Za-z0-9]+)\}/g, " vectÆ¡ $1 ");
    s = s.replace(/\\vec\s+([A-Za-z0-9]+)/g, " vectÆ¡ $1 ");
    s = s.replace(/\|\\vec\{([^}]+)\}\|/g, " Ä‘á»™ dÃ i vectÆ¡ $1 ");
    s = s.replace(/\|\\vec\s+([^|]+)\|/g, " Ä‘á»™ dÃ i vectÆ¡ $1 ");
    s = s.replace(/\\parallel/g, " song song vá»›i ");
    s = s.replace(/\/\//g, " song song vá»›i ");
    s = s.replace(/\\not\\subset/g, " khÃ´ng náº±m trong ");
    s = s.replace(/\\subset/g, " náº±m trong ");
    s = s.replace(/\\cap/g, " giao vá»›i ");
    s = s.replace(/\\cup/g, " há»£p vá»›i ");
    s = s.replace(/\\emptyset/g, " táº­p rá»—ng ");
    s = s.replace(/\\perp/g, " vuÃ´ng gÃ³c vá»›i ");
    s = s.replace(/\\cdot/g, " nhÃ¢n vÃ´ hÆ°á»›ng vá»›i ");
    s = s.replace(/\\cos/g, " cÃ´-sin ");
    s = s.replace(/\\sin/g, " sin ");
    s = s.replace(/\\tan/g, " tang ");
    s = s.replace(/\\cot/g, " cÃ´-tang ");
    s = s.replace(/\\widehat\{([^}]+)\}/g, " gÃ³c $1 ");
    s = s.replace(/\\alpha/g, " an-pha ");
    s = s.replace(/\\beta/g, " bÃª-ta ");
    s = s.replace(/\\gamma/g, " gam-ma ");
    s = s.replace(/\\varphi/g, " phi ");
    s = s.replace(/\\sqrt\{([^}]+)\}/g, " cÄƒn báº­c hai cá»§a $1 ");
    s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, " $1 pháº§n $2 ");
    s = s.replace(/\^2/g, " bÃ¬nh phÆ°Æ¡ng ");
    s = s.replace(/\^3/g, " láº­p phÆ°Æ¡ng ");
    s = s.replace(/\^\\circ/g, " Ä‘á»™ ");
    s = s.replace(/\^\circ/g, " Ä‘á»™ ");
    s = s.replace(/\\ge/g, " lá»›n hÆ¡n hoáº·c báº±ng ");
    s = s.replace(/\\le/g, " nhá» hÆ¡n hoáº·c báº±ng ");
    s = s.replace(/\\ne/g, " khÃ¡c ");
    s = s.replace(/\\implies/g, " suy ra ");
    s = s.replace(/\\iff/g, " khi vÃ  chá»‰ khi ");
    s = s.replace(/\\times/g, " nhÃ¢n ");
    s = s.replace(/\\pm/g, " cá»™ng trá»« ");
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
          playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i> Nghe Tháº§y SÃ¡ng chÃ o lá»›p &amp; hÆ°á»›ng dáº«n má»¥c tiÃªu';
        } else if (playBtn.classList.contains("btn-wrapup-voice-play")) {
          playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i> Nghe Tháº§y SÃ¡ng phÃ¢n tÃ­ch Ã½ nghÄ©a thá»±c táº¿ cá»§a bÃ i há»c';
        } else if (playBtn.classList.contains("btn-voice-play") && playBtn.id === "btnPlayMainVoice") {
          playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Nghe Tháº§y SÃ¡ng giáº£ng bÃ i';
        } else {
          playBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Nghe giáº£ng';
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

    // Tá»± Ä‘á»™ng tÃ¬m thuá»™c tÃ­nh data-audio tá»« nÃºt báº¥m hoáº·c khung bao quanh
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
      playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i> Táº¡m dá»«ng bÃ i giáº£ng';
    }

    // 1. Náº¾U CÃ“ Tá»†P MP3 THá»°C Táº¾ (GIá»ŒNG NAM MINH CHUáº¨N SÆ¯ PHáº M ÄÆ¯á»¢C TÃCH Há»¢P Sáº´N)
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

    // 2. Náº¾U KHÃ”NG CÃ“ Tá»†P MP3: DÃ™NG Bá»˜ MÃY WEB SPEECH API CHUáº¨N HÃ“A TIáº¾NG VIá»†T
    startWebSpeechSynthesis(rawText, speed);
  }

  function startWebSpeechSynthesis(rawText, speed = 1.0) {
    const spokenText = mathToVietnameseSpeech(rawText);
    if (!spokenText) {
      stopTeacherSpeech();
      return;
    }

    if (!("speechSynthesis" in window)) {
      alert("TrÃ¬nh duyá»‡t chÆ°a há»— trá»£ cÃ´ng nghá»‡ Web Speech. QuÃ½ Tháº§y CÃ´ vÃ  cÃ¡c em há»c sinh vui lÃ²ng má»Ÿ trang web trÃªn Google Chrome hoáº·c Microsoft Edge Ä‘á»ƒ láº¯ng nghe giá»ng Ä‘á»c Tháº§y SÃ¡ng nhÃ©!");
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
    // 0. Xá»¬ LÃ Há»˜P PHÃT Ã‚M THANH VÃ€NG Äá»’NG THáº¦Y SÃNG (GIá»ŒNG Äá»ŒC AI Cá»¦A THS. LÆ¯Æ NG THANH SÃNG)
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

    // 0b. Xá»¬ LÃ CÃ‚U Há»ŽI CHECKPOINT TRONG TIá»‚U Má»¤C & TRáº®C NGHIá»†M Dáº NG 1 PHáº¦N IV
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
          if (typeof window.showToast === "function") window.showToast("ðŸŽ‰ ChÃ­nh xÃ¡c! Tháº§y khen em Ä‘Ã£ tráº£ lá»i ráº¥t chuáº©n!", "success");
        } else {
          this.classList.add("selected-wrong");
          if (typeof window.showToast === "function") window.showToast("ChÆ°a chÃ­nh xÃ¡c rá»“i! Em hÃ£y suy nghÄ© vÃ  chá»n láº¡i nhÃ©!", "warning");
        }
      });
    });

    // 0c. Xá»¬ LÃ NÃšT áº¨N/HIá»†N Lá»œI GIáº¢I CHI TIáº¾T TRONG PHáº¦N IV
    container.querySelectorAll(".btn-show-solution-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const targetId = this.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.classList.toggle("show");
          if (targetEl.classList.contains("show")) {
            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i> ÄÃ³ng lá»i giáº£i';
            if (window.MathJax && window.MathJax.typesetPromise) {
              window.MathJax.typesetPromise([targetEl]).catch(e => console.warn(e));
            }
          } else {
            this.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Lá»i giáº£i chi tiáº¿t';
          }
        }
      });
    });

    // 0d. Xá»¬ LÃ NÃšT BÃ€I TOÃN TÆ¯Æ NG Tá»° (DYNAMIC PARAMETERS)
    container.querySelectorAll(".btn-dynamic-param-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const qid = this.dataset.qid;
        let ef = null;
        const flatList = getFlatLessonsList(currentGrade);
        const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
        if (currentItem && currentItem.lesson && currentItem.lesson.examFormatPractice) {
          ef = currentItem.lesson.examFormatPractice;
        }
        if (!ef) {
          const allLessonData = [
            window.LESSON_10_C4_B7_DATA,
            window.LESSON_10_C4_B8_DATA,
            window.LESSON_11_C4_B11_DATA,
            window.LESSON_11_C4_B12_DATA,
            window.LESSON_12_C2_B6_DATA,
            window.LESSON_12_C2_B7_DATA
          ];
          for (let l of allLessonData) {
            if (l && l.examFormatPractice) {
              let q = (l.examFormatPractice.part1MultipleChoice || []).find(x => x.id === qid) ||
                      (l.examFormatPractice.part3ShortAnswer || []).find(x => x.id === qid);
              if (q) {
                ef = l.examFormatPractice;
                break;
              }
            }
          }
        }
        if (!ef) return;
        let foundQ = (ef.part1MultipleChoice || []).find(q => q.id === qid) || (ef.part3ShortAnswer || []).find(q => q.id === qid);
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
            if (solEl) solEl.innerHTML = `<strong>Lá»i giáº£i bÃ i toÃ¡n tÆ°Æ¡ng tá»± cá»§a Tháº§y SÃ¡ng:</strong><br>${sim.solution}`;
          }
          if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([cardEl]);
          if (typeof window.showToast === "function") window.showToast("ðŸ”„ ÄÃ£ Ä‘á»•i sang bÃ i toÃ¡n tÆ°Æ¡ng tá»± vá»›i sá»‘ liá»‡u má»›i!", "info");
        }
      });
    });

    // 0e. Xá»¬ LÃ TRáº®C NGHIá»†M ÄÃšNG / SAI 4 Ã (Dáº NG 2)
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
          if (typeof window.showToast === "function") window.showToast("Em hÃ£y chá»n Ä‘áº§y Ä‘á»§ ÄÃºng hoáº·c Sai cho cáº£ 4 Ã½ nhÃ©!", "warning");
          return;
        }

        if (allCorrect) {
          rows.forEach(r => r.style.backgroundColor = "#f0fdf4");
          if (typeof window.triggerConfettiFireworks === "function") window.triggerConfettiFireworks();
          if (typeof window.showToast === "function") window.showToast("ðŸŽ‰ Xuáº¥t sáº¯c! Em Ä‘Ã£ phÃ¡n Ä‘oÃ¡n chÃ­nh xÃ¡c cáº£ 4 Ã½!", "success");
        } else {
          rows.forEach(r => {
            const isMatch = r.dataset.userChoice === r.dataset.correct;
            r.style.backgroundColor = isMatch ? "#f0fdf4" : "#fef2f2";
          });
          if (typeof window.showToast === "function") window.showToast("CÃ³ Ã½ chÆ°a Ä‘Ãºng, em hÃ£y xem gá»£i Ã½ hoáº·c lá»i giáº£i chi tiáº¿t nhÃ©!", "warning");
        }
      });
    });

    // 0f. Xá»¬ LÃ TRáº®C NGHIá»†M TRáº¢ Lá»œI NGáº®N Sá» Há»ŒC (Dáº NG 3)
    container.querySelectorAll(".btn-check-short-ans").forEach(btn => {
      btn.addEventListener("click", function () {
        const qid = this.dataset.qid;
        const input = document.getElementById(`input-${qid}`);
        const feedback = document.getElementById(`feedback-${qid}`);
        if (!input) return;
        const val = input.value.trim().replace(",", ".");
        const correct = input.dataset.ans.trim();
        if (!val) {
          if (typeof window.showToast === "function") window.showToast("Em hÃ£y nháº­p Ä‘Ã¡p sá»‘ trÆ°á»›c khi báº¥m kiá»ƒm tra nhÃ©!", "warning");
          return;
        }

        if (feedback) feedback.style.display = "inline-block";
        if (val === correct) {
          if (feedback) {
            feedback.innerHTML = '<span style="color: #16a34a;"><i class="fa-solid fa-circle-check"></i> ChÃ­nh xÃ¡c!</span>';
          }
          input.style.borderColor = "#16a34a";
          if (typeof window.triggerConfettiFireworks === "function") window.triggerConfettiFireworks();
          if (typeof window.showToast === "function") window.showToast("ðŸŽ‰ Xuáº¥t sáº¯c! ÄÃ¡p sá»‘ hoÃ n toÃ n chÃ­nh xÃ¡c!", "success");
        } else {
          if (feedback) {
            feedback.innerHTML = '<span style="color: #dc2626;"><i class="fa-solid fa-circle-xmark"></i> ChÆ°a Ä‘Ãºng, thá»­ láº¡i!</span>';
          }
          input.style.borderColor = "#dc2626";
          if (typeof window.showToast === "function") window.showToast("ÄÃ¡p sá»‘ chÆ°a chÃ­nh xÃ¡c, em hÃ£y kiá»ƒm tra láº¡i phÃ©p tÃ­nh nhÃ©!", "warning");
        }
      });
    });

    // 1. Lá»i chÃ o sÆ° pháº¡m Ä‘áº§u giá» tá»« Tháº§y SÃ¡ng
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

    // 2. Voice Player ChÃ­nh
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

    // 3. Mini Voice Players trong tá»«ng tiá»ƒu má»¥c
    container.querySelectorAll(".btn-mini-voice-play").forEach(btn => {
      btn.addEventListener("click", () => {
        const script = btn.dataset.script;
        const audioUrl = btn.dataset.audio || "";
        const parentBox = btn.closest(".mini-voice-lecture-box") || btn.closest(".worked-example-card") || btn;
        playTeacherSpeech(script, parentBox, currentSpeed, audioUrl);
      });
    });

    // 4. Wrapup Voice Player (Váº­n dá»¥ng thá»±c táº¿)
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

    // 5. NÃºt áº©n / hiá»‡n lá»i giáº£i chi tiáº¿t cá»§a cÃ¡c VÃ­ dá»¥
    container.querySelectorAll(".btn-toggle-solution").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const solEl = document.getElementById(targetId);
        if (!solEl) return;

        const isHidden = solEl.style.display === "none" || !solEl.style.display;
        if (isHidden) {
          solEl.style.display = "block";
          btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> ÄÃ³ng lá»i giáº£i chi tiáº¿t';
          btn.classList.add("active-toggle");
          if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([solEl]).catch(e => console.warn(e));
          }
        } else {
          solEl.style.display = "none";
          btn.innerHTML = '<i class="fa-solid fa-eye"></i> Xem lá»i giáº£i chi tiáº¿t &amp; Äá»‹nh hÆ°á»›ng cá»§a Tháº§y SÃ¡ng';
          btn.classList.remove("active-toggle");
        }
      });
    });

    // 6. BÃ i táº­p tráº¯c nghiá»‡m 4 lá»±a chá»n (Instant Feedback)
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

    // 7. BÃ n cá» ná»‘i cá»™t khÃ¡i niá»‡m (Matching Board)
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
          if (statusBar) statusBar.innerHTML = `ÄÃ£ chá»n: "<strong>${item.textContent.trim()}</strong>". HÃ£y nháº¥n Ã´ tÆ°Æ¡ng á»©ng á»Ÿ Cá»™t B!`;
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
              if (statusBar) statusBar.innerHTML = `ðŸŽ‰ <strong>Tuyá»‡t vá»i!</strong> Em Ä‘Ã£ ghÃ©p Ä‘Ãºng 100% táº¥t cáº£ cÃ¡c cáº·p khÃ¡i niá»‡m!`;
            } else {
              if (statusBar) statusBar.innerHTML = `âœ… GhÃ©p ná»‘i chÃ­nh xÃ¡c! CÃ²n ${remaining} cáº·p ná»¯a, cá»‘ lÃªn em!`;
            }
          } else {
            item.classList.add("shake-wrong");
            setTimeout(() => item.classList.remove("shake-wrong"), 500);
            if (statusBar) statusBar.innerHTML = `âŒ ChÆ°a chÃ­nh xÃ¡c rá»“i, em hÃ£y thá»­ ná»‘i láº¡i vá»›i Ã´ khÃ¡c nhÃ©!`;
          }
        });
      });
    }

    // 8. Báº£ng Kháº£o sÃ¡t ÄÃºng / Sai 4 Ã½ (True / False Table)
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
          alert(`Tháº§y SÃ¡ng chÃºc má»«ng em Ä‘Ã£ hoÃ n thÃ nh! Em Ä‘Ã£ tráº£ lá»i Ä‘Ãºng ${correctCount}/${rows.length} má»‡nh Ä‘á».`);
        });
      }
    }
  }

  

  // Khá»Ÿi cháº¡y hiá»ƒn thá»‹ ban Ä‘áº§u
  updateGradeTabUI();
  renderSidebar();
  renderLessonViewer();
}



