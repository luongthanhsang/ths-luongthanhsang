import re, os

LESSON_FILES = [
    'js/lesson-11-1-data.js',
    'js/lesson-11-2-data.js',
    'js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js'
]

COMMON_LATEX_COMMANDS = [
    'dfrac', 'frac', 'sqrt', 'sin', 'cos', 'tan', 'cot', 'pi', 'alpha', 'beta',
    'gamma', 'theta', 'mathbb', 'approx', 'times', 'cdot', 'le', 'ge', 'neq',
    'left', 'right', 'quad', 'qquad', 'in', 'infty', 'vec', 'text', 'cases'
]

def audit_file(filepath):
    print(f"\n=======================================================")
    print(f"AUDITING: {filepath}")
    print(f"=======================================================")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Check unmatched \left and \right
    # Find all math expressions $...$
    math_blocks = re.findall(r'\$(.*?)\$', content, re.DOTALL)
    print(f"Total math blocks ($...$): {len(math_blocks)}")
    
    unmatched_brackets = []
    broken_commands = []
    
    for idx, mb in enumerate(math_blocks):
        # Count \left and \right
        # In the string in JS:
        # Check if \left has matching \right
        n_left = len(re.findall(r'\\left\b', mb))
        n_right = len(re.findall(r'\\right\b', mb))
        if n_left != n_right:
            unmatched_brackets.append((idx, n_left, n_right, mb[:100]))
            
        # Check for broken LaTeX commands missing backslash, e.g. dfrac, sqrt, etc.
        # But only if preceded by non-backslash and non-ascii letter
        # e.g. "(dfrac", " dfrac", "+dfrac", "=dfrac", "dfrac"
        for cmd in ['dfrac', 'sqrt', 'alpha', 'mathbb']:
            # look for cmd preceded by space, (, +, -, =, {, or start of string, but NOT backslash
            for m in re.finditer(r'(?<![\\a-zA-Z])' + cmd + r'(?![a-zA-Z])', mb):
                broken_commands.append((cmd, mb[:100]))
                
        # Check for merged commands like dfracpi, anx, etc.
        for m in re.finditer(r'(?:dfracpi|anx|dfracsqrt|kinmathbb|lesin|lecos)', mb):
            broken_commands.append((m.group(0), mb[:100]))

    print(f"Unmatched \\left / \\right: {len(unmatched_brackets)}")
    for ub in unmatched_brackets[:10]:
        print(f"  Unmatched: Left={ub[1]}, Right={ub[2]}: {ub[3]}")

    print(f"Broken commands (missing backslash or merged): {len(broken_commands)}")
    for bc in broken_commands[:10]:
        print(f"  Broken: {bc[0]} in {bc[1]}")

    # 2. Check for raw 'pi' in text/titles
    # e.g., "Hơn kém pi", "pi/2", "chu kì 2pi", "k2pi" (outside math)
    raw_pi_matches = []
    # Find occurrences of word "pi" outside of $...$, SVG path coordinates, scripts, variable names
    # Simple search in content for obvious ones
    for m in re.finditer(r'(Hơn kém|hơn kém|chu kỳ|chu kì|bằng|đoạn|khoảng|góc|cung|bán kính)\s+([0-9]*\s*pi\b|pi\b)', content, re.IGNORECASE):
        raw_pi_matches.append(m.group(0))
    for m in re.finditer(r'\b(?:k2pi|2pi|pi/2|pi/3|pi/4|pi/6)\b', content):
        # check if inside $
        start = m.start()
        # count $ before
        dollar_count = content[:start].count('$')
        if dollar_count % 2 == 0: # OUTSIDE math!
            raw_pi_matches.append(m.group(0))

    print(f"Raw 'pi' occurrences outside math: {len(raw_pi_matches)}")
    for rp in raw_pi_matches[:15]:
        print(f"  Raw pi: {rp}")

    # 3. Check SVG tags for raw 'pi' or '\pi'
    svg_blocks = re.findall(r'<svg[^>]*>.*?</svg>', content, re.DOTALL)
    print(f"Total SVGs: {len(svg_blocks)}")
    svg_pi_issues = []
    for s_idx, svg in enumerate(svg_blocks):
        # find text tags in SVG
        text_tags = re.findall(r'<text[^>]*>(.*?)</text>', svg, re.DOTALL)
        for tt in text_tags:
            if 'pi' in tt.lower() and 'π' not in tt:
                svg_pi_issues.append((s_idx, tt))
            if '\\pi' in tt:
                svg_pi_issues.append((s_idx, tt))

    print(f"SVG <text> tags with raw pi / \\pi: {len(svg_pi_issues)}")
    for spi in svg_pi_issues[:15]:
        print(f"  SVG {spi[0]}: {spi[1]}")

for f in LESSON_FILES:
    audit_file(f)
