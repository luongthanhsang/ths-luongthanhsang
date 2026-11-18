import re

for fn in ['index.html', 'bai-hoc-so.html', 'trac-nghiem.html']:
    with open(fn, 'r', encoding='utf-8') as f:
        c = f.read()
    matches = re.findall(r'<div class="teacher-avatar-frame".*?</div>\s*</div>', c, re.DOTALL)
    print(f"=== {fn} ===")
    for m in matches:
        print(m[:300])
