import os, glob

folder = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded"
files = glob.glob(os.path.join(folder, "*"))
files.sort(key=os.path.getmtime, reverse=True)
for f in files[:10]:
    print(f"{os.path.basename(f)}: size={os.path.getsize(f)}, mtime={os.path.getmtime(f)}")
