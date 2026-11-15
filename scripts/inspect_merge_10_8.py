with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('10-c4-b8')
if idx != -1:
    print(text[idx-50:idx+600])
