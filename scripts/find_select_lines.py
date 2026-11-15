with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'function selectLesson(' in l:
        print(f"selectLesson at line {i+1}:")
        for j in range(i, min(len(lines), i+30)):
            print(f"  {j+1}: {lines[j]}", end="")
