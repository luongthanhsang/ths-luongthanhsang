import re

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

math_keywords = [
    'dfrac', 'frac', 'sqrt', 'pi', 'alpha', 'beta', 'theta', 'omega',
    'sin', 'cos', 'tan', 'cot', 'le', 'ge', 'ne', 'in', 'mathbb',
    'left', 'right', 'text', 'circ', 'pm', 'times', 'cdot', 'quad',
    'qquad', 'Leftrightarrow', 'Rightarrow', 'setminus', 'middle', 'sum', 'int', 'infty',
    'arcsin', 'arccos', 'arctan', 'arccot'
]

pattern = r'(?<!\\)\\(' + '|'.join(math_keywords) + r')\b'
single_slashes = list(re.finditer(pattern, text))
print('Found single slash LaTeX commands count in B11-4:', len(single_slashes))

for i, m in enumerate(single_slashes[:20]):
    start = max(0, m.start() - 25)
    end = min(len(text), m.end() + 25)
    print(f'#{i+1}: {m.group(0)} in context: {repr(text[start:end])}')
