css_code = """
/* ==========================================================================
   CẤU TRÚC BÀI HỌC SỐ PHÂN CẤP & CHẾ ĐỘ HỌC TỪNG MỤC (THẦY LƯƠNG THANH SÁNG)
   ========================================================================== */

/* Header Sidebar thẻ màu xanh, chữ vàng đồng */
.sidebar-header.lesson-structure-header {
  background: linear-gradient(135deg, #0F2042 0%, #1e3a8a 100%) !important;
  padding: 16px 18px !important;
  border-bottom: 2px solid #f59e0b;
  display: block !important;
}

.structure-header-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.structure-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.structure-tag {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #ffd875;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 216, 117, 0.15);
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 216, 117, 0.3);
}

.btn-switch-to-chapters {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn-switch-to-chapters:hover {
  background: #f59e0b;
  color: #0f172a;
  border-color: #f59e0b;
  transform: translateY(-1px);
}

.structure-lesson-title {
  color: #ffd875 !important;
  font-size: 0.98rem !important;
  font-weight: 800 !important;
  line-height: 1.4;
  margin: 0 !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
}

/* Cây phân cấp bài học */
.lesson-structure-tree {
  padding: 8px 4px;
}

.tree-node {
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1.5px solid #e2e8f0;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  position: relative;
  overflow: hidden;
}

.tree-node:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  transform: translateX(3px);
}

.tree-item-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
}

.tree-status-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.05rem;
  color: #94a3b8;
}

.tree-part-badge {
  font-size: 0.75rem;
  font-weight: 800;
  background: #f1f5f9;
  color: #475569;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
}

.sec-num-circle {
  font-size: 0.75rem;
  font-weight: 800;
  background: #e0f2fe;
  color: #0369a1;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tree-item-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.35;
  flex: 1;
}

.tree-item-percent {
  font-size: 0.72rem;
  font-weight: 800;
  color: #0284c7;
  background: #f0f9ff;
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid #bae6fd;
}

/* Trạng thái Active */
.tree-node.is-active {
  background: #eff6ff !important;
  border-color: #0284c7 !important;
  box-shadow: 0 3px 12px rgba(2, 132, 199, 0.18) !important;
}

.tree-node.is-active .tree-item-label {
  color: #0284c7 !important;
  font-weight: 700 !important;
}

.tree-node.is-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #0284c7;
}

/* Trạng thái Hoàn thành (Đổi màu & Tick xanh) */
.tree-node.is-completed {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
}

.tree-node.is-completed .tree-status-icon {
  color: #10b981 !important;
  font-size: 1.15rem;
}

.tree-node.is-completed .tree-item-label {
  color: #065f46 !important;
  font-weight: 600;
}

.tree-node.is-completed.is-active {
  box-shadow: 0 3px 12px rgba(16, 185, 129, 0.22) !important;
  border-color: #059669 !important;
}

.tree-node.is-completed.is-active::before {
  background: #10b981;
}

.tree-done-tag {
  font-size: 0.68rem;
  font-weight: 700;
  background: #d1fae5;
  color: #065f46;
  padding: 2px 7px;
  border-radius: 10px;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

/* Nhóm cha (Phần III, Phần IV) */
.tree-group-box {
  margin-top: 10px;
  margin-bottom: 12px;
  background: #fafaf9;
  border: 1px solid #e7e5e4;
  border-radius: 12px;
  padding: 8px;
}

.tree-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 1px solid #e7e5e4;
  margin-bottom: 8px;
}

.tree-group-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #0F2042;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tree-group-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #d97706;
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid #fde68a;
}

.tree-child-1 {
  margin-bottom: 6px;
}

/* Tiểu mục cấp 2 (1a, 1b...) */
.tree-subsections-list {
  padding-left: 24px;
  margin: 3px 0 8px 0;
  border-left: 2px dashed #cbd5e1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tree-sub-item {
  padding: 6px 10px;
  font-size: 0.82rem;
  color: #475569;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.18s ease;
  background: #ffffff;
}

.tree-sub-item:hover {
  background: #f1f5f9;
  color: #0f172a;
  transform: translateX(2px);
}

.tree-sub-item.is-active {
  background: #e0f2fe !important;
  color: #0369a1 !important;
  font-weight: 700;
  border-color: #7dd3fc !important;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.1);
}

.tree-sub-bullet {
  color: #94a3b8;
  font-weight: bold;
  margin-right: 6px;
}

.tree-sub-item.is-active .tree-sub-bullet {
  color: #0284c7;
}

/* Chân trang điều hướng mục (Step Navigation Footer) */
.step-nav-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  padding: 16px 20px;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(15, 32, 66, 0.05);
  flex-wrap: wrap;
}

.btn-step-nav {
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  font-family: inherit;
}

.btn-step-prev {
  background: #f1f5f9;
  color: #475569;
}

.btn-step-prev:hover:not(:disabled) {
  background: #e2e8f0;
  color: #0f172a;
}

.btn-step-prev:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-step-next {
  background: #0284c7;
  color: #ffffff;
}

.btn-step-next:hover:not(:disabled) {
  background: #0369a1;
  transform: translateX(3px);
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
}

.btn-step-next:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-step-complete {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
}

.btn-step-complete:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.35);
}

/* Thanh chuyển chế độ xem (Học từng mục / Xem toàn bộ) */
.view-mode-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 8px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  flex-wrap: wrap;
  gap: 8px;
}

.view-mode-status {
  font-size: 0.84rem;
  color: #475569;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-mode-toggles {
  display: flex;
  gap: 6px;
}

.btn-view-toggle {
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #64748b;
  transition: all 0.2s ease;
}

.btn-view-toggle.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
}
"""

with open('css/olm-lesson.css', 'a', encoding='utf-8') as f:
    f.write(css_code)
print("Added CSS to css/olm-lesson.css!")
