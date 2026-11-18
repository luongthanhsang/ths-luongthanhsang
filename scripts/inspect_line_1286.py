with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
start = max(0, 1280 - 15)
end = min(len(lines), 1286 + 25)
for i in range(start, end):
    print(f"{i+1}: {lines[i]}", end="")
