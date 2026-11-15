import urllib.request
import re
import os

files = [
    {"id": "1J-wTZ9GENRNFEo1Nqk7ifdLIeHTDfqME", "label": "File 1"},
    {"id": "18aJzBDVx09H07UeBsibyTfld8Noz5fyl", "label": "File 2"},
    {"id": "1L31cOiKYP9mn6IZ5yyHS-uyIXe7MUPl8", "label": "File 3"},
]

out_dir = "assets/docs"
os.makedirs(out_dir, exist_ok=True)

for item in files:
    fid = item["id"]
    url = f"https://drive.google.com/file/d/{fid}/view?usp=sharing"
    print(f"=== Checking {item['label']} ({fid}) ===")
    
    # 1. Fetch metadata
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    fname = f"doc_{fid}.pdf"
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
            title_m = re.search(r"<title>(.*?)</title>", html)
            if title_m:
                title = title_m.group(1).replace(" - Google Drive", "").strip()
                print("Title:", title)
                if title and not title.startswith("http"):
                    fname = title
            og_m = re.search(r'<meta property="og:title" content="(.*?)"', html)
            if og_m:
                print("OG Title:", og_m.group(1))
    except Exception as e:
        print("Meta error:", e)
        
    # Sanitize fname
    clean_fname = re.sub(r'[\\/*?:"<>|]', "_", fname)
    if not clean_fname.lower().endswith(".pdf"):
        clean_fname += ".pdf"
    item["filename"] = clean_fname
    item["out_path"] = os.path.join(out_dir, clean_fname)
    
    # 2. Download file
    download_urls = [
        f"https://drive.usercontent.google.com/download?id={fid}&export=download&authuser=0",
        f"https://drive.google.com/uc?export=download&id={fid}"
    ]
    downloaded = False
    for durl in download_urls:
        try:
            req = urllib.request.Request(durl, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
            with urllib.request.urlopen(req) as resp, open(item["out_path"], "wb") as f:
                f.write(resp.read())
            size = os.path.getsize(item["out_path"])
            print(f"Downloaded {size} bytes to {item['out_path']}")
            if size > 5000:
                downloaded = True
                break
        except Exception as e:
            print(f"Download error from {durl}:", e)
    item["success"] = downloaded

print("\nSUMMARY:")
for item in files:
    print(item)
