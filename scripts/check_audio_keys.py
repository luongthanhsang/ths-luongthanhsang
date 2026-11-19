import os

with open('js/b11-1-audio-cache.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 0
found = []
while True:
    k_idx = text.find('.mp3', idx)
    if k_idx == -1:
        break
    q1 = text.rfind('"', 0, k_idx)
    if q1 != -1:
        found.append(text[q1+1:k_idx+4])
    idx = k_idx + 4
print('b11-1 keys:', list(set(found))[:10])
