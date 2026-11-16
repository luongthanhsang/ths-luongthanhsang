with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
# Find any keys in subsections
keys = re.findall(r'(\w+):\s*[`"{\[]', text)
from collections import Counter
c = Counter(keys)
print("Top keys in lesson-11-2-data.js:")
for k, count in c.most_common(30):
    print(f"  {k}: {count}")
