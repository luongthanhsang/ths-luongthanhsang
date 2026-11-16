import re

with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_q = None
questions = []

for line in lines:
    line_s = line.strip()
    id_m = re.search(r'id:\s*["\']([^"\']+)["\']', line_s)
    if id_m and ('q' in id_m.group(1) or 'mc' in id_m.group(1) or 'c' in id_m.group(1)):
        if current_q:
            questions.append(current_q)
        current_q = {'id': id_m.group(1), 'lines': []}
    if current_q:
        current_q['lines'].append(line_s)

if current_q:
    questions.append(current_q)

print(f"Parsed {len(questions)} questions in quiz-data.js")

mismatches = 0
for q in questions:
    body = " ".join(q['lines'])
    ans_m = re.search(r'correctAnswer:\s*["\']([A-D])["\']', body)
    sol_m = re.search(r'solution:\s*["\'](.*?)["\']', body)
    if ans_m and sol_m:
        ans = ans_m.group(1)
        sol = sol_m.group(1)
        ch_m = re.search(r'(?:Chọn|đáp án đúng là|đáp án là|chọn đáp án)\s*([A-D])\b', sol, re.IGNORECASE)
        if ch_m:
            sol_choice = ch_m.group(1).upper()
            if sol_choice != ans:
                mismatches += 1
                print(f"Mismatch in {q['id']}: correctAnswer={ans} vs solution={sol_choice}")

print(f"Total mismatches: {mismatches}")
