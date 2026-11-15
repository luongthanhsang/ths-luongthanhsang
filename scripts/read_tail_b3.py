with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('--- Last 30 lines of lesson-10-3-data.js ---')
print(''.join(lines[-30:]))
