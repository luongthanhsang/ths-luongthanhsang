with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Length of lessons-data.js:", len(text))
matches = re.findall(r'id:\s*["\']([0-9]+-[^"\']+)["\']', text)
print("Lesson IDs:", matches)
