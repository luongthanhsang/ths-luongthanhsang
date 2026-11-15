import os, shutil, glob

# 1. Base files
base_files = [
    'js/script.js',
    'css/olm-lesson.css',
    'css/styles.css',
    'bai-hoc-so.html',
    'index.html',
    'thi-hsg.html',
    'kho-tai-lieu.html'
]

for f in base_files:
    if os.path.exists(f):
        dst = os.path.join('BAN_CAP_NHAT_NETLIFY', f)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(f, dst)
        print(f"Synced base: {f} -> {dst}")

# 2. All lesson data and cache JS files
for pattern in ['js/lesson-*.js', 'js/b*-audio-cache.js', 'js/lessons-data.js', 'js/olm-lesson-engine.js']:
    for f in glob.glob(pattern):
        dst = os.path.join('BAN_CAP_NHAT_NETLIFY', f)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(f, dst)
        print(f"Synced js: {f} -> {dst}")

# 3. Audio directory
audio_dir_src = 'assets/audio'
audio_dir_dst = 'BAN_CAP_NHAT_NETLIFY/assets/audio'
if os.path.exists(audio_dir_src):
    os.makedirs(audio_dir_dst, exist_ok=True)
    count = 0
    for f in os.listdir(audio_dir_src):
        if f.endswith('.mp3'):
            src_f = os.path.join(audio_dir_src, f)
            dst_f = os.path.join(audio_dir_dst, f)
            if not os.path.exists(dst_f) or os.path.getsize(src_f) != os.path.getsize(dst_f):
                shutil.copy2(src_f, dst_f)
                count += 1
    print(f"Synced {count} audio files to {audio_dir_dst}")

print("FULL SYNC TO BAN_CAP_NHAT_NETLIFY COMPLETED SUCCESSFULLY!")
