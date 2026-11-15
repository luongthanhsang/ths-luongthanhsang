with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find sections array
idx = text.find('sections: [')
if idx != -1:
    end = text.find('practice:', idx)
    print(text[idx:idx+4000])
