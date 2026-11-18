with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(1215, 1266):
    print(f"{i+1}: {lines[i]}", end="")
