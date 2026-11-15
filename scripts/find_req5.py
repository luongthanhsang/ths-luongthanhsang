import json

with open(r'C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        content = str(data.get('content', ''))
        thinking = str(data.get('thinking', ''))
        if 'media_1794633201985_7fe06498' in content or 'media_1794633201985_7fe06498' in thinking:
            print(f"Step {data.get('step_index')}: found media_1794633201985_7fe06498")
        if 'Đề vừa cập nhật bị lỗi' in content:
            print(f"Step {data.get('step_index')}: {content[:300]}")
