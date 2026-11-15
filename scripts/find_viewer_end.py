with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos_viewer = text.find('function renderLessonViewer()')

# Search for the next function declaration at the same indentation level
import re
m = re.search(r'\n  function ([a-zA-Z0-9_]+)\(', text[pos_viewer+500:])
if m:
    print("Next function:", m.group(1), "at", pos_viewer + 500 + m.start())
else:
    print("Not found with regex")
