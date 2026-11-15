import os, shutil

files_to_sync = [
    ('js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js'),
    ('css/olm-lesson.css', 'BAN_CAP_NHAT_NETLIFY/css/olm-lesson.css'),
    ('js/b10-5-audio-cache.js', 'BAN_CAP_NHAT_NETLIFY/js/b10-5-audio-cache.js'),
    ('js/b10-6-audio-cache.js', 'BAN_CAP_NHAT_NETLIFY/js/b10-6-audio-cache.js'),
]

for src, dst in files_to_sync:
    if os.path.exists(src):
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(src, dst)
        print(f"Synced: {src} -> {dst} ({os.path.getsize(dst):,} bytes)")
    else:
        print(f"Source not found: {src}")

# Also check assets/audio
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
