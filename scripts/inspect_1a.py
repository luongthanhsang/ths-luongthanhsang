with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('key: "1a"')
if idx != -1:
    print(text[idx:idx+3500])
