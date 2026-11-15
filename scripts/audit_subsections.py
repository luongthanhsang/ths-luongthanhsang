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
    
    print(f"\n=== {lf} ===")
    # find sections array
    match = re.search(r'sections:\s*\[([\s\S]*?)\n\s*\]\s*,', text)
    if match:
        sec_block = match.group(1)
        titles = re.findall(r'title:\s*["\']([^"\']+)["\']', sec_block)
        sub_keys = re.findall(r'key:\s*["\']([^"\']+)["\']', sec_block)
        print(f"  Sections count: {len(titles)}")
        print(f"  Subsections keys: {sub_keys}")
