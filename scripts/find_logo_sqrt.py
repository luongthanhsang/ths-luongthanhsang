import os, re

files = [f for f in os.listdir('.') if f.endswith('.html')] + ['css/styles.css', 'js/script.js']

for fn in files:
    if os.path.exists(fn):
        with open(fn, 'r', encoding='utf-8') as f:
            c = f.read()
            for pattern in ['fa-square-root', 'logo', 'brand', 'nav-logo', 'site-logo', 'radic', 'sqrt']:
                matches = re.findall(rf'.{{0,50}}{pattern}.{{0,50}}', c, re.IGNORECASE)
                if matches:
                    print(f"=== {fn} (matched {pattern}) ===")
                    for m in matches[:5]:
                        print("  ", m.strip())
