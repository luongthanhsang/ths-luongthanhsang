import shutil, os, glob

os.makedirs('BAN_CAP_NHAT_NETLIFY/js', exist_ok=True)
os.makedirs('BAN_CAP_NHAT_NETLIFY/assets/audio', exist_ok=True)

files_to_copy = [
    ('js/lesson-10-1-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-10-1-data.js'),
    ('js/b10-1-audio-cache.js', 'BAN_CAP_NHAT_NETLIFY/js/b10-1-audio-cache.js'),
    ('js/lessons-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lessons-data.js'),
    ('js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js'),
    ('bai-hoc-so.html', 'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html')
]

for src, dst in files_to_copy:
    shutil.copy2(src, dst)
    print(f"Copied {src} -> {dst}")

for aud in glob.glob('assets/audio/b10_1_*.mp3'):
    fname = os.path.basename(aud)
    dst = os.path.join('BAN_CAP_NHAT_NETLIFY/assets/audio', fname)
    shutil.copy2(aud, dst)
    print(f"Copied audio: {fname}")

print("Sync to BAN_CAP_NHAT_NETLIFY complete!")
