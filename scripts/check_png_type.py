path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1795005831131_5e3a3ced.png"
with open(path, "rb") as f:
    data = f.read()

# Check color type in IHDR
# IHDR is at offset 8+4=12 ("IHDR"), length 13
# 16..20: width, 20..24: height, 24: bit depth, 25: color type
bit_depth = data[24]
color_type = data[25]
print(f"Bit depth: {bit_depth}, Color type: {color_type}")
# color types: 0: grayscale, 2: RGB, 3: indexed, 4: grayscale+alpha, 6: RGBA
type_names = {0: "grayscale", 2: "RGB", 3: "indexed", 4: "grayscale+alpha", 6: "RGBA"}
print(f"Color type name: {type_names.get(color_type, 'unknown')}")
