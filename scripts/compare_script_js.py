with open('js/script.js', 'r', encoding='utf-8') as f1:
    c1 = f1.read()

with open('BAN_CAP_NHAT_NETLIFY/js/script.js', 'r', encoding='utf-8') as f2:
    c2 = f2.read()

print('Length of script.js:', len(c1))
print('Length of Netlify script.js:', len(c2))
print('Are they identical?', c1 == c2)
