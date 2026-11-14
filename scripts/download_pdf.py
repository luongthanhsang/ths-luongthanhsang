import urllib.request
import os

file_id = "15IvacJ6ijo8OFszkmhVPrjQxHny5X_lb"
out_dir = "assets/docs"
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "De_va_Loi_giai_HSG_An_Giang_2025_2026.pdf")

# Direct download url for google drive
download_urls = [
    f"https://drive.usercontent.google.com/download?id={file_id}&export=download&authuser=0",
    f"https://drive.google.com/uc?export=download&id={file_id}"
]

for url in download_urls:
    print(f"Trying {url}...")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req) as resp, open(out_path, "wb") as f:
            f.write(resp.read())
        size = os.path.getsize(out_path)
        print(f"Downloaded {size} bytes")
        if size > 10000:
            print("Successfully downloaded PDF!")
            break
    except Exception as e:
        print("Failed:", e)
