with open('js/lesson-10-10-data.js', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'explain: "Rất xuất sắc![\s\S]{1,1000}', text)
if m:
    print(m.group(0))
