with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re

subs = re.findall(r'key:\s*"([a-z])",\s*title:\s*"([^"]+)",[\s\S]*?contentHtml:\s*`([\s\S]*?)`\s*,\s*checkpoints:', text)

print(f"Total subsections found: {len(subs)}")
for s in subs:
    key, title, html = s
    has_vd = "VÍ DỤ" in html or "Ví dụ" in html
    has_lt = "LUYỆN TẬP" in html or "Luyện tập" in html or "VẬN DỤNG" in html
    print(f"\nSub {key}: {title}")
    print(f"  Has Ví dụ: {has_vd}")
    print(f"  Has Luyện tập: {has_lt}")
    
    # print headers of vd and lt
    vd_headers = re.findall(r'(?:📌|💡|✏️|Ví dụ|Luyện tập)[^\n<]+', html)
    print("  Headers:", vd_headers[:4])
