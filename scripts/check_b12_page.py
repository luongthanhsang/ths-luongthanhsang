import subprocess
import os

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
url = 'http://localhost:8000/bai-hoc-so.html?lesson=11-c4-b12'
out_path = os.path.abspath('scripts/b12_page.png')
cmd = [chrome_path, '--headless=new', f'--screenshot={out_path}', '--window-size=1200,900', url]
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
print("File exists:", os.path.exists(out_path))
