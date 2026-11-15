# -*- coding: utf-8 -*-
import subprocess

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--dump-dom', '--virtual-time-budget=5000', 'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3']
res = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
dom = res.stdout

with open('debug_dom_b3.html', 'w', encoding='utf-8') as f:
    f.write(dom)

print("Saved debug_dom_b3.html, length:", len(dom))
for line in dom.splitlines():
    if 'LESSON_10' in line or '10-c2-b3' in line or 'svg' in line.lower() or 'câu 1' in line.lower():
        print("  MATCH:", line[:120])
