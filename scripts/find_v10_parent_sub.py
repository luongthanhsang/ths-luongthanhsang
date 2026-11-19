with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

v10_pos = text.find('VÍ DỤ 10')
# find nearest preceding "key:"
key_pos = text.rfind('key:', 0, v10_pos)
print('Key line:', text[key_pos:key_pos+50])
# find nearest preceding "title:"
title_pos = text.rfind('title:', 0, v10_pos)
print('Title line:', text[title_pos:title_pos+80])
