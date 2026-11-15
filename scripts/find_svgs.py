with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'<svg', text)]
print(f"Total <svg in b12: {len(matches)}")
for idx in matches[:3]:
    print("--- SVG snippet ---")
    print(text[idx:idx+400])
