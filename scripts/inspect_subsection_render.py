with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2834, 2870):
    print(f"{i+1}: {lines[i]}", end="")
