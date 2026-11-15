with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("File script.js read. Length:", len(text))
print("Has mathToVietnameseSpeech:", "function mathToVietnameseSpeech" in text)
print("Has renderLessonStructureSidebar:", "function renderLessonStructureSidebar" in text)
