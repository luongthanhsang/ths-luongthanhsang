with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re

keywords = ["sin", "cos", "tan", "cot", "pi", "alpha", "beta", "gamma", "theta", "text", "left", "right", "dfrac", "frac", "sqrt", "circ", "cdot", "pm", "mp", "le", "ge", "neq", "approx", "quad", "qquad"]

found_single = []
for kw in keywords:
    p = rf'(?<!\\)\\{kw}\b'
    m = list(re.finditer(p, text))
    if m:
        found_single.append((kw, len(m)))

if found_single:
    print("Found single-escaped keywords:", found_single)
else:
    print("PERFECT: Zero single-escaped LaTeX keywords found in js/lesson-11-2-data.js!")
