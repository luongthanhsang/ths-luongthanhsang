with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = re.findall(r'<script\s+src="([^"]+)"></script>', text)
print(f"Loaded scripts in bai-hoc-so.html ({len(scripts)} total):")
for s in scripts:
    if 'lesson' in s or 'audio-cache' in s:
        print(f"  {s}")
