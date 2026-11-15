import re

for path in ['js/lesson-10-5-data.js', 'js/lesson-10-6-data.js']:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    audios = re.findall(r'audioUrl:\s*["\']([^"\']*)["\']', content)
    scripts = re.findall(r'audioScript:\s*["\']([^"\']{1,40})', content)
    print(path, 'audioUrls:', audios)
    print(path, 'audioScripts count:', len(scripts))
