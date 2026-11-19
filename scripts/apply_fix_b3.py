# -*- coding: utf-8 -*-
import re

def fix_lesson_11_3(filepath):
    print("Fixing file:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix \\\\\\left -> \\left
    c1, n1 = re.subn(r'\\{3,}left', r'\\\\left', content)
    print(f"  Replaced \\\\\\left -> \\\\left: {n1} times")

    # 2. Fix \\\\r\\right or \\r\\right or \r\right -> \\right
    c2, n2 = re.subn(r'\\+r\\+right', r'\\\\right', c1)
    print(f"  Replaced \\r\\right -> \\\\right: {n2} times")

    # 3. Fix single slash \mid (when not preceded by \) -> \\mid
    c3, n3 = re.subn(r'(?<!\\)\\mid\b', r'\\\\mid', c2)
    print(f"  Replaced \\mid -> \\\\mid: {n3} times")

    # 4. Fix single slash \pi in audioScript: 'k2\pi' -> 'k hai pi'
    c4, n4 = re.subn(r'k2\\pi\b', 'k hai pi', c3)
    print(f"  Replaced k2\\pi in audio -> 'k hai pi': {n4} times")

    # 5. Fix any lingering math terms from previous corruptions
    corruptions = [
        (r'\bdfracpi6\b', r'\\dfrac{\\pi}{6}'),
        (r'\bdfracpi4\b', r'\\dfrac{\\pi}{4}'),
        (r'\bdfracpi3\b', r'\\dfrac{\\pi}{3}'),
        (r'\bdfracpi2\b', r'\\dfrac{\\pi}{2}'),
        (r'\bdfrac12\b', r'\\dfrac{1}{2}'),
        (r'\bdfracsqrt22\b', r'\\dfrac{\\sqrt{2}}{2}'),
        (r'\bdfracsqrt32\b', r'\\dfrac{\\sqrt{3}}{2}'),
        (r'\bdfracsqrt33\b', r'\\dfrac{\\sqrt{3}}{3}'),
        (r'\bsqrt3\b', r'\\sqrt{3}'),
        (r'\banx\b', r'\\tan x'),
        (r'\bcotx\b', r'\\cot x'),
        (r'\bsinx\b', r'\\sin x'),
        (r'\bcosx\b', r'\\cos x'),
        (r'-1lesinxle1', r'-1 \\le \\sin x \\le 1'),
        (r'-1lecosxle1', r'-1 \\le \\cos x \\le 1'),
        (r'xinmathbbR', r'x \\in \\mathbb{R}'),
        (r'kinmathbbZ', r'k \\in \\mathbb{Z}'),
        (r'\bmathbbR\b', r'\\mathbb{R}'),
        (r'\bmathbbZ\b', r'\\mathbb{Z}'),
    ]

    cur = c4
    for bad, good in corruptions:
        cur, n = re.subn(bad, good, cur)
        if n > 0:
            print(f"  Replaced corruption {bad} -> {n} times")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(cur)
    print(f"Saved {filepath} successfully!\n")

fix_lesson_11_3('js/lesson-11-3-data.js')
fix_lesson_11_3('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
