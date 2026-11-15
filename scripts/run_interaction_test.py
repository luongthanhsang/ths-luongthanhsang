import subprocess, re

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--virtual-time-budget=6000",
    "--dump-dom",
    "http://localhost:8000/test_interaction.html"
]

dom = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8').stdout
match = re.search(r'<div id="test-output"><pre>([\s\S]*?)</pre></div>', dom)
if match:
    print("=== TEST RESULTS ===")
    print(match.group(1))
else:
    print("Output not found, inspecting snippet:")
    print(dom[dom.find('<div id="test-output">'):dom.find('<div id="test-output">')+500])
