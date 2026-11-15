import fitz
import os

pdf_files = [
    "assets/docs/HSG_Toan_An_Giang_2024_2025_De_va_Loi_Giai.pdf",
    "assets/docs/HSG_Toan_An_Giang_2023_2024_De_va_Loi_Giai.pdf",
    "assets/docs/HSG_Toan_Kien_Giang_2023_2024_De_va_Loi_Giai.pdf"
]

for p in pdf_files:
    print(f"\n==========================================")
    print(f"FILE: {p}")
    print(f"==========================================")
    doc = fitz.open(p)
    print("Num pages:", len(doc))
    print(f"Size: {round(os.path.getsize(p)/1024, 1)} KB")
    for i in range(min(5, len(doc))):
        print(f"--- Page {i+1} ---")
        lines = [line.strip() for line in doc[i].get_text("text").split("\n") if line.strip()]
        print("\n".join(lines[:12]))
