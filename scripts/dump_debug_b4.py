# -*- coding: utf-8 -*-
import subprocess

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--incognito', '--dump-dom', '--virtual-time-budget=8000', 'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b4&nocache=999']
res = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
dom = res.stdout

with open('debug_dom_b4.html', 'w', encoding='utf-8') as f:
    f.write(dom)

print("Saved debug_dom_b4.html, length:", len(dom))
for idx, line in enumerate(dom.splitlines()):
    if 'Math input error' in line or 'merror' in line:
        print(f"Line {idx}: {line[:200]}")
