with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'<script src="js/lesson-10-4-data.js.*?</script>', text)
if m:
    print("Found match:", m.group(0))
    idx = m.end()
    print("Context after:")
    print(text[idx:idx+300])
