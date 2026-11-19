with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
print('L578 repr:', repr(lines[577]))

with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    lines2 = f.readlines()
print('B2 L356 repr:', repr(lines2[355]))

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    lines3 = f.readlines()
print('B3 L1494 repr:', repr(lines3[1493]))
