with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('VÍ DỤ 10')
print('Index of Ví dụ 10:', idx)
# print 500 chars before
print(text[idx-500:idx])
