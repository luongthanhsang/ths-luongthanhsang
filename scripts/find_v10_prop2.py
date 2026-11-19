with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('VÍ DỤ 10')
import re
# search all matches of word: ` or word: " before idx
matches = list(re.finditer(r'([a-zA-Z0-9_]+)\s*:\s*[`"]', text[:idx]))
if matches:
    last = matches[-1]
    print('Enclosing property:', last.group(1), 'at pos', last.start())
    print('Snippet around property:', text[last.start():last.start()+100])
