with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('viewBox="0 0 780 230"')
if idx != -1:
    # Look back for section title
    sec_idx = text.rfind('id:', 0, idx)
    print(text[sec_idx:sec_idx+500])
