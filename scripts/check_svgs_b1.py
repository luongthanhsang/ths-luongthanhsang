with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print('Number of SVGs in lesson-11-1:', len(svgs))
for i, s in enumerate(svgs):
    print(f'SVG {i+1} first 120 chars: {s[:120]}...')
    if '360' in s or 'xoắn' in s.lower() or 'spiral' in s.lower():
        print(f'  -> Matches spiral in SVG {i+1}!')
