with open('trac-nghiem.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
idx = text.find('MathJax')
while idx != -1:
    print(text[max(0, idx-50):min(len(text), idx+350)])
    print("="*50)
    idx = text.find('MathJax', idx+350)
