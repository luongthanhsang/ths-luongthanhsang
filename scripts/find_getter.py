with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('LESSON_10_C4_B8_DATA')
if idx != -1:
    print(text[max(0, idx-200):idx+400])
