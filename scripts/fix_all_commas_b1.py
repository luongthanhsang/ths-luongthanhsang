def fix_all_missing_commas_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    count = 0
    for i in range(len(lines) - 1):
        line = lines[i].rstrip()
        next_line = lines[i+1].strip()
        if 'explain:' in next_line:
            if not line.endswith(',') and not line.endswith('{') and not line.endswith('['):
                lines[i] = line + ',\n'
                count += 1
                print(f"Added comma to line {i+1} in {filepath}: {lines[i].strip()[:70]}")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Done. Fixed {count} lines in {filepath}.")

fix_all_missing_commas_in_file('js/lesson-11-1-data.js')
fix_all_missing_commas_in_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js')
