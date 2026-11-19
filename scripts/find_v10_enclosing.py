with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 100408
# find last "id:" before idx
last_id = text.rfind('id:', 0, idx)
print(text[last_id:last_id+80])
# find last "title:" before idx
last_title = text.rfind('title:', 0, idx)
print(text[last_title:last_title+80])
