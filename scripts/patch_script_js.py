# -*- coding: utf-8 -*-
import shutil

with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# 1. Thêm B11_2_AUDIO_CACHE
old_audio = 'const audioSrc = (window.B11_1_AUDIO_CACHE && window.B11_1_AUDIO_CACHE[audioUrl]) ||'
new_audio = 'const audioSrc = (window.B11_2_AUDIO_CACHE && window.B11_2_AUDIO_CACHE[audioUrl]) ||\n                         (window.B11_1_AUDIO_CACHE && window.B11_1_AUDIO_CACHE[audioUrl]) ||'
if old_audio in text and 'window.B11_2_AUDIO_CACHE' not in text:
    text = text.replace(old_audio, new_audio, 1)
    print("Patched B11_2_AUDIO_CACHE")
else:
    print("B11_2_AUDIO_CACHE already present or pattern not matched")

# 2. Thêm window.LESSON_11_C1_B2_DATA
old_lesson = 'window.LESSON_11_C1_B1_DATA,'
new_lesson = 'window.LESSON_11_C1_B1_DATA,\n          window.LESSON_11_C1_B2_DATA,'
if old_lesson in text and 'window.LESSON_11_C1_B2_DATA' not in text:
    text = text.replace(old_lesson, new_lesson, 1)
    print("Patched LESSON_11_C1_B2_DATA")
else:
    print("LESSON_11_C1_B2_DATA already present or pattern not matched")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(text)

shutil.copy2('js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js')
print("Synchronized to BAN_CAP_NHAT_NETLIFY/js/script.js")
