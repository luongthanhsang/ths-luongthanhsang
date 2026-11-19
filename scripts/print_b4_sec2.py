import json

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('{')
end_idx = text.rfind('};')
data = json.loads(text[start_idx:end_idx+1])

sec2 = data['sections'][1]
print("=== SECTION 2 FULL CONTENT HTML ===")
print(sec2['contentHtml'])
