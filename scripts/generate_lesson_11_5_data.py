# -*- coding: utf-8 -*-
"""
Tạo file js/lesson-11-5-data.js hoàn hảo chuẩn 5 sao Thầy Sáng:
BÀI 5: DÃY SỐ (LỚP 11 - BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
"""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from build_b11_5_svgs import SVG_HOOK, SVG_TREE, SVG_NUMBER_LINE, SVG_MONOTONIC, SVG_BOUNDED

with open('scripts/b11_5_template.js', 'r', encoding='utf-8') as f:
    template = f.read()

content = template.replace('__SVG_HOOK__', SVG_HOOK)
content = content.replace('__SVG_TREE__', SVG_TREE)
content = content.replace('__SVG_NUMBER_LINE__', SVG_NUMBER_LINE)
content = content.replace('__SVG_MONOTONIC__', SVG_MONOTONIC)
content = content.replace('__SVG_BOUNDED__', SVG_BOUNDED)

with open('js/lesson-11-5-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully wrote js/lesson-11-5-data.js, length:", len(content))
