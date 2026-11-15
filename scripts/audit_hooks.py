import os, re

lesson_files = [
    'lesson-10-3-data.js',
    'lesson-10-4-data.js',
    'lesson-10-5-data.js',
    'lesson-10-6-data.js',
    'lesson-10-7-data.js',
    'lesson-10-8-data.js',
    'lesson-10-9-data.js',
    'lesson-10-10-data.js',
    'lesson-10-11-data.js',
    'lesson-11-12-data.js',
    'lesson-12-7-data.js'
]

for lf in lesson_files:
    path = os.path.join('js', lf)
    if not os.path.exists(path):
        print(f"File not found: {lf}")
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # check hook
    has_hook = 'hook:' in content
    has_svg = 'illustrationSvg' in content
    has_img = 'illustration:' in content
    
    print(f"[{lf}] Hook: {has_hook}, Has SVG: {has_svg}, Has Image: {has_img}")
    if has_svg:
        # check if SVG has latex codes like \vec or \alpha or \frac
        svg_matches = re.findall(r'illustrationSvg:\s*`([\s\S]*?)`', content)
        for s in svg_matches:
            has_raw_latex = '\\vec' in s or '\\frac' in s or '\\alpha' in s
            print(f"   SVG length: {len(s)}, Raw latex in SVG: {has_raw_latex}")
            if has_raw_latex:
                for line in s.splitlines():
                    if '\\' in line:
                        print(f"      {line.strip()[:100]}")
