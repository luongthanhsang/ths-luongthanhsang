# -*- coding: utf-8 -*-
import subprocess
chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--dump-dom', '--virtual-time-budget=5000', 'http://localhost:8000/test_mathjax.html']
res = subprocess.run(cmd, capture_output=True, text=True)
dom = res.stdout

for i in [1, 2, 3, 4]:
    target = f'id="test{i}"'
    pos = dom.find(target)
    if pos != -1:
        snippet = dom[pos:pos+400]
        err = "Math input error" in snippet
        print(f"test{i}: Error={err}")
    else:
        print(f"test{i}: NOT FOUND")
