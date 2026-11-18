import os, re

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root or '.user_uploaded' in root:
        continue
    for file in files:
        if file.endswith('.js') or file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if 'subsections' in content or 'subsection' in content:
                        print(f"Found in {filepath}")
            except Exception as e:
                pass
