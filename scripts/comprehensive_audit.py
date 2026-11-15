import re, glob, os

latex_cmds = [
    'ne', 'quad', 'text', 'in', 'mathbb', 'iff', 'times', 'cdot', 'dots',
    'implies', 'mathbf', 'le', 'ge', 'begin', 'end', 'frac', 'dfrac', 'sqrt',
    'left', 'right', 'widehat', 'circ', 'cases', 'array', 'to', 'vec',
    'displaystyle', 'limits', 'subset', 'cap', 'cup', 'alpha', 'beta',
    'gamma', 'Delta', 'pi', 'forall', 'exists', 'setminus', 'varnothing'
]

pattern = re.compile(r'(?<!\\)\\(' + '|'.join(latex_cmds) + r')\b')

js_files = [
    'js/lesson-10-3-data.js',
    'js/lesson-10-4-data.js',
    'js/lesson-11-12-data.js',
    'js/quiz-data.js',
    'js/script.js'
]

for path in js_files:
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = pattern.findall(content)
    print(f"[{path}] Found {len(matches)} single-backslash LaTeX commands.")
    if matches:
        print(f"  Samples: {set(matches[:10])}")
