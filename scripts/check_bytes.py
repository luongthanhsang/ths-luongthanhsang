with open('js/lesson-11-1-data.js', 'rb') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if b'V\xc3\x8d D\xe1\xbb\xa4 10' in line:
        for j in range(i-2, i+15):
            print(f'Line {j+1}: {repr(lines[j])}')
        break
