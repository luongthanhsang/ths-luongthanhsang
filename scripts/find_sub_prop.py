with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'sub\.(?:content|contentHtml|html)', text)
print('Sub property accesses in script.js:', matches)
