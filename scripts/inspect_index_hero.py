with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# check stats or hero in index.html
idx = text.find('hero')
if idx != -1:
    print("Hero section:\n", text[idx:idx+1500])
