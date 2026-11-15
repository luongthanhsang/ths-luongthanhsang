import os, glob

for f in sorted(glob.glob('assets/audio/b10_5*.mp3') + glob.glob('assets/audio/b10_6*.mp3')):
    st = os.stat(f)
    print(f, st.st_size, st.st_mtime)
