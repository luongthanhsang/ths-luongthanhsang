# Apply updates for Hình 1, Hình 2, Hình 3

# 1. Update css/styles.css & BAN_CAP_NHAT_NETLIFY/css/styles.css
css_target = """.brand-logo-badge {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, var(--primary-700), var(--primary-500));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.35rem;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
}"""

css_replacement = """.brand-logo-badge {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, var(--primary-700), var(--primary-500));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-gold);
  font-size: 1.35rem;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  border: 1.5px solid rgba(245, 158, 11, 0.4);
}

.brand-logo-badge i,
.brand-logo-badge .fa-square-root-variable {
  color: #fbbf24 !important;
  background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
}"""

motto_target = """.hero-motto {
  background: rgba(255, 255, 255, 0.08);
  border-left: 4px solid var(--accent-gold);
  padding: 14px 18px;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  font-size: 0.98rem;
  color: #e0f2fe;
  margin-bottom: 30px;
}"""

motto_replacement = """.hero-motto {
  background: rgba(245, 158, 11, 0.08);
  border-left: 4px solid var(--accent-gold);
  padding: 14px 18px;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  font-size: 0.98rem;
  color: #fbbf24;
  margin-bottom: 30px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(245, 158, 11, 0.15);
  border-right: 1px solid rgba(245, 158, 11, 0.15);
  border-bottom: 1px solid rgba(245, 158, 11, 0.15);
}"""

avatar_target = """.teacher-avatar-frame {
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary-700), var(--primary-400));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.8rem;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
  flex-shrink: 0;
  border: 4px solid #fff;
}"""

avatar_replacement = """.teacher-avatar-frame {
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: var(--radius-full);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  flex-shrink: 0;
  border: 3px solid #fbbf24;
  overflow: visible;
}

.teacher-avatar-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}"""

for path in ['css/styles.css', 'BAN_CAP_NHAT_NETLIFY/css/styles.css']:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace(css_target, css_replacement)
    c = c.replace(motto_target, motto_replacement)
    c = c.replace(avatar_target, avatar_replacement)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Updated styles in {path}")

# 2. Update index.html & BAN_CAP_NHAT_NETLIFY/index.html
html_motto_target = """<div class="hero-motto">
              <i class="fa-solid fa-quote-left" style="color: var(--accent-gold); margin-right: 6px;"></i>
              "Học Toán không chỉ để đạt điểm số cao, mà là hành trình rèn luyện tư duy logic, tính kiên trì và phương pháp giải quyết vấn đề trong cuộc sống."
            </div>"""

html_motto_replacement = """<div class="hero-motto">
              <i class="fa-solid fa-quote-left" style="color: var(--accent-gold); margin-right: 6px;"></i>
              <span style="color: #fbbf24; font-weight: 500;">"Học Toán không chỉ để đạt điểm số cao, mà là hành trình rèn luyện tư duy logic, tính kiên trì và phương pháp giải quyết vấn đề trong cuộc sống."</span>
            </div>"""

html_avatar_target = """<div class="teacher-avatar-frame">
                <i class="fa-solid fa-chalkboard-user"></i>
                <div class="teacher-verify-badge" title="Giáo viên THPT chính thức">
                  <i class="fa-solid fa-check"></i>
                </div>
              </div>"""

html_avatar_replacement = """<div class="teacher-avatar-frame" title="Huy hiệu Logo ThS. Lương Thanh Sáng">
                <img src="assets/images/logo-ths-sang.png" alt="Logo ThS. Lương Thanh Sáng" class="teacher-avatar-logo" />
                <div class="teacher-verify-badge" title="Giáo viên THPT chính thức">
                  <i class="fa-solid fa-check"></i>
                </div>
              </div>"""

for path in ['index.html', 'BAN_CAP_NHAT_NETLIFY/index.html']:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace(html_motto_target, html_motto_replacement)
    c = c.replace(html_avatar_target, html_avatar_replacement)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Updated HTML in {path}")
