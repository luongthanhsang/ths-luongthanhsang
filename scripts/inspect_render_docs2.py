with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function renderDocuments()')
print(text[idx+2000:idx+4000])
