with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"11-c1-b3"')
print(text[idx-50:idx+1500])
