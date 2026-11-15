import sys
sys.path.append('scripts')
from test_dom_render import dump_dom
import re

dom = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3&v=test_hook2")
m = re.search(r'<div class="lesson-hook-card"[\s\S]*?</div>\s*</div>\s*</div>', dom)
if m:
    print(m.group(0)[:800])
else:
    print("Match not found, search 'lesson-hook-card':", 'lesson-hook-card' in dom)
    idx = dom.find('lesson-hook-card')
    if idx != -1:
        print(dom[idx:idx+800])
