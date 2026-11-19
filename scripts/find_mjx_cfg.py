with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'window\.MathJax\s*=\s*\{.*?\};', text, re.DOTALL)
if m:
    print(m.group(0))
else:
    print('No MathJax config found!')
