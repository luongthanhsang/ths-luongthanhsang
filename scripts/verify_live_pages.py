import subprocess
import re

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

# Test 1: trac-nghiem.html
print("=== TESTING TRAC-NGHIEM.HTML ===")
res1 = subprocess.run([chrome_path, '--headless=new', '--dump-dom', 'http://localhost:8000/trac-nghiem.html'], capture_output=True, text=True, timeout=20)
dom1 = res1.stdout

if 'Math input error' in dom1:
    print("FAILED: Found 'Math input error' in DOM!")
else:
    print("PASSED: No 'Math input error' in DOM!")

# Check Question 3 content
m3 = re.search(r'id="question-card-I_3"[\s\S]*?id="question-card-I_4"', dom1)
if m3:
    clean = re.sub(r'<[^>]+>', ' ', m3.group(0))
    clean = ' '.join(clean.split())
    print("Question 3 text in DOM:", clean[:300])

# Test 2: bai-hoc-so.html?lesson=11-c4-b12 (without grade=11 in URL)
print("\n=== TESTING BAI-HOC-SO.HTML?LESSON=11-C4-B12 ===")
res2 = subprocess.run([chrome_path, '--headless=new', '--dump-dom', 'http://localhost:8000/bai-hoc-so.html?lesson=11-c4-b12'], capture_output=True, text=True, timeout=20)
dom2 = res2.stdout

if 'Đường thẳng và mặt phẳng song song' in dom2:
    print("PASSED: Successfully loaded Bài 12 (Đường thẳng và mặt phẳng song song)!")
else:
    print("FAILED: Bài 12 not found in DOM!")

# Check SVG in DOM 2
if 'points="4,133 39,49 237,49 201,133"' in dom2:
    print("PASSED: Exact SVG with Image 2 coordinates is rendered in DOM!")
else:
    print("WARNING: Exact SVG coordinates not found in DOM!")
