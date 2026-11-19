with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '11-c1-b3-s5' in line:
        print('Section 5 line:', i)
        for j in range(i, i + 25):
            print(f"{j}: {lines[j]}", end='')
    if '11-c1-b3-s6' in line:
        print('Section 6 line:', i)
        for j in range(i, i + 25):
            print(f"{j}: {lines[j]}", end='')
