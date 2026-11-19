with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*"(11-c[0-9]-b[0-9]+)"', text)
print('Existing Grade 11 lesson IDs in lessons-data.js:', matches)

# Find Chapter 2
ch2_idx = text.find('Chương II')
if ch2_idx != -1:
    print('Chapter II snippet:')
    print(text[ch2_idx:ch2_idx+1000])
else:
    print('Chương II not found by string, checking "Chương 2"')
    ch2_idx = text.find('Chương 2')
    if ch2_idx != -1:
        print(text[ch2_idx:ch2_idx+1000])
