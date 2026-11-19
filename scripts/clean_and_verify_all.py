# -*- coding: utf-8 -*-
import re

def clean_file(filepath):
    print("========================================")
    print("CLEANING FILE:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # 1. Clean up \left and \right corruptions
    # First replace any carriage returns before ight
    text = re.sub(r'\\*[\r\n]\s*ight', lambda m: '\\\\right', text)
    # Replace \+r\+right
    text = re.sub(r'\\+r\\+right', lambda m: '\\\\right', text)

    # Replace \+left followed by \{ or ( or [ or | or .
    text = re.sub(r'\\+left\s*\\+([\{\}])', lambda m: '\\\\left\\\\' + m.group(1), text)
    text = re.sub(r'\\+right\s*\\+([\{\}])', lambda m: '\\\\right\\\\' + m.group(1), text)
    text = re.sub(r'\\+left\s*([\(\[\|\.])', lambda m: '\\\\left' + m.group(1), text)
    text = re.sub(r'\\+right\s*([\(\]\|\.])', lambda m: '\\\\right' + m.group(1), text)

    # 2. Fix \middle and spaces
    text = re.sub(r'\\*;\s*\\*middle\s*\|\s*\\*;', lambda m: '\\\\;\\\\middle|\\\\;', text)
    text = re.sub(r'\\+middle', lambda m: '\\\\middle', text)
    text = re.sub(r'\\+;', lambda m: '\\\\;', text)

    # 3. Fix \setminus
    text = re.sub(r'\\+setminus', lambda m: '\\\\setminus', text)

    # 4. Fix \mid (when part of set builder notation: k\pi \mid k \in \mathbb{Z})
    text = re.sub(r'(?<!\\)\\*mid\b', lambda m: '\\\\mid', text)

    # 5. Fix standalone curly braces in LaTeX math: \{ and \}
    # Be careful not to change JS object braces: only change \{ or \\{
    text = re.sub(r'\\+([\{\}])', lambda m: '\\\\' + m.group(1), text)

    # 6. Specific corruptions from earlier
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
        (r'k2pi', r'k2\\pi'),
        (r'k2\\+pi\b', 'k hai pi'), # In audioScript
    ]
    for bad, good in corruptions:
        text = re.sub(bad, good, text)

    # If it is Lesson 11-4, also clean titles
    if 'lesson-11-4' in filepath:
        text = text.replace('"title": "Phương trình $\\sin x = m$"', '"title": "Phương trình sin x = m"')
        text = text.replace('"title": "Phương trình $\\cos x = m$"', '"title": "Phương trình cos x = m"')
        text = text.replace('"title": "Phương trình $\\tan x = m$"', '"title": "Phương trình tan x = m"')
        text = text.replace('"title": "Phương trình $\\cot x = m$"', '"title": "Phương trình cot x = m"')
        # Also replace \iff with \Leftrightarrow
        text = re.sub(r'\\+iff\b', lambda m: '\\\\Leftrightarrow', text)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Saved:", filepath)

for fp in [
    'js/lesson-11-3-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-4-data.js'
]:
    clean_file(fp)
