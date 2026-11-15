with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
secs = re.findall(r'num:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
for s in secs:
    print("Section:", s)

subsecs = re.findall(r'key:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
for sub in subsecs:
    print("  Subsection:", sub)
