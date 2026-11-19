with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'id:\s*"(11-c1-b[0-9])"', text)
print('IDs in lessons-data.js for grade 11 chapter 1:', m)
