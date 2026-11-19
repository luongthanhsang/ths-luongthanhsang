with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('poi-11-1-sec4b-2')
sub_start = text.rfind('{', 0, text.rfind('pois:', 0, idx))
print(text[sub_start:sub_start+400])
