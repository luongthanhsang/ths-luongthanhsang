with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function playTeacherSpeech')
print(text[idx:idx+2500])
