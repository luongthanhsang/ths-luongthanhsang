with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos2 = text.find('function renderLessonViewer(')
pos_sub = text.find('teacherWelcome', pos2)
print(text[pos_sub-100:pos_sub+1500])
