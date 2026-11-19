import os

def update_script(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()

    target1 = """                  const saNum = (q.num !== undefined && q.num !== null && q.num !== 'undefined') ? q.num : (idx + 1);
                  const saPrompt = q.prompt || q.question || '';
                  const saSol = q.solution || q.explain || '';
                  const targetAns = (q.correctAnswer !== undefined && q.correctAnswer !== null) ? q.correctAnswer : ((q.correctValue !== undefined && q.correctValue !== null) ? q.correctValue : '');
                  return `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #fef3c7; color: #b45309;"><i class="fa-solid fa-circle-question"></i> Câu ${saNum}</span>
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
                    <div class="exam-item-prompt" id="prompt-${q.id}">${saPrompt}</div>"""

    replacement1 = """                  const saNum = (q.num !== undefined && q.num !== null && q.num !== 'undefined') ? q.num : (idx + 1);
                  const saQText = q.question || '';
                  const saPText = q.prompt || '';
                  let saRenderedHtml = '';
                  if (saQText && saPText && saQText.trim() !== saPText.trim()) {
                    saRenderedHtml = `
                      <div class="sa-question-content" style="font-size: 1.05rem; line-height: 1.65; color: #0f172a; font-weight: 500; margin-bottom: 10px;">
                        ${saQText}
                      </div>
                      <div class="sa-instruction-badge" style="display: inline-flex; align-items: center; gap: 8px; background: #fffbeb; border: 1.5px dashed #f59e0b; padding: 6px 12px; border-radius: 8px; font-size: 0.9rem; color: #b45309; font-weight: 700;">
                        <i class="fa-solid fa-pen-to-square"></i> <span>${saPText}</span>
                      </div>
                    `;
                  } else {
                    saRenderedHtml = `
                      <div class="sa-question-content" style="font-size: 1.05rem; line-height: 1.65; color: #0f172a; font-weight: 500;">
                        ${saQText || saPText}
                      </div>
                    `;
                  }
                  const saSol = q.solution || q.explain || '';
                  const targetAns = (q.correctAnswer !== undefined && q.correctAnswer !== null) ? q.correctAnswer : ((q.correctValue !== undefined && q.correctValue !== null) ? q.correctValue : '');
                  return `
                  <div class="exam-item-card" id="card-${q.id}" data-qid="${q.id}">
                    <div class="exam-item-header">
                      <span class="exam-item-badge" style="background: #fef3c7; color: #b45309;"><i class="fa-solid fa-circle-question"></i> Câu ${saNum}</span>
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
                    <div class="exam-item-prompt" id="prompt-${q.id}">${saRenderedHtml}</div>"""

    if target1 in c:
        c = c.replace(target1, replacement1)
        print(f'Replaced target1 in {filepath}')
    else:
        print(f'target1 NOT FOUND in {filepath}')

    target2 = """          window.LESSON_11_C1_B3_DATA,
          window.LESSON_11_C4_B11_DATA,"""
    replacement2 = """          window.LESSON_11_C1_B3_DATA,
          window.LESSON_11_C1_B4_DATA,
          window.LESSON_11_C4_B11_DATA,"""
    if target2 in c:
        c = c.replace(target2, replacement2)
        print(f'Replaced target2 in {filepath}')

    target3 = """          const promptEl = document.getElementById(`prompt-${qid}`);
          if (promptEl) promptEl.innerHTML = sim.prompt;"""
    replacement3 = """          const promptEl = document.getElementById(`prompt-${qid}`);
          if (promptEl) {
            const simQ = sim.question || '';
            const simP = sim.prompt || '';
            if (simQ && simP && simQ.trim() !== simP.trim()) {
              promptEl.innerHTML = `
                <div class="sa-question-content" style="font-size: 1.05rem; line-height: 1.65; color: #0f172a; font-weight: 500; margin-bottom: 10px;">
                  ${simQ}
                </div>
                <div class="sa-instruction-badge" style="display: inline-flex; align-items: center; gap: 8px; background: #fffbeb; border: 1.5px dashed #f59e0b; padding: 6px 12px; border-radius: 8px; font-size: 0.9rem; color: #b45309; font-weight: 700;">
                  <i class="fa-solid fa-pen-to-square"></i> <span>${simP}</span>
                </div>
              `;
            } else {
              promptEl.innerHTML = `<div class="sa-question-content" style="font-size: 1.05rem; line-height: 1.65; color: #0f172a; font-weight: 500;">${simQ || simP}</div>`;
            }
            if (typeof renderMath === 'function') renderMath(promptEl);
          }"""
    if target3 in c:
        c = c.replace(target3, replacement3)
        print(f'Replaced target3 in {filepath}')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(c)

update_script('js/script.js')
update_script('BAN_CAP_NHAT_NETLIFY/js/script.js')
