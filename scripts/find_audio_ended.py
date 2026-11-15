with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
pos = text.find('function playTeacherSpeech(')
pos_ended = text.find('ended', pos)
print("playTeacherSpeech at:", pos)
print("ended at:", pos_ended)
if pos_ended != -1:
    print(text[pos_ended-100:pos_ended+300])
