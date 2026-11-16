# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# 1. Check Multiple Choice questions in Part 1 (Dạng 1)
print("=== AUDIT PART 1: MULTIPLE CHOICE QUESTIONS ===")
mc_blocks = re.findall(r'\{\s*id:\s*"mc-11-2-\d+".*?explain:\s*".*?"\s*\}', text, re.DOTALL)
print(f"Total MC questions: {len(mc_blocks)}")

mc_answers = []
for i, block in enumerate(mc_blocks):
    qid_m = re.search(r'id:\s*"([^"]+)"', block)
    ca_m = re.search(r'correctAnswer:\s*([0-3])', block)
    qid = qid_m.group(1) if qid_m else f"Q{i+1}"
    ans_idx = int(ca_m.group(1)) if ca_m else -1
    ans_letter = ['A', 'B', 'C', 'D'][ans_idx] if 0 <= ans_idx < 4 else 'UNKNOWN'
    mc_answers.append(ans_letter)
    print(f"  {qid}: Answer = {ans_letter} ({ans_idx})")

print(f"Answers distribution: {mc_answers}")
from collections import Counter
print(f"Count of answers: {Counter(mc_answers)}")

# 2. Check LaTeX delimiters and unmatched \left / \right
print("\n=== AUDIT LATEX: \\left vs \\right ===")
# Find all LaTeX formulas between $...$ or $$...$$
math_formulas = re.findall(r'\$([^\$]+)\$', text)
print(f"Total inline math formulas: {len(math_formulas)}")

unmatched_left_right = []
for idx, f_code in enumerate(math_formulas):
    left_count = len(re.findall(r'\\left(?![a-zA-Z])', f_code))
    right_count = len(re.findall(r'\\right(?![a-zA-Z])', f_code))
    if left_count != right_count:
        unmatched_left_right.append((idx, left_count, right_count, f_code))

print(f"Unmatched \\left / \\right count: {len(unmatched_left_right)}")
for u in unmatched_left_right:
    print(f"  Formula {u[0]}: left={u[1]}, right={u[2]} | Code: {u[3][:80]}")

# 3. Check for raw \t or \r that might have become whitespace
print("\n=== AUDIT ESCAPED SLASHES ===")
# Look for single backslash commands that might be eaten by JS string escaping
raw_issues = []
for line_idx, line in enumerate(text.splitlines()):
    # if line contains "\text" without double slash "\\text" or "\tan" or "\frac"
    pass

print("Audit script completed.")
