with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'num:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"', text)
print("Sections:")
for m in matches:
    print(" ", m)

matches_sub = re.findall(r'key:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"', text)
print("Subsections:")
for m in matches_sub:
    print(" ", m)
