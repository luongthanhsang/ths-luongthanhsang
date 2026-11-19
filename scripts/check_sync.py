# -*- coding: utf-8 -*-
import filecmp, os

files = [
    'js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js',
    'js/script.js',
    'css/styles.css'
]

all_sync = True
for f in files:
    f_root = f
    f_net = os.path.join('BAN_CAP_NHAT_NETLIFY', f)
    same = filecmp.cmp(f_root, f_net, shallow=False)
    print(f"Comparing {f_root} <--> {f_net}: {'MATCH 100%' if same else 'DIFFERS'}")
    if not same:
        all_sync = False

print("\nALL FILES FULLY SYNCHRONIZED:", all_sync)
