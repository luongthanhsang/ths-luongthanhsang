import fitz

doc = fitz.open(r"C:/Users/Hp/.gemini/antigravity/brain/11f82038-0c61-4794-81cd-02e242f3fac9/.user_uploaded/media_1795007621347_8b7596a6.pdf")
for i, page in enumerate(doc):
    images = page.get_images()
    text = page.get_text()
    print(f"Page {i+1}: text len = {len(text)}, images count = {len(images)}")
