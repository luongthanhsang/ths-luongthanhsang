with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function updateLessonProgressDisplay(')
print(text[pos:pos+1500])
