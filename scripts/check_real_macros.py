import re

def check_file(path):
    print(f"=== CHECKING {path} ===")
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find any word like dfrac, vec, sqrt, etc. that is NOT preceded by \
    # We want words that start with a boundary: \b(dfrac|vec|sqrt|alpha|beta)\b
    bad = []
    # Find all inline math $...$
    math_matches = re.finditer(r'\$([^\$]+)\$', text)
    for m in math_matches:
        s = m.group(1)
        # Find any macro without backslash
        for word in ['dfrac', 'vec', 'sqrt', 'alpha', 'beta', 'pi', 'sin', 'cos', 'tan', 'cot', 'lim', 'int']:
            # look for word not preceded by \
            pattern = r'(?<!\\)\b' + word + r'\b'
            for hit in re.finditer(pattern, s):
                bad.append((word, s))
    print(f"Total bad math macro occurrences: {len(bad)}")
    for b in bad[:20]:
        print(" ", b[0], "-->", repr(b[1]))

check_file('js/quiz-data.js')
