with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('handleDocDownload')
while idx != -1:
    print("Found handleDocDownload at", idx)
    print(text[max(0, idx-50):min(len(text), idx+500)])
    print("="*40)
    idx = text.find('handleDocDownload', idx+1)
