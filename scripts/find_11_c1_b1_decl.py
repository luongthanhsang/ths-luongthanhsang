with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('id: "11-c1-b1"')
print(text[idx-50:idx+1500])
