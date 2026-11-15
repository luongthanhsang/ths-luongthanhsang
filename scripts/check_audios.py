import os

for f in sorted(os.listdir('assets/audio')):
    if f.startswith(('b10_3', 'b10_4')):
        path = os.path.join('assets/audio', f)
        print(f"{f}: {os.path.getsize(path)} bytes")
