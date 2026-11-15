with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'showPoiModal' in l or 'checkpoint-opt-btn' in l:
        for j in range(max(0, i-5), min(len(lines), i+45)):
            print(f"{j+1}: {lines[j]}", end="")
        print("\n" + "="*50 + "\n")
