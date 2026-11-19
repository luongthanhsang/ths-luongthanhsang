import sys, os
sys.path.append(os.path.abspath('scripts'))
from gen_spiral_svg import generate_spiral_svg

with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
svgs = list(re.finditer(r'<svg[^>]*>.*?</svg>', text, re.DOTALL))
print('Total SVGs found:', len(svgs))
svg2_match = svgs[1]
print('SVG 2 start:', svg2_match.start(), 'end:', svg2_match.end())
print('SVG 2 head:', svg2_match.group(0)[:100])
print('SVG 2 tail:', svg2_match.group(0)[-100:])
