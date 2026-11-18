with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m2 = re.search(r'DẠNG 2\. CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI', text)
if m2:
    print("--- DẠNG 2 ---")
    print(text[m2.start()-200:m2.start()+300])

m3 = re.search(r'DẠNG 3\. CÂU HỎI TRẢ LỜI NGẮN', text)
if m3:
    print("\n--- DẠNG 3 ---")
    print(text[m3.start()-200:m3.start()+300])
