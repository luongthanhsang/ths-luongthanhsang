with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos2 = text.find('function renderLessonViewer(')
pos_end = text.find('// Gắn sự kiện điều hướng Prev / Next', pos2)
if pos_end == -1:
    pos_end = pos2 + 4000
print(text[pos2+1000:pos_end])
