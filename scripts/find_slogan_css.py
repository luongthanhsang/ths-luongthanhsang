with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [line for line in text.splitlines() if any(k in line.lower() for k in ['slogan', 'quote', 'học toán không chỉ', 'gold-quote'])]
for m in matches:
    print(m)
