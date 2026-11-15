with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'fig-parallel|780 230', text)]
print("Occurrences of 780 230 in lesson-11-12-data.js:", len(matches))
for idx in matches:
    print(f"At {idx}: {text[idx-50:idx+100]}")
