import fitz  # PyMuPDF
import os

pdf_paths = [
    ("Bài 9", r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660649369_1b934bff.pdf"),
    ("Bài 10", r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660654187_c26f60dd.pdf"),
    ("Bài 11", r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660659299_f0a4f5c9.pdf"),
]

for name, path in pdf_paths:
    print(f"\n==================== {name}: {os.path.basename(path)} ====================")
    if not os.path.exists(path):
        print("FILE NOT FOUND!")
        continue
    doc = fitz.open(path)
    print(f"Total pages: {len(doc)}")
    for i in range(len(doc)):
        page = doc[i]
        text = page.get_text()
        first_line = text.strip().split('\n')[0] if text.strip() else 'EMPTY'
        print(f"  Page {i+1}: length={len(text)}, first line: {repr(first_line)}")
