import pypdf
import os

pdf_path = r"C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/.user_uploaded/media_1795007621347_8b7596a6.pdf"

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

for idx, page in enumerate(reader.pages):
    print(f"\n--- PAGE {idx+1} ---")
    txt = page.extract_text()
    print(txt[:600])
