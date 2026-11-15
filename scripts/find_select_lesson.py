with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function selectLesson(')
if pos == -1: pos = text.find('selectLesson =')
print(text[pos-50:pos+800])
