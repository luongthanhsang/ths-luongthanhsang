import glob
import re
import os
import json

lesson_files = sorted(glob.glob('js/lesson-*-data.js'))
print(f"Auditing {len(lesson_files)} lesson files...\n")

total_mc = 0
total_tf = 0
total_sa = 0
total_cp = 0

issues = []

for filepath in lesson_files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Audit checkpoints
    # Find all { id: "poi...", ... }
    cp_matches = re.finditer(r'\{\s*id\s*:\s*["\'](poi-[^"\']+)["\']([\s\S]*?)\}(?=\s*,\s*\{|\s*\])', content)
    for m in cp_matches:
        total_cp += 1
        poi_id = m.group(1)
        poi_body = m.group(2)
        
        c_idx = re.search(r'correctIndex\s*:\s*(\d+)', poi_body)
        c_ans = re.search(r'correctAnswer\s*:\s*["\']([A-D])["\']', poi_body)
        
        idx_val = int(c_idx.group(1)) if c_idx else None
        ans_val = c_ans.group(1) if c_ans else None
        
        if idx_val is None and ans_val is None:
            issues.append(f"[{fname}] Checkpoint {poi_id} missing BOTH correctIndex and correctAnswer!")
        elif idx_val is not None and ans_val is not None:
            expected_letter = chr(65 + idx_val)
            if expected_letter != ans_val:
                issues.append(f"[{fname}] Checkpoint {poi_id} MISMATCH: correctIndex={idx_val} ({expected_letter}) vs correctAnswer={ans_val}")
        elif idx_val is None and ans_val is not None:
            issues.append(f"[{fname}] Checkpoint {poi_id} has correctAnswer={ans_val} but missing correctIndex")
        elif idx_val is not None and ans_val is None:
            issues.append(f"[{fname}] Checkpoint {poi_id} has correctIndex={idx_val} but missing correctAnswer")

    # 2. Audit part1MultipleChoice
    mc_matches = re.finditer(r'\{\s*id\s*:\s*["\'](mc-[^"\']+)["\']([\s\S]*?)\}(?=\s*,\s*\{|\s*\]\s*,\s*\n\s*part2)', content)
    for m in mc_matches:
        total_mc += 1
        mc_id = m.group(1)
        mc_body = m.group(2)
        
        c_idx = re.search(r'correctIndex\s*:\s*(\d+)', mc_body)
        c_ans = re.search(r'correctAnswer\s*:\s*["\']([A-D])["\']', mc_body)
        
        idx_val = int(c_idx.group(1)) if c_idx else None
        ans_val = c_ans.group(1) if c_ans else None
        
        # Check options
        opts_m = re.search(r'options\s*:\s*\[([\s\S]*?)\]', mc_body)
        num_opts = 0
        if opts_m:
            opts = re.findall(r'["\'](.*?)["\']\s*(?:,|$)', opts_m.group(1))
            num_opts = len(opts)
        
        if num_opts != 4:
            issues.append(f"[{fname}] MC {mc_id} has {num_opts} options instead of 4!")
            
        if idx_val is None and ans_val is None:
            issues.append(f"[{fname}] MC {mc_id} missing BOTH correctIndex and correctAnswer!")
        elif idx_val is not None and ans_val is not None:
            expected_letter = chr(65 + idx_val)
            if expected_letter != ans_val:
                issues.append(f"[{fname}] MC {mc_id} MISMATCH: correctIndex={idx_val} ({expected_letter}) vs correctAnswer={ans_val}")
        elif idx_val is None and ans_val is not None:
            issues.append(f"[{fname}] MC {mc_id} has correctAnswer={ans_val} but missing correctIndex")
        elif idx_val is not None and ans_val is None:
            issues.append(f"[{fname}] MC {mc_id} has correctIndex={idx_val} but missing correctAnswer")

    # 3. Audit part2TrueFalse
    tf_matches = re.finditer(r'\{\s*id\s*:\s*["\'](tf-[^"\']+)["\']([\s\S]*?items\s*:\s*\[[\s\S]*?\][\s\S]*?)\}(?=\s*,\s*\{|\s*\]\s*,\s*\n\s*part3)', content)
    for m in tf_matches:
        total_tf += 1
        tf_id = m.group(1)
        tf_body = m.group(2)
        # count items
        item_count = len(re.findall(r'statement\s*:', tf_body))
        if item_count != 4:
            issues.append(f"[{fname}] TF {tf_id} has {item_count} items instead of 4!")

    # 4. Audit part3ShortAnswer
    sa_matches = re.finditer(r'\{\s*id\s*:\s*["\'](sa-[^"\']+)["\']([\s\S]*?)\}(?=\s*,\s*\{|\s*\]\s*\n\s*\})', content)
    for m in sa_matches:
        total_sa += 1
        sa_id = m.group(1)
        sa_body = m.group(2)
        c_ans = re.search(r'correctAnswer\s*:\s*["\']?([^"\'\n,]+)["\']?', sa_body)
        c_val = re.search(r'correctValue\s*:\s*([^,\n]+)', sa_body)
        if not c_ans and not c_val:
            issues.append(f"[{fname}] SA {sa_id} missing BOTH correctAnswer and correctValue!")

print(f"Summary of audit:")
print(f"  Total Checkpoints: {total_cp}")
print(f"  Total MC Questions: {total_mc}")
print(f"  Total TF Questions: {total_tf}")
print(f"  Total SA Questions: {total_sa}")
print(f"\nTotal Issues Found: {len(issues)}")
for iss in issues:
    print(f"  - {iss}")
