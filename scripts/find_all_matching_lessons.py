with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
lessons = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*number:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
for l_id, num, title in lessons:
    if '12' in num or '6' in num or '3' in num or '4' in num or '5' in num:
        print(f"ID: {l_id} | Num: {num} | Title: {title}")
