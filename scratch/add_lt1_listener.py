with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = '''    // 0c. Xử lý nút xem Lời giải chi tiết của các Ví dụ
    container.querySelectorAll(".btn-toggle-solution").forEach(btn => {'''

replacement = '''    // 0b2. Xử lý nút kiểm tra bảng Luyện tập 1
    container.querySelectorAll(".btn-check-table-lt1").forEach(btn => {
      btn.addEventListener("click", () => {
        const box = document.getElementById("lt1-feedback-box");
        if (box) {
          box.style.display = (box.style.display === "none" ? "block" : "none");
          if (box.style.display === "block") {
            box.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    });

    // 0c. Xử lý nút xem Lời giải chi tiết của các Ví dụ
    container.querySelectorAll(".btn-toggle-solution").forEach(btn => {'''

if target in text:
    text = text.replace(target, replacement)
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added event listener for .btn-check-table-lt1 in script.js!")
else:
    print("target not found in script.js")
