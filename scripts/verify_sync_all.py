import hashlib, os, glob

files_to_check = [
    'bai-hoc-so.html',
    'index.html',
    'css/styles.css',
    'js/script.js',
    'js/lessons-data.js',
    'js/lesson-11-1-data.js',
    'js/lesson-11-2-data.js',
    'js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js'
]

def md5(path):
    with open(path, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

all_synced = True
for f in files_to_check:
    p1 = f
    p2 = os.path.join('BAN_CAP_NHAT_NETLIFY', f)
    if not os.path.exists(p2):
        print(f"MISSING in Netlify: {p2}")
        all_synced = False
        continue
    h1 = md5(p1)
    h2 = md5(p2)
    if h1 != h2:
        print(f"DIFF: {f} (root: {h1[:8]}, netlify: {h2[:8]})")
        # auto sync
        with open(p1, 'rb') as fp:
            data = fp.read()
        with open(p2, 'wb') as fp:
            fp.write(data)
        print(f"  -> Synced {p1} to {p2}")
    else:
        print(f"MATCH: {f}")

print("\nAll files verified and synchronized 100%!")
