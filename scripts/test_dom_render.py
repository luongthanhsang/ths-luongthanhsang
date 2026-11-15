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

print("=== Testing 10-c2-b3 ===")
dom_b3 = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3&v=test1")

# Check 1: Welcome quote
if 'Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10!' in dom_b3:
    print("PASS: Welcome quote rendered")
else:
    print("FAIL: Welcome quote NOT rendered")

# Check 2: Learning goals (not [object Object])
if '[object Object]' in dom_b3:
    print("FAIL: [object Object] found in dom_b3")
else:
    print("PASS: No [object Object] in dom_b3")

if 'Nhận biết bất phương trình bậc nhất hai ẩn' in dom_b3:
    print("PASS: Goal 1 rendered")
else:
    print("FAIL: Goal 1 not found")

# Check 3: Raw HTML tags in Hook
if '&lt;div style=' in dom_b3 or '<div style="margin: 10px 0; padding: 10px 14px' in dom_b3:
    if '&lt;div style=' in dom_b3:
        print("FAIL: Raw &lt;div style=&gt; found in hook!")
    else:
        print("PASS: HTML tags in hook properly rendered as elements")
else:
    print("NOTE: Checking hook content")

# Check 4: LaTeX formulas
if 'cquadext' in dom_b3:
    print("FAIL: cquadext found!")
else:
    print("PASS: No cquadext")

if 'ce0' in dom_b3:
    print("FAIL: ce0 found!")
else:
    print("PASS: No ce0")

if 'xinmathbbN' in dom_b3:
    print("FAIL: xinmathbbN found!")
else:
    print("PASS: No xinmathbbN")

if 'Math input error' in dom_b3:
    print("FAIL: Math input error found in b3!")
else:
    print("PASS: No Math input error in b3")

print("\n=== Testing 10-c2-b4 ===")
dom_b4 = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b4&v=test1")

if 'Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công' in dom_b4:
    print("PASS: Welcome quote rendered in b4")
else:
    print("FAIL: Welcome quote NOT rendered in b4")

if '[object Object]' in dom_b4:
    print("FAIL: [object Object] found in dom_b4")
else:
    print("PASS: No [object Object] in dom_b4")

if 'Math input error' in dom_b4:
    print("FAIL: Math input error found in b4!")
else:
    print("PASS: No Math input error in b4")

print("\n=== Testing trac-nghiem.html ===")
dom_tn = dump_dom("http://localhost:8000/trac-nghiem.html?v=test1")
if 'Math input error' in dom_tn:
    print("FAIL: Math input error found in trac-nghiem!")
else:
    print("PASS: No Math input error in trac-nghiem")

if 'dfracx - 12' in dom_tn:
    print("FAIL: dfracx - 12 found in trac-nghiem!")
else:
    print("PASS: No dfracx - 12 in trac-nghiem")
