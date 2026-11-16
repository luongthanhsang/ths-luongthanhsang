# -*- coding: utf-8 -*-
with open("scripts/build_lesson_11_1_full.py", "r", encoding="utf-8") as f:
    text = f.read()

# Đối với MC: thêm prompt: "..." bằng giá trị của question
import re

def repl_mc(match):
    full = match.group(0)
    q_match = re.search(r'question:\s*(".*?")', full)
    if q_match and 'prompt:' not in full:
        q_val = q_match.group(1)
        full = full.replace(f'question: {q_val}', f'question: {q_val},\n        prompt: {q_val}')
    return full

text = re.sub(r'\{\s*id:\s*"mc-11-1-\d+".*?explain:.*?\n\s*\}', repl_mc, text, flags=re.DOTALL)

# Đối với SA: thêm prompt: "..." bằng giá trị của question, và solution: bằng explain
def repl_sa(match):
    full = match.group(0)
    q_match = re.search(r'question:\s*(".*?")', full)
    if q_match and 'prompt:' not in full:
        q_val = q_match.group(1)
        full = full.replace(f'question: {q_val}', f'question: {q_val},\n        prompt: {q_val}')
    exp_match = re.search(r'explain:\s*(".*?")', full)
    if exp_match and 'solution:' not in full:
        exp_val = exp_match.group(1)
        full = full.replace(f'explain: {exp_val}', f'explain: {exp_val},\n        solution: {exp_val}')
    return full

text = re.sub(r'\{\s*id:\s*"sa-11-1-\d+".*?explain:.*?\n\s*\}', repl_sa, text, flags=re.DOTALL)

with open("scripts/build_lesson_11_1_full.py", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated prompt & solution in build_lesson_11_1_full.py!")
