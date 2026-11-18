with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'<script\s+src="([^"]+)"></script>', text)
print(f"Total script tags: {len(matches)}")
for m in matches:
    if 'b11' in m or 'lesson-11' in m:
        print("  Found:", m)
