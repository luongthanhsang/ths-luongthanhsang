with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = -1
end = -1
for i, line in enumerate(lines):
    if 'id: "11-c1-b1"' in line:
        start = i
    if start != -1 and 'id: "11-c1-b2"' in line:
        end = i
        break

print(f"Lines {start+1} to {end+1}")
for line in lines[start-2:end]:
    print(line, end="")
