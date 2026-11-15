with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("Length:", len(text))
# Check SVG in section 1 / mục 1
idx = text.find('svg')
while idx != -1 and idx < 10000:
    print(text[idx:idx+400])
    print("="*40)
    idx = text.find('svg', idx+400)
