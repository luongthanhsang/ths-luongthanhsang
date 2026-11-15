import re

with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_exam = text.find('id: "12_BGD_0110"')
end_exam = text.find('window.EXAMS_DATABASE', idx_exam)
exam_str = text[idx_exam:end_exam]

# Check for any backslash issues
# In JS source code:
# If someone wrote \vec instead of \\vec in a template literal:
# In the raw text file, \v would be 1 backslash followed by v.
# If they wrote \\vec, in raw text it would be 2 backslashes: \\vec.
raw_single_backslash_v = re.findall(r'(?<!\\)\\[vfrtbn0]', exam_str)
print(f"Raw single backslash escape seqs in 0110: {raw_single_backslash_v}")

# Check all macros in 0110:
# Find all occurrences of LaTeX macros in exam_str:
# like dfrac, frac, sqrt, vec, left, right, begin, end, in, ne, le, ge, times, cdot, infty, forall, exists, cup, cap, subset, supset
macros = ['dfrac', 'frac', 'sqrt', 'vec', 'left', 'right', 'middle', 'begin', 'end', 'ne', 'le', 'ge', 'times', 'cdot', 'infty', 'alpha', 'beta', 'pi', 'sin', 'cos', 'tan', 'cot', 'lim', 'int', 'mathbb', 'mathrm', 'subset', 'supset', 'cup', 'cap', 'varnothing', 'iff', 'implies', 'Rightarrow', 'Leftrightarrow']

bad_macros = []
for macro in macros:
    # Look for macro not preceded by \\
    # In raw text, a single backslash is \macro. Double backslash is \\macro.
    # Inside JS template literals, a single backslash \macro loses its backslash unless doubled!
    pattern = r'(?<!\\)\\' + macro + r'\b'
    for hit in re.finditer(pattern, exam_str):
        # find line number
        line_no = exam_str[:hit.start()].count('\n') + 1
        snippet = exam_str[max(0, hit.start()-30):min(len(exam_str), hit.end()+40)]
        bad_macros.append((macro, line_no, snippet.replace('\n', ' ')))

print(f"Total single-backslash macros that should be double in 0110: {len(bad_macros)}")
for b in bad_macros[:20]:
    print(f"Line ~{b[1]}: [{b[0]}] -> {b[2]}")
