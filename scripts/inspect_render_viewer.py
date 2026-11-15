with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2650, 3340):
    line = lines[i]
    for k in ['lessonWelcomeCard', 'learningGoals', 'lesson-hook-card', 'realworldWrapup', 'examFormatPractice', 'sectionsContainer.innerHTML', 'bindDigitalLessonEvents', 'sections.forEach', 'id="sec-', 'class="section-block"']:
        if k in line:
            print(f"{i+1}: {line.strip()[:100]}")
            break
