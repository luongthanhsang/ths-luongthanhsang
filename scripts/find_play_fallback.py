with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function playAudioOrFallback')
if idx != -1:
    print(text[idx:idx+1200])
else:
    print("playAudioOrFallback not found")
