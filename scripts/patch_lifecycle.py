target = """document.addEventListener("DOMContentLoaded", () => {
  initDynamicSchoolYear();
  initNavigation();
  initDigitalLessons();
  initDocumentRepository();
  initQuizSystem();
  initContactForm();
  initBackToTop();
  initWebsiteCounters();
});"""

replacement = """function initThsSangApp() {
  initDynamicSchoolYear();
  initNavigation();
  initDigitalLessons();
  initDocumentRepository();
  initQuizSystem();
  initContactForm();
  initBackToTop();
  initWebsiteCounters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThsSangApp);
} else {
  initThsSangApp();
}"""

for path in ['js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js']:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if target in content:
        content = content.replace(target, replacement)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated app startup lifecycle in {path}")
    else:
        print(f"Target not found in {path}")
