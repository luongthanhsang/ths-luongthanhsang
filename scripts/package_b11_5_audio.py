# -*- coding: utf-8 -*-
import os, base64, json, shutil

AUDIO_DIR = 'assets/audio'
fnames = [
    'b11_5_welcome.mp3',
    'b11_5_goals.mp3',
    'b11_5_hook.mp3',
    'b11_5_sec1a.mp3',
    'b11_5_sec1b.mp3',
    'b11_5_sec2a.mp3',
    'b11_5_sec2b.mp3',
    'b11_5_sec3a.mp3',
    'b11_5_sec3b.mp3',
    'b11_5_wrapup.mp3'
]

cache = {}
for fname in fnames:
    fpath = os.path.join(AUDIO_DIR, fname)
    if os.path.exists(fpath) and os.path.getsize(fpath) > 1000:
        with open(fpath, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode('utf-8')
        data_uri = f'data:audio/mp3;base64,{b64}'
        cache[fname] = data_uri
        cache[f'assets/audio/{fname}'] = data_uri
        print(f'Cached {fname}: {os.path.getsize(fpath):,} bytes')

cache_js = '// Audio Cache Base64 - Bài 5 Lớp 11: Dãy số\n'
cache_js += '// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n'
cache_js += 'window.B11_5_AUDIO_CACHE = ' + json.dumps(cache, ensure_ascii=False) + ';\n'
cache_js += "if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_5_AUDIO_CACHE);\n"

with open('js/b11-5-audio-cache.js', 'w', encoding='utf-8') as f:
    f.write(cache_js)
with open('BAN_CAP_NHAT_NETLIFY/js/b11-5-audio-cache.js', 'w', encoding='utf-8') as f:
    f.write(cache_js)

os.makedirs('BAN_CAP_NHAT_NETLIFY/assets/audio', exist_ok=True)
for fname in fnames:
    src = os.path.join(AUDIO_DIR, fname)
    dst = os.path.join('BAN_CAP_NHAT_NETLIFY/assets/audio', fname)
    shutil.copy2(src, dst)

print('SUCCESS: Audio cache packaged and synchronized!')
