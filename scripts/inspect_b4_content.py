import json

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('{')
end_idx = text.rfind('};')
data = json.loads(text[start_idx:end_idx+1])

print('=== LESSON 11-4 SECTIONS ===')
for s in data['sections']:
    print(f"Section {s['num']}: {s['title']}")
    if 'subsections' in s:
        for sub in s['subsections']:
            print(f"  - Sub {sub['key']}: {sub['title']}")
    # Check for unescaped characters or issues in contentHtml
    ch = s.get('contentHtml', '')
    if ch:
        # Check if there are raw $ that might fail
        pass
