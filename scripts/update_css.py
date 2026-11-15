import os

css_additions = """
/* ==========================================================================
   CANH ĐỀU HAI BÊN (JUSTIFY) TOÀN BỘ NỘI DUNG BÀI HỌC THEO YÊU CẦU THẦY SÁNG
   ========================================================================== */
.lesson-detail-viewer p,
.lesson-detail-viewer .hook-story,
.lesson-detail-viewer .recap-text,
.lesson-detail-viewer .sub-rich-content,
.lesson-detail-viewer .sub-rich-content p,
.lesson-detail-viewer .sub-rich-content li,
.lesson-detail-viewer .example-problem,
.lesson-detail-viewer .example-solution,
.lesson-detail-viewer .wrapup-solution-content,
.lesson-detail-viewer .checkpoint-question-title,
.lesson-detail-viewer .checkpoint-feedback,
.lesson-detail-viewer .exam-explain-box,
.lesson-detail-viewer .welcome-quote-msg,
.lesson-detail-viewer .lesson-goals-list li,
.lesson-detail-viewer .subsection-card p,
.lesson-detail-viewer .lesson-section-card p,
.lesson-detail-viewer .sgk-framed-box p,
.lesson-detail-viewer .sgk-framed-box li {
  text-align: justify !important;
  text-justify: inter-word !important;
  line-height: 1.65;
}

/* ==========================================================================
   KIỂU DÁNG CHO TIỂU MỤC PHÂN CẤP a., b. TRÊN CÂY SIDEBAR (THẦY SÁNG)
   ========================================================================== */
.tree-subsections-list {
  padding-left: 20px;
  margin: 4px 0 8px 16px;
  border-left: 2px dashed #93c5fd;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tree-sub-item {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 6px 10px !important;
  font-size: 0.82rem !important;
  color: #334155 !important;
  border-radius: 8px !important;
  border: 1px solid #e2e8f0 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  background: #ffffff !important;
}

.tree-sub-item:hover {
  background: #f8fafc !important;
  border-color: #cbd5e1 !important;
  transform: translateX(2px);
}

.tree-sub-item.is-active {
  background: #eff6ff !important;
  color: #0369a1 !important;
  font-weight: 700 !important;
  border-color: #0284c7 !important;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.15) !important;
}

.tree-sub-status-icon {
  width: 18px !important;
  height: 18px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.92rem !important;
  color: #94a3b8 !important;
  flex-shrink: 0 !important;
}

.tree-sub-item.is-completed {
  background: #ecfdf5 !important;
  border-color: #a7f3d0 !important;
  color: #065f46 !important;
}

.tree-sub-item.is-completed .tree-sub-status-icon {
  color: #10b981 !important;
}

.tree-sub-letter {
  font-weight: 800 !important;
  color: #0369a1 !important;
}

.tree-sub-item.is-completed .tree-sub-letter {
  color: #059669 !important;
}

.tree-sub-title {
  flex: 1 !important;
  line-height: 1.35 !important;
}

.tree-sub-done-tag {
  color: #10b981 !important;
  font-size: 0.72rem !important;
  margin-left: auto !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 3px !important;
}
"""

with open('css/olm-lesson.css', 'a', encoding='utf-8') as f:
    f.write(css_additions)

print("Updated css/olm-lesson.css with justify and tree sub-item styles!")
