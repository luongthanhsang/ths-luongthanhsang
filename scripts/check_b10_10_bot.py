with open('scripts/generate_b10_10_audio.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('async def generate_speech')
if idx != -1:
    print(text[idx:])
else:
    print(text[-1500:])
