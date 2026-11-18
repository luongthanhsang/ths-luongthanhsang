with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('/* 3. KHU VỰC THI TRẮC NGHIỆM ONLINE (QUIZ SYSTEM)')
print(text[idx:idx+4500])
