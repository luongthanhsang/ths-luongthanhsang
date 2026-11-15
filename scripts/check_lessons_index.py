with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*["\']([^"\']+)["\'].*?title:\s*["\']([^"\']+)["\']', text)
for m in matches:
    print(m)
