import subprocess, os

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [chrome_path, "--headless=new", "--disable-gpu", "--screenshot=test_svg_vector.png", "http://localhost:8000/test_svg_vector.html"]
subprocess.run(cmd)

if os.path.exists('test_svg_vector.png'):
    print("Screenshot created! Size:", os.path.getsize('test_svg_vector.png'))
else:
    print("Screenshot failed")
