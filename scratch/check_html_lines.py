with open('bai-hoc-so.html', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'b10-3-audio-cache' in l:
        for j in range(max(0, i - 2), min(len(lines), i + 15)):
            print(f"{j+1}: {lines[j]}", end="")
        break
