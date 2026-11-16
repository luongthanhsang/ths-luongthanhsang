with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

start = -1
for i, l in enumerate(lines):
    if 'function activateStep' in l:
        start = i
        break
if start != -1:
    for j in range(start, min(start + 80, len(lines))):
        print(f"{j+1}: {lines[j]}", end="")
