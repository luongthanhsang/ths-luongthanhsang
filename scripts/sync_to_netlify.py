import os, shutil

root_dir = r"d:\Wed_ThS. Lương Thanh Sáng"
netlify_dir = os.path.join(root_dir, "BAN_CAP_NHAT_NETLIFY")

sync_items = [
    "index.html",
    "bai-hoc-so.html",
    "trac-nghiem.html",
    "kho-tai-lieu.html",
    "css",
    "js",
    "assets"
]

for item in sync_items:
    src = os.path.join(root_dir, item)
    dst = os.path.join(netlify_dir, item)
    if os.path.isdir(src):
        if os.path.exists(dst):
            shutil.rmtree(dst)
        shutil.copytree(src, dst)
        print(f"Synced directory: {item}")
    elif os.path.isfile(src):
        shutil.copy2(src, dst)
        print(f"Synced file: {item}")

print("=== SYNC COMPLETE ===")
