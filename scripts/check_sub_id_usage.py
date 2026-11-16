import glob

for fpath in ["css/style.css", "js/script.js", "bai-hoc-so.html"]:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "#sub-" in content:
        print(f"#sub- found in {fpath}")
    if "[data-subkey" in content:
        print(f"[data-subkey found in {fpath}")
