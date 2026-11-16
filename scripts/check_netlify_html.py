with open("BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html", "r", encoding="utf-8") as f:
    text = f.read()

import re
scripts = re.findall(r'<script[^>]*src="([^"]+)"[^>]*>', text)
print(f"Scripts loaded in BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html ({len(scripts)}):")
for s in scripts:
    if "b11-2" in s or "lesson-11-2" in s:
        print(" ", s)
