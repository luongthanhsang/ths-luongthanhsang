with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'<script src="js/lesson[^"]+"></script>', text)
print('Lesson scripts in bai-hoc-so.html:')
for s in m:
    print(' ', s)

# Find where lessons are listed or selected
m2 = re.findall(r'<option[^>]*11-c1[^>]*>.*?</option>', text)
print('\nGrade 11 Chapter 1 options:')
for s in m2:
    print(' ', s)
