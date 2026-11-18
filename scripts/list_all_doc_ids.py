with open('js/document-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
doc_ids = re.findall(r'id:\s*"([^"]+)"', text)
print(f"Total doc IDs: {len(doc_ids)}")
print(doc_ids)
