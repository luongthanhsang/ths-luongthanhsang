import json

with open(r'C:\Users\Hp\.gemini\antigravity\brain\49c8027e-d59b-430c-a40e-5277cf9063e4\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        idx = data.get('step_index')
        src = data.get('source')
        content = str(data.get('content', ''))
        thinking = str(data.get('thinking', ''))
        if content:
            print(f"[{idx}][{src}]: {content[:200]}")
        elif thinking:
            print(f"[{idx}][{src} THINK]: {thinking[:200]}")
