with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'LESSON_11_C1_B1_DATA' in l:
        for j in range(max(0, i-3), min(len(lines), i+8)):
            print(f'{j+1}: {lines[j].rstrip()}')
