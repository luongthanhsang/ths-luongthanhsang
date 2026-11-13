import subprocess
import time
import re
import os

server_proc = subprocess.Popen(['scripts/py/python.exe', '-m', 'http.server', '8105'])
time.sleep(1.5)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

try:
    for target, url in [
        ("Root Lesson 8", "http://localhost:8105/bai-hoc-so.html?grade=12&lesson=12-c2-b8"),
        ("Netlify Lesson 8", "http://localhost:8105/BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html?grade=12&lesson=12-c2-b8")
    ]:
        print(f"\n==================== Verifying {target}: {url} ====================")
        chrome_args = [
            chrome_path,
            '--headless=new',
            '--dump-dom',
            url
        ]
        res = subprocess.run(chrome_args, capture_output=True, text=True, timeout=25)
        dom = res.stdout
        print(f"DOM length: {len(dom)}")

        # Strip scripts
        dom_no_scripts = re.sub(r'<script.*?</script>', '', dom, flags=re.DOTALL)

        # Check for undefined
        undef_matches = re.findall(r'[^<>"\']{0,30}undefined[^<>"\']{0,30}', dom_no_scripts)
        print("Visible 'undefined' count in rendered HTML:", len(undef_matches))
        for u in undef_matches:
            print("   -> ALERT UNDEFINED:", u.strip())

        # Check buttons
        check_matches = re.findall(r'Kiểm tra câu [^\s<]+', dom_no_scripts)
        print("Check buttons found:", check_matches)

        # Check True-False item rows
        tf_rows = re.findall(r'<tr class="tf-item-row"[^>]*>.*?</tr>', dom_no_scripts, flags=re.DOTALL)
        print(f"True-False rows count: {len(tf_rows)}")

        # Check POI markers
        poi_markers = re.findall(r'marker-poi-[0-1]', dom_no_scripts)
        print(f"POI markers found: {len(poi_markers)}")

        # Check exam cards
        cards = re.findall(r'exam-item-card', dom_no_scripts)
        print(f"Exam item cards found: {len(cards)}")

finally:
    server_proc.terminate()

print("\nVerification finished!")
