with open('js/document-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
dl_matches = re.findall(r'downloads:\s*(\d+)', text)
print(f"Total downloads fields added: {len(dl_matches)}")
print("Sample values:", dl_matches[:10])
