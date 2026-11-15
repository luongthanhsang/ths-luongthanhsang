import subprocess

cmd = ['scripts/py/python.exe', '-m', 'edge_tts', '--list-voices']
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
lines = [l for l in res.stdout.splitlines() if 'vi-VN' in l]
for l in lines:
    print(l)
