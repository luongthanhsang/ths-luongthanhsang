with open('js/olm-lesson-engine.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("Length:", len(text))
for line in text.splitlines():
    if 'url' in line.lower() or 'param' in line.lower() or 'lesson' in line.lower() or 'default' in line.lower():
        if any(k in line for k in ['get', 'id', 'switch', 'load', 'init', 'search']):
            print(line[:120])
