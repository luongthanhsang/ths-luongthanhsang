def fix_by_line(filepath, target_substr):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    fixed = False
    for i, line in enumerate(lines):
        if target_substr in line and line.rstrip().endswith('"'):
            lines[i] = line.rstrip() + ',\n'
            fixed = True
            print(f"Fixed line {i+1} in {filepath}: {lines[i].strip()}")
            break
    if fixed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)
    else:
        print(f"Could not find or already fixed {filepath}")

# 1. Lesson 11-1
fix_by_line('js/lesson-11-1-data.js', 'Sau đó $l = 10')
fix_by_line('BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js', 'Sau đó $l = 10')

# 2. Lesson 11-2
fix_by_line('js/lesson-11-2-data.js', 'Đối chiếu biểu thức $x(t)')
fix_by_line('BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js', 'Đối chiếu biểu thức $x(t)')
