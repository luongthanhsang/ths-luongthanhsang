with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2500, 2560):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end='')
