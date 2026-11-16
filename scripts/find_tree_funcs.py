with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "function activateStep" in line or "function renderLessonStructureSidebar" in line or "function markStepCompleted" in line:
        print(f"Line {i+1}: {line.strip()[:100]}")
