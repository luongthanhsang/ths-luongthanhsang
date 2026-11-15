with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos_end = 143594
print(text[pos_end-600:pos_end+200])
