# -*- coding: utf-8 -*-
import sys
sys.path.append('scripts')
from b10_svgs import svg_hook_b10_11, svg_sec1_b10, svg_sec2_b10, svg_sec3_b10, svg_sec4_b10

with open('scripts/lesson_11_10_template.txt', 'r', encoding='utf-8') as f:
    template = f.read()

template = template.replace('__SVG_HOOK__', svg_hook_b10_11)
template = template.replace('__SVG_SEC1__', svg_sec1_b10)
template = template.replace('__SVG_SEC2__', svg_sec2_b10)
template = template.replace('__SVG_SEC3__', svg_sec3_b10)
template = template.replace('__SVG_SEC4__', svg_sec4_b10)

with open('js/lesson-11-10-data.js', 'w', encoding='utf-8') as f:
    f.write(template)

print(f"Created js/lesson-11-10-data.js successfully! Length: {len(template):,} characters.")
