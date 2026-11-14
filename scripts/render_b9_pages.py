import fitz  # PyMuPDF
import os

pdf_path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794660649369_1b934bff.pdf"
doc = fitz.open(pdf_path)
out_dir = "scripts/extracted_b9"
os.makedirs(out_dir, exist_ok=True)

print(f"Total pages: {len(doc)}")
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    img_path = f"{out_dir}/page_{i+1}.png"
    pix.save(img_path)
    print(f"Saved {img_path} ({pix.width}x{pix.height})")
