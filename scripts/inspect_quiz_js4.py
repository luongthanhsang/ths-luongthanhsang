with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 12476 + 12000
print(text[idx:idx+4500])
