with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos2 = text.find('function renderLessonViewer(')
pos_hook = text.find('lesson.hook', pos2)
print("Hook block:")
print(text[pos_hook-100:pos_hook+600])

pos_wrap = text.find('lesson.realworldWrapup', pos2)
print("\nWrapup block:")
print(text[pos_wrap-100:pos_wrap+600])
