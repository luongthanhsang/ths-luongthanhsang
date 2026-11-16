with open('js/lessons-data.js', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(15, 60):
    print(f"{i+1}: {lines[i]}", end="")
