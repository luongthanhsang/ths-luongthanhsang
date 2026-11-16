with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'B11_10_AUDIO_CACHE' in l:
        print(f"Line {i+1}: {l}")
        for j in range(max(0, i - 5), min(len(lines), i + 20)):
            print(f"{j+1}: {lines[j]}", end="")
        break
