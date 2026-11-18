with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'data-step-block="wrapup"', text)
if m:
    print(text[m.start()-200:m.start()+1500])
else:
    print("No wrapup step block found directly")
