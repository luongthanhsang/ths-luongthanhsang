# -*- coding: utf-8 -*-
import re

for filepath in [
    'js/lesson-11-3-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-4-data.js'
]:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Replace \\left\\\\{ -> \\left\\{
    # Replace \\right\\\\} -> \\right\\}
    # Replace \\\\; -> \\;
    # Replace \\\\middle -> \\middle
    t1, n1 = re.subn(r'\\left\\\\\{', r'\\left\\{', text)
    t2, n2 = re.subn(r'\\right\\\\\}', r'\\right\\}', t1)
    t3, n3 = re.subn(r'\\\\;', r'\\;', t2)
    t4, n4 = re.subn(r'\\\\middle', r'\\middle', t3)
    
    print(f"[{filepath}] Replaced:")
    print(f"  \\left\\\\{{ -> \\left\\{{: {n1}")
    print(f"  \\right\\\\}} -> \\right\\}}: {n2}")
    print(f"  \\\\; -> \\\\;: {n3}")
    print(f"  \\\\middle -> \\\\middle: {n4}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(t4)
