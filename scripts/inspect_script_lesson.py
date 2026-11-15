with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = 93328
print(text[pos-200:pos+800])
