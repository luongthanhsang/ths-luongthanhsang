import re

for fname in ['index.html', 'trac-nghiem.html', 'kho-tai-lieu.html']:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(r'(\?v=)[0-9_]+', r'\g<1>20261115_05', content)
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Bumped version in {fname}")
