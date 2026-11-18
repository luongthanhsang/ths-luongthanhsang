import fitz

pdf_path = r"C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/.user_uploaded/media_1795007621347_8b7596a6.pdf"
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

full_text = []
for idx, page in enumerate(doc):
    txt = page.get_text()
    full_text.append(f"=== PAGE {idx+1} ===\n" + txt)

with open("scripts/b3_extracted_text.txt", "w", encoding="utf-8") as f:
    f.write("\n\n".join(full_text))

print("Extracted to scripts/b3_extracted_text.txt successfully!")
