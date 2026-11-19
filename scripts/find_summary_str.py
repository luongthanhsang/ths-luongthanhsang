import glob

for f in glob.glob('js/*.js'):
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
            if 'Thần chú Cos đối, Sin bù, Phụ chéo' in text:
                print('Found in:', f)
    except Exception as e:
        pass
