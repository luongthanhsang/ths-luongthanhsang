with open('tai-lieu.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('documents-grid')
print(text[idx-1200:idx+400])
