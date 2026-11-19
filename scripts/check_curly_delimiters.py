# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    print("Checking", filepath)
    m1 = list(re.finditer(r'\\left\\{', text))
    m2 = list(re.finditer(r'\\left\\\\{', text))
    m3 = list(re.finditer(r'\\right\\}', text))
    m4 = list(re.finditer(r'\\right\\\\}', text))
    print(f"  \\left\\{{: {len(m1)}")
    print(f"  \\left\\\\{{: {len(m2)}")
    print(f"  \\right\\}}: {len(m3)}")
    print(f"  \\right\\\\}}: {len(m4)}")
    
    for m in m2:
        s = max(0, m.start() - 20)
        e = min(len(text), m.end() + 50)
        print("   Sample \\left\\\\{:", repr(text[s:e]))
