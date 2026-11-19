import sys, os
sys.path.append(os.path.abspath('scripts'))
from gen_spiral_svg import generate_spiral_svg

with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
current_svg2 = svgs[1]
new_svg2 = generate_spiral_svg()

print('Current SVG 2 length:', len(current_svg2))
print('New SVG 2 length:', len(new_svg2))
print('Is new SVG 2 already in lesson-11-1-data.js?', new_svg2.strip() in text)
