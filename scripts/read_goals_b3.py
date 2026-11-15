with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(50, 78):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end='')
