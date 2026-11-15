import json

with open(r'C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        idx = data.get('step_index')
        if 7393 <= idx <= 7420:
            content = str(data.get('content', ''))
            thinking = str(data.get('thinking', ''))
            tc = str(data.get('tool_calls', ''))
            print(f"[{idx}] TC: {tc[:150]} | C: {content[:150]} | T: {thinking[:100]}")
