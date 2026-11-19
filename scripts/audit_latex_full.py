# -*- coding: utf-8 -*-
import re

def audit_file(filepath):
    print("=" * 60)
    print("AUDITING FILE:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # 1. Check for single backslash math keywords inside template strings
    # We want to know where there are backslashes that might be single
    # In a JS template string, \d, \s, \c, \m, \p, etc. will drop the slash!
    # So if there's \dfrac (1 slash in file), Python sees 1 slash.
    # If there's \\dfrac (2 slashes in file), Python sees 2 slashes.
    single_slash_pat = r'(?<!\\)\\([a-zA-Z]+)'
    single_matches = list(re.finditer(single_slash_pat, text))
    
    # Filter out valid JS escape sequences like \n, \t, \r, \', \", \`
    # Also in audioScript: \n
    problematic = []
    for m in single_matches:
        word = m.group(1)
        if word in ['n', 't', 'r']: # standard escapes, but wait: in math, \tan might have become \t + 'an'!
            # Let's check if it's \text or \tan or \theta or \tau
            continue
        problematic.append((m.start(), m.group(0), word))
    
    print(f"Potential single-slash LaTeX keywords: {len(problematic)}")
    for pos, raw, word in problematic[:20]:
        ctx = text[max(0, pos-20):min(len(text), pos+30)].replace('\n', ' ')
        print(f"  Pos {pos}: {raw} -> context: '{ctx}'")

    # 2. Check for \\r\\right or strange slashes
    weird_pats = [r'\\r\\right', r'\\\left', r'\\\right', r'Extra \\left', r'missing \\right']
    for wp in weird_pats:
        wmatches = list(re.finditer(wp, text))
        if wmatches:
            print(f"Found {len(wmatches)} of pattern '{wp}'")
            for wm in wmatches[:5]:
                ctx = text[max(0, wm.start()-20):min(len(text), wm.end()+30)].replace('\n', ' ')
                print(f"    '{ctx}'")

    # 3. Check for uncompiled or broken expressions from user images:
    # dfracpi, anx, cotx, mathbbR, mathbbZ, lesinx, lecosx, xinmathbb, kinmathbb
    broken_terms = [
        r'dfracpi', r'\banx\b', r'mathbbR', r'mathbbZ', r'lesinx', r'lecosx',
        r'xinmathbb', r'kinmathbb', r'left\(', r'ight\)'
    ]
    for bt in broken_terms:
        bmatches = list(re.finditer(bt, text))
        if bmatches:
            print(f"Found {len(bmatches)} of broken term '{bt}'")
            for bm in bmatches[:3]:
                ctx = text[max(0, bm.start()-20):min(len(text), bm.end()+30)].replace('\n', ' ')
                print(f"    '{ctx}'")

audit_file('js/lesson-11-3-data.js')
audit_file('js/lesson-11-4-data.js')
