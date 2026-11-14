import fitz
import os

pdf_path = "de_thi_2026_0110.pdf"
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

output_dir = "pdf_pages_0110"
os.makedirs(output_dir, exist_ok=True)

all_text = []

for i, page in enumerate(doc):
    text = page.get_text()
    all_text.append(f"--- PAGE {i+1} ---\n" + text)
    # Render page to image
    pix = page.get_pixmap(dpi=150)
    img_path = os.path.join(output_dir, f"page_{i+1}.png")
    pix.save(img_path)
    print(f"Page {i+1} saved, text length: {len(text)}")

full_text = "\n\n".join(all_text)
with open("de_thi_0110_extracted_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"Saved extracted text to de_thi_0110_extracted_text.txt, total chars: {len(full_text)}")
