with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# search for URLSearchParams or lesson parameter
import re
for m in re.finditer(r'lesson|currentLesson|initDigitalLesson', text):
    start = max(0, m.start() - 30)
    end = min(len(text), m.end() + 50)
    print(repr(text[start:end]))
