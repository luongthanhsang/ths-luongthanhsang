with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
idx = text.find('window.location.search')
if idx != -1:
    print(text[idx-50:idx+400])
else:
    print("URL search param reading:")
    for m in re.finditer(r'URLSearchParams|searchParams', text):
        print(text[m.start()-50:m.start()+250])
