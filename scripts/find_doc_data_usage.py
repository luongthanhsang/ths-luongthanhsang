with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('DOCUMENTS_DATA')
while idx != -1:
    print("Found DOCUMENTS_DATA at", idx)
    print(text[max(0, idx-50):min(len(text), idx+600)])
    print("="*40)
    idx = text.find('DOCUMENTS_DATA', idx+1)
