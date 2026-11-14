import urllib.request
import re
import os

file_id = "15IvacJ6ijo8OFszkmhVPrjQxHny5X_lb"
url = f"https://drive.google.com/file/d/{file_id}/view?usp=sharing"

req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
        
        title_m = re.search(r"<title>(.*?)</title>", html)
        if title_m:
            print("PAGE TITLE:", title_m.group(1))
            
        og_m = re.search(r'<meta property="og:title" content="(.*?)"', html)
        if og_m:
            print("OG TITLE:", og_m.group(1))
            
        matches = re.findall(r'"title":"([^"]+)"', html)
        for m in matches[:5]:
            print("TITLE MATCH:", m)
except Exception as e:
    print("Error:", e)
