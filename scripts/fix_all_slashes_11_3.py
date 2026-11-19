import re

def fix_slashes_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # List of all math commands that might have single backslash
    math_keywords = [
        'dfrac', 'frac', 'sqrt', 'pi', 'alpha', 'beta', 'theta', 'omega',
        'sin', 'cos', 'tan', 'cot', 'le', 'ge', 'ne', 'in', 'mathbb',
        'left', 'right', 'text', 'circ', 'pm', 'times', 'cdot', 'quad',
        'qquad', 'Leftrightarrow', 'Rightarrow', 'setminus', 'middle', 'sum', 'int', 'infty',
        'arcsin', 'arccos', 'arctan', 'arccot'
    ]

    # Pattern: a single backslash NOT preceded by another backslash, followed by keyword
    pat = r'(?<!\\)\\(' + '|'.join(math_keywords) + r')\b'

    # Replace with \\keyword (which means 2 backslashes in disk file)
    def replacer(match):
        return '\\\\' + match.group(1)

    new_content, count = re.subn(pat, replacer, content)
    print(f"[{filepath}] Fixed {count} single-slash occurrences!")

    # Check for any remaining corrupted text like dfracpi6, anx, mathbbR, -1lesinxle1
    corruptions = [
        (r'\bdfracpi6\b', r'\\dfrac{\\pi}{6}'),
        (r'\bdfracpi4\b', r'\\dfrac{\\pi}{4}'),
        (r'\bdfracpi3\b', r'\\dfrac{\\pi}{3}'),
        (r'\bdfracpi2\b', r'\\dfrac{\\pi}{2}'),
        (r'\bdfrac12\b', r'\\dfrac{1}{2}'),
        (r'\bdfracsqrt22\b', r'\\dfrac{\\sqrt{2}}{2}'),
        (r'\bdfracsqrt32\b', r'\\dfrac{\\sqrt{3}}{2}'),
        (r'\bdfracsqrt33\b', r'\\dfrac{\\sqrt{3}}{3}'),
        (r'\bsqrt3\b', r'\\sqrt{3}'),
        (r'\banx\b', r'\\tan x'),
        (r'\bcotx\b', r'\\cot x'),
        (r'\bsinx\b', r'\\sin x'),
        (r'\bcosx\b', r'\\cos x'),
        (r'\bmathbbR\b', r'\\mathbb{R}'),
        (r'\bmathbbZ\b', r'\\mathbb{Z}'),
        (r'-1lesinxle1', r'-1 \\le \\sin x \\le 1'),
        (r'-1lecosxle1', r'-1 \\le \\cos x \\le 1'),
        (r'xinmathbbR', r'x \\in \\mathbb{R}'),
        (r'kinmathbbZ', r'k \\in \\mathbb{Z}'),
        (r'left\(', r'\\left('),
        (r'ight\)', r'\\right)'),
        (r'k2pi', r'k2\\pi'),
    ]

    for bad, good in corruptions:
        new_content, c_count = re.subn(bad, good, new_content)
        if c_count > 0:
            print(f"[{filepath}] Replaced corrupted '{bad}' -> {c_count} times")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"[{filepath}] File saved successfully!\n")

fix_slashes_in_file('js/lesson-11-3-data.js')
fix_slashes_in_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
