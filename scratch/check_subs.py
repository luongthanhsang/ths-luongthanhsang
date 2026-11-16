import glob, re

for f in sorted(glob.glob('js/lesson-*.js')):
    with open(f, encoding='utf-8') as fp:
        c = fp.read()
    sec_blocks = re.split(r'num:\s*["\']?\d+["\']?', c)
    print(f"{f}: has {len(sec_blocks)-1} sections")
