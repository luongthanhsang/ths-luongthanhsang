with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = '    // 5. Nút ẩn / hiện lời giải chi tiết của các Ví dụ'
replacement = '''    // 4b. Xử lý nút kiểm tra bảng Luyện tập 1
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

    // 5. Nút ẩn / hiện lời giải chi tiết của các Ví dụ'''

if target in text:
    text = text.replace(target, replacement)
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added listener for .btn-check-table-lt1 in script.js!")
else:
    print("target not found")
