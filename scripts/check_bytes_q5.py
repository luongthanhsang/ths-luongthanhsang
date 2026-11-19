with open('js/lesson-11-1-data.js', 'rb') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if b'mc-11-1-5' in line:
        for j in range(i-1, i+15):
            print(f'Line {j+1}: {repr(lines[j])}')
        break
