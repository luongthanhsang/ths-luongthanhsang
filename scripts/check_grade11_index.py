with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*["\'](11-[^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
print(f"Found {len(matches)} grade 11 lessons in lessons-data.js:")
for mid, title in matches:
    print(f"  {mid}: {title}")
