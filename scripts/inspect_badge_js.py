with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'BÀI HỌC SỐ' in l:
        print(f'Line {i+1}: {l.strip()[:100]}')
        for j in range(max(0, i-5), min(len(lines), i+20)):
            print(f'  {j+1}: {lines[j].rstrip()}')
        break
