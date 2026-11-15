import subprocess

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--enable-logging=stderr",
    "--v=1",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6"
]
res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
print("STDOUT len:", len(res.stdout))
print("STDERR:")
print(res.stderr[:2000])
