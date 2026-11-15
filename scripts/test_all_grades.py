import subprocess, re

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

def test_lesson_url(url, expected_title, expected_tree_items):
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--virtual-time-budget=8000",
        "--dump-dom",
        url
    ]
    dom = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8').stdout
    print(f"\n--- Testing URL: {url} ---")
    
    # Check title
    if expected_title in dom:
        print(f"PASS: Lesson Title found: {expected_title}")
    else:
        print(f"FAIL: Lesson Title NOT found: {expected_title}")

    # Check Sidebar structure header
    if "lesson-structure-header" in dom:
        print("PASS: Sidebar has lesson-structure-header")
    else:
        print("FAIL: lesson-structure-header missing")

    # Check tree items
    for item in expected_tree_items:
        if item in dom:
            print(f"PASS: Found tree item: {item}")
        else:
            print(f"FAIL: Missing tree item: {item}")

    # Check Stepper blocks
    if 'data-step-block="welcome"' in dom and 'data-step-block="quiz"' in dom:
        print("PASS: data-step-block attributes present")
    else:
        print("FAIL: data-step-block missing")

    # Check footer
    if 'btn-step-complete' in dom:
        print("PASS: Stepper footers present")
    else:
        print("FAIL: Stepper footers missing")

# 1. Test Grade 10 - Bài 5
test_lesson_url(
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b5",
    "Giá trị lượng giác của một góc từ 0° đến 180°",
    ["Phần I. Lời chào của Thầy Sáng", "Phần III. Tiến trình bài học", "Phần IV. Bài tập củng cố (Trắc nghiệm)"]
)

# 2. Test Grade 11 - Bài 12
test_lesson_url(
    "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b12",
    "Đường thẳng và mặt phẳng song song",
    ["Phần I. Lời chào của Thầy Sáng", "Phần III. Tiến trình bài học", "Phần IV. Bài tập củng cố (Trắc nghiệm)"]
)

# 3. Test Grade 12 - Bài 6
test_lesson_url(
    "http://localhost:8000/bai-hoc-so.html?grade=12&lesson=12-c2-b6",
    "Vectơ trong không gian",
    ["Phần I. Lời chào của Thầy Sáng", "Phần III. Tiến trình bài học", "Phần IV. Bài tập củng cố (Trắc nghiệm)"]
)
