with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos1 = text.find('function renderSidebar(')
pos2 = text.find('function renderLessonViewer(')
pos3 = text.find('function formatAudioTime(')

print(f"renderSidebar starts at line {text[:pos1].count(chr(10))+1}")
print(f"renderLessonViewer starts at line {text[:pos2].count(chr(10))+1}")
print(f"formatAudioTime starts at line {text[:pos3].count(chr(10))+1}")
