# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
audio_items = re.findall(r'audioUrl:\s*"([^"]+)".*?audioScript:\s*"([^"]+)"', text, re.DOTALL)
print(f"Found {len(audio_items)} audio items:")
for url, s in audio_items:
    print(f"  {url} ({len(s)} chars): {s[:60]}...")
