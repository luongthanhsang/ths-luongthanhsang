with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('// 7. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP')
print(text[pos:pos+2000])
