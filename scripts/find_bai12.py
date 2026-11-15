import os

for root, dirs, files in os.walk('.'):
    for f in files:
        if any(k in f.lower() for k in ['bai12', 'bai-12', 'bai_12', 'song-song', 'duong-thang']):
            print(os.path.join(root, f))
