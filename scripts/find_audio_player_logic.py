with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'AUDIO_CACHE|speechSynthesis|btn-play-gold-voice', text)]
print(f"Matches in script.js: {len(matches)}")
for idx in matches[:5]:
    print("--- Snippet ---")
    print(text[max(0, idx-50):idx+300])
