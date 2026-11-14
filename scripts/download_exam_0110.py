import urllib.request
import re
import os

file_id = "1PQgvgXA9tXRJwnj5eUHnnCu1Nj58tzD7"
pdf_path = "de_thi_2026_0110.pdf"

url = f"https://drive.google.com/uc?export=download&id={file_id}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

print("Downloading PDF...")
try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read()
        # check if it's direct download or confirm page
        if b"%PDF" in content[:100]:
            with open(pdf_path, "wb") as f:
                f.write(content)
            print(f"Direct download successful! Size: {len(content)} bytes")
        else:
            text = content.decode('utf-8', errors='ignore')
            # Look for confirm token
            confirm_match = re.search(r'confirm=([^&"\']+)', text)
            if confirm_match:
                confirm_token = confirm_match.group(1)
                confirm_url = f"https://drive.google.com/uc?export=download&confirm={confirm_token}&id={file_id}"
                print(f"Found confirm token, downloading from: {confirm_url}")
                req2 = urllib.request.Request(confirm_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req2) as resp2:
                    content2 = resp2.read()
                    with open(pdf_path, "wb") as f:
                        f.write(content2)
                    print(f"Downloaded via confirm! Size: {len(content2)} bytes")
            else:
                # Try google drive api download url
                alt_url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&authuser=0"
                print(f"Trying alt url: {alt_url}")
                req3 = urllib.request.Request(alt_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req3) as resp3:
                    content3 = resp3.read()
                    with open(pdf_path, "wb") as f:
                        f.write(content3)
                    print(f"Downloaded via alt! Size: {len(content3)} bytes")

    if os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 1000:
        print(f"PDF saved as {pdf_path}, size: {os.path.getsize(pdf_path)} bytes")
    else:
        print("Download failed or file too small!")

except Exception as e:
    print("Download error:", e)
