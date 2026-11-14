from PIL import Image

img = Image.open("pdf_pages_0110/page_4.png")
w, h = img.size
print(f"Page 4 image size: {w} x {h}")

# Crop region around Câu 3 (roughly vertical 30% to 65%)
crop_box = (0, int(h * 0.25), w, int(h * 0.65))
cropped = img.crop(crop_box)
cropped.save("pdf_pages_0110/cau_3_crop.png")
print("Saved pdf_pages_0110/cau_3_crop.png")
