# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text1 = f.read()

import re
svgs = re.findall(r'(<div[^>]*class="[^"]*text-center[^"]*"[^>]*>[\s\S]*?<svg[\s\S]*?</svg>[\s\S]*?</div>)', text1)
print(f"Total SVG containers in 11-1: {len(svgs)}")
for idx, s in enumerate(svgs):
    # find title or preceding heading
    pos = text1.find(s)
    head = text1[max(0, pos-200):pos].replace('\n', ' ')
    print(f"\n--- SVG {idx+1} ---")
    print("Preceding text:", head[-100:])
    print("Snippet:", s[:200])
