for f in ['js/lesson-11-1-data.js', 'js/lesson-11-2-data.js', 'js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    for l in lines[:30]:
        if 'window.' in l:
            print(f'{f}: {l.strip()[:60]}')
            break
