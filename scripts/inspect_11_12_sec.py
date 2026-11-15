with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'sections:' in l:
        print(f"sections: line {i+1}")
        for j in range(i, min(len(lines), i+80)):
            print(f"{j+1}: {lines[j]}", end="")
        break
