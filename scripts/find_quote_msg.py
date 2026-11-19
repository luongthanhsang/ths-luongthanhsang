with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
idx = text.find('.welcome-quote-msg')
print(text[idx-100:idx+400])
