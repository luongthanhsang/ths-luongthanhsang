import os, re

for root, dirs, files in os.walk('js'):
    for file in files:
        if file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'LESSON_11_C1_B2_DATA' in content:
                    print(f"Found LESSON_11_C1_B2_DATA in {filepath}")
