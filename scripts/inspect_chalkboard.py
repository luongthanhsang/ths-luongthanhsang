import re

for fn in ['bai-hoc-so.html', 'trac-nghiem.html']:
    with open(fn, 'r', encoding='utf-8') as f:
        c = f.read()
    matches = re.findall(r'.{0,60}chalkboard-user.{0,60}', c)
    print(f"=== {fn} ===")
    for m in matches:
        print("  ", m.strip())
