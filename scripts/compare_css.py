with open('css/styles.css', 'r', encoding='utf-8') as f1:
    c1 = f1.read()

with open('BAN_CAP_NHAT_NETLIFY/css/styles.css', 'r', encoding='utf-8') as f2:
    c2 = f2.read()

print('Length of styles.css:', len(c1))
print('Length of Netlify styles.css:', len(c2))
print('Are they identical?', c1 == c2)
