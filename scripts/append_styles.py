with open('scripts/extra_styles.css', 'r', encoding='utf-8') as f:
    extra = f.read()

for p in ['css/styles.css', 'BAN_CAP_NHAT_NETLIFY/css/styles.css']:
    with open(p, 'a', encoding='utf-8') as f:
        f.write("\n" + extra)
    print(f"Appended styles to {p}")
