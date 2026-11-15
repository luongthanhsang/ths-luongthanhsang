import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function renderTeacherGoldVoiceBoxHtml')
print("renderTeacherGoldVoiceBoxHtml:")
print(text[idx:idx+1500])
