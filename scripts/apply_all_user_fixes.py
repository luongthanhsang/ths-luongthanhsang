import re, sys

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update mathToVietnameseSpeech using string slice
m_speech = re.search(r'  function mathToVietnameseSpeech\(text\) \{[\s\S]*?return s;\r?\n  \}', text)
assert m_speech, "mathToVietnameseSpeech not found"

new_math_speech = '''  function mathToVietnameseSpeech(text) {
    if (!text) return "";
    let s = text;
    // Bỏ thẻ HTML
    s = s.replace(/<[^>]+>/g, " ");

    // 1. Chuẩn hóa toạ độ Oxy và Oxyz phát âm rõ từng chữ (O x y, O x y z)
    s = s.replace(/\\bOxyz\\b/g, " O x y z ");
    s = s.replace(/\\bOxy\\b/g, " O x y ");
    s = s.replace(/\\(Oxyz\\)/g, " O x y z ");
    s = s.replace(/\\(Oxy\\)/g, " O x y ");

    // 2. Chuẩn hóa hàm cotang và góc an pha
    s = s.replace(/\\\\cot\\s*\\(?\\\\alpha\\)?/gi, " cô tăng góc an pha ");
    s = s.replace(/cot\\s*\\(?\\\\alpha\\)?/gi, " cô tăng góc an pha ");
    s = s.replace(/cot\\s*\\(\\s*an\\s*pha\\s*\\)/gi, " cô tăng góc an pha ");
    s = s.replace(/cot\\s*an\\s*pha/gi, " cô tăng góc an pha ");
    s = s.replace(/\\\\cot/g, " cô tăng ");
    s = s.replace(/\\bcot\\b/g, " cô tăng ");

    // 3. Chuẩn hóa vectơ có mũi tên trên đầu (véc tơ A B...)
    s = s.replace(/\\\\vec\\{0\\}/g, " véc tơ không ");
    s = s.replace(/\\\\overrightarrow\\{0\\}/g, " véc tơ không ");
    s = s.replace(/\\\\vec\\{([A-Z])([A-Z])\\}/g, " véc tơ $1 $2 ");
    s = s.replace(/\\\\overrightarrow\\{([A-Z])([A-Z])\\}/g, " véc tơ $1 $2 ");
    s = s.replace(/\\\\vec\\{([A-Za-z0-9_]+)\\}/g, " véc tơ $1 ");
    s = s.replace(/\\\\overrightarrow\\{([A-Za-z0-9_]+)\\}/g, " véc tơ $1 ");
    s = s.replace(/\\\\vec\\s+([A-Za-z0-9_]+)/g, " véc tơ $1 ");
    s = s.replace(/\\|\\\\vec\\{([^}]+)\\}\\/g, " độ dài véc tơ $1 ");
    s = s.replace(/\\|\\\\overrightarrow\\{([^}]+)\\}\\/g, " độ dài véc tơ $1 ");

    // 4. Các ký hiệu toán học phổ biến khác
    s = s.replace(/\\\\parallel/g, " song song với ");
    s = s.replace(/\\/\\//g, " song song với ");
    s = s.replace(/\\\\not\\\\subset/g, " không nằm trong ");
    s = s.replace(/\\\\subset/g, " nằm trong ");
    s = s.replace(/\\\\cap/g, " giao với ");
    s = s.replace(/\\\\cup/g, " hợp với ");
    s = s.replace(/\\\\emptyset/g, " tập rỗng ");
    s = s.replace(/\\\\perp/g, " vuông góc với ");
    s = s.replace(/\\\\cdot/g, " nhân ");
    s = s.replace(/\\\\cos/g, " cô sin ");
    s = s.replace(/\\\\sin/g, " sin ");
    s = s.replace(/\\\\tan/g, " tang ");
    s = s.replace(/\\\\widehat\\{([^}]+)\\}/g, " góc $1 ");
    s = s.replace(/\\\\alpha/g, " an pha ");
    s = s.replace(/\\\\beta/g, " bê ta ");
    s = s.replace(/\\\\gamma/g, " gam ma ");
    s = s.replace(/\\\\varphi/g, " phi ");
    s = s.replace(/\\\\sqrt\\{([^}]+)\\}/g, " căn bậc hai của $1 ");
    s = s.replace(/\\\\frac\\{([^}]+)\\}\\{([^}]+)\\}/g, " $1 phần $2 ");
    s = s.replace(/\\^2/g, " bình phương ");
    s = s.replace(/\\^3/g, " lập phương ");
    s = s.replace(/\\^\\\\circ/g, " độ ");
    s = s.replace(/\\^\\circ/g, " độ ");
    s = s.replace(/\\\\ge/g, " lớn hơn hoặc bằng ");
    s = s.replace(/\\\\le/g, " nhỏ hơn hoặc bằng ");
    s = s.replace(/\\\\ne/g, " khác ");
    s = s.replace(/\\\\implies/g, " suy ra ");
    s = s.replace(/\\\\iff/g, " khi và chỉ khi ");
    s = s.replace(/\\\\times/g, " nhân ");
    s = s.replace(/\\\\pm/g, " cộng trừ ");
    s = s.replace(/[\\$\\{\\}\\_]/g, " ");
    s = s.replace(/\\\\/g, " ");
    s = s.replace(/\\s+/g, " ").trim();
    return s;
  }'''

text = text[:m_speech.start()] + new_math_speech + text[m_speech.end():]
print("Updated mathToVietnameseSpeech successfully!")

# 2. MathJax in showPoiModal
old_poi_fb = '''          fb.style.display = 'block';
          fb.style.background = '#f0fdf4';
          fb.style.color = '#16a34a';
          fb.style.border = '1px solid #bbf7d0';
          fb.innerHTML = '🎉 ' + (poi.explain || 'Chính xác! Thầy khen em đã nắm bài rất tốt!');'''

new_poi_fb = '''          fb.style.display = 'block';
          fb.style.background = '#f0fdf4';
          fb.style.color = '#16a34a';
          fb.style.border = '1px solid #bbf7d0';
          fb.innerHTML = '🎉 ' + (poi.explain || 'Chính xác! Thầy khen em đã nắm bài rất tốt!');
          if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([fb]).catch(e => console.warn(e));
          }'''

assert old_poi_fb in text, "old_poi_fb not found"
text = text.replace(old_poi_fb, new_poi_fb, 1)
print("Updated MathJax typeset in showPoiModal!")

# 3. MathJax in bindDigitalLessonEvents for checkpoint buttons
old_btn_cp = '''          const feedback = parentCard.querySelector(".checkpoint-feedback") || parentCard.querySelector(".exam-solution-collapse");
          if (feedback) feedback.classList.add("show");'''

new_btn_cp = '''          const feedback = parentCard.querySelector(".checkpoint-feedback") || parentCard.querySelector(".exam-solution-collapse");
          if (feedback) {
            feedback.classList.add("show");
            if (window.MathJax && window.MathJax.typesetPromise) {
              window.MathJax.typesetPromise([feedback]).catch(e => console.warn(e));
            }
          }'''

assert old_btn_cp in text, "old_btn_cp not found"
text = text.replace(old_btn_cp, new_btn_cp, 1)
print("Updated MathJax typeset in checkpoint click!")

# 4. Helper cleanSubKey and updated Stepper functions
new_helpers = '''  // ==========================================================================
  // HỆ THỐNG CẤU TRÚC BÀI HỌC SỐ PHÂN CẤP & BỘ ĐIỀU HƯỚNG TỪNG MỤC (THẦY SÁNG)
  // ==========================================================================
  let currentSidebarMode = "lesson_tree"; // "lesson_tree" hoặc "chapter_list"
  let currentActiveStepId = "welcome";     // Mục hiện tại đang học
  let currentActiveSubKey = null;          // Tiểu mục a, b đang chọn
  let currentViewMode = "step";            // "step" (Tập trung từng mục) hoặc "all" (Xem toàn bài)
  const completedStepsCache = {};

  function cleanSubKey(key, index) {
    if (!key) return String.fromCharCode(97 + (index || 0));
    const letters = String(key).replace(/^[0-9]+/g, '').replace(/[^a-zA-Z]/g, '').trim().toLowerCase();
    return letters || String.fromCharCode(97 + (index || 0));
  }

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
    const completed = getLessonCompletedSteps(lesson.id);

    let totalWeight = 0;
    if (completed.has('welcome')) totalWeight += 5;
    if (completed.has('goals')) totalWeight += 5;
    if (completed.has('quiz')) totalWeight += 20;

    let contentUnits = [];
    if (lesson.hook) {
      contentUnits.push({ id: 'hook' });
    }
    const sections = lesson.sections || [];
    sections.forEach((sec, sIdx) => {
      const secAnchor = `sec-${sIdx + 1}`;
      const subs = sec.subsections || [];
      if (subs.length > 1) {
        subs.forEach((sub, subIdx) => {
          const subKey = cleanSubKey(sub.key, subIdx);
          contentUnits.push({ id: `${secAnchor}-${subKey}`, parentId: secAnchor });
        });
      } else {
        contentUnits.push({ id: secAnchor });
      }
    });
    if (lesson.realworldWrapup) {
      contentUnits.push({ id: 'wrapup' });
    }

    const n = contentUnits.length || 1;
    const unitWeight = 70.0 / n;

    contentUnits.forEach(u => {
      if (completed.has(u.id)) {
        totalWeight += unitWeight;
      }
    });

    return Math.min(100, Math.round(totalWeight));
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
      const lessonNumStr = (lesson.number ? (lesson.number.trim().toLowerCase().startsWith("bài") ? lesson.number.trim() : `Bài ${lesson.number.trim()}`) : "");
      const fullTitleStr = lessonNumStr ? `${lessonNumStr}. ${lesson.title}` : lesson.title;

      sidebarHeaderEl.innerHTML = `
        <div class="structure-header-content">
          <div class="structure-badge-row">
            <span class="structure-tag"><i class="fa-solid fa-layer-group"></i> Bài học số</span>
            <button class="btn-switch-to-chapters" id="btnSwitchToChapters" title="Xem danh sách tất cả các bài trong chương">
              <i class="fa-solid fa-bars-staggered"></i> Toàn bộ bài
            </button>
          </div>
          <h4 class="structure-lesson-title">${escapeHtml(fullTitleStr)}</h4>
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
      
      const subs = sec.subsections || [];
      const hasMultipleSubs = subs.length > 1;

      // Nếu có từ 2 mục con trở lên: Mục cha chỉ hoàn thành khi TẤT CẢ mục con đã xong
      const isDone = hasMultipleSubs 
        ? subs.every((sub, subIdx) => completed.has(`${secAnchor}-${cleanSubKey(sub.key, subIdx)}`))
        : completed.has(secAnchor);

      const isActive = currentActiveStepId === secAnchor;

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

      // Nếu trong mục 1 có các mục nhỏ a, b,.. thì mới thể hiện các mục con a, b,... (không ghi 1a, 1b)
      if (hasMultipleSubs) {
        treeHtml += `<div class="tree-subsections-list" data-parent-sec="${secAnchor}">`;
        subs.forEach((sub, subIdx) => {
          const cleanKey = cleanSubKey(sub.key, subIdx);
          const subStepId = `${secAnchor}-${cleanKey}`;
          const isSubDone = completed.has(subStepId);
          const isSubActive = (currentActiveStepId === secAnchor && currentActiveSubKey === cleanKey);

          treeHtml += `
            <div class="tree-sub-item ${isSubActive ? 'is-active' : ''} ${isSubDone ? 'is-completed' : ''}" data-step-id="${secAnchor}" data-sub-step-id="${subStepId}" data-subkey="${cleanKey}">
              <span class="tree-sub-status-icon">
                <i class="fa-${isSubDone ? 'solid fa-circle-check' : 'regular fa-circle'}"></i>
              </span>
              <span class="tree-sub-letter">${cleanKey}.</span>
              <span class="tree-sub-title">${escapeHtml(sub.title)}</span>
              ${isSubDone ? `<span class="tree-sub-done-tag"><i class="fa-solid fa-check"></i></span>` : ''}
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
            <span class="tree-sub-status-icon"><i class="fa-regular fa-circle"></i></span>
            <span class="tree-sub-letter">•</span>
            <span class="tree-sub-title">Dạng 1: Trắc nghiệm 4 lựa chọn (5 câu)</span>
          </div>
          <div class="tree-sub-item" data-step-id="quiz" data-quiz-part="2">
            <span class="tree-sub-status-icon"><i class="fa-regular fa-circle"></i></span>
            <span class="tree-sub-letter">•</span>
            <span class="tree-sub-title">Dạng 2: Trắc nghiệm Đúng / Sai (3 câu)</span>
          </div>
          <div class="tree-sub-item" data-step-id="quiz" data-quiz-part="3">
            <span class="tree-sub-status-icon"><i class="fa-regular fa-circle"></i></span>
            <span class="tree-sub-letter">•</span>
            <span class="tree-sub-title">Dạng 3: Trả lời ngắn thực tế (2 câu)</span>
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
    currentActiveSubKey = subKey || null;

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
      let title = stepObj ? stepObj.title : stepId;
      if (subKey) {
        title += ` - Mục ${subKey}.`;
      }
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

  function markStepCompleted(stepId, subKey) {
    const flatList = getFlatLessonsList(currentGrade);
    const currentItem = flatList.find(item => item.lesson.id === currentLessonId);
    if (!currentItem) return;
    const lesson = currentItem.lesson;

    const completed = getLessonCompletedSteps(lesson.id);
    let targetId = stepId;
    if (subKey) {
      targetId = `${stepId}-${subKey}`;
    }

    const wasAlreadyDone = completed.has(targetId);
    completed.add(targetId);

    // Nếu hoàn thành mục con, kiểm tra nếu mọi mục con đã xong thì đánh dấu mục cha
    const sections = lesson.sections || [];
    sections.forEach((sec, sIdx) => {
      const secAnchor = `sec-${sIdx + 1}`;
      if (secAnchor === stepId) {
        const subs = sec.subsections || [];
        if (subs.length > 1) {
          const allSubsDone = subs.every((sub, subIdx) => completed.has(`${secAnchor}-${cleanSubKey(sub.key, subIdx)}`));
          if (allSubsDone) {
            completed.add(secAnchor);
          }
        }
      }
    });

    // Nếu hoàn thành mục cha thì đánh dấu hoàn thành tất cả mục con
    sections.forEach((sec, sIdx) => {
      const secAnchor = `sec-${sIdx + 1}`;
      if (secAnchor === stepId && !subKey) {
        const subs = sec.subsections || [];
        subs.forEach((sub, subIdx) => {
          completed.add(`${secAnchor}-${cleanSubKey(sub.key, subIdx)}`);
        });
      }
    });

    saveLessonCompletedSteps(lesson.id);

    const pct = calculateLessonProgress(lesson);
    currentLessonProgress = pct;
    updateLessonProgressDisplay();

    // Render lại sidebar để cập nhật tick xanh chính xác
    renderLessonStructureSidebar(lesson);

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
      markStepCompleted(currentActiveStepId, currentActiveSubKey);
    }
  };
  window.markStepCompleted = markStepCompleted;
  window.activateStep = activateStep;
  window.getLessonLinearSteps = getLessonLinearSteps;
  window.calculateLessonProgress = calculateLessonProgress;

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
        activateStep(currentActiveStepId, currentActiveSubKey);
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
          markStepCompleted(fromStep, currentActiveSubKey);
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
  }'''

# Replace helper block in script.js using string slice
m_helpers = re.search(r'  // ==========================================================================\r?\n  // HỆ THỐNG CẤU TRÚC BÀI HỌC SỐ PHÂN CẤP & BỘ ĐIỀU HƯỚNG TỪNG MỤC \(THẦY SÁNG\)[\s\S]*?function renderSidebar\(\) \{[\s\S]*?renderChapterListSidebar\(\);\r?\n    \}\r?\n  \}', text)
assert m_helpers, "m_helpers not matched!"
text = text[:m_helpers.start()] + new_helpers + text[m_helpers.end():]
print("Updated Stepper & Sidebar Helpers in script.js!")

# 5. Update Subsection card headers in renderLessonViewer
old_sub_card = '''            ${subsections.map((sub, subIdx) => {
              const exId = `ex-sol-${sIdx}-${sub.key || subIdx}`;
              return `
              <!-- Khung phụ ${sub.key}) -->
              <div class="subsection-card" id="sub-${escapeHtml(sub.key)}" data-subkey="${escapeHtml(sub.key)}">
                <div class="subsection-header">
                  <span class="sub-key-badge">${escapeHtml(sub.key)}</span>
                  <h3 class="subsection-heading-h3">${escapeHtml(sub.key)}) ${escapeHtml(sub.title)}</h3>
                </div>'''

new_sub_card = '''            ${subsections.map((sub, subIdx) => {
              const cleanLetter = cleanSubKey(sub.key, subIdx);
              const exId = `ex-sol-${sIdx}-${cleanLetter}`;
              return `
              <!-- Khung phụ ${cleanLetter}) -->
              <div class="subsection-card" id="sub-${escapeHtml(cleanLetter)}" data-subkey="${escapeHtml(cleanLetter)}">
                <div class="subsection-header">
                  <span class="sub-key-badge">${escapeHtml(cleanLetter)}.</span>
                  <h3 class="subsection-heading-h3">${escapeHtml(cleanLetter)}. ${escapeHtml(sub.title)}</h3>
                </div>'''

assert old_sub_card in text, "old_sub_card not found!"
text = text.replace(old_sub_card, new_sub_card, 1)
print("Updated subsection card headers in renderLessonViewer!")

# Save to js/script.js
with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: All user fixes applied to js/script.js!")
