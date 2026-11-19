# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find any backslash sequences: \+ followed by letters
matches = re.finditer(r'(\\+)([a-zA-Z]+)', text)
counts = {}
for m in matches:
    slashes, word = m.group(1), m.group(2)
    key = (len(slashes), word)
    counts[key] = counts.get(key, 0) + 1

# Filter for math keywords or unusual slash lengths
math_words = {
    'dfrac', 'frac', 'sqrt', 'pi', 'sin', 'cos', 'tan', 'cot', 'le', 'ge', 'ne', 'in',
    'mathbb', 'left', 'right', 'text', 'circ', 'pm', 'times', 'cdot', 'quad', 'qquad',
    'Leftrightarrow', 'Rightarrow', 'setminus', 'middle', 'sum', 'int', 'infty',
    'arcsin', 'arccos', 'arctan', 'arccot', 'alpha', 'beta', 'theta', 'omega', 'mid'
}

print("Slash count breakdown for math keywords:")
for (num_slashes, word), count in sorted(counts.items()):
    if word in math_words:
        print(f"  {num_slashes} slashes for '\\{word}': {count} occurrences")
    elif num_slashes not in [1, 2] or (num_slashes == 1 and word not in ['n', 't', 'r', 'b', 'f', 'v']):
        print(f"  [UNUSUAL] {num_slashes} slashes for '\\{word}': {count} occurrences")
