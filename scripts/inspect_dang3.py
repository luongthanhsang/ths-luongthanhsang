with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(3095, 3135):
    line = lines[i]
    if 'exam-sub-section' in line or 'DẠNG' in line:
        print(f"{i+1}: {line.strip()[:100]}")
