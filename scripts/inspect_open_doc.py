with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('window.openDocPreview')
print(text[idx:idx+1500])
