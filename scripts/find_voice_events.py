import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('teacher-voice-gold-box')
print("Find occurrences of teacher-voice-gold-box event binding:")
for m in re.finditer(r'teacher-voice-gold-box|btn-voice-gold-play|voice-player-bar', text):
    start = max(0, m.start() - 50)
    end = min(len(text), m.start() + 250)
    print(f"Match at {m.start()}:\n{text[start:end]}\n---")
