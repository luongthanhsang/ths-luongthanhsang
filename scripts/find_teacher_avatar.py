import os, re

files = [f for f in os.listdir('.') if f.endswith('.html')]

for fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        c = f.read()
    if 'chalkboard-user' in c or 'teacher-avatar-frame' in c:
        print(f"Found in {fn}")
