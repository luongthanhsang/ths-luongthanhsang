import os

html_files = [
    'index.html',
    'BAN_CAP_NHAT_NETLIFY/index.html',
    'bai-hoc-so.html',
    'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html',
    'thi-hsg.html',
    'BAN_CAP_NHAT_NETLIFY/thi-hsg.html',
    'thong-bao.html',
    'BAN_CAP_NHAT_NETLIFY/thong-bao.html',
    'lien-he.html',
    'BAN_CAP_NHAT_NETLIFY/lien-he.html'
]

footer_stats_code = """      <!-- Thanh thống kê lượt truy cập & tải về -->
      <div class="footer-stats-bar">
        <span><i class="fa-solid fa-users" style="color: #38bdf8;"></i> Lượt truy cập web: <strong id="footerVisitCount" style="color: #fef08a; font-size: 1.05rem;">52.480</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-cloud-arrow-down" style="color: #4ade80;"></i> Lượt tải tài liệu: <strong id="footerDownloadCount" style="color: #86efac; font-size: 1.05rem;">37.390</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-circle" style="color: #22c55e; font-size: 0.65rem; margin-right: 4px;"></i> Đang trực tuyến: <strong id="footerOnlineCount" style="color: #fff;">24</strong></span>
      </div>

      <div class="footer-bottom">"""

old_hero_stats = """            <div class="hero-stats">
              <div class="stat-item">
                <h3>100%</h3>
                <p>Chuẩn GDPT 2018 mới</p>
              </div>
              <div class="stat-item">
                <h3>Khối 10-11-12</h3>
                <p>Bài giảng & Đề kiểm tra</p>
              </div>
              <div class="stat-item">
                <h3>Online 24/7</h3>
                <p>Học & luyện thi mọi lúc</p>
              </div>
            </div>"""

new_hero_stats = """            <div class="hero-stats">
              <div class="stat-item">
                <h3 id="statTotalVisits">52.480+</h3>
                <p><i class="fa-solid fa-users" style="color: #38bdf8;"></i> Lượt truy cập web</p>
              </div>
              <div class="stat-item">
                <h3 id="statTotalDownloads">37.390+</h3>
                <p><i class="fa-solid fa-cloud-arrow-down" style="color: #4ade80;"></i> Lượt tải tài liệu</p>
              </div>
              <div class="stat-item">
                <h3>Khối 10-11-12</h3>
                <p>Bài giảng &amp; Đề thi 2026</p>
              </div>
              <div class="stat-item">
                <h3>100% Online</h3>
                <p>Chuẩn Bộ GD&amp;ĐT</p>
              </div>
            </div>"""

for fpath in html_files:
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update hero stats on index.html
    if 'index.html' in fpath:
        if old_hero_stats in content:
            content = content.replace(old_hero_stats, new_hero_stats)
            print(f"Updated hero-stats in {fpath}")

    # Add footer stats bar if not present
    if '<div class="footer-bottom">' in content and 'footer-stats-bar' not in content:
        content = content.replace('<div class="footer-bottom">', footer_stats_code)
        print(f"Added footer-stats-bar in {fpath}")

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved {fpath} successfully!")
