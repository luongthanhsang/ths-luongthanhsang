# -*- coding: utf-8 -*-
import re

lessons = [
    ('11-1', 'js/lesson-11-1-data.js'),
    ('11-2', 'js/lesson-11-2-data.js'),
    ('11-3', 'js/lesson-11-3-data.js'),
    ('11-4', 'js/lesson-11-4-data.js')
]

for lid, fpath in lessons:
    print("\n" + "=" * 60)
    print(f"LESSON {lid}: {fpath}")
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find all svg tags
    for m in re.finditer(r'<svg[\s\S]*?</svg>', text):
        svg_content = m.group(0)
        start_pos = m.start()
        # Find preceding text
        pre_text = text[max(0, start_pos - 150):start_pos].replace('\n', ' ')
        # Find text inside svg
        texts_in_svg = re.findall(r'<text[^>]*>(.*?)</text>', svg_content)
        # Check pi in texts
        pi_texts = [t for t in texts_in_svg if 'pi' in t.lower() or 'π' in t]
        
        print(f"  * SVG at pos {start_pos}:")
        print(f"    Context: ...{pre_text[-80:]}")
        print(f"    Width/Height/ViewBox: {svg_content[:svg_content.find('>')+1]}")
        if pi_texts:
            print(f"    Texts with pi/π: {pi_texts}")
