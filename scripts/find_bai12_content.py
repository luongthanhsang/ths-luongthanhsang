import os

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith(('.html', '.js', '.json')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as file:
                    c = file.read()
                    if 'Đường thẳng và mặt phẳng song song' in c or 'Bài 12' in c:
                        print(f"Found in {path}")
            except Exception:
                pass
