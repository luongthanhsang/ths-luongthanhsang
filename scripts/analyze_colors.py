import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

# Find the dominant non-white colors
color_counts = {}
for y in range(pix.height):
    for x in range(pix.width):
        r, g, b = pix.pixel(x, y)[:3]
        if r < 240 or g < 240 or b < 240:
            # check if cyan/blue
            if b > r + 30 and g > r + 20:
                key = f"cyan_like: rgb({r},{g},{b})"
            elif r < 60 and g < 60 and b < 60:
                key = "black_line"
            else:
                key = "other"
            color_counts[key] = color_counts.get(key, 0) + 1

for k, v in sorted(color_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
    print(k, v)
