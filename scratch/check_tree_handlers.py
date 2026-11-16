with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2654, 2676):
    print(f"{i+1}: {lines[i]}", end="")
