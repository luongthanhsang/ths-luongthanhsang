import fitz, os

os.makedirs("scripts/pdf_pages", exist_ok=True)
doc = fitz.open(r"C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/.user_uploaded/media_1795007621347_8b7596a6.pdf")

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    out_path = f"scripts/pdf_pages/page_{i+1}.png"
    pix.save(out_path)
    print(f"Saved {out_path} ({pix.width}x{pix.height})")
