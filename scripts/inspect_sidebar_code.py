with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos1 = text.find('function renderSidebar(')
pos2 = text.find('function renderLessonViewer(')
pos3 = text.find('function formatAudioTime(')

print("=== renderSidebar ===")
print(text[pos1:pos2])

print("\n=== renderLessonViewer (first 1000 chars) ===")
print(text[pos2:pos2+1000])
