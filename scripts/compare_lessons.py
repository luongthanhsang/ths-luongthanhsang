for b in ['1', '2', '3', '4']:
    f1 = f'js/lesson-11-{b}-data.js'
    f2 = f'BAN_CAP_NHAT_NETLIFY/js/lesson-11-{b}-data.js'
    with open(f1, 'r', encoding='utf-8') as fp1, open(f2, 'r', encoding='utf-8') as fp2:
        c1 = fp1.read()
        c2 = fp2.read()
    print(f'Lesson 11-{b} identical: {c1 == c2} (len: {len(c1)})')
