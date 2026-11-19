# -*- coding: utf-8 -*-
import re, glob

lessons = [
    ('11-1', 'js/lesson-11-1-data.js'),
    ('11-2', 'js/lesson-11-2-data.js'),
    ('11-3', 'js/lesson-11-3-data.js'),
    ('11-4', 'js/lesson-11-4-data.js')
]

for lid, fpath in lessons:
    print("=" * 60)
    print(f"AUDITING LESSON {lid} ({fpath})")
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Search for raw 'pi' in text tags of SVGs: <text ...>...pi...</text>
    svg_texts = re.findall(r'<text[^>]*>(.*?)</text>', content, re.DOTALL)
    raw_pi_in_svg = []
    for t in svg_texts:
        # Check if contains pi, 2pi, 3pi, etc. without π symbol
        if re.search(r'\b[-+]?[0-9]*pi\b|\bpi/[0-9]', t, re.IGNORECASE) and 'π' not in t:
            raw_pi_in_svg.append(t.strip())
    
    print(f"1. Raw 'pi' in SVG <text> tags: {len(raw_pi_in_svg)}")
    for s in raw_pi_in_svg[:15]:
        print("   SVG text:", s)

    # 2. Search for raw 'pi' in HTML paragraphs/divs outside LaTeX $...$
    # Strip out LaTeX $...$ and $$...$$ first
    no_math = re.sub(r'\$\$[\s\S]*?\$\$|\$[^\$]*?\$', '', content)
    # Also strip script tags
    no_script = re.sub(r'<script[\s\S]*?</script>', '', no_math)
    
    # Check for occurrences like 'pi/2', '2pi', '3pi/2' in HTML
    html_raw_pi = re.findall(r'(?<![a-zA-Z0-9_\\])(?:[-+]?[0-9]*pi(?:/[0-9]+)?)(?![a-zA-Z0-9_])', no_script, re.IGNORECASE)
    print(f"2. Raw 'pi' outside math in HTML: {len(html_raw_pi)}")
    print("   Sample:", html_raw_pi[:10])

    # 3. Check for single slash LaTeX keywords
    single_slashes = re.findall(r'(?<!\\)\\([a-zA-Z]+)', content)
    suspicious_slashes = [w for w in single_slashes if w not in ['n', 't', 'r', 'b', 'f']]
    print(f"3. Potential single-slash LaTeX in file: {len(suspicious_slashes)}")
    if suspicious_slashes:
        print("   Keywords:", set(suspicious_slashes[:20]))

    # 4. Check all SVG diagrams present in this lesson
    svg_matches = list(re.finditer(r'<svg[\s\S]*?</svg>', content))
    print(f"4. Total SVG diagrams: {len(svg_matches)}")
