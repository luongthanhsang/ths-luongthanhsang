import os

for p in ['assets/images/logo-ths-sang.png', 'BAN_CAP_NHAT_NETLIFY/assets/images/logo-ths-sang.png']:
    print(p, 'exists:', os.path.exists(p), 'size:', os.path.getsize(p) if os.path.exists(p) else 0)
