with open('BAN_CAP_NHAT_NETLIFY/css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

print('Netlify has brand-logo-badge:', '.brand-logo-badge' in text)
print('Netlify has slogan gold:', 'teacher-quote' in text or 'slogan' in text)
