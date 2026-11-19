import re

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print('=== LESSON 11-4 TITLES ===')
for m in re.finditer(r'"title":\s*"([^"]+)"', text):
    print(m.group(1))

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text3 = f.read()

print('\n=== LESSON 11-3 TITLES ===')
for m in re.finditer(r'title:\s*"([^"]+)"', text3):
    print(m.group(1))
