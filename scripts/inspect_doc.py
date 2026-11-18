with open('js/document-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('id: "doc-10-01"')
print(text[idx:idx+700])
