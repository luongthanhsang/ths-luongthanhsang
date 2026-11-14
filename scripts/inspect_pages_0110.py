with open("de_thi_0110_extracted_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

pages = text.split("--- PAGE ")
for p in pages[1:]:
    lines = p.strip().split("\n")
    header = lines[0]
    preview = "\n".join(lines[1:8])
    print(f"=== PAGE {header} ===")
    print(preview)
    print("---------------------------------")
