with open('js/lesson-10-10-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'illustration:\s*`([\s\S]*?)`', text)
if m:
    print(m.group(1)[:1200])
