with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'<div class="subsection-card[^"]*".*?>', text)
for s in m:
    print(s)
