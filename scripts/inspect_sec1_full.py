with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('sections: [')
pos2 = text.find('num: "2"', pos)
print(text[pos:pos2])
