with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*[\'"]11-c1[^\'"]+[\'"].*?title:\s*[\'"][^\'"]+[\'"]', text, re.DOTALL)
for m in matches:
    print(m)
