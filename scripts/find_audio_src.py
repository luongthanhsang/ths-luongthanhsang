with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('B6_AUDIO_CACHE && window.B6_AUDIO_CACHE[audioUrl]) ||')
print(text[idx:idx+1500])
