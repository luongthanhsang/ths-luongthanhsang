import subprocess

html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { background: white; margin: 20px; font-family: sans-serif; }
</style>
</head>
<body>
<h3>Current SVG 2 in lesson-11-12-data.js:</h3>
<div style="border: 1px solid #ccc; padding: 20px; display: inline-block;">
"""

with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('viewBox="0 0 780 230"')
end = text.find('</svg>', idx) + 6
svg_code = text[idx-5:end]

html_content += svg_code + """
</div>
</body>
</html>
"""

with open('scripts/test_svg2.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--screenshot=scripts/current_svg2.png', '--window-size=900,400', 'scripts/test_svg2.html']
subprocess.run(cmd)
print("Screenshot captured to scripts/current_svg2.png")
