with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('VÍ DỤ 10')
# find what property contains it
prop_start = text.rfind('\n', 0, text.rfind(':', 0, idx))
print(text[prop_start:prop_start+150])
