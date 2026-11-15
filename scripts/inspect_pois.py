import sys
sys.path.append('scripts')
from test_b5_b6_render import dump_dom
import re

dom = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b5&v=20261115_05")
matches = re.findall(r'<div[^>]*class="[^"]*poi[^"]*"[^>]*>[\s\S]*?</div>', dom)
print(f"Found {len(matches)} POI elements in b5 DOM")
for m in matches[:5]:
    print("--- POI Snippet ---")
    print(m[:300])
