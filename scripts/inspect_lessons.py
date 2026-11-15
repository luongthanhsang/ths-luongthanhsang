import glob, os, re

files = sorted(glob.glob('js/lesson-*.js'))
print(f'Found {len(files)} lesson data files.')

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check teacherWelcome
    m_tw = re.search(r'teacherWelcome:\s*(\{[\s\S]*?\n\s*\}|"[^"\n]*")', content)
    tw_type = 'missing'
    if m_tw:
        val = m_tw.group(1).strip()
        if val.startswith('{'): tw_type = 'object'
        elif val.startswith('"'): tw_type = 'string'
        else: tw_type = 'other'

    # Check learningGoals
    m_lg = re.search(r'learningGoals:\s*(\[[^\]]*\])', content)
    lg_type = 'none'
    if m_lg:
        val = m_lg.group(1)
        if '{' in val:
            lg_type = 'has_objects'
        else:
            lg_type = 'strings'

    print(f'{fpath}: tw={tw_type}, lg={lg_type}')
