# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# Tìm mọi chỗ có \\quad nằm ngoài khối math hoặc giữa hai math delimiter
# Cụ thể: '; \\quad ' hoặc '; \\\\quad '
text = text.replace('; \\quad ', ';&emsp;&emsp;')
text = text.replace('; \\\\quad ', ';&emsp;&emsp;')
text = text.replace('; \\quad', ';&emsp;&emsp;')
text = text.replace('; \\\\quad', ';&emsp;&emsp;')

with open('scripts/build_lesson_11_1_full.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Replaced! Remaining quad:")
for i, l in enumerate(text.splitlines()):
    if 'quad' in l:
        print(f"L{i+1}: {l.strip()[:100]}")
