import struct, os

def get_image_size(file_path):
    with open(file_path, 'rb') as f:
        data = f.read(24)
        if data.startswith(b'\x89PNG\r\n\x1a\n'):
            w, h = struct.unpack('>II', data[16:24])
            return w, h
    return None, None

for fname in ['b11_1_verified_sec1a_spiral.png', 'b11_1_verified_sec4b_v10.png', 'b11_1_verified_quiz_q5.png']:
    p = os.path.join(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9", fname)
    w, h = get_image_size(p)
    print(f'{fname}: {w}x{h}, {os.path.getsize(p):,} bytes')
