with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'id:\s*"11-c1-b3"', text)
if m:
    print("Found 11-c1-b3 in lessons-data.js at index:", m.start())
    print(text[m.start()-50:m.start()+800])
else:
    print("11-c1-b3 not found in lessons-data.js")

m2 = re.search(r'autoInjectLesson\(.*11.*3.*\)', text)
if m2:
    print("Found autoInject for 11-3:", m2.group(0))
else:
    print("No autoInject for 11-3 found")
