# -*- coding: utf-8 -*-
import re

for lesson, domfile in [("Bài 3", "debug_dom_b3.html"), ("Bài 4", "debug_dom_b4.html")]:
    print(f"\n=== AUDITING {lesson} ({domfile}) ===")
    with open(domfile, encoding='utf-8') as f:
        text = f.read()

    svgs = re.findall(r'<svg[^>]*>[\s\S]*?</svg>', text)
    print(f"Total SVGs: {len(svgs)}")
    for i, s in enumerate(svgs):
        viewbox = re.search(r'viewBox="([^"]+)"', s)
        vb = viewbox.group(1) if viewbox else "no viewBox"
        print(f"  SVG {i+1}: viewBox={vb}, length={len(s)} bytes")

    mc = re.findall(r'class="exam-item-card"[^>]*id="item-mc-[^"]+"', text)
    tf = re.findall(r'class="exam-item-card"[^>]*id="item-tf-[^"]+"', text)
    sa = re.findall(r'class="exam-item-card"[^>]*id="item-sa-[^"]+"', text)
    print(f"Part 1 (MC cards): {len(mc)}")
    print(f"Part 2 (TF cards): {len(tf)}")
    print(f"Part 3 (SA cards): {len(sa)}")

    # Check statements in Part 2
    tf_rows = re.findall(r'class="tf-subitem-row"', text)
    print(f"  Total TF statement rows: {len(tf_rows)}")

    # Check for any Math errors
    math_errors = re.findall(r'data-mjx-error="([^"]+)"', text)
    print(f"MathJax Errors: {len(math_errors)} -> {math_errors}")
