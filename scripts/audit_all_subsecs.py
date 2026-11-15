import os, re

lesson_files = [
    'lesson-10-3-data.js',
    'lesson-10-4-data.js',
    'lesson-10-5-data.js',
    'lesson-10-6-data.js',
    'lesson-10-7-data.js',
    'lesson-10-8-data.js',
    'lesson-10-9-data.js',
    'lesson-10-10-data.js',
    'lesson-10-11-data.js',
    'lesson-11-12-data.js',
    'lesson-12-7-data.js'
]

for lf in lesson_files:
    path = os.path.join('js', lf)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # parse sections
    secs = re.findall(r'num:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
    subsecs = re.findall(r'key:\s*["\']([^"\']+)["\']', text)
    print(f"{lf}: {len(secs)} sections, {len(subsecs)} total subsections: {subsecs}")
