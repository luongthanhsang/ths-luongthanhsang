import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect initQuizSystem()
idx_init_quiz = text.find('function initQuizSystem()')
print("initQuizSystem snippet:\n", text[idx_init_quiz:idx_init_quiz+600])

# Let's inspect loadQuestionsForMode()
idx_load_q = text.find('function loadQuestionsForMode(mode)')
print("\nloadQuestionsForMode snippet:\n", text[idx_load_q:idx_load_q+600])

# Let's inspect startExamSession
idx_start = text.find('window.startExamSession = function()')
print("\nstartExamSession snippet:\n", text[idx_start:idx_start+600])
