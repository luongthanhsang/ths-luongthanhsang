with open('BAN_CAP_NHAT_NETLIFY/js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

print('In Netlify script.js:', 'BÀI HỌC SỐ LỚP' in text)
