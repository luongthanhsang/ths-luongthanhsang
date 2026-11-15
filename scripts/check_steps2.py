import json

with open(r'C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        idx = data.get('step_index')
        if 7420 <= idx <= 7445:
            content = str(data.get('content', ''))
            thinking = str(data.get('thinking', ''))
            tc = str(data.get('tool_calls', ''))
            print(f"[{idx}] TC: {tc[:120]} | C: {content[:100]} | T: {thinking[:100]}")
