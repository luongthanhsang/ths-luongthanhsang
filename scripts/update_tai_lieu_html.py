def update_tai_lieu(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add repo-stats-overview
    target_filter = """        <!-- Thanh lọc theo chuyên đề bộ môn -->"""
    stats_overview = """        <!-- Khung thống kê số liệu kho tài liệu & lượt tải -->
        <div class="repo-stats-overview" style="margin: 15px 0 25px; padding: 18px 24px; background: linear-gradient(135deg, #f0fdfa, #e0f2fe, #f8fafc); border: 1.5px solid #bae6fd; border-radius: 16px; display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: 0 4px 15px rgba(2, 132, 199, 0.08);">
          <div class="repo-stat-col" style="text-align: center;">
            <div style="font-size: 1.7rem; font-weight: 800; color: #0369a1;"><i class="fa-solid fa-book-bookmark" style="color: #0284c7;"></i> 30+</div>
            <div style="font-size: 0.85rem; color: #475569; font-weight: 600;">Tài liệu chuyên đề chất lượng</div>
          </div>
          <div style="width: 1px; height: 35px; background: #cbd5e1;"></div>
          <div class="repo-stat-col" style="text-align: center;">
            <div style="font-size: 1.7rem; font-weight: 800; color: #16a34a;"><i class="fa-solid fa-cloud-arrow-down" style="color: #22c55e;"></i> <span id="totalDocDownloadsCount">37.390+</span></div>
            <div style="font-size: 0.85rem; color: #475569; font-weight: 600;">Lượt tải tài liệu học tập</div>
          </div>
          <div style="width: 1px; height: 35px; background: #cbd5e1;"></div>
          <div class="repo-stat-col" style="text-align: center;">
            <div style="font-size: 1.7rem; font-weight: 800; color: #b45309;"><i class="fa-solid fa-eye" style="color: #f59e0b;"></i> <span id="docRepoVisitsCount">52.480+</span></div>
            <div style="font-size: 0.85rem; color: #475569; font-weight: 600;">Lượt truy cập kho tài liệu</div>
          </div>
        </div>

        <!-- Thanh lọc theo chuyên đề bộ môn -->"""

    if target_filter in content and 'repo-stats-overview' not in content:
        content = content.replace(target_filter, stats_overview)
        print(f"Added repo-stats-overview in {file_path}")

    # 2. Add footer-stats-bar
    footer_target = """      <div class="footer-bottom">"""
    footer_stats_code = """      <!-- Thanh thống kê lượt truy cập & tải về -->
      <div class="footer-stats-bar">
        <span><i class="fa-solid fa-users" style="color: #38bdf8;"></i> Lượt truy cập web: <strong id="footerVisitCount" style="color: #fef08a; font-size: 1.05rem;">52.480</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-cloud-arrow-down" style="color: #4ade80;"></i> Lượt tải tài liệu: <strong id="footerDownloadCount" style="color: #86efac; font-size: 1.05rem;">37.390</strong></span>
        <span style="opacity: 0.4;">|</span>
        <span><i class="fa-solid fa-circle" style="color: #22c55e; font-size: 0.65rem; margin-right: 4px;"></i> Đang trực tuyến: <strong id="footerOnlineCount" style="color: #fff;">24</strong></span>
      </div>

      <div class="footer-bottom">"""

    if footer_target in content and 'footer-stats-bar' not in content:
        content = content.replace(footer_target, footer_stats_code)
        print(f"Added footer-stats-bar in {file_path}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved {file_path} successfully!")

update_tai_lieu('tai-lieu.html')
update_tai_lieu('BAN_CAP_NHAT_NETLIFY/tai-lieu.html')
