import subprocess
import os

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b12'
out_path = os.path.abspath('scripts/b12_updated_section.png')

cmd = [chrome_path, '--headless=new', f'--screenshot={out_path}', '--window-size=1200,1200', url]
subprocess.run(cmd)
print("Screenshot saved to:", out_path, "Exists:", os.path.exists(out_path))
