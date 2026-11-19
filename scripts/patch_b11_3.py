def patch_file(filepath):
    print(f"Patching {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        ('hint: "Áp dụng công thức chu kì của y = A sin(omega x): T = 2pi / |omega|.",',
         'hint: "Áp dụng công thức chu kì của $y = A\\\\sin(\\\\omega x)$: $T = \\\\dfrac{2\\\\pi}{|\\\\omega|}$."')
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"  -> Replaced: {old[:50]}...")
        else:
            print(f"  -> Match not found: {old[:50]}...")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Done patching {filepath}.")

patch_file('js/lesson-11-3-data.js')
patch_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
