import glob, os, re

for f in glob.glob('*.html') + glob.glob('css/*.css') + glob.glob('js/*.js'):
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
            for m in re.finditer(r'fa-square-root|fa-root|sqrt|căn bậc|icon-math|logo', text, re.IGNORECASE):
                start = max(0, m.start() - 40)
                end = min(len(text), m.end() + 40)
                if 'square-root' in text[start:end] or 'root' in text[start:end] or 'sqrt' in text[start:end]:
                    print(f'[{f}]: {repr(text[start:end])}')
    except Exception as e:
        pass
