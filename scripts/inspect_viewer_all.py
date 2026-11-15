with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos2 = text.find('function renderLessonViewer(')
pos_end = text.find('\n  // Gắn sự kiện', pos2)
if pos_end == -1:
    pos_end = text.find('\n  function ', pos2 + 1000)

print("Viewer length:", pos_end - pos2)

# Find all section headers rendered
import re
for m in re.finditer(r'//\s*(\d+\.[^\n]+)', text[pos2:pos_end]):
    print(m.group(0))
