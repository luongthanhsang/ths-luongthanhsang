import os, sys, re
sys.path.append('scripts')
from generate_all_tikz_hooks import svg_b3_hook, svg_b4_hook, svg_b9_hook, svg_b12_6_hook

# 1. Update lesson-10-3-data.js
path_b3 = os.path.join('js', 'lesson-10-3-data.js')
with open(path_b3, 'r', encoding='utf-8') as f:
    text_b3 = f.read()

if 'illustrationSvg:' not in text_b3:
    target = 'storyHtml: `'
    replacement = f'illustrationSvg: `{svg_b3_hook}`,\n    storyHtml: `'
    assert target in text_b3
    text_b3 = text_b3.replace(target, replacement, 1)
    with open(path_b3, 'w', encoding='utf-8') as f:
        f.write(text_b3)
    print("Injected Hook TikZ SVG into lesson-10-3-data.js")

# 2. Update lesson-10-4-data.js
path_b4 = os.path.join('js', 'lesson-10-4-data.js')
with open(path_b4, 'r', encoding='utf-8') as f:
    text_b4 = f.read()

if 'illustrationSvg:' not in text_b4:
    target = 'storyHtml: `'
    replacement = f'illustrationSvg: `{svg_b4_hook}`,\n    storyHtml: `'
    assert target in text_b4
    text_b4 = text_b4.replace(target, replacement, 1)
    with open(path_b4, 'w', encoding='utf-8') as f:
        f.write(text_b4)
    print("Injected Hook TikZ SVG into lesson-10-4-data.js")

# 3. Update lesson-10-9-data.js
path_b9 = os.path.join('js', 'lesson-10-9-data.js')
with open(path_b9, 'r', encoding='utf-8') as f:
    text_b9 = f.read()

if 'illustrationSvg:' not in text_b9:
    target = 'story: `'
    replacement = f'illustrationSvg: `{svg_b9_hook}`,\n    story: `'
    assert target in text_b9
    text_b9 = text_b9.replace(target, replacement, 1)
    with open(path_b9, 'w', encoding='utf-8') as f:
        f.write(text_b9)
    print("Injected Hook TikZ SVG into lesson-10-9-data.js")

# 4. Update lesson-12-7-data.js
path_b12_6 = os.path.join('js', 'lesson-12-7-data.js')
with open(path_b12_6, 'r', encoding='utf-8') as f:
    text_b12_6 = f.read()

if 'illustrationSvg:' not in text_b12_6:
    target = 'illustration: "",'
    replacement = f'illustrationSvg: `{svg_b12_6_hook}`,\n    illustration: "",'
    assert target in text_b12_6
    text_b12_6 = text_b12_6.replace(target, replacement, 1)
    with open(path_b12_6, 'w', encoding='utf-8') as f:
        f.write(text_b12_6)
    print("Injected Hook TikZ SVG into lesson-12-7-data.js")

# 5. Fix raw LaTeX in SVGs across lesson files
vec_cleanups = [
    (r'\\vec\{([A-Z])([A-Z])\}', r'\1\2&#8407;'),
    (r'\\vec\{([a-zA-Z0-9])\}', r'\1&#8407;'),
    (r'\\vec\{v\}_([rn])', r'v&#8407;<tspan font-size="10" dy="3">\1</tspan><tspan dy="-3"> </tspan>'),
    (r'\\vec\{F\}_([12])', r'F&#8407;<tspan font-size="10" dy="3">\1</tspan><tspan dy="-3"> </tspan>'),
    (r'\\overrightarrow\{([A-Z])([A-Z])\}', r'\1\2&#8407;'),
    (r'\\overrightarrow\{([a-zA-Z0-9])\}', r'\1&#8407;'),
]

files_to_clean = [
    'lesson-10-7-data.js',
    'lesson-10-8-data.js',
    'lesson-10-9-data.js',
    'lesson-10-10-data.js',
    'lesson-10-11-data.js',
    'lesson-12-7-data.js'
]

for lf in files_to_clean:
    p = os.path.join('js', lf)
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8') as f:
        t = f.read()

    # also ensure illustrationSvg is set if illustration was an SVG div
    if 'illustrationSvg:' not in t and 'illustration: `' in t and '<svg' in t:
        t = t.replace('illustration: `', 'illustrationSvg: `')

    def clean_svg_match(m):
        svg_content = m.group(0)
        for pat, repl in vec_cleanups:
            svg_content = re.sub(pat, repl, svg_content)
        return svg_content

    new_t = re.sub(r'<svg[\s\S]*?</svg>', clean_svg_match, t)
    if new_t != t:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(new_t)
        print(f"Cleaned vector notation in SVGs in {lf}!")

print("All TikZ hook diagrams & SVG vector symbols successfully updated!")
