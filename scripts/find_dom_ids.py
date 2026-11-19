with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id=["\']([^"\']+)["\']', text)
for m in matches:
    if any(k in m.lower() for k in ['lesson', 'detail', 'content', 'section', 'viewer']):
        print('Element ID:', m)
