with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'svg\s*:\s*`([\s\S]*?)`', text)
if m:
    print("Found SVG:")
    print(m.group(0)[:600])
