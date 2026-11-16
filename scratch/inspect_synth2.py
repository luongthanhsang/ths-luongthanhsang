with open('scripts/synth_b11_10.py', encoding='utf-8') as f:
    text = f.read()
lines = text.splitlines()
for l in lines[40:120]:
    print(l)
