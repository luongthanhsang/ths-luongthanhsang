import re

with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('sections: [')
print(text[pos:pos+1500])
