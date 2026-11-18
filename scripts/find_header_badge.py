with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'BÀI HỌC SỐ', text)]
print(f"bai-hoc-so.html: {len(matches)} matches")
for idx in matches:
    print(text[max(0, idx-50):min(len(text), idx+100)])

with open('js/script.js', 'r', encoding='utf-8') as f:
    text2 = f.read()

matches2 = [m.start() for m in re.finditer(r'BÀI HỌC SỐ', text2)]
print(f"js/script.js: {len(matches2)} matches")
for idx in matches2:
    print(text2[max(0, idx-50):min(len(text2), idx+100)])
