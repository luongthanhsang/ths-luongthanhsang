import re

def mathToVietnameseSpeech(text):
    if not text:
        return ""
    s = text
    s = re.sub(r'<[^>]+>', ' ', s)

    # 1. Oxy & Oxyz
    s = re.sub(r'\bOxyz\b', ' O x y z ', s)
    s = re.sub(r'\bOxy\b', ' O x y ', s)
    s = re.sub(r'\(Oxyz\)', ' O x y z ', s)
    s = re.sub(r'\(Oxy\)', ' O x y ', s)

    # 2. Cotang
    s = re.sub(r'\\cot\s*\(?\\alpha\)?', ' cô tăng góc an pha ', s, flags=re.IGNORECASE)
    s = re.sub(r'cot\s*\(?\\alpha\)?', ' cô tăng góc an pha ', s, flags=re.IGNORECASE)
    s = re.sub(r'cot\s*\(\s*an\s*pha\s*\)', ' cô tăng góc an pha ', s, flags=re.IGNORECASE)
    s = re.sub(r'\\cot', ' cô tăng ', s)
    s = re.sub(r'\bcot\b', ' cô tăng ', s)

    # 3. Vector
    s = re.sub(r'\\vec\{0\}', ' véc tơ không ', s)
    s = re.sub(r'\\overrightarrow\{0\}', ' véc tơ không ', s)
    s = re.sub(r'\\vec\{([A-Z])([A-Z])\}', r' véc tơ \1 \2 ', s)
    s = re.sub(r'\\overrightarrow\{([A-Z])([A-Z])\}', r' véc tơ \1 \2 ', s)
    s = re.sub(r'\\vec\{([A-Za-z0-9_]+)\}', r' véc tơ \1 ', s)
    s = re.sub(r'\\overrightarrow\{([A-Za-z0-9_]+)\}', r' véc tơ \1 ', s)

    s = re.sub(r'\s+', ' ', s).strip()
    return s

test_cases = [
    (r"\cot\alpha", "cô tăng góc an pha"),
    (r"cot(\alpha)", "cô tăng góc an pha"),
    (r"cot(anpha)", "cô tăng góc an pha"),
    (r"\vec{AB}", "véc tơ A B"),
    (r"\overrightarrow{MN}", "véc tơ M N"),
    (r"\vec{a}", "véc tơ a"),
    (r"Trong mặt phẳng Oxy", "Trong mặt phẳng O x y"),
    (r"Trong không gian Oxyz", "Trong không gian O x y z"),
]

for inp, expected in test_cases:
    out = mathToVietnameseSpeech(inp)
    match = out == expected
    print(f"[{'PASS' if match else 'FAIL'}] '{inp}' -> '{out}' (Expected: '{expected}')")
