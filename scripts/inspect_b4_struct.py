with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Top 800 chars of lesson-11-4-data.js:")
print(text[:800])
print("\nSections in lesson-11-4:")
secs = re.findall(r'id:\s*"(11-c1-b4-s[0-9]+)",\s*num:\s*"([0-9]+)",\s*title:\s*"([^"]+)"', text)
for s in secs:
    print(" ", s)
