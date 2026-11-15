import subprocess, json, time, re

def dump_page(url):
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--virtual-time-budget=6000",
        "--dump-dom",
        url
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
    return res.stdout

print("=== 1. TEST BÀI 12 LỚP 11 (11-c4-b12) ===")
html12 = dump_page("http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b12")

m_title = re.search(r'class="structure-lesson-title">([^<]+)<', html12)
if m_title:
    print(f"Sidebar Title: '{m_title.group(1)}'")
else:
    print("Sidebar Title NOT FOUND!")

sub_items_12 = re.findall(r'class="tree-sub-item[^"]*"[^>]*>[\s\S]*?<\/div>', html12)
print(f"Number of tree-sub-items in Bài 12 Lớp 11: {len(sub_items_12)} (Expect 0 because no a,b)")
print(f"Contains 'Cấu trúc bài:': {'Cấu trúc bài:' in html12}")

print("\n=== 2. TEST BÀI 6 LỚP 10 (10-c3-b6) ===")
html6 = dump_page("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6")

m_title6 = re.search(r'class="structure-lesson-title">([^<]+)<', html6)
if m_title6:
    print(f"Sidebar Title: '{m_title6.group(1)}'")
else:
    print("Sidebar Title NOT FOUND!")

sub_letters_6 = re.findall(r'class="tree-sub-letter">([^<]+)<', html6)
print(f"Sub-item letters in tree: {sub_letters_6}")

sub_headings_6 = re.findall(r'class="subsection-heading-h3">([^<]+)<', html6)
print(f"Subsection heading h3s: {sub_headings_6[:4]}")

print("\n=== 3. TEST BÀI 3 LỚP 10 (10-c2-b3) (TIKZ SVG & HOOK) ===")
html3 = dump_page("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3")

m_title3 = re.search(r'class="structure-lesson-title">([^<]+)<', html3)
if m_title3:
    print(f"Sidebar Title: '{m_title3.group(1)}'")

has_svg3 = "<svg" in html3
print(f"Bài 3 has SVG: {has_svg3}")

m_tw3 = re.search(r'class="welcome-quote-msg">"([^"]*)"<', html3)
if m_tw3:
    print(f"Teacher welcome quote in Bài 3: '{m_tw3.group(1)[:60]}...'")

goals3 = re.findall(r'class="lesson-goals-list">([\s\S]*?)<\/ul>', html3)
if goals3:
    has_obj = "[object Object]" in goals3[0]
    print(f"Goals has '[object Object]': {has_obj}")
    lis = re.findall(r'<li>([\s\S]*?)<\/li>', goals3[0])
    print(f"Goals count: {len(lis)}")

print("\n=== 4. TEST BÀI 4 LỚP 10 (10-c2-b4) (TIKZ SVG & HOOK) ===")
html4 = dump_page("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b4")
has_svg4 = "<svg" in html4
print(f"Bài 4 has SVG: {has_svg4}")
