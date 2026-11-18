with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 12476 + 3000
print(text[idx:idx+4500])
