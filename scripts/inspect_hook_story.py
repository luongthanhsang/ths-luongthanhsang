import sys
sys.path.append('scripts')
from test_dom_render import dump_dom
import re

dom = dump_dom("http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3&v=test_hook3")
m = re.search(r'<div class="hook-story">([\s\S]*?)</div>\s*<div class="lesson-illustration-box">', dom)
if m:
    print("=== HOOK STORY DOM ===")
    print(m.group(1))
else:
    idx = dom.find('class="hook-story"')
    print(dom[idx:idx+600])
