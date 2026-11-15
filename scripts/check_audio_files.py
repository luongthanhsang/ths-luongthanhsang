import glob, os, re

files = glob.glob('js/lesson-*.js')
all_urls = set()
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    urls = re.findall(r'audioUrl:\s*["\']([^"\']+)["\']', text)
    for u in urls:
        all_urls.add((u, fpath))

print(f"Total unique audioUrls referenced: {len(all_urls)}")
for u, src in sorted(all_urls):
    exists = os.path.exists(u)
    if not exists:
        print(f"MISSING: {u} (referenced in {src})")
    else:
        size = os.path.getsize(u)
        print(f"FOUND: {u} ({size} bytes)")
