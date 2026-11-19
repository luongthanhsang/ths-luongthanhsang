import glob, os

for f in glob.glob('*.html') + glob.glob('BAN_CAP_NHAT_NETLIFY/*.html') + glob.glob('css/*.css') + glob.glob('js/*.js'):
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
            if 'logo-ths-sang.png' in text:
                print('Referenced in:', f)
    except Exception as e:
        pass
