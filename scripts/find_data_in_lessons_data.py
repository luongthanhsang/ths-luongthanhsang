with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'LESSON_11_C1_B[0-9]_DATA', text)
print('References to LESSON_11_C1_B... in lessons-data.js:', matches)
