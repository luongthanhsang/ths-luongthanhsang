import subprocess, sys

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

def dump_dom(url):
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--virtual-time-budget=8000",
        "--dump-dom",
        url
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    return res.stdout

print("=== VERIFYING STEPPER & TREE DOM FOR BÀI 6 LỚP 10 ===")
url = f"http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6&t={subprocess.os.getpid()}"
dom = dump_dom(url)

print(f"DOM length: {len(dom)}")

# 1. Check sidebar structure header
if "lesson-structure-header" in dom:
    print("PASS: Sidebar has lesson-structure-header")
else:
    print("FAIL: lesson-structure-header not found in sidebar")

if "Cấu trúc bài: Hệ thức lượng trong tam giác" in dom or "Hệ thức lượng trong tam giác" in dom:
    print("PASS: Sidebar title contains lesson name")
else:
    print("FAIL: Lesson name not found in sidebar title")

# 2. Check Tree items
tree_checks = [
    ("Phần I. Lời chào của Thầy Sáng", 'Phần I'),
    ("Phần II. Mục tiêu & Yêu cầu cần đạt", 'Phần II'),
    ("Phần III. Tiến trình bài học", 'Phần III'),
    ("Tình huống mở đầu (Bài toán dẫn nhập)", 'Hook'),
    ("Mục 1. Định lí Côsin và Hệ quả", 'Mục 1'),
    ("1a)", 'Sub 1a'),
    ("1b)", 'Sub 1b'),
    ("Mục 2. Định lí Sin", 'Mục 2'),
    ("2a)", 'Sub 2a'),
    ("Mục 3. Giải tam giác", 'Mục 3'),
    ("3a)", 'Sub 3a'),
    ("Mục 4. Các công thức tính diện tích", 'Mục 4'),
    ("4a)", 'Sub 4a'),
    ("Chốt kiến thức then chốt (Tổng kết)", 'Wrapup'),
    ("Phần IV. Bài tập củng cố (Trắc nghiệm)", 'Phần IV'),
    ("Dạng 1: Trắc nghiệm 4 lựa chọn (5 câu)", 'Dạng 1'),
    ("Dạng 2: Trắc nghiệm Đúng / Sai (3 câu)", 'Dạng 2'),
    ("Dạng 3: Trả lời ngắn thực tế (2 câu)", 'Dạng 3')
]

for text_to_find, label in tree_checks:
    if text_to_find in dom:
        print(f"PASS: Found tree item [{label}]: {text_to_find}")
    else:
        print(f"FAIL: Missing tree item [{label}]: {text_to_find}")

# 3. Check View mode bar
if "lessonViewModeBar" in dom and "btnModeStep" in dom and "btnModeAll" in dom:
    print("PASS: View Mode Bar (Tập trung / Toàn bộ) rendered")
else:
    print("FAIL: View Mode Bar not found")

# 4. Check data-step-block attributes
blocks = ['data-step-block="welcome"', 'data-step-block="goals"', 'data-step-block="hook"', 'data-step-block="sec-1"', 'data-step-block="sec-2"', 'data-step-block="sec-3"', 'data-step-block="sec-4"', 'data-step-block="wrapup"', 'data-step-block="quiz"']
for b in blocks:
    if b in dom:
        print(f"PASS: Block {b} found")
    else:
        print(f"FAIL: Block {b} not found")

# 5. Check Step Nav Footer
if "step-nav-footer" in dom and "btn-step-complete" in dom:
    print("PASS: Step navigation footers rendered with Đã học xong & Tiếp theo")
else:
    print("FAIL: Step navigation footers not found")

# 6. Check for syntax or runtime error in DOM
if "Uncaught" in dom or "SyntaxError" in dom:
    print("FAIL: JavaScript Error detected in DOM!")
else:
    print("PASS: No JavaScript syntax errors in DOM")
