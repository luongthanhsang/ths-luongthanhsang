with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'LESSON_10_C4_B10_DATA' in l:
        for j in range(max(0, i - 15), min(len(lines), i + 25)):
            print(f"{j+1}: {lines[j]}", end="")
        break
