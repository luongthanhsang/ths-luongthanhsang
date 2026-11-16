import os, glob

css_files = glob.glob("**/*.css", recursive=True)
print("CSS files:", css_files)
for c in css_files:
    with open(c, "r", encoding="utf-8") as f:
        t = f.read()
    if "#sub-" in t:
        print(f"Found #sub- in {c}")
