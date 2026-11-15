with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
latex_cmds = [
    'ne', 'quad', 'text', 'in', 'mathbb', 'iff', 'times', 'cdot', 'dots',
    'implies', 'mathbf', 'le', 'ge', 'begin', 'end', 'frac', 'dfrac', 'sqrt',
    'left', 'right', 'widehat', 'circ', 'cases', 'array', 'to', 'vec',
    'displaystyle', 'limits', 'subset', 'cap', 'cup', 'alpha', 'beta',
    'gamma', 'Delta', 'pi', 'forall', 'exists', 'setminus', 'varnothing',
    'ln', 'log', 'sin', 'cos', 'tan', 'cot', 'int', 'iint', 'iiint', 'oint'
]

pattern = re.compile(r'(?<!\\)\\(' + '|'.join(latex_cmds) + r')\b')
matches = [(m.start(), m.group(0), m.group(1)) for m in pattern.finditer(text)]

print(f"Total single-backslash matches in quiz-data.js: {len(matches)}")
for idx, full, cmd in matches[:20]:
    line_no = text.count('\n', 0, idx) + 1
    print(f"Line {line_no}: {cmd} -> {repr(text[max(0, idx-20):idx+40])}")
