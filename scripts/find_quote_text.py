import glob, re

for f in glob.glob('*.html') + glob.glob('js/*.js'):
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
            if 'Học Toán không chỉ để đạt điểm số cao' in text:
                print('Found in:', f)
                for m in re.finditer(r'.{0,50}Học Toán không chỉ để đạt điểm số cao.{0,100}', text):
                    print('  ', repr(m.group(0)))
    except Exception as e:
        pass
