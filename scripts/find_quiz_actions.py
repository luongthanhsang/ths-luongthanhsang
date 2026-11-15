with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('btn-check-short-ans')
if pos != -1:
    print(text[pos-100:pos+800])
else:
    print("btn-check-short-ans not found in script.js")
