with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re

# Split by subsections
subs = re.split(r'// ---\s*(\d[a-z])\.\s*([^-\n]+)---', text)
print(f"Parts found: {len(subs)}")

for i in range(1, len(subs), 3):
    sub_code = subs[i]
    sub_title = subs[i+1].strip()
    sub_body = subs[i+2]
    
    # Check alert-success (Ví dụ)
    vd_m = re.findall(r'alert-success[\s\S]*?<div class="[^"]*fw-bold[^"]*">([\s\S]*?)</div>', sub_body)
    # Check alert-info (Luyện tập)
    lt_m = re.findall(r'alert-info[\s\S]*?<div class="[^"]*fw-bold[^"]*">([\s\S]*?)</div>', sub_body)
    
    print(f"\n[Sub {sub_code}] {sub_title}")
    if vd_m:
        print(f"  ✅ Ví dụ: {vd_m[0].strip()}")
    else:
        print(f"  ❌ Missing Ví dụ!")
    if lt_m:
        print(f"  ✅ Luyện tập: {lt_m[0].strip()}")
    else:
        print(f"  ❌ Missing Luyện tập!")
