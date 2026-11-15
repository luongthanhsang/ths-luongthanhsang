with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('id: "10-c2-b3"')
if idx != -1:
    print(text[idx-200:idx+1500])
else:
    print("10-c2-b3 not found, searching for Chương II in grade 10")
    idx_ch2 = text.find('Bất phương trình và hệ bất phương trình bậc nhất hai ẩn')
    if idx_ch2 != -1:
        print(text[idx_ch2-200:idx_ch2+1000])
