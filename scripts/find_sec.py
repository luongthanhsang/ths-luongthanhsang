import re

with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('VÍ DỤ 10')
sub_id = None
for m in re.finditer(r'id:\s*["\']([^"\']+)["\']', text[:idx]):
    sub_id = m.group(1)
print('Section id containing Ví dụ 10:', sub_id)
