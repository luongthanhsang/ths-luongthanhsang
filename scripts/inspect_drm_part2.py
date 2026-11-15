with open('scripts/generate_b7_audio_drm.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for l in lines[40:120]:
    print(l, end='')
