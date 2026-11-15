with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
pos = text.find('sidebarContainer =')
if pos == -1: pos = text.find('sidebarContainer')
print(text[pos-100:pos+300])
