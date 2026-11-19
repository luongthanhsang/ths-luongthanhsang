# -*- coding: utf-8 -*-
import re

def fix_lesson_11_3(filepath):
    print("Processing:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # 1. Replace in SVG text tags: '\\pi' or 'pi' with 'π'
    # Specifically for axes and points
    svg_replacements = [
        (r'\\+pi/2', 'π/2'),
        (r'-\\+pi/2', '−π/2'),
        (r'\\+pi/4', 'π/4'),
        (r'-\\+pi/4', '−π/4'),
        (r'\\+pi/3', 'π/3'),
        (r'-\\+pi/3', '−π/3'),
        (r'\\+pi/6', 'π/6'),
        (r'-\\+pi/6', '−π/6'),
        (r'3\\+pi/2', '3π/2'),
        (r'-3\\+pi/2', '−3π/2'),
        (r'2\\+pi', '2π'),
        (r'-2\\+pi', '−2π'),
        (r'3\\+pi', '3π'),
        (r'-3\\+pi', '−3π'),
        (r'-\\+pi\b', '−π'),
        (r'(?<![a-zA-Z0-9_\\])\\+pi(?![a-zA-Z0-9_\\])', 'π'),
        (r'\(-3π/2; 1\)', '(−3π/2; 1)'),
        (r'\(-π/2; -1\)', '(−π/2; −1)'),
        (r'\(3π/2; -1\)', '(3π/2; −1)'),
        (r'\(-2π; 1\)', '(−2π; 1)'),
        (r'\(-π; -1\)', '(−π; −1)'),
        (r'\(π; -1\)', '(π; −1)'),
    ]

    # Only replace inside <svg>...</svg> blocks
    def replace_in_svg(match):
        svg_chunk = match.group(0)
        for pat, repl in svg_replacements:
            svg_chunk = re.sub(pat, repl, svg_chunk)
        return svg_chunk

    text = re.sub(r'<svg[\s\S]*?</svg>', replace_in_svg, text)

    # 2. In Hook: v = 0.85 sin(pi t / 3)
    text = text.replace('v = 0.85 sin(pi t / 3)', '$v = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Done:", filepath)

fix_lesson_11_3('js/lesson-11-3-data.js')
fix_lesson_11_3('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
