with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'initOlmLessonEngine' in l or '11-c4-b12' in l or '11-12' in l or 'lesson-11-12' in l:
        print(f"{i+1}: {l.strip()[:120]}")
        for j in range(max(0, i-5), min(len(lines), i+25)):
            print(f"  {j+1}: {lines[j]}", end='')
        print("="*60)
