with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

idx = text.rfind('container.querySelectorAll(".btn-toggle-solution")')
print(text[idx-200:idx+100])
