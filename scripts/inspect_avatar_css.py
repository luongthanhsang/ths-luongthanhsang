with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'\.teacher-avatar-frame[^{]*\{[^}]+\}', text)
for r in m:
    print(r)
m2 = re.findall(r'\.teacher-verify-badge[^{]*\{[^}]+\}', text)
for r in m2:
    print(r)
