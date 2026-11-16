with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
sub_keys = [m.start() for m in re.finditer(r'key:\s*"[a-z]"', text)]
print(f"Sub keys found: {len(sub_keys)}")
for idx in sub_keys:
    chunk = text[idx:idx+2500]
    # find title
    t_m = re.search(r'title:\s*"([^"]+)"', chunk)
    title = t_m.group(1) if t_m else "Unknown"
    has_vd = "VÍ DỤ" in chunk or "Ví dụ" in chunk
    has_lt = "LUYỆN TẬP" in chunk or "Luyện tập" in chunk or "VẬN DỤNG" in chunk
    vd_headers = re.findall(r'(?:📌|💡|✏️|Ví dụ|Luyện tập)[^\n<]+', chunk)
    print(f"\nSub at {idx}: {title}")
    print(f"  Has Ví dụ: {has_vd}, Has Luyện tập: {has_lt}")
    print(f"  Headers: {vd_headers[:4]}")
