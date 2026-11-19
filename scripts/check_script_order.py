with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'lesson-11-1-data.js' in l or 'lessons-data.js' in l:
        print(f'{i+1}: {l.strip()}')
