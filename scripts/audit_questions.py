import glob
import re
import os

lesson_files = sorted(glob.glob('js/lesson-*-data.js'))
print(f"Total lesson data files: {len(lesson_files)}")

for f in lesson_files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Check checkpoints
    checkpoint_matches = re.findall(r'checkpoints\s*:\s*\[([\s\S]*?)\]\s*(?:,\s*\n|\n\s*})', content)
    cp_count = len(checkpoint_matches)
    
    # Check part1MultipleChoice
    mc_section = re.search(r'part1MultipleChoice\s*:\s*\[([\s\S]*?)\]\s*,\s*\n\s*part2', content)
    mc_count = 0
    missing_index = 0
    missing_answer = 0
    mismatch = 0
    
    if mc_section:
        mc_text = mc_section.group(1)
        # Split items approximately by { id:
        items = re.findall(r'\{\s*id\s*:\s*["\']([^"\']+)["\']([\s\S]*?)\}(?=\s*,\s*\{|\s*$)', mc_text)
        mc_count = len(items)
        for qid, body in items:
            c_idx = re.search(r'correctIndex\s*:\s*(\d+)', body)
            c_ans = re.search(r'correctAnswer\s*:\s*["\']([A-D])["\']', body)
            
            idx_val = int(c_idx.group(1)) if c_idx else None
            ans_val = c_ans.group(1) if c_ans else None
            
            if idx_val is None:
                missing_index += 1
            if ans_val is None:
                missing_answer += 1
            if idx_val is not None and ans_val is not None:
                expected_ans = chr(65 + idx_val)
                if expected_ans != ans_val:
                    mismatch += 1
                    print(f"  [MISMATCH] {f} -> {qid}: correctIndex={idx_val} ({expected_ans}) vs correctAnswer={ans_val}")
    
    print(f"{os.path.basename(f)}: MC={mc_count} (missingIdx={missing_index}, missingAns={missing_answer}, mismatch={mismatch}), Checkpoints blocks={cp_count}")
