with open('js/lessons-data.js', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'autoInjectLesson' in l:
        for j in range(max(0, i - 10), min(len(lines), i + 25)):
            print(f"{j+1}: {lines[j]}", end="")
        break
