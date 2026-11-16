with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re

keywords = ["sin", "cos", "tan", "cot", "pi", "alpha", "beta", "gamma", "theta", "text", "left", "right", "dfrac", "frac", "sqrt", "circ", "cdot", "pm", "mp", "le", "ge", "neq", "approx", "quad", "qquad"]

for kw in keywords:
    p = rf'(?<!\\)\\{kw}\b'
    repl = rf'\\\\{kw}'
    text = re.sub(p, repl, text)

with open("js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("All single-escaped keywords replaced!")
