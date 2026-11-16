with open("bai-hoc-so.html", "r", encoding="utf-8") as f:
    text = f.read()

import re
scripts = re.findall(r'<script[^>]*src="([^"]+)"[^>]*>', text)
print(f"Scripts loaded in bai-hoc-so.html ({len(scripts)}):")
for s in scripts:
    print(" ", s)
