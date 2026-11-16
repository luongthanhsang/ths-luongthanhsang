with open('js/script.js', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if i > 3300 and 'KNOWN_AUDIO_DURATIONS' in l:
        print(f"Line {i+1}: {l}")
        for j in range(i, min(len(lines), i + 20)):
            print(f"{j+1}: {lines[j]}", end="")
        break
