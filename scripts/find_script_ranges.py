with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_dom = text.find('document.addEventListener("DOMContentLoaded"')
print("DOMContentLoaded at:", idx_dom)

idx_render_doc = text.find('function renderDocuments()')
print("renderDocuments at:", idx_render_doc)

idx_quiz_start = text.find('let currentExamId =')
print("quiz_start at:", idx_quiz_start)

idx_retake = text.find('function retakeQuiz()')
idx_retake_end = text.find('}', text.find('}', idx_retake) + 1)
print("retakeQuiz at:", idx_retake, "to", idx_retake_end)
