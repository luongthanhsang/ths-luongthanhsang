import subprocess
import os

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
html_path = os.path.abspath('scripts/test_svg2.html')
out_path = os.path.abspath('scripts/current_svg2.png')

cmd = [chrome_path, '--headless=new', f'--screenshot={out_path}', '--window-size=900,450', f'file:///{html_path}']
subprocess.run(cmd)
print("Captured to:", out_path, "Exists:", os.path.exists(out_path))
