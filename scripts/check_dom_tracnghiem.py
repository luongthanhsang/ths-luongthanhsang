import subprocess
import time
import re

server_proc = subprocess.Popen(['scripts/py/python.exe', '-m', 'http.server', '8108'])
time.sleep(1.5)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
try:
    url = 'http://localhost:8108/trac-nghiem.html'
    res = subprocess.run([chrome_path, '--headless=new', '--dump-dom', url], capture_output=True, text=True, timeout=25)
    dom = res.stdout
    m = re.search(r'id="question-card-I_3"[\s\S]*?id="question-card-I_4"', dom)
    if m:
        c3 = m.group(0)
        # Extract text content by stripping HTML tags
        clean_text = re.sub(r'<[^>]+>', ' ', c3)
        clean_text = ' '.join(clean_text.split())
        print('TEXT CONTENT:')
        print(clean_text)
finally:
    server_proc.terminate()
