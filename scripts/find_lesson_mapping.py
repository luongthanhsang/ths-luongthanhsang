import os, re

for fn in os.listdir('js'):
    if fn.endswith('.js'):
        with open(os.path.join('js', fn), 'r', encoding='utf-8') as f:
            c = f.read()
            if 'LESSON_11_C1_B2_DATA' in c:
                print(f"{fn} contains LESSON_11_C1_B2_DATA")
