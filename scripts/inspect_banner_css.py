with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('.exam-start-banner')
print(text[idx:idx+1500])
