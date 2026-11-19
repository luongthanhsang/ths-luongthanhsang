# -*- coding: utf-8 -*-
"""
Kiểm tra cấu trúc và cú pháp của js/lesson-11-5-data.js
"""
import re

with open('js/lesson-11-5-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()

# 1. Kiểm tra dấu phẩy trước explain
errors = []
for i, line in enumerate(lines):
    if re.search(r'^\s*\"explain\":|^\s*explain:', line):
        prev = lines[i-1].rstrip()
        if not prev.endswith(',') and not prev.endswith('{') and not prev.endswith('['):
            errors.append(f"Missing comma at line {i}: {prev}")

if errors:
    print("Found missing commas:", errors)
else:
    print("CHECK 1: Comma before explain: 100% OK!")

# 2. Kiểm tra các từ khoá LaTeX bị mất backslash
bad_patterns = [
    r'(\s|[-0-9])lesinxle',
    r'xinmathbbR',
    r'dfracpi[0-9]',
    r'kinmathbbZ',
    r'anx\b',
    r'\bmathbbR\b',
    r'\bmathbbN\b',
    r'\bdfrac\b',
]
latex_issues = []
for i, line in enumerate(lines):
    for p in bad_patterns:
        if re.search(p, line):
            latex_issues.append(f"Line {i+1}: {line.strip()[:80]}")

if latex_issues:
    print("Found broken LaTeX:", latex_issues)
else:
    print("CHECK 2: LaTeX backslash integrity: 100% CLEAN & SAFE!")

# 3. Kiểm tra số lượng mục con & POIs
print("\n--- CẤU TRÚC SƯ PHẠM THẦY SÁNG 5 SAO ---")
# Count sections
sec_count = len(re.findall(r'\"id\":\s*\"11-c2-b5-s[0-9]\"', text))
subsec_count = len(re.findall(r'\"key\":\s*\"[a-z]\"', text))
poi_count = len(re.findall(r'\"time\":\s*0\.[0-9]+', text))
worked_count = len(re.findall(r'\"workedExample\":', text))
practice_count = len(re.findall(r'\"practiceProblem\":', text))
quiz_mcq = len(re.findall(r'\"type\":\s*\"multiple_choice\"', text))
quiz_tf = len(re.findall(r'\"type\":\s*\"true_false\"', text))
quiz_sa = len(re.findall(r'\"type\":\s*\"short_answer\"', text))

print(f"Mục lớn: {sec_count}")
print(f"Mục con: {subsec_count}")
print(f"POIs tương tác: {poi_count}")
print(f"Ví dụ mẫu (workedExample): {worked_count}")
print(f"Luyện tập tương tự (practiceProblem): {practice_count}")
print(f"Quiz - Dạng 1 (MCQ 4 lựa chọn): {quiz_mcq} câu")
print(f"Quiz - Dạng 2 (Đúng / Sai 4 ý): {quiz_tf} câu")
print(f"Quiz - Dạng 3 (Trả lời ngắn): {quiz_sa} câu")
