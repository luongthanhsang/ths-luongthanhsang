with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '11-c1-b1' in l:
        print(f'Line {i+1}: {l.strip()[:100]}')
        for j in range(max(0, i-2), min(len(lines), i+15)):
            print(f'  {j+1}: {lines[j].rstrip()}')
        break
