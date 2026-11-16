import re

with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Let's see how exams are defined in quiz-data.js
# Typically window.QUIZ_DATA or EXAMS_DATA
print("Size of quiz-data.js:", len(c))

# Find exams
exam_matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', c)
print(f"Found {len(exam_matches)} exams:")
for eid, title in exam_matches:
    print(f"  - {eid}: {title}")

# Check Part 1 questions in quiz-data.js
q_blocks = re.findall(r'\{\s*id\s*:\s*["\']([a-zA-Z0-9_\-]+)["\'][\s\S]*?correctAnswer\s*:\s*["\']([A-D0-9\.\,\-]+)["\'][\s\S]*?solution\s*:\s*["\']([\s\S]*?)["\']\s*\}', c)
print(f"\nExtracted {len(q_blocks)} questions with correctAnswer and solution.")
mismatches = 0
for qid, ans, sol in q_blocks:
    # Check if sol mentions "Chọn A" or "Đáp án A" etc.
    sol_ans = re.search(r'(?:Chọn|đáp án đúng là|đáp án là|chọn đáp án)\s*([A-D])', sol, re.IGNORECASE)
    if sol_ans:
        sol_letter = sol_ans.group(1).upper()
        if sol_letter != ans:
            mismatches += 1
            print(f"  [MISMATCH in quiz-data.js] {qid}: correctAnswer={ans} but solution says {sol_letter}")

print(f"Total quiz-data.js mismatches: {mismatches}")
