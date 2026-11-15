import os, re

for fname in os.listdir('js'):
    if fname.endswith('.js'):
        path = os.path.join('js', fname)
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
            # find <svg and \vec
            svgs = re.findall(r'<svg[\s\S]*?</svg>', text)
            for idx, s in enumerate(svgs):
                if '\\vec' in s or '\\overrightarrow' in s:
                    print(f"File {fname}, SVG #{idx+1} contains \\vec or \\overrightarrow:")
                    for line in s.splitlines():
                        if '\\vec' in line or '\\overrightarrow' in line:
                            print("  ", line.strip())
