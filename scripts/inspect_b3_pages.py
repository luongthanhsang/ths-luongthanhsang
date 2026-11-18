with open("scripts/b3_extracted_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

pages = text.split("=== PAGE ")
for p in pages[1:]:
    p_num = p.split(" ===")[0]
    lines = [l.strip() for l in p.split("\n") if l.strip()]
    print(f"\n--- PAGE {p_num} (first 8 lines) ---")
    for l in lines[:8]:
        print(l)
