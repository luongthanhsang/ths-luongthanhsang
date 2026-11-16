with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re

# Look for \tan, \text, \tau, \theta, \times, \top where it starts with a single backslash
# In raw string or JS string: if preceded by an even number of backslashes (or not a backslash)
# Examples of danger in JS string: \t (tab), \r (CR), \n (LF), \b (backspace), \f (formfeed), \v (vtab)

patterns = [
    (r'(?<!\\)\\tan\b', r'\\\\tan'),
    (r'(?<!\\)\\theta\b', r'\\\\theta'),
    (r'(?<!\\)\\text\b', r'\\\\text'),
    (r'(?<!\\)\\times\b', r'\\\\times'),
    (r'(?<!\\)\\right\b', r'\\\\right'),
    (r'(?<!\\)\\rad\b', r'\\\\rad'),
    (r'(?<!\\)\\rho\b', r'\\\\rho'),
    (r'(?<!\\)\\beta\b', r'\\\\beta'),
    (r'(?<!\\)\\bar\b', r'\\\\bar'),
    (r'(?<!\\)\\varphi\b', r'\\\\varphi'),
    (r'(?<!\\)\\frac\b', r'\\\\frac'),
]

for p, repl in patterns:
    matches = list(re.finditer(p, text))
    if matches:
        print(f"Pattern {p} found {len(matches)} occurrences!")
        for m in matches[:3]:
            start = max(0, m.start() - 20)
            end = min(len(text), m.end() + 20)
            print("  Context:", repr(text[start:end]))
        text = re.sub(p, repl, text)

with open("js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Scan & escape completed!")
