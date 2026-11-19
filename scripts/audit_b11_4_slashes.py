import re

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print('File size:', len(text), 'chars')

# Check for single backslashes in math formulas like $\sin, $\cos, $\tan, $\cot, $\dfrac, etc.
single_slash_patterns = [
    r'(?<!\\)\\(dfrac|frac|sqrt|pi|alpha|beta|sin|cos|tan|cot|le|ge|ne|in|mathbb|left|right|text|circ|pm|times|cdot|quad)\b'
]

count = 0
for pat in single_slash_patterns:
    for m in re.finditer(pat, text):
        count += 1
        start = max(0, m.start() - 30)
        end = min(len(text), m.end() + 30)
        if count <= 15:
            print(f'Single slash found #{count}:', repr(text[start:end]))

print('Total single slashes in math commands in B11-4:', count)
