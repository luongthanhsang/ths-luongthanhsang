import os

for path in ['scripts/generate_all_b8_audio.py', 'scripts/generate_b10_10_audio.py', 'scripts/generate_b10_8_audio.py']:
    if os.path.exists(path):
        print(f"=== {path} ===")
        with open(path, 'r', encoding='utf-8') as f:
            print(f.read()[:800])
