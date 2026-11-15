import subprocess
import re

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
url = 'http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b12'
cmd = [chrome_path, '--headless=new', '--dump-dom', url]
res = subprocess.run(cmd, capture_output=True, text=True)
dom = res.stdout
print("DOM length:", len(dom))

for h in re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', dom):
    print("Heading:", h)

svgs = re.findall(r'<svg[^>]*>[\s\S]*?</svg>', dom)
print("Total SVGs in DOM:", len(svgs))
for i, s in enumerate(svgs):
    vb = re.search(r'viewBox="([^"]*)"', s)
    vb_str = vb.group(1) if vb else 'no viewBox'
    print(f"SVG {i+1} viewBox: {vb_str}")
