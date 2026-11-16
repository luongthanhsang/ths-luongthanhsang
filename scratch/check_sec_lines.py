with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(3480, 3515):
    print(f"{i+1}: {lines[i]}", end="")
