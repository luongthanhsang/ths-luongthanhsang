import sys, re

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Check that critical markers exist
markers = [
    'function renderSidebar()',
    'function renderLessonViewer()',
    '<div class="teacher-welcome-card" id="lessonWelcomeCard">',
    '<div class="lesson-goals-box">',
    '<div class="lesson-hook-card">',
    '<article class="lesson-section-card" id="${secAnchor}">',
    '<div class="subsection-card">',
    '<div class="realworld-wrapup-card">',
    '<div class="exam-format-wrap" id="examFormatPracticeSection">',
    'bindDigitalLessonEvents(sectionsContainer);',
    'function selectLesson(lessonId) {',
    'currentHtml5Audio.addEventListener("ended", () => {'
]

for m in markers:
    count = text.count(m)
    print(f"Marker '{m[:40]}': count = {count}")
    assert count >= 1, f"Missing marker: {m}"

print("All markers verified successfully!")
