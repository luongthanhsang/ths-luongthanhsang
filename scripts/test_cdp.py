import subprocess, time, json, urllib.request

cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c3-b6"
]
proc = subprocess.Popen(cmd)
time.sleep(2)

try:
    req = urllib.request.urlopen("http://localhost:9222/json")
    tabs = json.loads(req.read().decode())
    print("Open tabs in Chrome:", len(tabs))
    for t in tabs:
        print(t.get('title'), t.get('url'), t.get('webSocketDebuggerUrl'))
finally:
    proc.terminate()
