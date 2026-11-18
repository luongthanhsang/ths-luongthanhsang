import struct

path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1795005831131_5e3a3ced.png"
with open(path, "rb") as f:
    header = f.read(24)
    # PNG signature: 8 bytes, IHDR length: 4 bytes, chunk type: 4 bytes ("IHDR"), width: 4 bytes, height: 4 bytes
    w, h = struct.unpack(">II", header[16:24])
    print(f"PNG Image dimensions: {w} x {h}")
