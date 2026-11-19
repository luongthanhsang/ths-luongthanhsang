import json

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('{')
end_idx = text.rfind('};')
data = json.loads(text[start_idx:end_idx+1])

for s in data['sections']:
    num = s['num']
    print(f"\n================ SECTION {num} ================")
    ch = s.get('contentHtml', '')
    if ch:
        # print first 300 chars of contentHtml
        print("contentHtml preview:", repr(ch[:250]))
    # check checkpoints
    cps = s.get('checkpoints', [])
    print(f"Checkpoints count: {len(cps)}")
    for cp in cps:
        print(f"  CP {cp.get('id')}: {cp.get('title')}")
