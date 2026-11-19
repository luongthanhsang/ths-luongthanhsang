for fn, line_no in [('js/lesson-11-1-data.js', 578), ('js/lesson-11-2-data.js', 356), ('js/lesson-11-3-data.js', 1494)]:
    print(f"\n--- {fn} around line {line_no} ---")
    with open(fn, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for j in range(max(0, line_no - 4), min(len(lines), line_no + 4)):
        print(f'{j+1}: {lines[j].rstrip()}')
