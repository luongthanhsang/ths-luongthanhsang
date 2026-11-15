with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos_sidebar = text.find('function renderSidebar()')
pos_viewer = text.find('function renderLessonViewer()')
pos_format = text.find('function formatAudioTime(seconds)', pos_viewer)

print("renderSidebar:", pos_sidebar)
print("renderLessonViewer:", pos_viewer)
print("formatAudioTime:", pos_format)
