with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<!-- HÌNH VẼ MINH HỌA NGUYÊN BẢN THEO ẢNH ĐÍNH KÈM CỦA THẦY SÁNG -->')
end = text.find('</svg>', idx) + 6
print(text[idx:end])
