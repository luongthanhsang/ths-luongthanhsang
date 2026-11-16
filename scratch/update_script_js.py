# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add durations to first KNOWN_AUDIO_DURATIONS
old_dur1 = '''    const KNOWN_AUDIO_DURATIONS = {
      "assets/audio/b11_10_welcome.mp3": 35.8,'''
new_dur1 = '''    const KNOWN_AUDIO_DURATIONS = {
      "assets/audio/b10_1_welcome.mp3": 30.8,
      "assets/audio/b10_1_goals.mp3": 36.1,
      "assets/audio/b10_1_hook.mp3": 36.4,
      "assets/audio/b10_1_sec1.mp3": 64.4,
      "assets/audio/b10_1_sec2.mp3": 36.4,
      "assets/audio/b10_1_sec3.mp3": 48.9,
      "assets/audio/b10_1_sec4.mp3": 29.6,
      "assets/audio/b10_1_sec5.mp3": 32.4,
      "assets/audio/b10_1_wrapup.mp3": 35.4,
      "assets/audio/b11_10_welcome.mp3": 35.8,'''

if old_dur1 in text:
    text = text.replace(old_dur1, new_dur1)
    print("Added b10_1 to first KNOWN_AUDIO_DURATIONS")
else:
    print("WARNING: old_dur1 not found")

# 2. Add durations to second KNOWN_AUDIO_DURATIONS
old_dur2 = '''  const KNOWN_AUDIO_DURATIONS = {
    "assets/audio/b6_welcome.mp3": 18.02,'''
new_dur2 = '''  const KNOWN_AUDIO_DURATIONS = {
    "assets/audio/b10_1_welcome.mp3": 30.8,
    "assets/audio/b10_1_goals.mp3": 36.1,
    "assets/audio/b10_1_hook.mp3": 36.4,
    "assets/audio/b10_1_sec1.mp3": 64.4,
    "assets/audio/b10_1_sec2.mp3": 36.4,
    "assets/audio/b10_1_sec3.mp3": 48.9,
    "assets/audio/b10_1_sec4.mp3": 29.6,
    "assets/audio/b10_1_sec5.mp3": 32.4,
    "assets/audio/b10_1_wrapup.mp3": 35.4,
    "assets/audio/b6_welcome.mp3": 18.02,'''

if old_dur2 in text:
    text = text.replace(old_dur2, new_dur2)
    print("Added b10_1 to second KNOWN_AUDIO_DURATIONS")
else:
    print("WARNING: old_dur2 not found")

# 3. Add B10_1_AUDIO_CACHE to audio lookup chain
old_cache = '''      try {
        const audioSrc = (window.B11_10_AUDIO_CACHE && window.B11_10_AUDIO_CACHE[audioUrl]) ||'''
new_cache = '''      try {
        const audioSrc = (window.B10_1_AUDIO_CACHE && window.B10_1_AUDIO_CACHE[audioUrl]) ||
                         (window.B11_10_AUDIO_CACHE && window.B11_10_AUDIO_CACHE[audioUrl]) ||'''

if old_cache in text:
    text = text.replace(old_cache, new_cache)
    print("Added B10_1_AUDIO_CACHE to audio lookup chain")
else:
    print("WARNING: old_cache not found")

# 4. Add LESSON_10_C1_B1_DATA to allLessons array
old_all_lessons = '''        const allLessons = [
          window.LESSON_10_C3_B5_DATA,'''
new_all_lessons = '''        const allLessons = [
          window.LESSON_10_C1_B1_DATA,
          window.LESSON_10_C3_B5_DATA,'''

if old_all_lessons in text:
    text = text.replace(old_all_lessons, new_all_lessons)
    print("Added LESSON_10_C1_B1_DATA to allLessons array")
else:
    print("WARNING: old_all_lessons not found")

# 5. Enhance sidebar click handlers for ticks
old_sidebar_click = '''    // Gắn sự kiện click vào các node trên cây
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
    });'''

new_sidebar_click = '''    // Gắn sự kiện click vào các node trên cây
    sidebarContainer.querySelectorAll(".tree-node").forEach(node => {
      node.addEventListener("click", () => {
        const stepId = node.dataset.stepId;
        if (stepId) activateStep(stepId);
      });

      // Cho phép click vào icon tick để hoàn thành / đổi trạng thái
      const icon = node.querySelector(".tree-status-icon");
      if (icon) {
        icon.style.cursor = "pointer";
        icon.addEventListener("click", (e) => {
          e.stopPropagation();
          const stepId = node.dataset.stepId;
          const completed = getLessonCompletedSteps(lesson.id);
          if (completed.has(stepId)) {
            completed.delete(stepId);
          } else {
            completed.add(stepId);
          }
          renderLessonStructureSidebar(lesson);
          updateLessonProgressDisplay(lesson);
        });
      }
    });

    sidebarContainer.querySelectorAll(".tree-sub-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const stepId = item.dataset.stepId;
        const subkey = item.dataset.subkey;
        const quizPart = item.dataset.quizPart;
        activateStep(stepId, subkey, quizPart);
      });

      // Cho phép click vào icon tick của mục con để đánh dấu hoàn thành
      const subIcon = item.querySelector(".tree-sub-status-icon");
      if (subIcon) {
        subIcon.style.cursor = "pointer";
        subIcon.addEventListener("click", (e) => {
          e.stopPropagation();
          const stepId = item.dataset.stepId;
          const subStepId = item.dataset.subStepId || `${stepId}-${item.dataset.subkey}`;
          const completed = getLessonCompletedSteps(lesson.id);
          if (completed.has(subStepId)) {
            completed.delete(subStepId);
            completed.delete(stepId);
          } else {
            completed.add(subStepId);
            // kiểm tra nếu mọi mục con đã xong thì tick cha
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
          }
          renderLessonStructureSidebar(lesson);
          updateLessonProgressDisplay(lesson);
        });
      }
    });'''

if old_sidebar_click in text:
    text = text.replace(old_sidebar_click, new_sidebar_click)
    print("Enhanced sidebar tick click handlers!")
else:
    print("WARNING: old_sidebar_click not found")

# 6. Support sections without subsections in renderStepView
target_wrap_open = '          <div class="section-body-wrap">\n            ${subsections.map((sub, subIdx) => {'
replace_wrap_open = '          <div class="section-body-wrap">\n            ${subsections.length > 0 ? subsections.map((sub, subIdx) => {'

target_wrap_close = '''              </div>
              `;
            }).join("")}'''

replace_wrap_close = '''              </div>
              `;
            }).join("") : `
              ${sec.contentHtml ? `
                <div class="sub-rich-content" style="margin-bottom: 20px;">
                  ${sec.contentHtml}
                </div>
              ` : ''}
              ${(sec.workedExamples || (sec.workedExample ? [sec.workedExample] : [])).map((ex, exIdx) => {
                const exId = `ex-sol-${sIdx}-main-${exIdx}`;
                return `
                  <div class="worked-example-card">
                    <div class="worked-example-header">
                      <span class="example-pill"><i class="fa-solid fa-pencil"></i> ${escapeHtml(ex.title || "Ví dụ minh họa")}</span>
                    </div>
                    <div class="example-problem">
                      <strong>Đề bài:</strong> ${ex.problem}
                    </div>
                    <div class="student-task-note">
                      <div class="note-icon"><i class="fa-solid fa-pen-to-square"></i></div>
                      <div class="note-content">
                        <strong>Nhiệm vụ của học sinh:</strong>
                        <span>Các em hãy tạm dừng ít phút, lấy vở ghi bài tập và thước kẻ ra tự làm vào vở trước khi xem lời giải của Thầy nhé!</span>
                      </div>
                    </div>
                    <div class="solution-toggle-bar" style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-top: 12px;">
                      <button class="btn-toggle-solution" data-target="${exId}">
                        <i class="fa-solid fa-eye"></i> Lời giải chi tiết của thầy Sáng
                      </button>
                      ${ex.similarProblem ? `
                        <button class="btn-toggle-solution btn-toggle-similar-style" data-target="${exId}-similar" style="background: linear-gradient(135deg, #059669, #10b981); color: #fff; border: none; border-radius: 8px; padding: 10px 18px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                          <i class="fa-solid fa-arrows-rotate"></i> Bài tập tương tự
                        </button>
                      ` : ''}
                    </div>
                    ${ex.similarProblem ? `
                      <div class="solution-collapse-body" id="${exId}-similar" style="display: none; border-left: 4px solid #10b981; margin-top: 10px;">
                        <div class="solution-inner-wrap" style="background: #f0fdf4; padding: 16px; border-radius: 8px;">
                          <div class="solution-title-tag" style="color: #047857; font-weight: bold; margin-bottom: 8px;"><i class="fa-solid fa-pen-ruler"></i> Bài tập tương tự để học sinh tự rèn luyện:</div>
                          <div class="solution-content-text" style="color: #065f46;">${ex.similarProblem}</div>
                        </div>
                      </div>
                    ` : ''}
                    <div class="solution-collapse-body" id="${exId}" style="display: none;">
                      <div class="solution-inner-wrap">
                        <div class="solution-title-tag"><i class="fa-solid fa-circle-check text-success"></i> Lời giải chi tiết chuẩn SGK:</div>
                        <div class="solution-content-text">${ex.solution}</div>
                        ${ex.teacherGuidance ? `
                          <div class="teacher-thinking-note">
                            <div class="thinking-title"><i class="fa-solid fa-lightbulb"></i> Lời khuyên của Thầy Sáng:</div>
                            <p>${escapeHtml(ex.teacherGuidance)}</p>
                          </div>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            `}'''

if target_wrap_open in text and target_wrap_close in text:
    text = text.replace(target_wrap_open, replace_wrap_open)
    text = text.replace(target_wrap_close, replace_wrap_close)
    print("Enhanced renderStepView for sections without subsections!")
else:
    print("WARNING: target_wrap_open or close not found!")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated js/script.js successfully!")
