with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('KHU VỰC THI TRẮC NGHIỆM')
print("Found at", idx)
print(text[idx:idx+3500])
