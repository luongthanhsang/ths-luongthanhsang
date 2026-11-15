import os

for f in sorted(os.listdir('.')):
    if f.endswith('.html'):
        print(f)
