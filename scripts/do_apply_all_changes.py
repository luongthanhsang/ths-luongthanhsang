import sys, re

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Helper block to insert before function renderSidebar()
helpers_code = '''  // ==========================================================================
  // HỆ THỐNG CẤU TRÚC BÀI HỌC SỐ PHÂN CẤP & BỘ ĐIỀU HƯỚNG TỪNG MỤC (THẦY SÁNG)
  // ==========================================================================
  let currentSidebarMode = "lesson_tree"; // "lesson_tree" hoặc "chapter_list"
  let currentActiveStepId = "welcome";     // Mục hiện tại đang học
  let currentViewMode = "step";            // "step" (Tập trung từng mục) hoặc "all" (Xem toàn bài)
  const completedStepsCache = {};

  function getLessonCompletedSteps(lessonId) {
    if (!completedStepsCache[lessonId]) {
      try {
        const saved = localStorage.getItem(`ths_sang_completed_steps_${lessonId}`);
        completedStepsCache[lessonId] = new Set(saved ? JSON.parse(saved) : []);
      } catch (e) {
        completedStepsCache[lessonId] = new Set();
      }
    }
    return completedStepsCache[lessonId];
  }

  function saveLessonCompletedSteps(lessonId) {
    if (completedStepsCache[lessonId]) {
      try {
        localStorage.setItem(`ths_sang_completed_steps_${lessonId}`, JSON.stringify(Array.from(completedStepsCache[lessonId])));
      } catch (e) {
        console.warn("Could not save completed steps to localStorage", e);
      }
    }
  }

  function getLessonLinearSteps(lesson) {
    const steps = [];
    if (!lesson) return steps;

    if (lesson.teacherWelcome) {
      steps.push({ id: "welcome", title: "Phần I. Lời chào của Thầy Sáng", part: "Phần I", weight: 5, isContent: false });
    }
    if (lesson.learningGoals && lesson.learningGoals.length > 0) {
      steps.push({ id: "goals", title: "Phần II. Mục tiêu & Yêu cầu cần đạt", part: "Phần II", weight: 5, isContent: false });
    }
    if (lesson.hook) {
      steps.push({ id: "hook", title: lesson.hook.title || "Tình huống mở đầu (Bài toán dẫn nhập)", part: "Phần III", isContent: true });
    }
    const sections = lesson.sections || [];
    sections.forEach((sec, idx) => {
      const secAnchor = `sec-${idx + 1}`;
      const secNum = (sec.num !== undefined && sec.num !== null && String(sec.num) !== 'undefined') 
        ? sec.num 
        : (sec.number ? String(sec.number).replace(/[^0-9]/g, '') : String(idx + 1));
      steps.push({
        id: secAnchor,
        title: `Mục ${secNum}. ${sec.title || ''}`,
        part: "Phần III",
        isContent: true,
        secNum: secNum,
        subsections: sec.subsections || []
      });
    });
    if (lesson.realworldWrapup) {
      steps.push({ id: "wrapup", title: lesson.realworldWrapup.title || "Chốt kiến thức then chốt (Tổng kết)", part: "Phần III", isContent: true });
    }
    if (lesson.examFormatPractice || lesson.practiceQuizzes || lesson.isOlmInteractive) {
      steps.push({ id: "quiz", title: "Phần IV. Bài tập củng cố (Trắc nghiệm)", part: "Phần IV", weight: 20, isContent: false });
    }
    return steps;
  }

  function calculateLessonProgress(lesson) {
    if (!lesson) return 0;
    const steps = getLessonLinearSteps(lesson);
    const completed = getLessonCompletedSteps(lesson.id);
    const contentSteps = steps.filter(s => s.isContent);
    const k = contentSteps.length || 1;
    const contentStepWeight = 70.0 / k;

    let total = 0;
    steps.forEach(s => {
      if (completed.has(s.id)) {
        if (s.id === 'welcome') total += 5;
        else if (s.id === 'goals') total += 5;
        else if (s.id === 'quiz') total += 20;
        else if (s.isContent) total += contentStepWeight;
      }
    });

    return Math.min(100, Math.round(total));
  }

  function renderStepNavFooterHtml(stepId, lesson) {
    const steps = getLessonLinearSteps(lesson);
    const idx = steps.findIndex(s => s.id === stepId);
    const isFirst = (idx <= 0);
    const isLast = (idx >= steps.length - 1);

    return `
      <div class="step-nav-footer" data-step-footer="${stepId}">
        <button type="button" class="btn-step-nav btn-step-prev" data-nav-action="prev" data-from-step="${stepId}" ${isFirst ? 'disabled' : ''}>
          <i class="fa-solid fa-arrow-left"></i> Mục trước
        </button>
        <button type="button" class="btn-step-nav btn-step-complete" data-nav-action="complete" data-from-step="${stepId}">
          <i class="fa-solid fa-circle-check"></i> Đã học xong &amp; Tiếp theo <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button type="button" class="btn-step-nav btn-step-next" data-nav-action="next" data-from-step="${stepId}" ${isLast ? 'disabled' : ''}>
          Mục sau <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  }

  function renderLessonStructureSidebar(lesson) {
    const sidebarHeaderEl = sidebarEl.querySelector(".sidebar-header");
    if (sidebarHeaderEl) {
      sidebarHeaderEl.className = "sidebar-header lesson-structure-header";
      sidebarHeaderEl.innerHTML = `
        <div class="structure-header-content">
          <div class="structure-badge-row">
            <span class="structure-tag"><i class="fa-solid fa-layer-group"></i> Cấu trúc bài học</span>
            <button class="btn-switch-to-chapters" id="btnSwitchToChapters" title="Xem danh sách tất cả các bài trong chương">
              <i class="fa-solid fa-bars-staggered"></i> Toàn bộ bài
            </button>
          </div>
          <h4 class="structure-lesson-title">Cấu trúc bài: ${escapeHtml(lesson.title)}</h4>
        </div>
      `;

      const btnSwitch = sidebarHeaderEl.querySelector("#btnSwitchToChapters");
      if (btnSwitch) {
        btnSwitch.addEventListener("click", () => {
          currentSidebarMode = "chapter_list";
          renderSidebar();
        });
      }
    }

    const completed = getLessonCompletedSteps(lesson.id);
    const steps = getLessonLinearSteps(lesson);
    const contentSteps = steps.filter(s => s.isContent);
    const k = contentSteps.length || 1;
    const contentStepWeight = Math.round(70.0 / k);

    let treeHtml = `<div class="lesson-structure-tree" id="lessonStructureTree">`;

    // Phần I: Lời chào
    if (lesson.teacherWelcome) {
      const isDone = completed.has("welcome");
      const isActive = currentActiveStepId === "welcome";
      treeHtml += `
        <div class="tree-node ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="welcome">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="tree-part-badge">I</span>
            <span class="tree-item-label">Phần I. Lời chào của Thầy Sáng</span>
            <span class="tree-item-percent">5%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
      `;
    }

    // Phần II: Mục tiêu & Yêu cầu cần đạt
    if (lesson.learningGoals && lesson.learningGoals.length > 0) {
      const isDone = completed.has("goals");
      const isActive = currentActiveStepId === "goals";
      treeHtml += `
        <div class="tree-node ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="goals">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="tree-part-badge">II</span>
            <span class="tree-item-label">Phần II. Mục tiêu &amp; Yêu cầu cần đạt</span>
            <span class="tree-item-percent">5%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
      `;
    }

    // Phần III: Tiến trình bài học (Group Box)
    treeHtml += `
      <div class="tree-group-box">
        <div class="tree-group-header">
          <span class="tree-group-title"><i class="fa-solid fa-chalkboard-user"></i> Phần III. Tiến trình bài học</span>
          <span class="tree-group-badge">70% tiến trình</span>
        </div>
    `;

    // Hook
    if (lesson.hook) {
      const isDone = completed.has("hook");
      const isActive = currentActiveStepId === "hook";
      treeHtml += `
        <div class="tree-node tree-child-1 ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="hook">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="tree-item-label">Tình huống mở đầu (Bài toán dẫn nhập)</span>
            <span class="tree-item-percent">${contentStepWeight}%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
      `;
    }

    // Các mục 1, 2, 3...
    const sections = lesson.sections || [];
    sections.forEach((sec, sIdx) => {
      const secAnchor = `sec-${sIdx + 1}`;
      const secNum = (sec.num !== undefined && sec.num !== null && String(sec.num) !== 'undefined') 
        ? sec.num 
        : (sec.number ? String(sec.number).replace(/[^0-9]/g, '') : String(sIdx + 1));
      const isDone = completed.has(secAnchor);
      const isActive = currentActiveStepId === secAnchor;
      const subs = sec.subsections || [];

      treeHtml += `
        <div class="tree-node tree-child-1 ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="${secAnchor}">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="sec-num-circle">${secNum}</span>
            <span class="tree-item-label">Mục ${secNum}. ${escapeHtml(sec.title)}</span>
            <span class="tree-item-percent">${contentStepWeight}%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
      `;

      if (subs.length > 0) {
        treeHtml += `<div class="tree-subsections-list" data-parent-sec="${secAnchor}">`;
        subs.forEach((sub) => {
          treeHtml += `
            <div class="tree-sub-item" data-step-id="${secAnchor}" data-subkey="${escapeHtml(sub.key)}">
              <span class="tree-sub-bullet">•</span>
              <strong>${escapeHtml(sub.key)})</strong> ${escapeHtml(sub.title)}
            </div>
          `;
        });
        treeHtml += `</div>`;
      }
    });

    // Realworld Wrapup
    if (lesson.realworldWrapup) {
      const isDone = completed.has("wrapup");
      const isActive = currentActiveStepId === "wrapup";
      treeHtml += `
        <div class="tree-node tree-child-1 ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="wrapup">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="tree-item-label">Chốt kiến thức then chốt (Tổng kết)</span>
            <span class="tree-item-percent">${contentStepWeight}%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
      `;
    }

    treeHtml += `</div>`; // Close tree-group-box

    // Phần IV: Bài tập củng cố
    if (lesson.examFormatPractice || lesson.practiceQuizzes || lesson.isOlmInteractive) {
      const isDone = completed.has("quiz");
      const isActive = currentActiveStepId === "quiz";
      treeHtml += `
        <div class="tree-node ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" data-step-id="quiz">
          <div class="tree-item-row">
            <span class="tree-status-icon">
              <i class="fa-${isDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
            </span>
            <span class="tree-part-badge">IV</span>
            <span class="tree-item-label">Phần IV. Bài tập củng cố (Trắc nghiệm)</span>
            <span class="tree-item-percent">20%</span>
            ${isDone ? `<span class="tree-done-tag"><i class="fa-solid fa-check"></i> Đã xong</span>` : ''}
          </div>
        </div>
        <div class="tree-subsections-list" data-parent-sec="quiz">
          <div class="tree-sub-item" data-step-id="quiz" data-quiz-part="1">
            <span class="tree-sub-bullet">•</span> Dạng 1: Trắc nghiệm 4 lựa chọn (5 câu)
          </div>
          <div class="tree-sub-item" data-step-id="quiz" data-quiz-part="2">
            <span class="tree-sub-bullet">•</span> Dạng 2: Trắc nghiệm Đúng / Sai (3 câu)
          </div>
          <div class="tree-sub-item" data-step-id="quiz" data-quiz-part="3">
            <span class="tree-sub-bullet">•</span> Dạng 3: Trả lời ngắn thực tế (2 câu)
          </div>
        </div>
      `;
    }

    treeHtml += `</div>`; // Close lessonStructureTree

    sidebarContainer.innerHTML = treeHtml;

    // Gắn sự kiện click vào các node trên cây
    sidebarContainer.querySelectorAll(".tree-node").forEach(node => {
      node.addEventListener("click", () => {
        const stepId = node.dataset.stepId;
        if (stepId) activateStep(stepId);
      });
    });

    sidebarContainer.querySelectorAll(".tree-sub-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const stepId = item.dataset.stepId;
        const subkey = item.dataset.subkey;
        const quizPart = item.dataset.quizPart;
        activateStep(stepId, subkey, quizPart);
      });
    });
  }

  function renderChapterListSidebar() {
    const sidebarHeaderEl = sidebarEl.querySelector(".sidebar-header");
    if (sidebarHeaderEl) {
      sidebarHeaderEl.className = "sidebar-header";
      sidebarHeaderEl.innerHTML = `
        <h4><i class="fa-solid fa-list-check"></i> Cấu trúc Chương &amp; Bài</h4>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn-switch-to-chapters" id="btnSwitchToLessonTree" title="Quay lại cây cấu trúc bài đang chọn" style="padding: 3px 8px; font-size: 0.72rem;">
            <i class="fa-solid fa-arrow-left"></i> Bài đang học
          </button>
          <span class="sidebar-counter" id="sidebarCounter"></span>
        </div>
      `;
      const btnSwitch = sidebarHeaderEl.querySelector("#btnSwitchToLessonTree");
      if (btnSwitch) {
        btnSwitch.addEventListener("click", () => {
          currentSidebarMode = "lesson_tree";
          renderSidebar();
        });
      }
    }

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
        return;
      }

      totalMatchingLessons += filteredLessons.length;

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
    const counterEl = document.getElementById("sidebarCounter");
    if (counterEl) counterEl.textContent = `${totalMatchingLessons} bài học`;

    sidebarContainer.querySelectorAll(".chapter-card-header").forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".chapter-accordion-card");
        if (card) {
          card.classList.toggle("open");
        }
      });
    });

    sidebarContainer.querySelectorAll(".lesson-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lessonId = btn.dataset.lessonId;
        selectLesson(lessonId);
      });
    });
  }

  function applyViewMode() {
    const blocks = document.querySelectorAll("[data-step-block]");
    if (!blocks || blocks.length === 0) return;

    if (currentViewMode === "step") {
      let found = false;
      blocks.forEach(b => {
        if (b.dataset.stepBlock === currentActiveStepId) {
          b.style.display = "";
          found = true;
        } else {
          b.style.display = "none";
        }
      });

      if (!found && blocks.length > 0) {
        currentActiveStepId = blocks[0].dataset.stepBlock;
        blocks[0].style.display = "";
      }
    } else {
      blocks.forEach(b => {
        b.style.display = "";
      });
    }
  }

  function activateStep(stepId, subKey, quizPart) {
    currentActiveStepId = stepId;

    if (sidebarContainer) {
      sidebarContainer.querySelectorAll(".tree-node").forEach(node => {
        node.classList.toggle("is-active", node.dataset.stepId === stepId);
      });
      sidebarContainer.querySelectorAll(".tree-sub-item").forEach(item => {
        const match = (item.dataset.stepId === stepId && (
          (subKey && item.dataset.subkey === subKey) || 
          (quizPart && item.dataset.quizPart === quizPart)
        ));
        item.classList.toggle("is-active", !!match);
      });
    }

    applyViewMode();

    const statusTextEl = document.getElementById("currentStepStatusText");
    if (statusTextEl) {
      const flatList = getFlatLessonsList(currentGrade);
      const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
      const steps = currentItem ? getLessonLinearSteps(currentItem.lesson) : [];
      const stepObj = steps.find(s => s.id === stepId);
      const title = stepObj ? stepObj.title : stepId;
      statusTextEl.innerHTML = `Đang học: <strong>${escapeHtml(title)}</strong>`;
    }

    setTimeout(() => {
      if (subKey) {
        const subCard = document.getElementById(`sub-${subKey}`) || document.querySelector(`[data-subkey="${subKey}"]`);
        if (subCard) {
          subCard.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      if (quizPart) {
        const qPart = document.getElementById(`quiz-part${quizPart}`);
        if (qPart) {
          qPart.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      const targetBlock = document.querySelector(`[data-step-block="${stepId}"]`);
      if (targetBlock) {
        targetBlock.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  }

  function markStepCompleted(stepId) {
    const flatList = getFlatLessonsList(currentGrade);
    const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
    if (!currentItem) return;
    const lesson = currentItem.lesson;

    const completed = getLessonCompletedSteps(lesson.id);
    const wasAlreadyDone = completed.has(stepId);
    completed.add(stepId);
    saveLessonCompletedSteps(lesson.id);

    const pct = calculateLessonProgress(lesson);
    currentLessonProgress = pct;
    updateLessonProgressDisplay();

    if (sidebarContainer) {
      const node = sidebarContainer.querySelector(`.tree-node[data-step-id="${stepId}"]`);
      if (node) {
        node.classList.add("is-completed");
        const icon = node.querySelector(".tree-status-icon");
        if (icon) {
          icon.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i>`;
        }
        if (!node.querySelector(".tree-done-tag")) {
          const row = node.querySelector(".tree-item-row");
          if (row) {
            const tag = document.createElement("span");
            tag.className = "tree-done-tag";
            tag.innerHTML = `<i class="fa-solid fa-check"></i> Đã xong`;
            row.appendChild(tag);
          }
        }
      }
    }

    if (!wasAlreadyDone && typeof window.showToast === "function") {
      window.showToast(`🎉 Tuyệt vời! Em đã hoàn thành mục này. Tiến độ: ${pct}%`, "success");
    }

    if (pct >= 100) {
      if (typeof window.triggerConfettiFireworks === "function") {
        window.triggerConfettiFireworks();
      }
      if (typeof window.showToast === "function") {
        window.showToast(`🏆 Chúc mừng em đã hoàn thành 100% bài học số!`, "success");
      }
    }
  }

  function goToNextStep(fromStepId) {
    const flatList = getFlatLessonsList(currentGrade);
    const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
    if (!currentItem) return;
    const steps = getLessonLinearSteps(currentItem.lesson);
    const currentIdx = steps.findIndex(s => s.id === fromStepId);

    if (currentIdx !== -1 && currentIdx < steps.length - 1) {
      activateStep(steps[currentIdx + 1].id);
    }
  }

  function goToPrevStep(fromStepId) {
    const flatList = getFlatLessonsList(currentGrade);
    const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
    if (!currentItem) return;
    const steps = getLessonLinearSteps(currentItem.lesson);
    const currentIdx = steps.findIndex(s => s.id === fromStepId);

    if (currentIdx > 0) {
      activateStep(steps[currentIdx - 1].id);
    }
  }

  window.markCurrentStepDoneOnAudioEnd = function() {
    if (currentActiveStepId) {
      markStepCompleted(currentActiveStepId);
    }
  };

  function initLessonStepperEngine(lesson) {
    const pct = calculateLessonProgress(lesson);
    currentLessonProgress = pct;
    updateLessonProgressDisplay();

    const btnModeStep = document.getElementById("btnModeStep");
    const btnModeAll = document.getElementById("btnModeAll");

    if (btnModeStep) {
      btnModeStep.addEventListener("click", () => {
        currentViewMode = "step";
        btnModeStep.classList.add("active");
        if (btnModeAll) btnModeAll.classList.remove("active");
        applyViewMode();
        activateStep(currentActiveStepId);
      });
    }

    if (btnModeAll) {
      btnModeAll.addEventListener("click", () => {
        currentViewMode = "all";
        btnModeAll.classList.add("active");
        if (btnModeStep) btnModeStep.classList.remove("active");
        applyViewMode();
      });
    }

    sectionsContainer.querySelectorAll(".btn-step-nav").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const action = btn.dataset.navAction;
        const fromStep = btn.dataset.fromStep;
        if (action === "prev") {
          goToPrevStep(fromStep);
        } else if (action === "next") {
          goToNextStep(fromStep);
        } else if (action === "complete") {
          markStepCompleted(fromStep);
          goToNextStep(fromStep);
        }
      });
    });

    const steps = getLessonLinearSteps(lesson);
    if (!steps.some(s => s.id === currentActiveStepId)) {
      currentActiveStepId = steps.length > 0 ? steps[0].id : "welcome";
    }

    activateStep(currentActiveStepId);
  }

  // 2. Render Tầng 2: Danh sách Chương & Bài học trong Sidebar
  function renderSidebar() {
    const flatList = getFlatLessonsList(currentGrade);
    const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
    const lesson = currentItem ? currentItem.lesson : null;

    if (currentSidebarMode === "lesson_tree" && lesson) {
      renderLessonStructureSidebar(lesson);
    } else {
      renderChapterListSidebar();
    }
  }
'''

# 1. Replace renderSidebar
old_render_sidebar_pattern = r'  // 2\. Render Tầng 2: Danh sách Chương & Bài học trong Sidebar\r?\n  function renderSidebar\(\) \{[\s\S]*?sidebarContainer\.querySelectorAll\("\.lesson-nav-btn"\)\.forEach\(btn => \{[\s\S]*?\}\);\r?\n  \}'

match = re.search(old_render_sidebar_pattern, text)
if not match:
    print("ERROR: could not find old renderSidebar block!")
    sys.exit(1)

print("Found old renderSidebar block. Replacing with helpers and new renderSidebar...")
text = text[:match.start()] + helpers_code + text[match.end():]

# 2. Add View Mode Bar in renderLessonViewer
old_progress_bar_end = '''            <div class="olm-gamification-badges">
              <span class="olm-xp-pill" id="olmXpDisplay"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> 0 XP</span>
              <span class="olm-stars-pill" id="olmStarsDisplay"><i class="fa-solid fa-star" style="color: #8b5cf6;"></i> ⭐ 0</span>
            </div>
          </div>
        </div>
      `;
    }'''

new_progress_bar_end = '''            <div class="olm-gamification-badges">
              <span class="olm-xp-pill" id="olmXpDisplay"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> 0 XP</span>
              <span class="olm-stars-pill" id="olmStarsDisplay"><i class="fa-solid fa-star" style="color: #8b5cf6;"></i> ⭐ 0</span>
            </div>
          </div>
        </div>
      `;

      sectionsHtml += `
        <div class="view-mode-bar" id="lessonViewModeBar">
          <div class="view-mode-status">
            <i class="fa-solid fa-chalkboard-user" style="color: #0284c7;"></i>
            <span id="currentStepStatusText">Đang học: <strong>Lời chào của Thầy Sáng</strong></span>
          </div>
          <div class="view-mode-toggles">
            <button type="button" class="btn-view-toggle ${currentViewMode === 'step' ? 'active' : ''}" data-mode="step" id="btnModeStep">
              <i class="fa-solid fa-bullseye"></i> Học từng mục (Tập trung)
            </button>
            <button type="button" class="btn-view-toggle ${currentViewMode === 'all' ? 'active' : ''}" data-mode="all" id="btnModeAll">
              <i class="fa-solid fa-list-ul"></i> Xem toàn bộ bài
            </button>
          </div>
        </div>
      `;
    }'''

assert old_progress_bar_end in text, "Could not find old_progress_bar_end"
text = text.replace(old_progress_bar_end, new_progress_bar_end, 1)
print("Added View Mode Bar!")

# 3. Welcome card tag and footer
old_welcome = '''          <div class="welcome-quote-body">
            <i class="fa-solid fa-quote-left quote-corner-icon"></i>
            <p class="welcome-quote-msg">"${lesson.teacherWelcome.greetingText || lesson.teacherWelcome.quote || ""}"</p>
          </div>
        </div>'''

new_welcome = '''          <div class="welcome-quote-body">
            <i class="fa-solid fa-quote-left quote-corner-icon"></i>
            <p class="welcome-quote-msg">"${lesson.teacherWelcome.greetingText || lesson.teacherWelcome.quote || ""}"</p>
          </div>
          ${renderStepNavFooterHtml('welcome', lesson)}
        </div>'''

assert '<div class="teacher-welcome-card" id="lessonWelcomeCard">' in text
text = text.replace('<div class="teacher-welcome-card" id="lessonWelcomeCard">', '<div class="teacher-welcome-card" id="lessonWelcomeCard" data-step-block="welcome">', 1)
assert old_welcome in text
text = text.replace(old_welcome, new_welcome, 1)
print("Updated Welcome Card with data-step-block and footer!")

# 4. Goals box tag and footer
old_goals = '''          <ul class="lesson-goals-list">
            ${lesson.learningGoals.map(g => {
              if (typeof g === 'string') {
                return `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${g}</li>`;
              }
              const titlePart = g.title ? `<strong>${g.title}:</strong> ` : '';
              const descPart = g.desc || g.text || '';
              return `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${titlePart}${descPart}</li>`;
            }).join("")}
          </ul>
        </div>'''

new_goals = '''          <ul class="lesson-goals-list">
            ${lesson.learningGoals.map(g => {
              if (typeof g === 'string') {
                return `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${g}</li>`;
              }
              const titlePart = g.title ? `<strong>${g.title}:</strong> ` : '';
              const descPart = g.desc || g.text || '';
              return `<li><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 8px;"></i>${titlePart}${descPart}</li>`;
            }).join("")}
          </ul>
          ${renderStepNavFooterHtml('goals', lesson)}
        </div>'''

assert '<div class="lesson-goals-box">' in text
text = text.replace('<div class="lesson-goals-box">', '<div class="lesson-goals-box" id="lessonGoalsBox" data-step-block="goals">', 1)
assert old_goals in text
text = text.replace(old_goals, new_goals, 1)
print("Updated Goals Box with data-step-block and footer!")

# 5. Hook card tag and footer
old_hook_close = '''                  <i class="fa-solid fa-forward"></i> Học tiếp bài giảng
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }'''

new_hook_close = '''                  <i class="fa-solid fa-forward"></i> Học tiếp bài giảng
                </button>
              </div>
            </div>
          </div>
          ${renderStepNavFooterHtml('hook', lesson)}
        </div>
      `;
    }'''

assert '<div class="lesson-hook-card">' in text
text = text.replace('<div class="lesson-hook-card">', '<div class="lesson-hook-card" id="lessonHookCard" data-step-block="hook">', 1)
assert old_hook_close in text
text = text.replace(old_hook_close, new_hook_close, 1)
print("Updated Hook Card with data-step-block and footer!")

# 6. Sections in loop
assert '<article class="lesson-section-card" id="${secAnchor}">' in text
text = text.replace('<article class="lesson-section-card" id="${secAnchor}">', '<article class="lesson-section-card" id="${secAnchor}" data-step-block="${secAnchor}">', 1)

assert '<div class="subsection-card">' in text
text = text.replace('<div class="subsection-card">', '<div class="subsection-card" id="sub-${escapeHtml(sub.key)}" data-subkey="${escapeHtml(sub.key)}">')

old_sec_close = '''                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </article>'''

new_sec_close = '''                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
          ${renderStepNavFooterHtml(secAnchor, lesson)}
        </article>'''

assert old_sec_close in text
text = text.replace(old_sec_close, new_sec_close, 1)
print("Updated Section Cards with data-step-block, subkey, and footers!")

# 7. Realworld Wrapup
old_wrapup_close = '''                <div class="wrapup-solution-content">
                  ${lesson.realworldWrapup.solution || ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;'''

new_wrapup_close = '''                <div class="wrapup-solution-content">
                  ${lesson.realworldWrapup.solution || ''}
                </div>
              </div>
            </div>
          </div>
          ${renderStepNavFooterHtml('wrapup', lesson)}
        </div>
      `;'''

assert '<div class="realworld-wrapup-card">' in text
text = text.replace('<div class="realworld-wrapup-card">', '<div class="realworld-wrapup-card" id="lessonRealworldWrapup" data-step-block="wrapup">', 1)
assert old_wrapup_close in text
text = text.replace(old_wrapup_close, new_wrapup_close, 1)
print("Updated Wrapup Card with data-step-block and footer!")

# 8. Exam Format Practice (Quiz)
assert '<div class="exam-format-wrap" id="examFormatPracticeSection">' in text
text = text.replace('<div class="exam-format-wrap" id="examFormatPracticeSection">', '<div class="exam-format-wrap" id="examFormatPracticeSection" data-step-block="quiz">', 1)

# Add ids to the 3 parts
d1_target = '<!-- DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU) -->\n          ${ef.part1MultipleChoice && ef.part1MultipleChoice.length > 0 ? `\n            <div class="exam-sub-section">'
d1_repl = '<!-- DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU) -->\n          ${ef.part1MultipleChoice && ef.part1MultipleChoice.length > 0 ? `\n            <div class="exam-sub-section" id="quiz-part1">'
assert d1_target in text
text = text.replace(d1_target, d1_repl, 1)

d2_target = '<!-- DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (3 CÂU) -->\n          ${ef.part2TrueFalse && ef.part2TrueFalse.length > 0 ? `\n            <div class="exam-sub-section">'
d2_repl = '<!-- DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (3 CÂU) -->\n          ${ef.part2TrueFalse && ef.part2TrueFalse.length > 0 ? `\n            <div class="exam-sub-section" id="quiz-part2">'
assert d2_target in text
text = text.replace(d2_target, d2_repl, 1)

d3_target = '<!-- DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU) -->\n          ${ef.part3ShortAnswer && ef.part3ShortAnswer.length > 0 ? `\n            <div class="exam-sub-section">'
d3_repl = '<!-- DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU) -->\n          ${ef.part3ShortAnswer && ef.part3ShortAnswer.length > 0 ? `\n            <div class="exam-sub-section" id="quiz-part3">'
assert d3_target in text
text = text.replace(d3_target, d3_repl, 1)

old_exam_close = '''                    <button class="btn-submit-tf" id="btnCheckTrueFalse" style="padding: 8px 18px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
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
    }'''

new_exam_close = '''                    <button class="btn-submit-tf" id="btnCheckTrueFalse" style="padding: 8px 18px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                      <i class="fa-solid fa-check"></i> Kiểm tra kết quả
                    </button>
                  </div>
                </div>
              `;
            }
            return "";
          }).join("")}
          ${renderStepNavFooterHtml('quiz', lesson)}
        </div>
      `;
    }'''

assert old_exam_close in text
text = text.replace(old_exam_close, new_exam_close, 1)
print("Updated Quiz Card with data-step-block, part ids, and footer!")

# 9. Call initLessonStepperEngine in renderLessonViewer
old_events_call = '''    // Gắn sự kiện Giọng đọc AI & Các bài tập tương tác
    bindDigitalLessonEvents(sectionsContainer);

    // Kích hoạt OLM Interactive Engine nếu bài học có tính năng OLM tương tác
    if (lesson.isOlmInteractive && typeof window.initOlmLessonEngine === 'function') {
      window.initOlmLessonEngine(lesson);
    }'''

new_events_call = '''    // Gắn sự kiện Giọng đọc AI & Các bài tập tương tác
    bindDigitalLessonEvents(sectionsContainer);

    // Kích hoạt OLM Interactive Engine nếu bài học có tính năng OLM tương tác
    if (lesson.isOlmInteractive && typeof window.initOlmLessonEngine === 'function') {
      window.initOlmLessonEngine(lesson);
    }

    // Kích hoạt Stepper Engine học từng mục & tính % theo chuẩn Thầy Sáng
    initLessonStepperEngine(lesson);'''

assert old_events_call in text
text = text.replace(old_events_call, new_events_call, 1)
print("Added initLessonStepperEngine call!")

# 10. Update selectLesson
old_select = '''  // Chọn bài học mới
  function selectLesson(lessonId) {
    currentLessonId = lessonId;
    renderSidebar();
    renderLessonViewer();'''

new_select = '''  // Chọn bài học mới
  function selectLesson(lessonId) {
    currentLessonId = lessonId;
    currentSidebarMode = "lesson_tree";
    currentActiveStepId = "welcome";
    renderSidebar();
    renderLessonViewer();'''

assert old_select in text
text = text.replace(old_select, new_select, 1)
print("Updated selectLesson to set lesson_tree mode and welcome step!")

# 11. Update audio ended listener
old_ended_1 = '''          setTimeout(() => {
            stopTeacherSpeech();
            if (typeof window.increaseLessonProgress === "function") {
              window.increaseLessonProgress(10, 15, 1);
            }
          }, 400);'''

new_ended_1 = '''          setTimeout(() => {
            stopTeacherSpeech();
            if (typeof window.markCurrentStepDoneOnAudioEnd === "function") {
              window.markCurrentStepDoneOnAudioEnd();
            } else if (typeof window.increaseLessonProgress === "function") {
              window.increaseLessonProgress(10, 15, 1);
            }
          }, 400);'''

assert old_ended_1 in text
text = text.replace(old_ended_1, new_ended_1, 1)

old_ended_2 = '''            currentHtml5Audio.onended = () => {
              stopTeacherSpeech();
              if (typeof window.increaseLessonProgress === "function") {
                window.increaseLessonProgress(10, 15, 1);
              }
            };'''

new_ended_2 = '''            currentHtml5Audio.onended = () => {
              stopTeacherSpeech();
              if (typeof window.markCurrentStepDoneOnAudioEnd === "function") {
                window.markCurrentStepDoneOnAudioEnd();
              } else if (typeof window.increaseLessonProgress === "function") {
                window.increaseLessonProgress(10, 15, 1);
              }
            };'''

assert old_ended_2 in text
text = text.replace(old_ended_2, new_ended_2, 1)
print("Updated audio ended listeners with markCurrentStepDoneOnAudioEnd!")

# Save to js/script.js
with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: All changes applied successfully to js/script.js!")
