with open('js/document-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
docs = re.findall(r'id:\s*"([^"]+)"', text)
print(f"Total documents in document-data.js: {len(docs)}")
for d in docs[:10]:
    print(" ", d)

has_downloads = "downloads:" in text
print("Has downloads field:", has_downloads)
