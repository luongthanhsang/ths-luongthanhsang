import fitz
import os

pdf_files = [
    "assets/docs/11.C1. LG.pdf",
    "assets/docs/11.C2. DS-CSC-CSN.pdf",
    "assets/docs/11.C4.Quan hệ song song.pdf"
]

for p in pdf_files:
    print(f"\n==========================================")
    print(f"FILE: {p}")
    print(f"==========================================")
    doc = fitz.open(p)
    print("Num pages:", len(doc))
    print(f"Size: {round(os.path.getsize(p)/1024, 1)} KB")
    for i in range(min(4, len(doc))):
        print(f"--- Page {i+1} ---")
        lines = [line.strip() for line in doc[i].get_text("text").split("\n") if line.strip()]
        print("\n".join(lines[:15]))
