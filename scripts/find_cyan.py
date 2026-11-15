import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

# In the bottom area (caption area y > 150), let's find the text colors
cyan_pixels = []
for y in range(140, pix.height):
    for x in range(pix.width):
        r, g, b = pix.pixel(x, y)[:3]
        if b > 150 and r < 100:
            cyan_pixels.append((r, g, b))

if cyan_pixels:
    # average
    avg_r = sum(p[0] for p in cyan_pixels) // len(cyan_pixels)
    avg_g = sum(p[1] for p in cyan_pixels) // len(cyan_pixels)
    avg_b = sum(p[2] for p in cyan_pixels) // len(cyan_pixels)
    print(f"Cyan text color: rgb({avg_r}, {avg_g}, {avg_b}) -> #{avg_r:02x}{avg_g:02x}{avg_b:02x}")
