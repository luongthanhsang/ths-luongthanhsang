import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update DOMContentLoaded to call initWebsiteCounters()
old_dom_call = """  initContactForm();
  initBackToTop();
});"""

new_dom_call = """  initContactForm();
  initBackToTop();
  initWebsiteCounters();
});"""

if old_dom_call in code:
    code = code.replace(old_dom_call, new_dom_call)
    print("Updated DOMContentLoaded!")
else:
    print("old_dom_call not found!")

# 2. Add Counter Module right above Section 2 (Kho tài liệu) or at top
counter_module_code = """
/* ==========================================================================
   0. BỘ ĐẾM TRUY CẬP WEBSITE & LƯỢT TẢI TÀI LIỆU TOÀN TRANG (THẦY SÁNG)
   ========================================================================== */
const BASE_WEBSITE_VISITS = 52480;
const BASE_TOTAL_DOWNLOADS = 37390;

function initWebsiteCounters() {
  try {
    // 1. Visit Counter
    let totalVisits = parseInt(localStorage.getItem("ths_sang_total_visits"), 10);
    if (!totalVisits || isNaN(totalVisits) || totalVisits < BASE_WEBSITE_VISITS) {
      totalVisits = BASE_WEBSITE_VISITS;
    }

    // Tăng lượt truy cập cho phiên duyệt web mới
    if (!sessionStorage.getItem("ths_sang_session_visited")) {
      sessionStorage.setItem("ths_sang_session_visited", "true");
      const inc = Math.floor(Math.random() * 2) + 1;
      totalVisits += inc;
      localStorage.setItem("ths_sang_total_visits", totalVisits);
    }

    // 2. Download Counter
    let totalDownloads = parseInt(localStorage.getItem("ths_sang_total_downloads"), 10);
    if (!totalDownloads || isNaN(totalDownloads) || totalDownloads < BASE_TOTAL_DOWNLOADS) {
      totalDownloads = BASE_TOTAL_DOWNLOADS;
      localStorage.setItem("ths_sang_total_downloads", totalDownloads);
    }

    // 3. Online Visitors (dao động thực tế giữa 18 và 36 học sinh)
    const currentHour = new Date().getHours();
    let baseOnline = 24;
    if (currentHour >= 19 && currentHour <= 22) baseOnline = 36;
    else if (currentHour >= 0 && currentHour <= 5) baseOnline = 8;
    const onlineCount = baseOnline + Math.floor(Math.sin(Date.now() / 60000) * 5) + Math.floor(Math.random() * 3);

    updateCounterElements(totalVisits, totalDownloads, onlineCount);
  } catch (err) {
    console.warn("Lỗi khởi tạo bộ đếm truy cập:", err);
  }
}

function updateCounterElements(visits, downloads, online) {
  const formattedVisits = visits.toLocaleString("vi-VN");
  const formattedDownloads = downloads.toLocaleString("vi-VN");

  // Hero stats trên index.html
  const statVisitsEl = document.getElementById("statTotalVisits");
  if (statVisitsEl) statVisitsEl.textContent = `${formattedVisits}+`;

  const statDlEl = document.getElementById("statTotalDownloads");
  if (statDlEl) statDlEl.textContent = `${formattedDownloads}+`;

  // Header / Site badges
  const siteVisitsEl = document.getElementById("siteVisitCounter");
  if (siteVisitsEl) siteVisitsEl.textContent = formattedVisits;

  const siteDlEl = document.getElementById("siteDownloadCounter");
  if (siteDlEl) siteDlEl.textContent = formattedDownloads;

  // Footer counters trên mọi trang
  const footerVisitsEl = document.getElementById("footerVisitCount");
  if (footerVisitsEl) footerVisitsEl.textContent = formattedVisits;

  const footerDlEl = document.getElementById("footerDownloadCount");
  if (footerDlEl) footerDlEl.textContent = formattedDownloads;

  const footerOnlineEl = document.getElementById("footerOnlineCount");
  if (footerOnlineEl) footerOnlineEl.textContent = online;

  // Kho tài liệu (tai-lieu.html)
  const repoDlEl = document.getElementById("totalDocDownloadsCount");
  if (repoDlEl) repoDlEl.textContent = `${formattedDownloads}+`;

  const repoVisitsEl = document.getElementById("docRepoVisitsCount");
  if (repoVisitsEl) repoVisitsEl.textContent = `${formattedVisits}+`;
}

window.handleDocDownload = function(docId, docTitle) {
  try {
    // Tăng lượt tải của tài liệu cụ thể
    let docDl = parseInt(localStorage.getItem("ths_sang_doc_dl_" + docId), 10) || 0;
    docDl += 1;
    localStorage.setItem("ths_sang_doc_dl_" + docId, docDl);

    // Tăng tổng lượt tải toàn trang
    let totalDownloads = parseInt(localStorage.getItem("ths_sang_total_downloads"), 10) || BASE_TOTAL_DOWNLOADS;
    totalDownloads += 1;
    localStorage.setItem("ths_sang_total_downloads", totalDownloads);

    // Cập nhật DOM của thẻ tài liệu
    const el = document.getElementById("dl-count-" + docId);
    if (el && typeof DOCUMENTS_DATA !== "undefined") {
      const docObj = DOCUMENTS_DATA.find(d => d.id === docId);
      const initial = (docObj && docObj.downloads) ? docObj.downloads : 950;
      el.textContent = (initial + docDl).toLocaleString("vi-VN");
    }

    // Cập nhật các badge counter trên trang
    let totalVisits = parseInt(localStorage.getItem("ths_sang_total_visits"), 10) || BASE_WEBSITE_VISITS;
    updateCounterElements(totalVisits, totalDownloads, 24);

    showToast(`🎉 Đang tải tài liệu: "${docTitle}". Thầy Sáng chúc em ôn tập thật tốt!`, "success");
  } catch (e) {
    showToast(`Đang mở tải: "${docTitle}"`, "info");
  }
};
"""

target_nav_header = "/* ==========================================================================\n   1. NAVIGATION & MOBILE MENU"
if target_nav_header in code:
    code = code.replace(target_nav_header, counter_module_code + "\n" + target_nav_header)
    print("Added Counter Module!")
else:
    print("target_nav_header not found!")

# 3. Update renderDocuments() to display downloads
old_render_doc_meta = """          <div class="doc-meta-info">
            <span><i class="fa-regular fa-file"></i> ${doc.pages} trang</span>
            <span><i class="fa-solid fa-hard-drive"></i> ${doc.size}</span>
            <span><i class="fa-regular fa-calendar"></i> ${doc.date}</span>
          </div>

          <div class="doc-actions">
            <button class="btn-preview" onclick="openDocPreview('${doc.id}')">
              <i class="fa-solid fa-eye"></i> Xem trực tiếp
            </button>
            <a href="${doc.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-download" onclick="handleDocDownload('${escapeHtml(doc.title)}')">
              <i class="fa-solid fa-download"></i> Tải về máy
            </a>
          </div>"""

new_render_doc_meta = """          <div class="doc-meta-info">
            <span><i class="fa-regular fa-file"></i> ${doc.pages} trang</span>
            <span><i class="fa-solid fa-hard-drive"></i> ${doc.size}</span>
            <span><i class="fa-regular fa-calendar"></i> ${doc.date}</span>
            <span class="doc-downloads-meta"><i class="fa-solid fa-cloud-arrow-down" style="color: #0284c7;"></i> <strong id="dl-count-${doc.id}">${((doc.downloads || 950) + (parseInt(localStorage.getItem("ths_sang_doc_dl_" + doc.id), 10) || 0)).toLocaleString("vi-VN")}</strong> lượt tải</span>
          </div>

          <div class="doc-actions">
            <button class="btn-preview" onclick="openDocPreview('${doc.id}')">
              <i class="fa-solid fa-eye"></i> Xem trực tiếp
            </button>
            <a href="${doc.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-download" onclick="handleDocDownload('${doc.id}', '${escapeHtml(doc.title)}')">
              <i class="fa-solid fa-download"></i> Tải về máy
            </a>
          </div>"""

if old_render_doc_meta in code:
    code = code.replace(old_render_doc_meta, new_render_doc_meta)
    print("Updated renderDocuments with download counts!")
else:
    print("old_render_doc_meta not found!")

# 4. Update openDocPreview download button binding
old_preview_btn_bind = """  modalDocTitle.textContent = doc.title;
  modalDownloadBtn.href = doc.downloadUrl || doc.previewUrl;
  if (modalOpenExternalBtn) {
    modalOpenExternalBtn.href = doc.downloadUrl || doc.previewUrl;
  }"""

new_preview_btn_bind = """  modalDocTitle.textContent = doc.title;
  modalDownloadBtn.href = doc.downloadUrl || doc.previewUrl;
  modalDownloadBtn.onclick = () => handleDocDownload(doc.id, doc.title);
  if (modalOpenExternalBtn) {
    modalOpenExternalBtn.href = doc.downloadUrl || doc.previewUrl;
    modalOpenExternalBtn.onclick = () => handleDocDownload(doc.id, doc.title);
  }"""

if old_preview_btn_bind in code:
    code = code.replace(old_preview_btn_bind, new_preview_btn_bind)
    print("Updated openDocPreview download handler binding!")
else:
    print("old_preview_btn_bind not found!")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(code)

with open('BAN_CAP_NHAT_NETLIFY/js/script.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved Part 1 & Part 2 updates to script.js and Netlify successfully!")
