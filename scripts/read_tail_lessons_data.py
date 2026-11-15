with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('--- Last 30 lines of lessons-data.js ---')
print(''.join(lines[-30:]))
