import os

for f in os.listdir('.'):
    if f.endswith(('.html', '.js')):
        with open(f, 'r', encoding='utf-8') as file:
            text = file.read()
            if 'initOlmLessonEngine' in text:
                print(f"Found in {f}")
for f in os.listdir('js'):
    if f.endswith('.js'):
        with open(os.path.join('js', f), 'r', encoding='utf-8') as file:
            text = file.read()
            if 'initOlmLessonEngine' in text:
                print(f"Found in js/{f}")
