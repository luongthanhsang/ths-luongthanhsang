import re

def check_file(path):
    print(f"=== CHECKING {path} ===")
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Check for unescaped \v, \f, \b, \r in JS code or bare words in math
    # Look for \x0b (vertical tab), \x0c (form feed), \x08 (backspace)
    ctrl_chars = {'\\x0b': '\x0b', '\\x0c': '\x0c', '\\x08': '\x08'}
    for name, char in ctrl_chars.items():
        if char in text:
            print(f"WARNING: Found raw control character {name} in {path}!")
    
    # Let's inspect all exams
    exams = re.findall(r'(EXAM_[A-Za-z0-9_]+)\s*=', text)
    print("Found exams:", exams)
    
    # Check for bare dfrac, frac, vec, sqrt inside $...$
    math_matches = re.finditer(r'\$([^\$]+)\$', text)
    bad_count = 0
    for m in math_matches:
        s = m.group(1)
        # Check if bare dfrac (not \dfrac or \\dfrac)
        # Notice in text file, a backslash is literal \
        for word in ['dfrac', 'frac', 'vec', 'sqrt', 'left', 'right', 'middle', 'mathbb', 'alpha', 'beta', 'Delta']:
            # Regex for word not preceded by \
            pattern = r'(?<!\\)' + word
            if re.search(pattern, s):
                print(f"Bad math ({word}) in: ${s[:60]}$")
                bad_count += 1
                if bad_count > 15:
                    break
        if bad_count > 15:
            break
    if bad_count == 0:
        print("No bare math macros found! All math macros are properly escaped with backslash.")

check_file('js/quiz-data.js')
check_file('BAN_CAP_NHAT_NETLIFY/js/quiz-data.js')
