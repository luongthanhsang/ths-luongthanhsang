import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

# Scan each horizontal line in panel 1 (x: 0..250)
print("Scanning panel 1 (x: 0..250) for horizontal lines:")
for y in range(10, 160):
    dark_pixels = [x for x in range(0, 250) if pix.pixel(x, y)[0] < 80 and pix.pixel(x, y)[1] < 80 and pix.pixel(x, y)[2] < 80]
    if len(dark_pixels) > 50:
        print(f"y={y}: len={len(dark_pixels)}, x_min={min(dark_pixels)}, x_max={max(dark_pixels)}")
