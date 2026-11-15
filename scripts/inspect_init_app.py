with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('window.initBaiHocSoApp =')
if pos == -1: pos = text.find('document.addEventListener("DOMContentLoaded"')
print(text[pos:pos+600])
