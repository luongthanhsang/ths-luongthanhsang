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

print("=== TESTING BÀI 5: 10-c3-b5 ===")
dom_b5 = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b5&v=20261115_05")

# Check Lesson Title
if "Giá trị lượng giác của một góc từ 0° đến 180°" in dom_b5:
    print("PASS: Lesson title rendered")
else:
    print("FAIL: Lesson title not found")

# Check Welcome
if "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Thầy rất vui khi được đồng hành cùng các em trong Chương ba" in dom_b5:
    print("PASS: Welcome quote rendered")
else:
    print("FAIL: Welcome quote not found")

# Check Learning Goals
if "[object Object]" in dom_b5:
    print("FAIL: [object Object] found in b5!")
else:
    print("PASS: No [object Object] in b5")

if "Nhận biết và nắm vững định nghĩa giá trị lượng giác" in dom_b5:
    print("PASS: Goal 1 rendered")
else:
    print("FAIL: Goal 1 not found")

# Check TikZ SVG
if "Nửa đường tròn đơn vị với góc nhọn" in dom_b5 and "<svg" in dom_b5:
    print("PASS: TikZ SVG half unit circle rendered")
else:
    print("FAIL: TikZ SVG half unit circle not found")

# Check MathJax Errors
if "Math input error" in dom_b5:
    print("FAIL: Math input error found in b5!")
else:
    print("PASS: No Math input error in b5")


print("\n=== TESTING BÀI 6: 10-c3-b6 ===")
dom_b6 = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6&v=20261115_05")

# Check Lesson Title
if "Hệ thức lượng trong tam giác" in dom_b6:
    print("PASS: Lesson title rendered in b6")
else:
    print("FAIL: Lesson title not found in b6")

# Check Welcome
if "Thầy Sáng chào các em học sinh Lớp 10 thân yêu! Chào mừng các em đến với Bài 6" in dom_b6:
    print("PASS: Welcome quote rendered in b6")
else:
    print("FAIL: Welcome quote not found in b6")

# Check Goals
if "[object Object]" in dom_b6:
    print("FAIL: [object Object] found in b6!")
else:
    print("PASS: No [object Object] in b6")

if "Thấu hiểu và vận dụng thành thạo Định lí Côsin" in dom_b6:
    print("PASS: Goal 1 rendered in b6")
else:
    print("FAIL: Goal 1 not found in b6")

# Check TikZ SVG Tháp Rùa
if "Tháp Rùa" in dom_b6 and "<svg" in dom_b6:
    print("PASS: TikZ SVG Tháp Rùa rendered in b6")
else:
    print("FAIL: TikZ SVG Tháp Rùa not found")

# Check MathJax Errors
if "Math input error" in dom_b6:
    print("FAIL: Math input error found in b6!")
else:
    print("PASS: No Math input error in b6")
