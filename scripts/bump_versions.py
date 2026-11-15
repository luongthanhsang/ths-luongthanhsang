with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
html = re.sub(r'(src="js/[^"?]+)\?v=[^"]*(")', r'\1?v=20261115_04\2', html)

with open('bai-hoc-so.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated bai-hoc-so.html cache bust versions.")

with open('trac-nghiem.html', 'r', encoding='utf-8') as f:
    thtml = f.read()

thtml = re.sub(r'(src="js/[^"?]+)\?v=[^"]*(")', r'\1?v=20261115_04\2', thtml)

with open('trac-nghiem.html', 'w', encoding='utf-8') as f:
    f.write(thtml)

print("Updated trac-nghiem.html cache bust versions.")
