with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'DẠNG 1\. CÂU HỎI TRẮC NGHIỆM', text)
if m:
    print(text[m.start()-100:m.start()+2500])
