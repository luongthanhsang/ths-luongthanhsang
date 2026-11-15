with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos2 = text.find('function renderLessonViewer(')

print("welcome card:", text.find('id="lessonWelcomeCard"', pos2))
print("goals box:", text.find('class="lesson-goals-box"', pos2))
print("hook box:", text.find('class="hook-realworld-box"', pos2))
print("section card:", text.find('class="lesson-section-card"', pos2))
print("wrapup box:", text.find('class="realworld-wrapup-box"', pos2))
print("exam format:", text.find('id="examFormatPracticeSection"', pos2))
