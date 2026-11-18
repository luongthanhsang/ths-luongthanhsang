with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'\.brand-logo-badge\s*\{[^}]+\}', text)
if m:
    print("CSS for .brand-logo-badge:")
    print(m.group(0))

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

m2 = re.search(r'<a href="index\.html" class="brand">.*?</a>', html, re.DOTALL)
if m2:
    print("\nHTML for brand:")
    print(m2.group(0))
