with open("js/b11-2-audio-cache.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
keys = re.findall(r'"([^"]+)":\s*"data:audio/mp3;base64,', text)
print(f"Total audio keys in B11_2_AUDIO_CACHE: {len(keys)}")
for k in keys:
    print(" ", k)
