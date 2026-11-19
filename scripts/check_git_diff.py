import subprocess

out = subprocess.check_output(['git', 'diff', 'js/lesson-11-1-data.js'], encoding='utf-8', errors='ignore')
print('Diff length:', len(out))
if len(out) > 0:
    print(out[:1500])
else:
    print('No uncommitted diff on js/lesson-11-1-data.js')
