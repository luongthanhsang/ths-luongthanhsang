import glob, re

for f in sorted(glob.glob('*.html') + glob.glob('BAN_CAP_NHAT_NETLIFY/*.html')):
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
            if 'Học Toán không chỉ' in text:
                m = re.search(r'.{0,40}Học Toán không chỉ.{0,80}', text)
                print(f'{f}: {repr(m.group(0))}')
            else:
                pass
    except Exception as e:
        pass
