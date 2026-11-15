import re

with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Check all exams in quiz-data.js
macros = ['dfrac', 'frac', 'sqrt', 'vec', 'left', 'right', 'begin', 'end', 'ne', 'le', 'ge', 'times', 'cdot', 'infty', 'alpha', 'beta', 'pi', 'sin', 'cos', 'tan', 'cot', 'lim', 'int', 'mathbb', 'mathrm', 'subset', 'supset', 'cup', 'cap', 'varnothing']

bad_macros = []
# Find sections enclosed in backticks `...`
backtick_sections = list(re.finditer(r'`([\s\S]*?)`', text))
print(f"Total template literal blocks: {len(backtick_sections)}")

for sec in backtick_sections:
    content = sec.group(1)
    for m in macros:
        pattern = r'(?<!\\)\\' + m + r'\b'
        for hit in re.finditer(pattern, content):
            snippet = content[max(0, hit.start()-20):min(len(content), hit.end()+30)]
            bad_macros.append((m, snippet.replace('\n', ' ')))

print(f"Total single-backslash macros in template literals across all quiz-data: {len(bad_macros)}")
for b in bad_macros[:20]:
    print(f"[{b[0]}] -> {b[1]}")
