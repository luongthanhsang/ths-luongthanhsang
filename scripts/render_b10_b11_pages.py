import fitz
import os

for name, pdf_path, out_dir in [
    ("Bài 10", r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660654187_c26f60dd.pdf", "scripts/extracted_b10"),
    ("Bài 11", r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660659299_f0a4f5c9.pdf", "scripts/extracted_b11")
]:
    doc = fitz.open(pdf_path)
    os.makedirs(out_dir, exist_ok=True)
    print(f"{name}: {len(doc)} pages")
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        img_path = f"{out_dir}/page_{i+1}.png"
        pix.save(img_path)
        print(f"Saved {img_path}")
