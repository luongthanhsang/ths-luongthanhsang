import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

def scan_panel(name, x_range):
    print(f"=== {name} ===")
    for y in range(10, 160):
        dark_pixels = [x for x in x_range if pix.pixel(x, y)[0] < 80 and pix.pixel(x, y)[1] < 80 and pix.pixel(x, y)[2] < 80]
        if len(dark_pixels) > 40:
            print(f"y={y}: len={len(dark_pixels)}, x_min={min(dark_pixels)}, x_max={max(dark_pixels)}")

scan_panel("Panel 2", range(250, 520))
scan_panel("Panel 3", range(520, 768))
