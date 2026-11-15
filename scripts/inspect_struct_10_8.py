with open('js/lesson-10-8-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("File length:", len(text))
matches = re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', text, re.MULTILINE)
print("Keys in lesson-10-8:", set(matches))

# Let's inspect the 4-part structure
idx_sections = text.find('sections:')
idx_practice = text.find('part1MultipleChoice')
print("Sections index:", idx_sections)
print("Practice index:", idx_practice)
