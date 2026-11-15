with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# Look for keys of the main lesson object
matches = re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', text, re.MULTILINE)
print("Top-level keys in lesson-11-12-data.js:", set(matches))
