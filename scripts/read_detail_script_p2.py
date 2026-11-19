with open('scripts/capture_all_detail_views.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for l in lines[25:65]:
    print(l, end='')
