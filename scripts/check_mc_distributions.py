import glob
import re
import os

lesson_files = sorted(glob.glob('js/lesson-*-data.js'))
print(f"Checking Part 1 answer distributions across {len(lesson_files)} lessons:\n")

for filepath in lesson_files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract part1MultipleChoice section
    p1_idx = content.find('part1MultipleChoice')
    p2_idx = content.find('part2TrueFalse')
    if p1_idx == -1 or p2_idx == -1:
        print(f"[{fname}] Not found part1 or part2")
        continue
    
    p1_text = content[p1_idx:p2_idx]
    
    # Split items
    items = re.split(r'\{\s*id\s*:', p1_text)[1:]
    answers = []
    for it in items:
        c_idx = re.search(r'correctIndex\s*:\s*(\d+)', it)
        c_ans = re.search(r'correctAnswer\s*:\s*["\']([A-D])["\']', it)
        
        idx_str = None
        ans_str = None
        if c_idx:
            idx_str = chr(65 + int(c_idx.group(1)))
        if c_ans:
            ans_str = c_ans.group(1)
            
        if idx_str and ans_str:
            if idx_str == ans_str:
                answers.append(f"{ans_str}(OK)")
            else:
                answers.append(f"{idx_str}!={ans_str}")
        elif idx_str:
            answers.append(f"{idx_str}(onlyIdx)")
        elif ans_str:
            answers.append(f"{ans_str}(onlyAns)")
        else:
            answers.append("?")
            
    print(f"[{fname}] Answers: {', '.join(answers)}")
