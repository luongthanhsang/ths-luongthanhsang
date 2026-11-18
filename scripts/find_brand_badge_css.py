with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('.brand-logo-badge')
print(text[idx-50:idx+400])
