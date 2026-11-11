
/**
 * DỮ LIỆU ĐỀ KIỂM TRA TRỰC TUYẾN - TOÁN THPT NGUYỄN VĂN THOẠI (AN GIANG)
 * ====================================================================
 * Tác giả: ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)
 * Năm học: 2026 - 2027
 * Bao gồm các bộ đề thi chuẩn quy định mới nhất của Bộ GD&ĐT:
 * 1. ĐỀ TOÁN 11 - GIỮA KÌ I (MÃ ĐỀ: 11.GK1.TK4) [MỚI CẬP NHẬT]
 *    - Phần I: 16 câu trắc nghiệm nhiều phương án lựa chọn (A, B, C, D) - 4.0 điểm
 *    - Phần II: 3 câu trắc nghiệm Đúng / Sai (12 ý a, b, c, d) - 3.0 điểm
 *    - Phần III: 2 câu Tự luận có barem và lời giải chi tiết từng bước - 3.0 điểm
 * 2. ĐỀ TOÁN 12 - GIỮA KÌ I (MÃ ĐỀ: 0002)
 *    - Phần I: 12 câu trắc nghiệm nhiều phương án lựa chọn (A, B, C, D) - 3.0 điểm
 *    - Phần II: 4 câu trắc nghiệm Đúng / Sai - 4.0 điểm
 *    - Phần III: 6 câu trắc nghiệm Trả lời ngắn - 3.0 điểm
 */

// ==================== CÁC HÌNH VẼ SVG ĐỒ HỌA CHUẨN TIKZ (TOÁN 11) ====================

// SVG Câu 7: Trò chơi đánh đu Hội Lim (Bắc Ninh)
const SVG_TOAN11_CAU7 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 260" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <defs>
    <marker id="arrow-acc7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ae2012"/>
    </marker>
  </defs>
  <!-- Trục cân bằng thẳng đứng -->
  <line x1="160" y1="20" x2="160" y2="235" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="175" y="125" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-style="italic" fill="#005f73" transform="rotate(90 175,125)">Vị trí cân bằng</text>
  
  <!-- Cung dao động cây đu -->
  <path d="M 70,185 A 190,190 0 0 0 250,185" fill="none" stroke="#0a9396" stroke-width="2.5"/>
  <circle cx="70" cy="185" r="3.5" fill="#1e293b"/>
  <circle cx="250" cy="185" r="3.5" fill="#1e293b"/>
  
  <!-- Đỉnh treo O -->
  <circle cx="160" cy="30" r="4.5" fill="#005f73"/>
  <text x="160" y="20" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" text-anchor="middle" fill="#005f73">O</text>
  
  <!-- Dây đu lúc lệch (P) -->
  <line x1="160" y1="30" x2="95" y2="195" stroke="#005f73" stroke-width="2.4"/>
  <!-- Vị trí đối xứng mờ -->
  <line x1="160" y1="30" x2="225" y2="195" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,3"/>
  
  <!-- Bàn đu -->
  <line x1="75" y1="198" x2="115" y2="192" stroke="#78350f" stroke-width="4.5" stroke-linecap="round"/>
  
  <!-- Người chơi đu -->
  <circle cx="95" cy="162" r="5.5" fill="#ae2012"/>
  <line x1="95" y1="167" x2="95" y2="186" stroke="#ae2012" stroke-width="2.8"/>
  <polyline points="85,178 95,173 103,165" fill="none" stroke="#ae2012" stroke-width="1.8" stroke-linecap="round"/>
  <polyline points="88,196 95,186 102,194" fill="none" stroke="#005f73" stroke-width="2.2" stroke-linecap="round"/>
  
  <!-- Mũi tên khoảng cách h -->
  <line x1="95" y1="225" x2="160" y2="225" stroke="#ae2012" stroke-width="1.5" marker-start="url(#arrow-acc7)" marker-end="url(#arrow-acc7)"/>
  <text x="127" y="243" font-family="Times New Roman, serif" font-size="16" font-weight="bold" font-style="italic" text-anchor="middle" fill="#ae2012">h</text>
</svg>`;

// SVG Câu 13: Thợ khoan giếng sâu 25m
const SVG_TOAN11_CAU13 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <defs>
    <marker id="arrow-blue13" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#005f73"/>
    </marker>
    <marker id="arrow-red13" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ae2012"/>
    </marker>
  </defs>
  <!-- Mặt đất -->
  <rect x="20" y="70" width="260" height="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="35" y="63" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-style="italic" fill="#15803d">Mặt đất</text>
  
  <!-- Tháp khoan tam giác trên mặt đất -->
  <polygon points="120,70 140,20 160,70" fill="none" stroke="#475569" stroke-width="2"/>
  <line x1="127" y1="52" x2="153" y2="52" stroke="#64748b" stroke-width="1.2"/>
  <line x1="133" y1="36" x2="147" y2="36" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="140" cy="20" r="3.5" fill="#005f73"/>
  <line x1="140" y1="20" x2="140" y2="70" stroke="#005f73" stroke-width="2"/>
  
  <!-- Lòng giếng khoan -->
  <rect x="126" y="70" width="28" height="175" fill="#e0f2fe" stroke="#1e293b" stroke-width="1.8"/>
  <path d="M 126,245 A 14,5 0 0 0 154,245" fill="none" stroke="#1e293b" stroke-width="1.8"/>
  
  <!-- Trục mũi khoan bên trong -->
  <line x1="140" y1="70" x2="140" y2="238" stroke="#005f73" stroke-width="2"/>
  <!-- Mũi khoan nhọn màu đỏ -->
  <polygon points="134,238 146,238 140,250" fill="#ae2012"/>
  
  <!-- Các vạch mét khoan -->
  <line x1="126" y1="95" x2="154" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="126" y1="120" x2="154" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="140" y="155" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#64748b">⋮</text>
  <line x1="126" y1="220" x2="154" y2="220" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  
  <!-- Chú thích giá tiền từng mét -->
  <line x1="195" y1="83" x2="158" y2="83" stroke="#005f73" stroke-width="1.2" marker-end="url(#arrow-blue13)"/>
  <text x="200" y="87" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="600" fill="#005f73">120k</text>
  
  <line x1="195" y1="108" x2="158" y2="108" stroke="#005f73" stroke-width="1.2" marker-end="url(#arrow-blue13)"/>
  <text x="200" y="112" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="600" fill="#005f73">150k</text>
  
  <line x1="195" y1="232" x2="158" y2="232" stroke="#005f73" stroke-width="1.2" marker-end="url(#arrow-blue13)"/>
  <text x="200" y="236" font-family="Times New Roman, serif" font-size="13" font-style="italic" font-weight="bold" fill="#005f73">u₂₅</text>
  
  <!-- Mũi tên độ sâu 25m -->
  <line x1="100" y1="70" x2="100" y2="245" stroke="#ae2012" stroke-width="1.5" marker-start="url(#arrow-red13)" marker-end="url(#arrow-red13)"/>
  <text x="92" y="160" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="bold" text-anchor="end" fill="#ae2012">25m</text>
</svg>`;

// SVG Câu 14: 4 phương án hình biểu diễn hình chóp tứ giác
const SVG_TOAN11_C14_A = `<svg viewBox="0 0 120 100" width="115" height="95" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px;"><polygon points="45,15 10,70 42,90 98,82 72,55" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="15" x2="42" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="15" x2="98" y2="82" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="70" x2="42" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="42" y1="90" x2="98" y2="82" stroke="#1e293b" stroke-width="2"/><line x1="98" y1="82" x2="72" y2="55" stroke="#1e293b" stroke-width="2"/><line x1="72" y1="55" x2="10" y2="70" stroke="#1e293b" stroke-width="2"/></svg>`;
const SVG_TOAN11_C14_B = `<svg viewBox="0 0 120 100" width="115" height="95" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px;"><polygon points="45,15 10,70 42,90 98,82" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="15" x2="42" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="15" x2="98" y2="82" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="70" x2="72" y2="55" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="72" y1="55" x2="98" y2="82" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="45" y1="15" x2="72" y2="55" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`;
const SVG_TOAN11_C14_C = `<svg viewBox="0 0 120 100" width="115" height="95" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px;"><polygon points="45,15 10,70 45,90 95,70" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="15" x2="45" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="70" x2="95" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`;
const SVG_TOAN11_C14_D = `<svg viewBox="0 0 120 100" width="115" height="95" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px;"><polygon points="10,65 50,92 98,65 65,30" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="98" y2="65" stroke="#1e293b" stroke-width="1.8"/><line x1="50" y1="92" x2="65" y2="30" stroke="#1e293b" stroke-width="1.8"/></svg>`;

// SVG Câu 18: Kế hoạch giải ngân vốn đầu tư R&D
const SVG_TOAN11_CAU18 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 280" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <defs>
    <marker id="arrow18" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569"/>
    </marker>
  </defs>
  <!-- Khung tiêu đề biểu đồ -->
  <rect x="15" y="10" width="490" height="258" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="260" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#005f73">KẾ HOẠCH GIẢI NGÂN VỐN ĐẦU TƯ R&amp;D THEO TỪNG QUÝ (TỶ ĐỒNG)</text>
  
  <!-- Trục tọa độ -->
  <line x1="60" y1="230" x2="480" y2="230" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow18)"/>
  <line x1="60" y1="230" x2="60" y2="45" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow18)"/>
  <text x="480" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#475569">Quý</text>
  <text x="50" y="42" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#475569">Tỷ đồng</text>
  
  <!-- Các vạch và đường gióng trục tung -->
  <!-- 16 -> h = 26px, y = 204 -->
  <line x1="60" y1="204" x2="460" y2="204" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="52" y="208" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#64748b">16</text>
  
  <!-- 24 -> h = 39px, y = 191 -->
  <line x1="60" y1="191" x2="460" y2="191" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="52" y="195" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#64748b">24</text>
  
  <!-- 36 -> h = 58px, y = 172 -->
  <line x1="60" y1="172" x2="460" y2="172" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="52" y="176" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#64748b">36</text>
  
  <!-- 54 -> h = 87px, y = 143 -->
  <line x1="60" y1="143" x2="460" y2="143" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="52" y="147" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#64748b">54</text>
  
  <!-- 81 -> h = 131px, y = 99 -->
  <line x1="60" y1="99" x2="460" y2="99" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="52" y="103" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="end" fill="#64748b">81</text>
  
  <!-- Các cột giải ngân -->
  <!-- Quý 1: x=100 -->
  <rect x="90" y="204" width="34" height="26" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <text x="107" y="198" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0369a1">16</text>
  <text x="107" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 1</text>
  
  <!-- Quý 2: x=165 -->
  <rect x="155" y="191" width="34" height="39" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <text x="172" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0369a1">24</text>
  <text x="172" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 2</text>
  
  <!-- Quý 3: x=230 -->
  <rect x="220" y="172" width="34" height="58" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <text x="237" y="166" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0369a1">36</text>
  <text x="237" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 3</text>
  
  <!-- Quý 4: x=295 -->
  <rect x="285" y="143" width="34" height="87" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <text x="302" y="137" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0369a1">54</text>
  <text x="302" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 4</text>
  
  <!-- Quý 5: x=360 -->
  <rect x="350" y="99" width="34" height="131" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <text x="367" y="93" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0369a1">81</text>
  <text x="367" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 5</text>
  
  <!-- Quý 6: x=425 -->
  <text x="432" y="246" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle" fill="#334155">Quý 6</text>
  
  <!-- Đường cong tăng trưởng cấp số nhân (đỏ) -->
  <path d="M 107,204 Q 237,185 367,99 T 445,45" fill="none" stroke="#ae2012" stroke-width="2.2"/>
  <circle cx="107" cy="204" r="3.5" fill="#ae2012"/>
  <circle cx="172" cy="191" r="3.5" fill="#ae2012"/>
  <circle cx="237" cy="172" r="3.5" fill="#ae2012"/>
  <circle cx="302" cy="143" r="3.5" fill="#ae2012"/>
  <circle cx="367" cy="99" r="3.5" fill="#ae2012"/>
  
  <text x="440" y="70" font-family="Times New Roman, serif" font-size="13" font-weight="bold" font-style="italic" fill="#ae2012">u_n = 16 · (1,5)^{n-1}</text>
</svg>`;

// SVG Câu 19: Hình chóp S.ABCD và các trọng tâm G, E
const SVG_TOAN11_CAU19 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 360" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <!-- Đỉnh: S(200, 35), A(60, 240), B(320, 270), D(160, 170), C(420, 200) -->
  <!-- O: (240, 220), M: (290, 185) -->
  <!-- G: (260, 135), E: (300, 213) -->
  
  <!-- Nét đứt khuất (phía sau) -->
  <line x1="60" y1="240" x2="160" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- A-D -->
  <line x1="160" y1="170" x2="420" y2="200" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- D-C -->
  <line x1="200" y1="35" x2="160" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- S-D -->
  
  <!-- Hai đường chéo đáy nét đứt -->
  <line x1="60" y1="240" x2="420" y2="200" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- A-C -->
  <line x1="320" y1="270" x2="160" y2="170" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- B-D -->
  <line x1="200" y1="35" x2="240" y2="220" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- S-O -->
  
  <!-- Các trung tuyến nối đến M -->
  <line x1="200" y1="35" x2="290" y2="185" stroke="#005f73" stroke-width="1.5" stroke-dasharray="4,3"/> <!-- S-M -->
  <line x1="320" y1="270" x2="290" y2="185" stroke="#005f73" stroke-width="1.5" stroke-dasharray="4,3"/> <!-- B-M -->
  <line x1="240" y1="220" x2="290" y2="185" stroke="#005f73" stroke-width="1.5" stroke-dasharray="4,3"/> <!-- O-M -->
  
  <!-- Đoạn nối 2 trọng tâm G - E (màu đỏ) -->
  <line x1="260" y1="135" x2="300" y2="213" stroke="#ae2012" stroke-width="2.2" stroke-dasharray="4,3"/> <!-- G-E -->
  
  <!-- Nét liền nhìn thấy (mặt trước) -->
  <line x1="200" y1="35" x2="60" y2="240" stroke="#1e293b" stroke-width="2"/> <!-- S-A -->
  <line x1="60" y1="240" x2="320" y2="270" stroke="#1e293b" stroke-width="2"/> <!-- A-B -->
  <line x1="320" y1="270" x2="420" y2="200" stroke="#1e293b" stroke-width="2"/> <!-- B-C -->
  <line x1="200" y1="35" x2="420" y2="200" stroke="#1e293b" stroke-width="2"/> <!-- S-C -->
  <line x1="200" y1="35" x2="320" y2="270" stroke="#1e293b" stroke-width="2"/> <!-- S-B -->
  
  <!-- Các điểm đỉnh và nhãn -->
  <circle cx="200" cy="35" r="3.5" fill="#1e293b"/>
  <text x="200" y="24" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" text-anchor="middle" fill="#0f172a">S</text>
  
  <circle cx="60" cy="240" r="3" fill="#1e293b"/>
  <text x="48" y="248" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">A</text>
  
  <circle cx="320" cy="270" r="3" fill="#1e293b"/>
  <text x="328" y="286" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">B</text>
  
  <circle cx="420" cy="200" r="3" fill="#1e293b"/>
  <text x="428" y="205" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">C</text>
  
  <circle cx="160" cy="170" r="3" fill="#1e293b"/>
  <text x="145" y="168" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">D</text>
  
  <circle cx="240" cy="220" r="2.5" fill="#64748b"/>
  <text x="238" y="238" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold" fill="#334155">O</text>
  
  <circle cx="290" cy="185" r="3" fill="#005f73"/>
  <text x="300" y="180" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold" fill="#005f73">M</text>
  
  <!-- Điểm G và E -->
  <circle cx="260" cy="135" r="4" fill="#ae2012"/>
  <text x="246" y="138" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold" fill="#ae2012">G</text>
  
  <circle cx="300" cy="213" r="4" fill="#ae2012"/>
  <text x="308" y="224" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold" fill="#ae2012">E</text>
</svg>`;

// SVG Câu 21: Giao điểm K của SD và mặt phẳng (ABM)
const SVG_TOAN11_CAU21 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 360" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <!-- S(200, 35), A(60, 240), B(320, 270), D(160, 170), C(420, 200) -->
  <!-- O: (240, 220), M: trung điểm SC = (310, 117.5) -->
  <!-- I: giao AM & SO = (226.7, 158.3) -->
  <!-- K: giao BI & SD = (180, 102.5) -->
  
  <!-- Nét đứt khuất -->
  <line x1="60" y1="240" x2="160" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- A-D -->
  <line x1="160" y1="170" x2="420" y2="200" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- D-C -->
  <line x1="200" y1="35" x2="160" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/> <!-- S-D -->
  
  <!-- AC, BD, SO nét đứt -->
  <line x1="60" y1="240" x2="420" y2="200" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- A-C -->
  <line x1="320" y1="270" x2="160" y2="170" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- B-D -->
  <line x1="200" y1="35" x2="240" y2="220" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/> <!-- S-O -->
  
  <!-- Nét hỗ trợ tìm giao điểm: A-M, B-I-K, M-K (nét đứt) -->
  <line x1="60" y1="240" x2="310" y2="117.5" stroke="#005f73" stroke-width="1.8" stroke-dasharray="4,3"/> <!-- A-M -->
  <line x1="320" y1="270" x2="180" y2="102.5" stroke="#005f73" stroke-width="1.8" stroke-dasharray="4,3"/> <!-- B-I-K -->
  <line x1="310" y1="117.5" x2="180" y2="102.5" stroke="#ae2012" stroke-width="1.8" stroke-dasharray="4,3"/> <!-- M-K -->
  
  <!-- Nét liền nhìn thấy -->
  <line x1="200" y1="35" x2="60" y2="240" stroke="#1e293b" stroke-width="2"/> <!-- S-A -->
  <line x1="60" y1="240" x2="320" y2="270" stroke="#1e293b" stroke-width="2"/> <!-- A-B -->
  <line x1="320" y1="270" x2="420" y2="200" stroke="#1e293b" stroke-width="2"/> <!-- B-C -->
  <line x1="200" y1="35" x2="420" y2="200" stroke="#1e293b" stroke-width="2"/> <!-- S-C -->
  <line x1="200" y1="35" x2="320" y2="270" stroke="#1e293b" stroke-width="2"/> <!-- S-B -->
  <line x1="320" y1="270" x2="310" y2="117.5" stroke="#005f73" stroke-width="1.8"/> <!-- B-M -->
  
  <!-- Các điểm và nhãn -->
  <circle cx="200" cy="35" r="3.5" fill="#1e293b"/>
  <text x="200" y="24" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" text-anchor="middle" fill="#0f172a">S</text>
  
  <circle cx="60" cy="240" r="3" fill="#1e293b"/>
  <text x="48" y="248" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">A</text>
  
  <circle cx="320" cy="270" r="3" fill="#1e293b"/>
  <text x="328" y="286" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">B</text>
  
  <circle cx="420" cy="200" r="3" fill="#1e293b"/>
  <text x="428" y="205" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">C</text>
  
  <circle cx="160" cy="170" r="3" fill="#1e293b"/>
  <text x="145" y="168" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#0f172a">D</text>
  
  <circle cx="240" cy="220" r="2.5" fill="#64748b"/>
  <text x="238" y="238" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold" fill="#334155">O</text>
  
  <circle cx="310" cy="117.5" r="3.5" fill="#005f73"/>
  <text x="322" y="115" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold" fill="#005f73">M</text>
  
  <!-- Điểm I -->
  <circle cx="226.7" cy="158.3" r="3" fill="#005f73"/>
  <text x="220" y="174" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold" fill="#005f73">I</text>
  
  <!-- Điểm K (giao điểm cần tìm) -->
  <circle cx="180" cy="102.5" r="4.5" fill="#ae2012"/>
  <text x="166" y="100" font-family="Times New Roman, serif" font-size="16" font-style="italic" font-weight="bold" fill="#ae2012">K</text>
</svg>`;



// ==================== CÁC HÌNH VẼ SVG ĐỒ HỌA (TOÁN 11 - ĐỀ TK5) ====================
// Dữ liệu đề TK5
const SVG_TK5_C7_A = `<svg viewBox="0 0 110 90" width="105" height="85" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px; border:1px solid #e2e8f0;"><line x1="45" y1="12" x2="10" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="98" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="42" y1="84" x2="98" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="98" y2="65" stroke="#1e293b" stroke-width="2"/></svg>`;

const SVG_TK5_C7_B = `<svg viewBox="0 0 110 90" width="105" height="85" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px; border:1px solid #e2e8f0;"><line x1="45" y1="12" x2="10" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="98" y2="80" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="42" y1="84" x2="98" y2="80" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="72" y2="55" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="72" y1="55" x2="98" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="45" y1="12" x2="72" y2="55" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`;

const SVG_TK5_C7_C = `<svg viewBox="0 0 110 90" width="105" height="85" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px; border:1px solid #e2e8f0;"><line x1="45" y1="12" x2="10" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="45" y1="12" x2="98" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="42" y2="84" stroke="#1e293b" stroke-width="2"/><line x1="42" y1="84" x2="98" y2="65" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="98" y2="65" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`;

const SVG_TK5_C7_D = `<svg viewBox="0 0 110 90" width="105" height="85" style="display:inline-block; vertical-align:middle; margin: 4px; background:#fff; border-radius:4px; border:1px solid #e2e8f0;"><polygon points="10,65 52,84 98,60" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="65" x2="75" y2="72" stroke="#1e293b" stroke-width="1.6"/><line x1="52" y1="84" x2="54" y2="62.5" stroke="#1e293b" stroke-width="1.6"/><line x1="98" y1="60" x2="31" y2="74.5" stroke="#1e293b" stroke-width="1.6"/></svg>`;

const SVG_TK5_CAU13 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 240" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <defs>
    <marker id="arrow-tk5-t" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <!-- Trục tọa độ -->
  <line x1="45" y1="205" x2="415" y2="205" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow-tk5-t)"/>
  <text x="420" y="210" font-family="'Be Vietnam Pro', sans-serif" font-size="12" fill="#1e293b">t (h)</text>
  <line x1="60" y1="215" x2="60" y2="25" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow-tk5-t)"/>
  <text x="50" y="20" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#1e293b">h (m)</text>
  <text x="48" y="220" font-family="'Be Vietnam Pro', sans-serif" font-size="12" fill="#64748b">O</text>
  
  <!-- Các vạch mốc trục tung -->
  <line x1="60" y1="45" x2="380" y2="45" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="35" y="49" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#005f73">14</text>
  
  <line x1="60" y1="155" x2="380" y2="155" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="42" y="159" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#005f73">8</text>
  
  <line x1="60" y1="72" x2="380" y2="72" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="25" y="76" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="bold" fill="#ea580c">12,5</text>
  
  <!-- Các vạch mốc trục hoành -->
  <line x1="220" y1="205" x2="220" y2="155" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="214" y="222" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#005f73">12</text>
  
  <line x1="380" y1="205" x2="380" y2="45" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="374" y="222" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#005f73">24</text>
  
  <!-- Vạch t1 = 4 và t2 = 20 -->
  <line x1="113" y1="205" x2="113" y2="72" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="108" y="222" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#ea580c">t₁</text>
  
  <line x1="327" y1="205" x2="327" y2="72" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="322" y="222" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#ea580c">t₂</text>
  
  <!-- Đường sóng cosin: từ (60,45) qua (113,72) đáy (220,155) qua (327,72) đỉnh (380,45) -->
  <path d="M 60,45 C 105,45 130,155 220,155 C 310,155 335,45 380,45" fill="none" stroke="#005f73" stroke-width="2.8"/>
  
  <!-- Các điểm đánh dấu -->
  <circle cx="60" cy="45" r="4" fill="#005f73"/>
  <circle cx="220" cy="155" r="4" fill="#005f73"/>
  <circle cx="380" cy="45" r="4" fill="#005f73"/>
  <circle cx="113" cy="72" r="4.5" fill="#ea580c"/>
  <circle cx="327" cy="72" r="4.5" fill="#ea580c"/>
</svg>`;

const SVG_TK5_CAU16 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <defs>
    <marker id="arrow-tk5-tichluy" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ae2012"/>
    </marker>
  </defs>
  <rect x="15" y="15" width="290" height="190" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="160" y="38" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="bold" fill="#005f73" text-anchor="middle">TÍCH LŨY 12 THÁNG</text>
  
  <!-- Trục ngang và dọc -->
  <line x1="45" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="250" y="190" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#64748b">Tháng</text>
  <line x1="45" y1="170" x2="45" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="20" y="62" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#64748b">Tr.đ</text>
  
  <!-- Cột T1 -->
  <rect x="65" y="135" width="26" height="35" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.4"/>
  <text x="78" y="128" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">2,5</text>
  <text x="78" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#475569" text-anchor="middle">T₁</text>
  
  <!-- Cột T2 -->
  <rect x="110" y="122" width="26" height="48" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.4"/>
  <text x="123" y="115" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">3,0</text>
  <text x="123" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#475569" text-anchor="middle">T₂</text>
  
  <!-- Dấu ba chấm -->
  <text x="165" y="145" font-family="'Be Vietnam Pro', sans-serif" font-size="16" font-weight="bold" fill="#94a3b8" text-anchor="middle">⋯</text>
  
  <!-- Cột T12 -->
  <rect x="205" y="68" width="26" height="102" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.4"/>
  <text x="218" y="60" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">8,0</text>
  <text x="218" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#475569" text-anchor="middle">T₁₂</text>
  
  <!-- Mũi tên tăng dần -->
  <line x1="78" y1="120" x2="218" y2="55" stroke="#ae2012" stroke-width="1.8" marker-end="url(#arrow-tk5-tichluy)"/>
  <text x="160" y="80" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="bold" fill="#ae2012" text-anchor="middle">+0,5 tr/th</text>
</svg>`;

const SVG_TK5_CAU18 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 320" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <!-- Đáy ABCD: A(50,230), B(260,250), C(330,200), D(120,180) -->
  <!-- Đỉnh S(180,40) -->
  <!-- Tâm O đáy: AC cắt BD tại O(190, 215) -->
  <!-- N trung điểm AB(155, 240) -->
  <!-- G trọng tâm SAB trên SN(180,40 -> 155,240): G(163, 173) -->
  <!-- H trọng tâm ABC trên CN(330,200 -> 155,240): H(213, 227) -->
  
  <!-- Nét đứt khuất -->
  <line x1="50" y1="230" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="120" y1="180" x2="330" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="180" y1="40" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="50" y1="230" x2="330" y2="200" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="260" y1="250" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="180" y1="40" x2="190" y2="215" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  
  <line x1="180" y1="40" x2="155" y2="240" stroke="#005f73" stroke-width="1.6" stroke-dasharray="4,4"/>
  <line x1="330" y1="200" x2="155" y2="240" stroke="#005f73" stroke-width="1.6" stroke-dasharray="4,4"/>
  <line x1="190" y1="215" x2="155" y2="240" stroke="#005f73" stroke-width="1.4" stroke-dasharray="3,3"/>
  <line x1="163" y1="173" x2="213" y2="227" stroke="#ae2012" stroke-width="2" stroke-dasharray="4,3"/>
  
  <!-- Nét liền nhìn thấy -->
  <line x1="180" y1="40" x2="50" y2="230" stroke="#1e293b" stroke-width="2"/>
  <line x1="50" y1="230" x2="260" y2="250" stroke="#1e293b" stroke-width="2"/>
  <line x1="260" y1="250" x2="330" y2="200" stroke="#1e293b" stroke-width="2"/>
  <line x1="180" y1="40" x2="330" y2="200" stroke="#1e293b" stroke-width="2"/>
  <line x1="180" y1="40" x2="260" y2="250" stroke="#1e293b" stroke-width="2"/>
  
  <!-- Các điểm đỉnh -->
  <circle cx="180" cy="40" r="3.5" fill="#1e293b"/>
  <text x="180" y="30" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" text-anchor="middle" fill="#1e293b">S</text>
  
  <circle cx="50" cy="230" r="3" fill="#1e293b"/>
  <text x="36" y="240" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">A</text>
  
  <circle cx="260" cy="250" r="3" fill="#1e293b"/>
  <text x="268" y="260" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">B</text>
  
  <circle cx="330" cy="200" r="3" fill="#1e293b"/>
  <text x="340" y="205" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">C</text>
  
  <circle cx="120" cy="180" r="3" fill="#1e293b"/>
  <text x="105" y="180" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">D</text>
  
  <circle cx="190" cy="215" r="2.5" fill="#64748b"/>
  <text x="188" y="230" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="#64748b">O</text>
  
  <circle cx="155" cy="240" r="3" fill="#005f73"/>
  <text x="146" y="258" font-family="Times New Roman, serif" font-size="14" font-weight="bold" font-style="italic" fill="#005f73">N</text>
  
  <circle cx="163" cy="173" r="3.5" fill="#ae2012"/>
  <text x="148" y="172" font-family="Times New Roman, serif" font-size="14" font-weight="bold" font-style="italic" fill="#ae2012">G</text>
  
  <circle cx="213" cy="227" r="3.5" fill="#ae2012"/>
  <text x="218" y="224" font-family="Times New Roman, serif" font-size="14" font-weight="bold" font-style="italic" fill="#ae2012">H</text>
</svg>`;

const SVG_TK5_CAU21 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 320" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <!-- Đáy ABCD: A(50,230), B(260,250), C(330,200), D(120,180) -->
  <!-- Đỉnh S(180,40) -->
  <!-- Tâm O(190,215) -->
  <!-- N trung điểm SA: N(115, 135) -->
  <!-- SO cắt CN tại I: I(185, 127) -->
  <!-- BI cắt SD tại P: P(150, 110) -->
  
  <!-- Nét đứt khuất -->
  <line x1="50" y1="230" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="120" y1="180" x2="330" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="180" y1="40" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="50" y1="230" x2="330" y2="200" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="260" y1="250" x2="120" y2="180" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="180" y1="40" x2="190" y2="215" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  
  <line x1="330" y1="200" x2="115" y2="135" stroke="#005f73" stroke-width="1.6" stroke-dasharray="4,4"/>
  <line x1="260" y1="250" x2="185" y2="127" stroke="#005f73" stroke-width="1.6" stroke-dasharray="4,4"/>
  <line x1="185" y1="127" x2="150" y2="110" stroke="#ae2012" stroke-width="1.8" stroke-dasharray="4,4"/>
  <line x1="115" y1="135" x2="150" y2="110" stroke="#ae2012" stroke-width="1.8" stroke-dasharray="4,4"/>
  <line x1="330" y1="200" x2="150" y2="110" stroke="#ae2012" stroke-width="1.8" stroke-dasharray="4,4"/>
  
  <!-- Nét liền -->
  <line x1="180" y1="40" x2="50" y2="230" stroke="#1e293b" stroke-width="2"/>
  <line x1="50" y1="230" x2="260" y2="250" stroke="#1e293b" stroke-width="2"/>
  <line x1="260" y1="250" x2="330" y2="200" stroke="#1e293b" stroke-width="2"/>
  <line x1="180" y1="40" x2="330" y2="200" stroke="#1e293b" stroke-width="2"/>
  <line x1="180" y1="40" x2="260" y2="250" stroke="#1e293b" stroke-width="2"/>
  <line x1="260" y1="250" x2="115" y2="135" stroke="#005f73" stroke-width="2"/>
  
  <!-- Các điểm -->
  <circle cx="180" cy="40" r="3.5" fill="#1e293b"/>
  <text x="180" y="30" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" text-anchor="middle" fill="#1e293b">S</text>
  
  <circle cx="50" cy="230" r="3" fill="#1e293b"/>
  <text x="36" y="240" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">A</text>
  
  <circle cx="260" cy="250" r="3" fill="#1e293b"/>
  <text x="268" y="260" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">B</text>
  
  <circle cx="330" cy="200" r="3" fill="#1e293b"/>
  <text x="340" y="205" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">C</text>
  
  <circle cx="120" cy="180" r="3" fill="#1e293b"/>
  <text x="105" y="180" font-family="Times New Roman, serif" font-size="15" font-weight="bold" font-style="italic" fill="#1e293b">D</text>
  
  <circle cx="190" cy="215" r="2.5" fill="#64748b"/>
  <text x="188" y="230" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="#64748b">O</text>
  
  <circle cx="115" cy="135" r="3.5" fill="#005f73"/>
  <text x="98" y="138" font-family="Times New Roman, serif" font-size="14" font-weight="bold" font-style="italic" fill="#005f73">N</text>
  
  <circle cx="185" cy="127" r="3" fill="#005f73"/>
  <text x="194" y="132" font-family="Times New Roman, serif" font-size="14" font-weight="bold" font-style="italic" fill="#005f73">I</text>
  
  <circle cx="150" cy="110" r="4.5" fill="#ae2012"/>
  <text x="135" y="105" font-family="Times New Roman, serif" font-size="16" font-weight="bold" font-style="italic" fill="#ae2012">P</text>
</svg>`;


// BỘ ĐỀ THI TOÁN 11 - GIỮA KÌ I (MÃ ĐỀ: 11.GK1.TK5)
const EXAM_11_GK1_TK5 = {
  id: "11_GK1_TK5",
  config: {
    title: "Đề Kiểm Tra Giữa Kì I - Mã Đề 11.GK1.TK5 (Toán 11)",
    school: "Trường THPT Nguyễn Văn Thoại - Sở GD&ĐT An Giang",
    schoolYear: "2026 - 2027",
    teacher: "ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)",
    timeLimitMinutes: 90,
    totalQuestions: 21,
    maxScore: 10.0,
    grade: "11",
    modes: {
      all: { time: 90, label: "90 phút (Cả đề thi: 21 câu - 10.0 điểm)", count: 21 },
      part1: { time: 45, label: "45 phút (Phần I: 16 câu trắc nghiệm - 4.0 điểm)", count: 16 },
      part2: { time: 25, label: "25 phút (Phần II: 3 câu Đúng / Sai - 3.0 điểm)", count: 3 },
      part3: { time: 20, label: "20 phút (Phần III: 2 câu Tự luận - 3.0 điểm)", count: 2 }
    }
  },

  // PHẦN I: 16 CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (A, B, C, D)
  part1: [
    {
      id: 1,
      part: "I",
      grade: "11",
      topic: "Tập xác định của hàm số lượng giác",
      question: "Tập xác định của hàm số lượng giác $y = \\cot x$ là",
      svg: "",
      options: [
        { id: "A", text: "$D = \\mathbb{R}\\setminus\\{k\\pi,\\, k\\in\\mathbb{Z}\\}$" },
        { id: "B", text: "$D = \\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "C", text: "$D = \\mathbb{R}$" },
        { id: "D", text: "$D = [-1; 1]$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hàm số lượng giác $y = \\cot x = \\dfrac{\\cos x}{\\sin x}$ xác định khi và chỉ khi:</p>
  $$\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi\\quad (k\\in\\mathbb{Z}).$$
  <p>Vậy tập xác định của hàm số là $D = \\mathbb{R}\\setminus\\{k\\pi,\\, k\\in\\mathbb{Z}\\}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>`
    },
    {
      id: 2,
      part: "I",
      grade: "11",
      topic: "Đổi đơn vị độ sang radian",
      question: "Góc có số đo $240^\\circ$ khi đổi sang đơn vị radian bằng",
      svg: "",
      options: [
        { id: "A", text: "$\\dfrac{2\\pi}{3}$" },
        { id: "B", text: "$\\dfrac{4\\pi}{3}$" },
        { id: "C", text: "$\\dfrac{3\\pi}{4}$" },
        { id: "D", text: "$\\dfrac{5\\pi}{6}$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng công thức đổi số đo góc từ độ sang radian: $\\alpha_{\\text{rad}} = a^\\circ \\cdot \\dfrac{\\pi}{180^\\circ}$.</p>
  <p>Ta có:</p>
  $$240^\\circ = 240 \\cdot \\dfrac{\\pi}{180} = \\dfrac{4\\pi}{3}\\text{ (rad)}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>`
    },
    {
      id: 3,
      part: "I",
      grade: "11",
      topic: "Công bội của cấp số nhân",
      question: "Cho cấp số nhân $(u_n)\\colon 2;\\, 6;\\, 18;\\, 54;\\, 162;\\,\\dots$. Công bội $q$ của cấp số nhân đã cho bằng",
      svg: "",
      options: [
        { id: "A", text: "$q = 4$" },
        { id: "B", text: "$q = \\dfrac{1}{3}$" },
        { id: "C", text: "$q = 3$" },
        { id: "D", text: "$q = -3$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Công bội của cấp số nhân bằng thương của số hạng thứ hai chia cho số hạng đầu:</p>
  $$q = \\dfrac{u_2}{u_1} = \\dfrac{6}{2} = 3.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>`
    },
    {
      id: 4,
      part: "I",
      grade: "11",
      topic: "Hệ thức cơ bản giữa sin và cos",
      question: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\sin\\alpha = -\\dfrac{5}{13}$ với $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Giá trị của $\\cos\\alpha$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$\\dfrac{12}{13}$" },
        { id: "B", text: "$-\\dfrac{5}{12}$" },
        { id: "C", text: "$\\dfrac{119}{169}$" },
        { id: "D", text: "$-\\dfrac{12}{13}$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng hệ thức lượng giác cơ bản giữa $\\sin\\alpha$ và $\\cos\\alpha$:</p>
  $$\\sin^2\\alpha + \\cos^2\\alpha = 1 \\Rightarrow \\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\left(-\\dfrac{5}{13}\\right)^2 = 1 - \\dfrac{25}{169} = \\dfrac{144}{169}.$$
  <p>Vì $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ (góc lượng giác $\\alpha$ thuộc góc phần tư thứ III) nên $\\cos\\alpha < 0$. Do đó:</p>
  $$\\cos\\alpha = -\\sqrt{\\dfrac{144}{169}} = -\\dfrac{12}{13}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>`
    },
    {
      id: 5,
      part: "I",
      grade: "11",
      topic: "Số hạng tổng quát của dãy số",
      question: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\dfrac{2n + 5}{n + 1}$. Giá trị của số hạng thứ tư $u_4$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$\\dfrac{13}{5}$" },
        { id: "B", text: "$\\dfrac{11}{5}$" },
        { id: "C", text: "$\\dfrac{13}{4}$" },
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Thay $n = 4$ vào công thức số hạng tổng quát của dãy số:</p>
  $$u_4 = \\dfrac{2\\cdot 4 + 5}{4 + 1} = \\dfrac{8 + 5}{5} = \\dfrac{13}{5}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>`
    },
    {
      id: 6,
      part: "I",
      grade: "11",
      topic: "Nghiệm phương trình lượng giác cơ bản",
      question: "Nghiệm của phương trình lượng giác $\\sin x = 0$ là",
      svg: "",
      options: [
        { id: "A", text: "$x = k2\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "B", text: "$x = k\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "C", text: "$x = \\dfrac{\\pi}{2} + k\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "D", text: "$x = \\pi + k2\\pi,\\, k\\in\\mathbb{Z}$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo công thức nghiệm của phương trình lượng giác cơ bản trường hợp đặc biệt:</p>
  $$\\sin x = 0 \\Leftrightarrow x = k\\pi\\quad (k\\in\\mathbb{Z}).$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>`
    },
    {
      id: 7,
      part: "I",
      grade: "11",
      topic: "Hình biểu diễn hình chóp tam giác (tứ diện)",
      question: "Hình nào sau đây là hình biểu diễn đúng của một hình chóp tam giác (tứ diện)?",
      svg: "",
      options: [
        { id: "A", text: `<div style="text-align:center;">${SVG_TK5_C7_A}</div>` },
        { id: "B", text: `<div style="text-align:center;">${SVG_TK5_C7_B}</div>` },
        { id: "C", text: `<div style="text-align:center;">${SVG_TK5_C7_C}</div>` },
        { id: "D", text: `<div style="text-align:center;">${SVG_TK5_C7_D}</div>` }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hình biểu diễn của một hình chóp tam giác (tứ diện) là hình chóp có đáy là tam giác, gồm $4$ đỉnh và $6$ cạnh, trong đó có một cạnh đáy bị che khuất phải được vẽ bằng nét đứt khúc. Do đó, hình ở phương án C là hình biểu diễn đúng.</p>
  <p><em>(Hình A sai vì toàn bộ nét đều là nét liền; hình B là hình chóp tứ giác; hình D là hình phẳng biểu diễn tam giác cùng 3 đường trung tuyến).</em></p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>`
    },
    {
      id: 8,
      part: "I",
      grade: "11",
      topic: "Số hạng thứ hai của cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 7$ và công sai $d = -4$. Số hạng thứ hai $u_2$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$u_2 = 11$" },
        { id: "B", text: "$u_2 = -28$" },
        { id: "C", text: "$u_2 = -1$" },
        { id: "D", text: "$u_2 = 3$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo định nghĩa cấp số cộng, số hạng thứ hai được tính bởi:</p>
  $$u_2 = u_1 + d = 7 + (-4) = 3.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>`
    },
    {
      id: 9,
      part: "I",
      grade: "11",
      topic: "Công thức cộng lượng giác",
      question: "Khẳng định nào sau đây là khẳng định <strong>đúng</strong> với mọi góc $a, b$?",
      svg: "",
      options: [
        { id: "A", text: "$\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b$" },
        { id: "B", text: "$\\cos(a - b) = \\cos a\\cos b - \\sin a\\sin b$" },
        { id: "C", text: "$\\sin(a - b) = \\sin a\\cos b + \\cos a\\sin b$" },
        { id: "D", text: "$\\cos(a + b) = \\cos a\\cos b + \\sin a\\sin b$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo công thức cộng lượng giác đối với côsin:</p>
  $$\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b.$$
  <p>Các khẳng định còn lại đều sai vì: $\\cos(a - b) \\ne \\cos a\\cos b - \\sin a\\sin b$; $\\sin(a - b) = \\sin a\\cos b - \\cos a\\sin b$; $\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>`
    },
    {
      id: 10,
      part: "I",
      grade: "11",
      topic: "Giao tuyến của hai mặt phẳng trong hình chóp",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng nào sau đây?",
      svg: "",
      options: [
        { id: "A", text: "$SA$" },
        { id: "B", text: "$SO$" },
        { id: "C", text: "$AB$" },
        { id: "D", text: "$CD$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Ta có:</p>
  <ul>
    <li>Điểm $S$ là điểm chung thứ nhất của hai mặt phẳng $(SAC)$ và $(SBD)$: $S \\in (SAC) \\cap (SBD)$.</li>
    <li>Trong mặt phẳng đáy $(ABCD)$, điểm $O = AC \\cap BD$. Vì $O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD)$ nên $O$ là điểm chung thứ hai: $O \\in (SAC) \\cap (SBD)$.</li>
  </ul>
  <p>Do đó, giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng $SO$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>`
    },
    {
      id: 11,
      part: "I",
      grade: "11",
      topic: "Phương trình bậc nhất đối với một hàm số lượng giác",
      question: "Phương trình lượng giác $2\\sin x - 1 = 0$ có tập nghiệm là",
      svg: "",
      options: [
        { id: "A", text: "$S = \\left\\{\\pm\\dfrac{\\pi}{6} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "B", text: "$S = \\left\\{\\dfrac{\\pi}{3} + k2\\pi;\\; \\dfrac{2\\pi}{3} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "C", text: "$S = \\left\\{\\dfrac{\\pi}{6} + k2\\pi;\\; \\dfrac{5\\pi}{6} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "D", text: "$S = \\left\\{\\pm\\dfrac{\\pi}{3} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Ta có: $2\\sin x - 1 = 0 \\Leftrightarrow \\sin x = \\dfrac{1}{2} = \\sin\\left(\\dfrac{\\pi}{6}\\right)$.</p>
  $$\\Leftrightarrow \\left[\\begin{array}{l}
  x = \\dfrac{\\pi}{6} + k2\\pi \\\\[6pt]
  x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi
  \\end{array}\\right. \\quad (k\\in\\mathbb{Z}).$$
  <p>Vậy tập nghiệm của phương trình là $S = \\left\\{\\dfrac{\\pi}{6} + k2\\pi;\\; \\dfrac{5\\pi}{6} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>`
    },
    {
      id: 12,
      part: "I",
      grade: "11",
      topic: "Dãy số tăng, dãy số giảm",
      question: "Dãy số nào sau đây là một dãy số giảm?",
      svg: "",
      options: [
        { id: "A", text: "$1;\\, 4;\\, 9;\\, 16;\\, 25;\\,\\dots$" },
        { id: "B", text: "$-8;\\,-5;\\,-2;\\, 1;\\, 4;\\,\\dots$" },
        { id: "C", text: "$-3;\\, 3;\\,-3;\\, 3;\\,-3;\\,\\dots$" },
        { id: "D", text: "$20;\\, 16;\\, 12;\\, 8;\\, 4;\\,\\dots$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dãy số $20;\\, 16;\\, 12;\\, 8;\\, 4;\\,\\dots$ có hiệu của hai số liên tiếp:</p>
  $$u_{n+1} - u_n = -4 < 0 \\Leftrightarrow u_{n+1} < u_n\\quad (\\forall n \\ge 1),$$
  <p>nên là dãy số giảm. Dãy A và B là các dãy số tăng; dãy C là dãy đan dấu (không tăng, không giảm).</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>`
    },
    {
      id: 13,
      part: "I",
      grade: "11",
      topic: "Toán thực tế - Chu kỳ thủy triều cửa biển (Hàm số lượng giác)",
      question: "Mực nước cao nhất tại một trạm quan trắc thủy văn cửa biển là $14\\text{ m}$ khi thủy triều lên cao và sau $12\\text{ giờ}$ khi thủy triều xuống thấp thì mực nước thấp nhất là $8\\text{ m}$. Đồ thị ở hình bên mô tả sự thay đổi chiều cao mực nước tại trạm trong vòng $24\\text{ giờ}$ tính từ lúc nửa đêm ($t = 0$). Biết chiều cao của mực nước $h$ (đơn vị: mét) theo thời gian $t$ (giờ, $0 \\le t \\le 24$) được cho bởi công thức $h(t) = m + a\\cos\\left(\\dfrac{\\pi}{12}t\\right)$ với $m, a$ là các số thực dương cho trước. Biết rằng mực nước đạt chiều cao $12{,}5\\text{ m}$ tại hai thời điểm $t_1$ và $t_2$ trong ngày. Tính giá trị biểu thức $P = t_1 \\cdot t_2$.",
      svg: SVG_TK5_CAU13,
      options: [
        { id: "A", text: "$P = 80$" },
        { id: "B", text: "$P = 64$" },
        { id: "C", text: "$P = 96$" },
        { id: "D", text: "$P = 128$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Chiều cao mực nước theo thời gian là $h(t) = m + a\\cos\\left(\\dfrac{\\pi}{12}t\\right)$ với $m > 0, a > 0$.</p>
  <ul>
    <li>Vì hàm số côsin có tập giá trị $[-1; 1]$ nên:
      $$\\max h(t) = m + a = 14\\text{ (m)};\\quad \\min h(t) = m - a = 8\\text{ (m)}.$$
      Giải hệ phương trình:
      $$\\begin{cases} m + a = 14 \\\\ m - a = 8 \\end{cases} \\Leftrightarrow \\begin{cases} m = 11\\text{ (m)} \\\\ a = 3\\text{ (m)} \\end{cases} \\Rightarrow h(t) = 11 + 3\\cos\\left(\\dfrac{\\pi}{12}t\\right).$$
    </li>
    <li>Mực nước đạt chiều cao $12{,}5\\text{ m}$ khi:
      $$11 + 3\\cos\\left(\\dfrac{\\pi}{12}t\\right) = 12{,}5 \\Leftrightarrow 3\\cos\\left(\\dfrac{\\pi}{12}t\\right) = 1{,}5 \\Leftrightarrow \\cos\\left(\\dfrac{\\pi}{12}t\\right) = \\dfrac{1}{2} = \\cos\\left(\\dfrac{\\pi}{3}\\right).$$
      Do $0 \\le t \\le 24 \\Rightarrow 0 \\le \\dfrac{\\pi}{12}t \\le 2\\pi$, ta có hai thời điểm thỏa mãn:
      $$\\begin{aligned}
      \\dfrac{\\pi}{12}t_1 &= \\dfrac{\\pi}{3} \\Rightarrow t_1 = 4\\text{ (giờ)},\\\\
      \\dfrac{\\pi}{12}t_2 &= 2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3} \\Rightarrow t_2 = 20\\text{ (giờ)}.
      \\end{aligned}$$
    </li>
    <li>Giá trị biểu thức $P = t_1 \\cdot t_2 = 4 \\cdot 20 = 80$.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>`
    },
    {
      id: 14,
      part: "I",
      grade: "11",
      topic: "Số hạng thứ n của cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = 3$. Số $109$ là số hạng thứ mấy của cấp số cộng đã cho?",
      svg: "",
      options: [
        { id: "A", text: "Thứ $35$" },
        { id: "B", text: "Thứ $36$" },
        { id: "C", text: "Thứ $37$" },
        { id: "D", text: "Thứ $34$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Công thức số hạng tổng quát của cấp số cộng: $u_n = u_1 + (n - 1)d$. Do đó:</p>
  $$109 = 4 + (n - 1)\\cdot 3 \\Leftrightarrow 3(n - 1) = 105 \\Leftrightarrow n - 1 = 35 \\Leftrightarrow n = 36.$$
  <p>Vậy $109$ là số hạng thứ $36$ của cấp số cộng đã cho.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>`
    },
    {
      id: 15,
      part: "I",
      grade: "11",
      topic: "Giao điểm của đường thẳng và mặt phẳng trong không gian",
      question: "Cho hình chóp tam giác $S.ABC$. Trên hai cạnh bên $SA$ và $SC$ lần lượt lấy hai điểm $M$ và $N$ sao cho đường thẳng $MN$ không song song với $AC$ và cắt đường thẳng $AC$ tại điểm $K$. Giao điểm của đường thẳng $MN$ với mặt phẳng $(ABC)$ là",
      svg: "",
      options: [
        { id: "A", text: "Điểm $A$" },
        { id: "B", text: "Điểm $C$" },
        { id: "C", text: "Điểm $K$" },
        { id: "D", text: "Điểm $B$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Trong mặt phẳng $(SAC)$, đường thẳng $MN$ cắt đường thẳng $AC$ tại điểm $K$. Khi đó:</p>
  $$\\begin{cases} K \\in MN \\\\ K \\in AC \\subset (ABC) \\Rightarrow K \\in (ABC) \\end{cases} \\Rightarrow K = MN \\cap (ABC).$$
  <p>Vậy giao điểm của đường thẳng $MN$ với mặt phẳng $(ABC)$ là điểm $K$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>`
    },
    {
      id: 16,
      part: "I",
      grade: "11",
      topic: "Toán thực tế - Tích lũy tài chính định kỳ (Cấp số cộng)",
      question: "Một sinh viên mới ra trường đi làm bắt đầu tham gia một chương trình tích lũy tài chính định kỳ hàng tháng trong một năm ($12\\text{ tháng}$). Tháng thứ nhất, người đó gửi vào quỹ $2{,}5\\text{ triệu đồng}$. Kể từ tháng thứ hai trở đi, mỗi tháng người đó gửi nhiều hơn tháng ngay trước đó đúng $0{,}5\\text{ triệu đồng}$ ($500\\,000\\text{ đồng}$). Hỏi tổng số tiền người đó đã gửi tích lũy vào quỹ sau tròn $12\\text{ tháng}$ là bao nhiêu?",
      svg: SVG_TK5_CAU16,
      options: [
        { id: "A", text: "$58\\text{ triệu đồng}$" },
        { id: "B", text: "$68\\text{ triệu đồng}$" },
        { id: "C", text: "$72\\text{ triệu đồng}$" },
        { id: "D", text: "$63\\text{ triệu đồng}$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Số tiền gửi vào quỹ ở từng tháng lập thành một cấp số cộng $(u_n)$ với:</p>
  <ul>
    <li>Số hạng đầu: $u_1 = 2{,}5$ (triệu đồng);</li>
    <li>Công sai: $d = 0{,}5$ (triệu đồng);</li>
    <li>Số số hạng: $n = 12$ (tháng).</li>
  </ul>
  <p>Tổng số tiền người đó đã gửi tích lũy sau $12$ tháng là tổng của $12$ số hạng đầu tiên:</p>
  $$S_{12} = \\dfrac{12}{2}\\left[2u_1 + (12 - 1)d\\right] = 6\\left[2 \\cdot 2{,}5 + 11 \\cdot 0{,}5\\right] = 6\\left[5 + 5{,}5\\right] = 6 \\cdot 10{,}5 = 63\\text{ (triệu đồng)}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>`
    }
  ],

  // PHẦN II: 3 CÂU TRẮC NGHIỆM ĐÚNG SAI (12 Ý a, b, c, d)
  part2: [
    {
      id: 17,
      part: "II",
      grade: "11",
      topic: "Cấp số cộng thực tế - Kế hoạch chạy bộ điền kinh",
      question: "Để chuẩn bị thể lực tham gia giải điền kinh chạy cự ly trung bình cấp trường, bạn Bình lập kế hoạch luyện tập chạy bộ trong nhiều ngày liên tục. Ngày đầu tiên, Bình chạy được quãng đường $2\\,000\\text{ m}$. Kể từ ngày thứ hai trở đi, mỗi ngày Bình đều chạy tăng thêm $300\\text{ m}$ so với ngày liền trước đó. Gọi $u_n$ (đơn vị: mét) là quãng đường bạn Bình chạy được trong ngày thứ $n\\ (n \\in \\mathbb{N}^*)$, và $S_n$ là tổng quãng đường bạn Bình đã tích lũy chạy được sau $n$ ngày tập đầu tiên. Xét tính đúng sai của các khẳng định sau:",
      svg: "",
      items: [
        {
          id: "a",
          text: "Quãng đường Bình chạy được ở ngày thứ $n$ được xác định bởi công thức tổng quát $u_n = 300n + 2\\,000\\text{ (m)}$.",
          correct: "S",
          explanation: "Sai. Số hạng tổng quát là $u_n = u_1 + (n - 1)d = 2000 + 300(n - 1) = 300n + 1700$ (m). Công thức $300n + 2000$ cho $u_1 = 2300$ m, sai với ngày đầu chạy 2000 m."
        },
        {
          id: "b",
          text: "Trong suốt quá trình luyện tập, có một ngày bạn Bình chạy được quãng đường đúng bằng $4\\,400\\text{ m}$.",
          correct: "D",
          explanation: "Đúng. Xét $300n + 1700 = 4400 \\Leftrightarrow 300n = 2700 \\Leftrightarrow n = 9 \\in \\mathbb{N}^*$. Đúng ngày thứ 9 Bình chạy được đúng 4400 m."
        },
        {
          id: "c",
          text: "Ở ngày luyện tập thứ 11, quãng đường Bình chạy được đạt mức $5\\,000\\text{ m}$.",
          correct: "D",
          explanation: "Đúng. $u_{11} = 2000 + 10 \\cdot 300 = 5000$ (m)."
        },
        {
          id: "d",
          text: "Sau $15$ ngày luyện tập liên tục, tổng quãng đường bạn Bình đã tích lũy chạy được vượt quá $60\\text{ km}$.",
          correct: "D",
          explanation: "Đúng. $S_{15} = \\dfrac{15}{2}[2 \\cdot 2000 + 14 \\cdot 300] = \\dfrac{15}{2} \\cdot 8200 = 61500\\text{ m} = 61{,}5\\text{ km} > 60\\text{ km}$."
        }
      ]
    },
    {
      id: 18,
      part: "II",
      grade: "11",
      topic: "Hình học không gian - Trọng tâm tam giác và quan hệ song song",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $N$ là trung điểm của cạnh $AB$. Gọi $G$ và $H$ lần lượt là trọng tâm của tam giác $SAB$ và tam giác $ABC$ (tham khảo hình vẽ bên dưới). Xét tính đúng sai của các khẳng định sau:",
      svg: SVG_TK5_CAU18,
      items: [
        {
          id: "a",
          text: "Điểm $G$ thuộc mặt phẳng $(SAB)$.",
          correct: "D",
          explanation: "Đúng. Điểm $G$ là trọng tâm $\\triangle SAB$ nên $G$ nằm trên đường trung tuyến $SN \\subset (SAB) \\Rightarrow G \\in (SAB)$."
        },
        {
          id: "b",
          text: "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SAC)$ là đường thẳng $SA$.",
          correct: "D",
          explanation: "Đúng. Hai mặt phẳng có hai điểm chung phân biệt là $S$ và $A$ nên giao tuyến là đường thẳng $SA$."
        },
        {
          id: "c",
          text: "Đường thẳng $ON$ song song với đường thẳng $AD$.",
          correct: "D",
          explanation: "Đúng. Trong $\\triangle ABD$, $O$ là trung điểm $BD$, $N$ là trung điểm $AB$ nên $ON$ là đường trung bình $\\Rightarrow ON \\parallel AD$."
        },
        {
          id: "d",
          text: "Đường thẳng $GH$ cắt mặt phẳng $(SCD)$ tại điểm $K$ thì $K \\in SD$.",
          correct: "S",
          explanation: "Sai. Trong $\\triangle SNC$, $\\dfrac{NG}{NS} = \\dfrac{NH}{NC} = \\dfrac{1}{3} \\Rightarrow GH \\parallel SC$. Mà $SC \\subset (SCD)$ nên $GH \\parallel (SCD)$, do đó $GH$ không thể cắt mặt phẳng $(SCD)$."
        }
      ]
    },
    {
      id: 19,
      part: "II",
      grade: "11",
      topic: "Tính chất hàm số lượng giác y = 2 sin(x)",
      question: "Cho hàm số lượng giác $y = f(x) = 2\\sin x$. Xét tính đúng sai của các mệnh đề sau:",
      svg: "",
      items: [
        {
          id: "a",
          text: "Giá trị của hàm số tại điểm $x_0 = \\dfrac{\\pi}{6}$ bằng $1$.",
          correct: "D",
          explanation: "Đúng. $f\\left(\\dfrac{\\pi}{6}\\right) = 2\\sin\\left(\\dfrac{\\pi}{6}\\right) = 2 \\cdot \\dfrac{1}{2} = 1$."
        },
        {
          id: "b",
          text: "Hàm số $y = f(x)$ là hàm số lẻ trên $\\mathbb{R}$.",
          correct: "D",
          explanation: "Đúng. $D = \\mathbb{R}$ đối xứng và $f(-x) = 2\\sin(-x) = -2\\sin x = -f(x)$ nên hàm số là hàm số lẻ trên $\\mathbb{R}$."
        },
        {
          id: "c",
          text: "Chu kì tuần hoàn của hàm số là $T = \\pi$.",
          correct: "S",
          explanation: "Sai. Chu kì tuần hoàn của $y = 2\\sin x$ là $T = 2\\pi$, không phải $T = \\pi$."
        },
        {
          id: "d",
          text: "Trên đoạn $[0; 2\\pi]$, phương trình $f(x) = \\sqrt{3}$ có đúng $2$ nghiệm phân biệt.",
          correct: "D",
          explanation: "Đúng. $2\\sin x = \\sqrt{3} \\Leftrightarrow \\sin x = \\dfrac{\\sqrt{3}}{2} \\Rightarrow x_1 = \\dfrac{\\pi}{3}$ và $x_2 = \\dfrac{2\\pi}{3}$ đều thuộc $[0; 2\\pi]$."
        }
      ]
    }
  ],

  // PHẦN III: 2 CÂU TỰ LUẬN (3.0 ĐIỂM)
  part3: [
    {
      id: 20,
      part: "III",
      grade: "11",
      topic: "Giải phương trình lượng giác cơ bản chứa độ",
      type: "essay",
      maxScore: 1.5,
      question: "Giải phương trình lượng giác: $$\\cos(2x - 30^\\circ) = -\\dfrac{\\sqrt{3}}{2}$$",
      svg: "",
      rubric: [
        {
          id: "step1",
          points: 0.25,
          label: "Biến đổi vế phải về hàm cos góc lượng giác: $-\\dfrac{\\sqrt{3}}{2} = \\cos(150^\\circ)$",
          keywords: ["cos(150", "cos150", "150^\\circ", "150°", "150 độ", "-sqrt(3)/2", "-\\sqrt{3}/2", "-\\frac{\\sqrt{3}}{2}"]
        },
        {
          id: "step2",
          points: 0.25,
          label: "Áp dụng công thức nghiệm cos A = cos B viết 2 họ nghiệm với k360°",
          keywords: ["2x-30=150", "2x - 30 = 150", "2x - 30° = 150°", "k360", "k360^\\circ", "k360°"]
        },
        {
          id: "step3",
          points: 0.25,
          label: "Chuyển vế giải nhánh 1: $2x = 180^\\circ + k360^\\circ \\Leftrightarrow x = 90^\\circ + k180^\\circ$",
          keywords: ["x = 90", "x=90", "90^\\circ + k180", "90° + k180", "90°+k180°", "180+k360", "2x = 180"]
        },
        {
          id: "step4",
          points: 0.25,
          label: "Chuyển vế giải nhánh 2: $2x = -120^\\circ + k360^\\circ \\Leftrightarrow x = -60^\\circ + k180^\\circ$",
          keywords: ["x = -60", "x=-60", "-60^\\circ + k180", "-60° + k180", "-60°+k180°", "-120+k360", "2x = -120"]
        },
        {
          id: "step5",
          points: 0.25,
          label: "Nêu rõ điều kiện tham số nguyên: $k \\in \\mathbb{Z}$",
          keywords: ["k in z", "k ∈ z", "k∈z", "k \\in \\mathbb{z}", "k thuộc z"]
        },
        {
          id: "step6",
          points: 0.25,
          label: "Kết luận tập nghiệm $S = \\{90^\\circ + k180^\\circ;\\; -60^\\circ + k180^\\circ \\mid k \\in \\mathbb{Z}\\}$",
          keywords: ["s =", "tập nghiệm", "vậy phương trình", "nghiệm của phương trình", "90°", "-60°"]
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Giải phương trình lượng giác: $\\cos(2x - 30^\\circ) = -\\dfrac{\\sqrt{3}}{2}$.</p>
  <ul>
    <li><strong>Biến đổi phương trình về dạng chuẩn và viết họ nghiệm (0,5 điểm):</strong><br>
      Ta có $-\\dfrac{\\sqrt{3}}{2} = \\cos(150^\\circ)$, phương trình tương đương:
      $$\\cos(2x - 30^\\circ) = \\cos(150^\\circ) \\Leftrightarrow \\left[\\begin{array}{l}
      2x - 30^\\circ = 150^\\circ + k360^\\circ \\\\[6pt]
      2x - 30^\\circ = -150^\\circ + k360^\\circ
      \\end{array}\\right. \\quad (k \\in \\mathbb{Z}).$$
    </li>
    <li><strong>Giải chi tiết tìm $x$ (0,5 điểm):</strong>
      $$\\Leftrightarrow \\left[\\begin{array}{l}
      2x = 150^\\circ + 30^\\circ + k360^\\circ \\\\[4pt]
      2x = -150^\\circ + 30^\\circ + k360^\\circ
      \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l}
      2x = 180^\\circ + k360^\\circ \\\\[4pt]
      2x = -120^\\circ + k360^\\circ
      \\end{array}\\right.$$
      $$\\Leftrightarrow \\left[\\begin{array}{l}
      x = 90^\\circ + k180^\\circ \\\\[4pt]
      x = -60^\\circ + k180^\\circ
      \\end{array}\\right. \\quad (k \\in \\mathbb{Z}).$$
    </li>
    <li><strong>Kết luận đầy đủ họ nghiệm kèm điều kiện (0,5 điểm):</strong><br>
      Vậy tập nghiệm của phương trình đã cho là:
      $$S = \\{90^\\circ + k180^\\circ;\\; -60^\\circ + k180^\\circ \\mid k \\in \\mathbb{Z}\\}.$$
    </li>
  </ul>
</div>`
    },
    {
      id: 21,
      part: "III",
      grade: "11",
      topic: "Hình học không gian - Xác định giao điểm của đường thẳng và mặt phẳng",
      type: "essay",
      maxScore: 1.5,
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $N$ là trung điểm của cạnh bên $SA$. Xác định giao điểm $P$ của đường thẳng $SD$ với mặt phẳng $(BCN)$.",
      svg: SVG_TK5_CAU21,
      rubric: [
        {
          id: "step1",
          points: 0.25,
          label: "Vẽ hình biểu diễn phân biệt nét đứt/liền và chỉ ra điểm chung thứ nhất $B \\in (SBD) \\cap (BCN)$",
          keywords: ["b in", "b ∈", "điểm chung", "(sbd) cap (bcn)", "(sbd) ∩ (bcn)", "vẽ hình"]
        },
        {
          id: "step2",
          points: 0.25,
          label: "Chọn mặt phẳng phụ chứa đường thẳng $SD$ là $(SBD)$",
          keywords: ["mặt phẳng phụ", "chọn (sbd)", "(sbd) chứa sd", "chứa đường thẳng sd", "mp (sbd)"]
        },
        {
          id: "step3",
          points: 0.25,
          label: "Trong $(SAC)$, gọi $I = SO \\cap CN \\Rightarrow I \\in (SBD) \\cap (BCN)$",
          keywords: ["i = so", "so cắt cn", "so cap cn", "so ∩ cn", "gọi i", "i là giao điểm"]
        },
        {
          id: "step4",
          points: 0.25,
          label: "Xác định giao tuyến của hai mặt phẳng: $(SBD) \\cap (BCN) = BI$",
          keywords: ["giao tuyến bi", "= bi", "(sbd) cap (bcn) = bi", "(sbd) ∩ (bcn) = bi", "đường thẳng bi"]
        },
        {
          id: "step5",
          points: 0.25,
          label: "Trong $(SBD)$, gọi $P = BI \\cap SD$",
          keywords: ["p = bi", "bi cắt sd", "bi cap sd", "bi ∩ sd", "gọi p", "trong (sbd)"]
        },
        {
          id: "step6",
          points: 0.25,
          label: "Lập luận chứng minh $P \\in SD$ và $P \\in (BCN) \\Rightarrow P = SD \\cap (BCN)$",
          keywords: ["p in sd", "p ∈ sd", "p = sd cap", "p = sd ∩ (bcn)", "giao điểm p", "vậy p là"]
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <ul>
    <li><strong>a) Vẽ hình biểu diễn chính xác, phân biệt rõ nét đứt/liền (0,5 điểm):</strong><br>
      ${SVG_TK5_CAU21}
    </li>
    <li><strong>b) Lập luận chọn mặt phẳng phụ và tìm giao tuyến trung gian (0,5 điểm):</strong>
      <ul>
        <li>Để xác định giao điểm của đường thẳng $SD$ với mặt phẳng $(BCN)$, ta chọn mặt phẳng phụ chứa đường thẳng $SD$ là $(SBD)$.</li>
        <li>Tìm giao tuyến của mặt phẳng phụ $(SBD)$ và mặt phẳng $(BCN)$:<br>
          + Ta thấy điểm $B$ thuộc cả hai mặt phẳng: $B \\in (SBD)$ và $B \\in (BCN)$ nên $B$ là điểm chung thứ nhất:
          $$B \\in (SBD) \\cap (BCN).$$
          + Trong mặt phẳng $(SAC)$, gọi $I$ là giao điểm của hai đường thẳng $SO$ và $CN$:
          $$I = SO \\cap CN.$$
          Vì $I \\in CN \\subset (BCN)$ và $I \\in SO \\subset (SBD)$ nên $I$ là điểm chung thứ hai:
          $$I \\in (SBD) \\cap (BCN).$$
          + Do đó, giao tuyến của hai mặt phẳng $(SBD)$ và $(BCN)$ là đường thẳng $BI$:
          $$(SBD) \\cap (BCN) = BI.$$
        </li>
      </ul>
    </li>
    <li><strong>c) Xác định chính xác giao điểm và kết luận (0,5 điểm):</strong>
      <ul>
        <li>Trong mặt phẳng $(SBD)$, đường thẳng $BI$ cắt đường thẳng $SD$ tại điểm $P$:
          $$P = BI \\cap SD.$$
        </li>
        <li>Khi đó:
          $$\\begin{cases} P \\in SD \\\\ P \\in BI \\subset (BCN) \\Rightarrow P \\in (BCN) \\end{cases} \\Rightarrow P = SD \\cap (BCN).$$
          Vậy giao điểm của đường thẳng $SD$ với mặt phẳng $(BCN)$ là điểm $P$.
        </li>
      </ul>
      <p><em>(Ghi chú thêm: Trong $\\triangle SAC$, $SO$ và $CN$ là hai đường trung tuyến cắt nhau tại $I$ nên $I$ là trọng tâm $\\triangle SAC \\Rightarrow \\dfrac{SI}{SO} = \\dfrac{2}{3}$. Do đó trong $\\triangle SBD$, $I$ cũng là trọng tâm tam giác, suy ra $BI$ là đường trung tuyến của $\\triangle SBD$ ứng với đỉnh $B$, do đó $P$ chính là trung điểm của cạnh bên $SD$).</em></p>
    </li>
  </ul>
</div>`
    }
  ]
};


// ==================== BỘ ĐỀ THI TOÁN 11 - GIỮA KÌ I (MÃ ĐỀ: 11.GK1.TK4) ====================
const EXAM_11_GK1_TK4 = {
  id: "11_GK1_TK4",
  config: {
    title: "Đề Kiểm Tra Giữa Kì I - Mã Đề 11.GK1.TK4 (Toán 11)",
    school: "Trường THPT Nguyễn Văn Thoại - Sở GD&ĐT An Giang",
    schoolYear: "2026 - 2027",
    teacher: "ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)",
    timeLimitMinutes: 90,
    totalQuestions: 21,
    maxScore: 10.0,
    grade: "11",
    modes: {
      all: { time: 90, label: "90 phút (Cả đề thi: 21 câu - 10.0 điểm)", count: 21 },
      part1: { time: 45, label: "45 phút (Phần I: 16 câu trắc nghiệm - 4.0 điểm)", count: 16 },
      part2: { time: 25, label: "25 phút (Phần II: 3 câu Đúng / Sai - 3.0 điểm)", count: 3 },
      part3: { time: 20, label: "20 phút (Phần III: 2 câu Tự luận - 3.0 điểm)", count: 2 }
    }
  },

  // PHẦN I: 16 CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (A, B, C, D)
  part1: [
    {
      id: 1,
      part: "I",
      grade: "11",
      topic: "Giá trị lượng giác - Đổi đơn vị độ sang radian",
      question: "Góc có số đo $-450^\\circ$ khi đổi sang đơn vị radian bằng",
      svg: "",
      options: [
        { id: "A", text: "$-\\dfrac{3\\pi}{2}$" },
        { id: "B", text: "$-\\dfrac{7\\pi}{3}$" },
        { id: "C", text: "$-\\dfrac{5\\pi}{2}$" },
        { id: "D", text: "$-\\dfrac{5\\pi}{4}$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng công thức đổi số đo góc từ độ sang radian: $\\alpha_{\\text{rad}} = a^\\circ \\cdot \\dfrac{\\pi}{180^\\circ}$.</p>
  <p>Ta có:</p>
  $$-450^\\circ = -450 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{5\\pi}{2}\\text{ (rad)}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      id: 2,
      part: "I",
      grade: "11",
      topic: "Giá trị lượng giác - Tính giá trị lượng giác khi biết một giá trị",
      question: "Cho góc lượng giác $x$ thỏa mãn $\\cos x = \\dfrac{3}{5}$ với $\\dfrac{3\\pi}{2} < x < 2\\pi$. Giá trị của $\\sin x$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$\\dfrac{4}{5}$" },
        { id: "B", text: "$-\\dfrac{4}{5}$" },
        { id: "C", text: "$-\\dfrac{3}{5}$" },
        { id: "D", text: "$\\dfrac{16}{25}$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng hệ thức cơ bản giữa $\\sin x$ và $\\cos x$:</p>
  $$\\sin^2 x + \\cos^2 x = 1 \\Rightarrow \\sin^2 x = 1 - \\cos^2 x = 1 - \\left(\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}.$$
  <p>Vì $\\dfrac{3\\pi}{2} < x < 2\\pi$ (góc lượng giác $x$ thuộc góc phần tư thứ IV) nên $\\sin x < 0$. Do đó:</p>
  $$\\sin x = -\\sqrt{\\dfrac{16}{25}} = -\\dfrac{4}{5}.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      id: 3,
      part: "I",
      grade: "11",
      topic: "Công thức lượng giác - Công thức nhân đôi",
      question: "Khẳng định nào sau đây là khẳng định <strong>đúng</strong> với mọi góc $a$?",
      svg: "",
      options: [
        { id: "A", text: "$\\cos 2a = \\cos^2 a + \\sin^2 a$" },
        { id: "B", text: "$\\sin 2a = \\sin a\\cos a$" },
        { id: "C", text: "$\\cos 2a = 1 - 2\\cos^2 a$" },
        { id: "D", text: "$\\cos 2a = 2\\cos^2 a - 1$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo công thức nhân đôi lượng giác đối với côsin:</p>
  $$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a.$$
  <p>Do đó khẳng định ở phương án D là khẳng định đúng.</p>
  <p>Các khẳng định còn lại đều sai vì: $\\cos^2 a + \\sin^2 a = 1$; $\\sin 2a = 2\\sin a\\cos a$; $1 - 2\\cos^2 a = -\\cos 2a$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      id: 4,
      part: "I",
      grade: "11",
      topic: "Hàm số lượng giác - Tập xác định của hàm số lượng giác",
      question: "Tập xác định của hàm số $y = \\tan x$ là",
      svg: "",
      options: [
        { id: "A", text: "$D = \\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "B", text: "$D = \\mathbb{R}$" },
        { id: "C", text: "$D = \\mathbb{R}\\setminus\\{k\\pi,\\, k\\in\\mathbb{Z}\\}$" },
        { id: "D", text: "$D = [-1;\\; 1]$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hàm số lượng giác $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi và chỉ khi:</p>
  $$\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\quad (k\\in\\mathbb{Z}).$$
  <p>Vậy tập xác định của hàm số là $D = \\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      id: 5,
      part: "I",
      grade: "11",
      topic: "Phương trình lượng giác cơ bản - Trường hợp đặc biệt cos x = -1",
      question: "Nghiệm của phương trình lượng giác $\\cos x = -1$ là",
      svg: "",
      options: [
        { id: "A", text: "$x = k2\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "B", text: "$x = \\pi + k2\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "C", text: "$x = -\\dfrac{\\pi}{2} + k2\\pi,\\, k\\in\\mathbb{Z}$" },
        { id: "D", text: "$x = \\pi + k\\pi,\\, k\\in\\mathbb{Z}$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo công thức nghiệm của phương trình lượng giác cơ bản trường hợp đặc biệt:</p>
  $$\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi\\quad (k\\in\\mathbb{Z}).$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      id: 6,
      part: "I",
      grade: "11",
      topic: "Phương trình lượng giác cơ bản - Phương trình bậc nhất đối với cos x",
      question: "Phương trình lượng giác $2\\cos x + 1 = 0$ có tập nghiệm là",
      svg: "",
      options: [
        { id: "A", text: "$S = \\left\\{\\pm\\dfrac{\\pi}{3} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "B", text: "$S = \\left\\{\\pm\\dfrac{5\\pi}{6} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "C", text: "$S = \\left\\{\\pm\\dfrac{2\\pi}{3} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" },
        { id: "D", text: "$S = \\left\\{\\pm\\dfrac{\\pi}{6} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Ta có: $2\\cos x + 1 = 0 \\Leftrightarrow \\cos x = -\\dfrac{1}{2} = \\cos\\left(\\dfrac{2\\pi}{3}\\right)$.</p>
  $$\\Leftrightarrow x = \\pm\\dfrac{2\\pi}{3} + k2\\pi\\quad (k\\in\\mathbb{Z}).$$
  <p>Vậy tập nghiệm của phương trình là $S = \\left\\{\\pm\\dfrac{2\\pi}{3} + k2\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      id: 7,
      part: "I",
      grade: "11",
      topic: "Ứng dụng thực tế lượng giác - Trò chơi đánh đu Hội Lim (Bắc Ninh)",
      question: "Hội Lim (tỉnh Bắc Ninh) tổ chức vào mùa xuân thường có trò chơi đánh đu. Khi người chơi đu nhún đều, cây đu sẽ đưa người chơi đu dao động quanh vị trí cân bằng (hình vẽ bên). Nghiên cứu trò chơi này, người ta thấy khoảng cách $h$ (đơn vị: mét) từ vị trí người chơi đu đến vị trí cân bằng được biểu diễn qua thời gian $t$ (giây, với $t \\ge 0$) bởi hệ thức $h = |d|$ với $d = 4\\cos\\left[\\dfrac{\\pi}{4}(2t - 1)\\right]$, trong đó ta quy ước $d > 0$ khi vị trí cân bằng ở phía sau lưng người chơi đu và $d < 0$ trong trường hợp ngược lại. Tìm các thời điểm $t$ theo tham số $k \\in \\mathbb{Z}$ ($k \\ge 0$) để khoảng cách $h = 4\\text{ m}$.",
      svg: SVG_TOAN11_CAU7,
      options: [
        { id: "A", text: "$t = \\dfrac{4k-1}{2},\\, k\\in\\mathbb{Z}, k \\ge 1$" },
        { id: "B", text: "$t = \\dfrac{4k+1}{2},\\, k\\in\\mathbb{Z}, k \\ge 0$" },
        { id: "C", text: "$t = 2k + 1,\\, k\\in\\mathbb{Z}, k \\ge 0$" },
        { id: "D", text: "$t = \\dfrac{2k+1}{4},\\, k\\in\\mathbb{Z}, k \\ge 0$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Khoảng cách từ người chơi đu đến vị trí cân bằng là $h = |d|$.</p>
  <p>Theo đề bài, ta cần tìm thời điểm $t$ để $h = 4\\text{ m}$:</p>
  $$|d| = 4 \\Leftrightarrow \\left|4\\cos\\left[\\dfrac{\\pi}{4}(2t - 1)\\right]\\right| = 4 \\Leftrightarrow \\left|\\cos\\left[\\dfrac{\\pi}{4}(2t - 1)\\right]\\right| = 1.$$
  <p>Điều này tương đương với:</p>
  $$\\cos\\left[\\dfrac{\\pi}{4}(2t - 1)\\right] = \\pm 1 \\Leftrightarrow \\dfrac{\\pi}{4}(2t - 1) = k\\pi\\quad (k\\in\\mathbb{Z}).$$
  $$\\Leftrightarrow 2t - 1 = 4k \\Leftrightarrow 2t = 4k + 1 \\Leftrightarrow t = \\dfrac{4k + 1}{2}\\quad (k\\in\\mathbb{Z}).$$
  <p>Vì thời gian $t \\ge 0$ nên $\\dfrac{4k+1}{2} \\ge 0 \\Leftrightarrow k \\ge -\\dfrac{1}{4}$. Do $k \\in \\mathbb{Z}$ nên $k \\ge 0$ ($k \\in \\{0, 1, 2, \\dots\\}$).</p>
  <p>Vậy các thời điểm thỏa mãn yêu cầu là $t = \\dfrac{4k+1}{2}$ ($k \\in \\mathbb{Z}, k \\ge 0$).</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      id: 8,
      part: "I",
      grade: "11",
      topic: "Dãy số - Tìm số hạng của dãy số cho bởi công thức tổng quát",
      question: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\dfrac{3n + 1}{n + 2}$. Giá trị của số hạng thứ ba $u_3$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$\\dfrac{7}{5}$" },
        { id: "B", text: "$2$" },
        { id: "C", text: "$\\dfrac{8}{5}$" },
        { id: "D", text: "$\\dfrac{5}{2}$" }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Thay $n = 3$ vào công thức số hạng tổng quát của dãy số:</p>
  $$u_3 = \\dfrac{3\\cdot 3 + 1}{3 + 2} = \\dfrac{9 + 1}{5} = \\dfrac{10}{5} = 2.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      id: 9,
      part: "I",
      grade: "11",
      topic: "Dãy số - Nhận biết dãy số tăng",
      question: "Dãy số nào sau đây là một dãy số tăng?",
      svg: "",
      options: [
        { id: "A", text: "$15;\\, 12;\\, 9;\\, 6;\\, 3;\\,\\dots$" },
        { id: "B", text: "$-2;\\,-5;\\,-8;\\,-11;\\,-14;\\,\\dots$" },
        { id: "C", text: "$3;\\,-3;\\, 3;\\,-3;\\, 3;\\,\\dots$" },
        { id: "D", text: "$2;\\, 5;\\, 8;\\, 11;\\, 14;\\,\\dots$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dãy số $2;\\, 5;\\, 8;\\, 11;\\, 14;\\,\\dots$ có hiệu của hai số liên tiếp:</p>
  $$u_{n+1} - u_n = 3 > 0 \\Leftrightarrow u_{n+1} > u_n\\quad (\\forall n \\ge 1),$$
  <p>nên là dãy số tăng. Dãy A và B là các dãy số giảm; dãy C là dãy đan dấu (không tăng, không giảm).</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      id: 10,
      part: "I",
      grade: "11",
      topic: "Cấp số cộng - Tìm công sai của cấp số cộng",
      question: "Cho cấp số cộng $(u_n)\\colon 3;\\, 8;\\, 13;\\, 18;\\, 23;\\,\\dots$. Công sai $d$ của cấp số cộng đã cho bằng",
      svg: "",
      options: [
        { id: "A", text: "$d = 5$" },
        { id: "B", text: "$d = -5$" },
        { id: "C", text: "$d = 3$" },
        { id: "D", text: "$d = \\dfrac{8}{3}$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Công sai của cấp số cộng bằng hiệu của số hạng thứ hai trừ đi số hạng đầu:</p>
  $$d = u_2 - u_1 = 8 - 3 = 5.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      id: 11,
      part: "I",
      grade: "11",
      topic: "Cấp số nhân - Tính số hạng thứ hai của cấp số nhân",
      question: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 9$ và công bội $q = -\\dfrac{1}{3}$. Số hạng thứ hai $u_2$ bằng",
      svg: "",
      options: [
        { id: "A", text: "$u_2 = 3$" },
        { id: "B", text: "$u_2 = -27$" },
        { id: "C", text: "$u_2 = -3$" },
        { id: "D", text: "$u_2 = \\dfrac{26}{3}$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo định nghĩa cấp số nhân, số hạng thứ hai được tính bởi:</p>
  $$u_2 = u_1 \\cdot q = 9 \\cdot \\left(-\\dfrac{1}{3}\\right) = -3.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      id: 12,
      part: "I",
      grade: "11",
      topic: "Cấp số cộng - Xác định vị trí số hạng của cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -3$ và công sai $d = 5$. Số $142$ là số hạng thứ mấy của cấp số cộng đã cho?",
      svg: "",
      options: [
        { id: "A", text: "Thứ $29$" },
        { id: "B", text: "Thứ $31$" },
        { id: "C", text: "Thứ $28$" },
        { id: "D", text: "Thứ $30$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Công thức số hạng tổng quát của cấp số cộng: $u_n = u_1 + (n - 1)d$. Do đó:</p>
  $$142 = -3 + (n - 1)\\cdot 5 \\Leftrightarrow 5(n - 1) = 145 \\Leftrightarrow n - 1 = 29 \\Leftrightarrow n = 30.$$
  <p>Vậy $142$ là số hạng thứ $30$ của cấp số cộng đã cho.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      id: 13,
      part: "I",
      grade: "11",
      topic: "Cấp số cộng - Ứng dụng thực tế tính tổng chi phí khoan giếng 25m",
      question: "Một người thợ khoan một cái giếng sâu $25\\text{ m}$. Giá tiền của mét khoan đầu tiên là $120\\,000\\text{ đồng}$. Kể từ mét khoan thứ hai trở đi, giá của mỗi mét sau tăng thêm $30\\,000\\text{ đồng}$ so với mét ngay trước đó. Hỏi tổng chi phí để người đó khoan hết $25\\text{ m}$ giếng là bao nhiêu tiền?",
      svg: SVG_TOAN11_CAU13,
      options: [
        { id: "A", text: "$12\\text{ triệu đồng}$" },
        { id: "B", text: "$11{,}5\\text{ triệu đồng}$" },
        { id: "C", text: "$12{,}5\\text{ triệu đồng}$" },
        { id: "D", text: "$10{,}8\\text{ triệu đồng}$" }
      ],
      correctAnswer: "A",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Giá tiền của từng mét khoan lập thành một cấp số cộng $(u_n)$ với:</p>
  <ul>
    <li>Số hạng đầu: $u_1 = 120\\,000\\text{ đồng}$;</li>
    <li>Công sai: $d = 30\\,000\\text{ đồng}$;</li>
    <li>Số số hạng: $n = 25\\text{ (mét)}$.</li>
  </ul>
  <p>Tổng chi phí để người đó khoan hết $25\\text{ m}$ giếng là tổng của $25$ số hạng đầu tiên:</p>
  $$S_{25} = \\dfrac{25}{2}\\left[2u_1 + (25 - 1)d\\right] = \\dfrac{25}{2}\\left[2 \\cdot 120\\,000 + 24 \\cdot 30\\,000\\right]$$
  $$= \\dfrac{25}{2}\\left[240\\,000 + 720\\,000\\right] = \\dfrac{25}{2} \\cdot 960\\,000 = 25 \\cdot 480\\,000 = 12\\,000\\,000\\text{ (đồng)}.$$
  <p>Đổi $12\\,000\\,000\\text{ đồng} = 12\\text{ triệu đồng}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      id: 14,
      part: "I",
      grade: "11",
      topic: "Hình học không gian - Quy tắc biểu diễn hình không gian của hình chóp tứ giác",
      question: "Hình nào sau đây là hình biểu diễn đúng của một hình chóp tứ giác?",
      svg: "",
      options: [
        { id: "A", text: SVG_TOAN11_C14_A },
        { id: "B", text: SVG_TOAN11_C14_B },
        { id: "C", text: SVG_TOAN11_C14_C },
        { id: "D", text: SVG_TOAN11_C14_D }
      ],
      correctAnswer: "B",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hình biểu diễn của một hình chóp tứ giác là hình chóp có đáy là tứ giác lồi, gồm $1$ đỉnh và đáy $4$ đỉnh ($5$ đỉnh, $8$ cạnh). Khi biểu diễn trong không gian:</p>
  <ul>
    <li>Các đường nhìn thấy vẽ bằng nét liền;</li>
    <li>Các đường bị khuất (gồm $1$ cạnh đáy và $1$ cạnh bên khuất phía sau) phải được vẽ bằng nét đứt khúc.</li>
  </ul>
  <p>Do đó, hình ở phương án B là hình biểu diễn đúng.</p>
  <p><em>(Hình A vẽ sai quy tắc vì toàn bộ nét đều là nét liền; hình C biểu diễn hình chóp tam giác/tứ diện; hình D là hình phẳng biểu diễn tứ giác cùng hai đường chéo).</em></p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      id: 15,
      part: "I",
      grade: "11",
      topic: "Hình học không gian - Xác định giao tuyến của hai mặt phẳng",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AD$, đáy nhỏ $BC$ ($AD \\parallel BC$). Hai cạnh bên $AB$ và $CD$ kéo dài cắt nhau tại điểm $E$. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng nào sau đây?",
      svg: "",
      options: [
        { id: "A", text: "$SO$" },
        { id: "B", text: "$AC$" },
        { id: "C", text: "$SE$" },
        { id: "D", text: "$BD$" }
      ],
      correctAnswer: "C",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Ta có:</p>
  <ul>
    <li>Điểm $S$ là điểm chung thứ nhất của hai mặt phẳng $(SAB)$ và $(SCD)$: $S \\in (SAB) \\cap (SCD)$.</li>
    <li>Trong mặt phẳng đáy $(ABCD)$, điểm $E = AB \\cap CD$. Vì $E \\in AB \\subset (SAB)$ và $E \\in CD \\subset (SCD)$ nên $E$ là điểm chung thứ hai: $E \\in (SAB) \\cap (SCD)$.</li>
  </ul>
  <p>Do đó, giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $SE$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      id: 16,
      part: "I",
      grade: "11",
      topic: "Hình học không gian - Xác định giao điểm của đường thẳng và mặt phẳng",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$ ($AB \\parallel CD$). Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Trên cạnh bên $SC$ lấy điểm $M$ ($M$ không trùng với $S$ và $C$). Trong mặt phẳng $(SAC)$, đường thẳng $SO$ cắt đường thẳng $AM$ tại điểm $P$. Giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$ là",
      svg: "",
      options: [
        { id: "A", text: "Điểm $O$" },
        { id: "B", text: "Điểm $M$" },
        { id: "C", text: "Điểm $S$" },
        { id: "D", text: "Điểm $P$" }
      ],
      correctAnswer: "D",
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Trong mặt phẳng $(SAC)$, gọi $P$ là giao điểm của hai đường thẳng $AM$ và $SO$. Khi đó:</p>
  $$\\begin{cases} P \\in AM \\\\ P \\in SO \\subset (SBD) \\Rightarrow P \\in (SBD) \\end{cases} \\Rightarrow P = AM \\cap (SBD).$$
  <p>Vậy giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$ là điểm $P$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    }
  ],

  // PHẦN II: 3 CÂU TRẮC NGHIỆM ĐÚNG SAI (12 Ý a, b, c, d)
  part2: [
    {
      id: 17,
      part: "II",
      grade: "11",
      topic: "Hàm số lượng giác y = tan x",
      question: "Cho hàm số lượng giác $y = f(x) = \\tan x$. Xét tính đúng sai của các mệnh đề sau:",
      svg: "",
      items: [
        {
          id: "a",
          text: "Tập xác định của hàm số là $D = \\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k\\in\\mathbb{Z}\\right\\}$.",
          correct: true
        },
        {
          id: "b",
          text: "Giá trị của hàm số tại điểm $x_0 = \\dfrac{\\pi}{4}$ bằng $1$.",
          correct: true
        },
        {
          id: "c",
          text: "Chu kì tuần hoàn của hàm số là $T = 2\\pi$.",
          correct: false
        },
        {
          id: "d",
          text: "Trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, phương trình $f(x) = \\sqrt{3}$ có đúng $1$ nghiệm phân biệt là $x = \\dfrac{\\pi}{3}$.",
          correct: true
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Xét hàm số lượng giác $y = f(x) = \\tan x$:</p>
  <ul>
    <li>a) <strong>Đúng.</strong> Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi và chỉ khi: $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\; (k\\in\\mathbb{Z})$. Tập xác định là $D = \\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k\\in\\mathbb{Z}\\right\\}$.</li>
    <li>b) <strong>Đúng.</strong> Thay $x_0 = \\dfrac{\\pi}{4}$ vào hàm số: $f\\left(\\dfrac{\\pi}{4}\\right) = \\tan\\dfrac{\\pi}{4} = 1$.</li>
    <li>c) <strong>Sai.</strong> Hàm số lượng giác $y = \\tan x$ là hàm số tuần hoàn với chu kì cơ sở là $T = \\pi$, không phải $T = 2\\pi$ (chu kì $2\\pi$ là của các hàm số $\\sin x$ và $\\cos x$).</li>
    <li>d) <strong>Đúng.</strong> Phương trình $f(x) = \\sqrt{3} \\Leftrightarrow \\tan x = \\sqrt{3} = \\tan\\dfrac{\\pi}{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi\\; (k\\in\\mathbb{Z})$.<br>
    Xét trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$:<br>
    $$-\\dfrac{\\pi}{2} < \\dfrac{\\pi}{3} + k\\pi < \\dfrac{\\pi}{2} \\Leftrightarrow -\\dfrac{1}{2} - \\dfrac{1}{3} < k < \\dfrac{1}{2} - \\dfrac{1}{3} \\Leftrightarrow -\\dfrac{5}{6} < k < \\dfrac{1}{6}.$$
    Vì $k \\in \\mathbb{Z}$ nên chỉ có duy nhất $k = 0$, tương ứng với nghiệm duy nhất $x = \\dfrac{\\pi}{3} \\in \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) Đ; b) Đ; c) S; d) Đ.</strong></p>
</div>
`
    },
    {
      id: 18,
      part: "II",
      grade: "11",
      topic: "Cấp số nhân - Kế hoạch giải ngân vốn đầu tư R&D ngành bán dẫn",
      question: "Để đón đầu cuộc cách mạng công nghiệp bán dẫn, một tập đoàn viễn thông quyết định rót vốn đầu tư dài hạn xây dựng trung tâm nghiên cứu và phát triển vi mạch công nghệ cao. Bắt đầu từ quý I năm đầu tiên, tập đoàn tiến hành giải ngân số vốn ban đầu là $16\\text{ tỷ đồng}$. Theo kế hoạch đầu tư được phê duyệt, để bám sát tiến độ nghiên cứu, số vốn giải ngân ở mỗi quý tiếp theo luôn gấp $1{,}5$ lần số vốn giải ngân của quý liền trước đó. Gọi $u_n$ (đơn vị: tỷ đồng) là số tiền giải ngân ở quý thứ $n$ ($n \\in \\mathbb{N}^*$), và $S_n = u_1 + u_2 + \\dots + u_n$ là tổng số vốn lũy kế đã giải ngân sau $n$ quý đầu tiên.<br>Xét tính đúng sai của các khẳng định sau:",
      svg: SVG_TOAN11_CAU18,
      items: [
        {
          id: "a",
          text: "Dãy số $(u_n)$ là một cấp số nhân có số hạng đầu $u_1 = 16$ tỷ đồng và công bội $q = 1{,}5$.",
          correct: true
        },
        {
          id: "b",
          text: "Công thức tính số tiền giải ngân ở quý thứ $n$ là $u_n = 16 \\cdot (1{,}5)^n$ tỷ đồng với mọi $n \\ge 1$.",
          correct: false
        },
        {
          id: "c",
          text: "Số tiền giải ngân của riêng quý thứ tư là $54$ tỷ đồng, và tổng số vốn tập đoàn đã giải ngân tích lũy sau $1$ năm đầu tiên (gồm 4 quý) là $130$ tỷ đồng.",
          correct: true
        },
        {
          id: "d",
          text: "Giả sử tổng ngân sách dự kiến của cả giai đoạn nghiên cứu là $500$ tỷ đồng. Sau đúng $6$ quý giải ngân, tổng số vốn giải ngân lũy kế của tập đoàn đã vượt mức ngân sách dự kiến này.",
          correct: false
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Số vốn ban đầu giải ngân ở quý 1 là $u_1 = 16$ tỷ đồng. Tỷ lệ tăng trưởng số vốn ở mỗi quý tiếp theo là $q = 1{,}5$.</p>
  <ul>
    <li>a) <strong>Đúng.</strong> Vì số vốn bơm vào dự án ở mỗi quý tiếp theo luôn gấp $1{,}5$ lần số vốn quý liền trước: $u_{n+1} = 1{,}5 \\cdot u_n\\; (\\forall n \\ge 1)$, nên dãy $(u_n)$ là một cấp số nhân có số hạng đầu $u_1 = 16$ tỷ đồng và công bội $q = 1{,}5$.</li>
    <li>b) <strong>Sai.</strong> Theo công thức số hạng tổng quát của cấp số nhân:
    $$u_n = u_1 \\cdot q^{n-1} = 16 \\cdot (1{,}5)^{n-1}\\text{ (tỷ đồng)},\\quad (\\forall n \\ge 1).$$
    Khẳng định đưa ra công thức $u_n = 16 \\cdot (1{,}5)^n$ là sai (công thức này cho $u_1 = 24$, không đúng với số vốn quý 1 là $16$).</li>
    <li>c) <strong>Đúng.</strong>
      <br>– Số tiền giải ngân của riêng quý 4 là:
      $$u_4 = 16 \\cdot (1{,}5)^{4-1} = 16 \\cdot (1{,}5)^3 = 16 \\cdot \\dfrac{27}{8} = 54\\text{ (tỷ đồng)}.$$
      – Một năm gồm 4 quý, tổng số vốn đã giải ngân sau 1 năm đầu tiên là:
      $$S_4 = u_1 + u_2 + u_3 + u_4 = 16 + 16 \\cdot 1{,}5 + 16 \\cdot (1{,}5)^2 + 54 = 16 + 24 + 36 + 54 = 130\\text{ (tỷ đồng)}.$$
    </li>
    <li>d) <strong>Sai.</strong> Tổng số vốn giải ngân lũy kế sau $n$ quý được tính bằng công thức tổng $n$ số hạng đầu của cấp số nhân:
    $$S_n = \\dfrac{u_1(q^n - 1)}{q - 1} = \\dfrac{16[(1{,}5)^n - 1]}{1{,}5 - 1} = 32[(1{,}5)^n - 1]\\text{ (tỷ đồng)}.$$
    Sau đúng 6 quý giải ngân ($n = 6$):
    $$S_6 = 32[(1{,}5)^6 - 1] = 32\\left[\\left(\\dfrac{3}{2}\\right)^6 - 1\\right] = 32\\left[\\dfrac{729}{64} - 1\\right] = 32 \\cdot \\dfrac{665}{64} = \\dfrac{665}{2} = 332{,}5\\text{ (tỷ đồng)}.$$
    Vì $332{,}5\\text{ tỷ đồng} < 500\\text{ tỷ đồng}$ nên sau 6 quý, tổng vốn giải ngân vẫn chưa vượt qua ngân sách dự kiến $500$ tỷ đồng.<br>
    <em>(Thực tế, phải đến hết quý thứ 7: $S_7 = S_6 + u_7 = 332{,}5 + 16 \\cdot (1{,}5)^6 = 332{,}5 + 182{,}25 = 514{,}75\\text{ tỷ đồng} > 500\\text{ tỷ đồng}$ thì tổng vốn mới vượt mức ngân sách). Do đó khẳng định d là sai.</em></li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) Đ; b) S; c) Đ; d) S.</strong></p>
</div>
`
    },
    {
      id: 19,
      part: "II",
      grade: "11",
      topic: "Hình học không gian - Trọng tâm tam giác và quan hệ song song",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh $CD$. Gọi $G$ và $E$ lần lượt là trọng tâm của tam giác $SCD$ và tam giác $BCD$ (tham khảo hình vẽ bên dưới).<br>Xét tính đúng sai của các khẳng định sau:",
      svg: SVG_TOAN11_CAU19,
      items: [
        {
          id: "a",
          text: "Điểm $G$ thuộc mặt phẳng $(SCD)$.",
          correct: true
        },
        {
          id: "b",
          text: "Giao tuyến của hai mặt phẳng $(SCD)$ và $(SBD)$ là đường thẳng $SD$.",
          correct: true
        },
        {
          id: "c",
          text: "Đường thẳng $OM$ song song với đường thẳng $BC$.",
          correct: true
        },
        {
          id: "d",
          text: "Đường thẳng $GE$ cắt mặt phẳng $(SAB)$ tại điểm $P$ thì $P \\in SB$.",
          correct: false
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào hình vẽ và các tính chất hình học không gian:</p>
  <ul>
    <li>a) <strong>Đúng.</strong> Điểm $G$ là trọng tâm của tam giác $SCD$ nên $G$ nằm trên đường trung tuyến $SM$ của tam giác $SCD$. Vì $SM \\subset (SCD)$ nên $G \\in (SCD)$.</li>
    <li>b) <strong>Đúng.</strong> Hai mặt phẳng $(SCD)$ và $(SBD)$ có điểm chung thứ nhất là $S$ và điểm chung thứ hai là $D$. Do đó giao tuyến của $(SCD)$ và $(SBD)$ chính là đường thẳng $SD$.</li>
    <li>c) <strong>Đúng.</strong> Đáy $ABCD$ là hình bình hành tâm $O$ nên $O$ là trung điểm của đường chéo $BD$. Mặt khác, $M$ là trung điểm của cạnh $CD$. Xét trong tam giác $BCD$, đoạn thẳng $OM$ nối hai trung điểm của hai cạnh $BD$ và $CD$ nên $OM$ là đường trung bình của tam giác $BCD$. Suy ra:
    $$OM \\parallel BC\\quad \\left(\\text{và } OM = \\dfrac{1}{2}BC\\right).$$</li>
    <li>d) <strong>Sai.</strong>
      <br>Xét tam giác $SMB$:
      <ul>
        <li>Điểm $G$ là trọng tâm của tam giác $SCD$ trên đường trung tuyến $SM$ nên: $\\dfrac{MG}{MS} = \\dfrac{1}{3}$.</li>
        <li>Điểm $E$ là trọng tâm của tam giác $BCD$ trên đường trung tuyến $BM$ nên: $\\dfrac{ME}{MB} = \\dfrac{1}{3}$.</li>
      </ul>
      Áp dụng định lí Thalès đảo trong tam giác $SMB$, ta có:
      $$\\dfrac{MG}{MS} = \\dfrac{ME}{MB} = \\dfrac{1}{3} \\Rightarrow GE \\parallel SB.$$
      Vì đường thẳng $GE$ song song với đường thẳng $SB$ mà $SB \\subset (SAB)$ và $GE \\not\\subset (SAB)$, nên đường thẳng $GE$ song song với mặt phẳng $(SAB)$:
      $$GE \\parallel (SAB).$$
      Do $GE \\parallel (SAB)$ nên đường thẳng $GE$ không thể cắt mặt phẳng $(SAB)$, khẳng định đường thẳng $GE$ cắt $(SAB)$ tại điểm $P \\in SB$ là sai.
    </li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) Đ; b) Đ; c) Đ; d) S.</strong></p>
</div>
`
    }
  ],

  // PHẦN III: 2 CÂU TỰ LUẬN (CÂU 20 & 21 - THANG ĐIỂM 3.0 ĐIỂM)
  part3: [
    {
      id: 20,
      part: "III",
      grade: "11",
      type: "essay",
      maxScore: 1.5,
      topic: "Phương trình lượng giác - Giải phương trình lượng giác cơ bản",
      question: "Giải phương trình lượng giác:\n$$\\cos\\left(2x + \\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{2}$$",
      svg: "",
      rubric: [
        {
          id: "step1",
          label: "Nhận biết góc chuẩn: $-\\dfrac{\\sqrt{2}}{2} = \\cos\\left(\\dfrac{3\\pi}{4}\\right)$",
          points: 0.25,
          keywords: ["3\\pi/4", "3pi/4", "135", "cos(3pi/4)", "cos(3\\pi/4)", "\\cos\\left(\\frac{3\\pi}{4}\\right)", "5\\pi/4", "5pi/4"]
        },
        {
          id: "step2",
          label: "Viết phương trình họ nghiệm: $2x + \\dfrac{\\pi}{4} = \\pm\\dfrac{3\\pi}{4} + k2\\pi$",
          points: 0.25,
          keywords: ["2x", "k2\\pi", "k2pi", "3\\pi/4", "3pi/4", "\\pm"]
        },
        {
          id: "step3",
          label: "Chuyển vế & rút gọn $2x$: $2x = \\dfrac{\\pi}{2} + k2\\pi$ và $2x = -\\pi + k2\\pi$",
          points: 0.25,
          keywords: ["\\pi/2", "pi/2", "-\\pi", "-pi", "k2\\pi", "k2pi"]
        },
        {
          id: "step4",
          label: "Giải ra họ nghiệm thứ nhất: $x = \\dfrac{\\pi}{4} + k\\pi$",
          points: 0.25,
          keywords: ["\\pi/4 + k\\pi", "\\pi/4+k\\pi", "pi/4 + kpi", "pi/4+kpi", "x = \\pi/4", "x=\\pi/4", "x = pi/4"]
        },
        {
          id: "step5",
          label: "Giải ra họ nghiệm thứ hai: $x = -\\dfrac{\\pi}{2} + k\\pi$",
          points: 0.25,
          keywords: ["-\\pi/2 + k\\pi", "-\\pi/2+k\\pi", "-pi/2 + kpi", "-pi/2+kpi", "x = -\\pi/2", "x=-\\pi/2", "-\\pi/2"]
        },
        {
          id: "step6",
          label: "Ghi rõ điều kiện $k \\in \\mathbb{Z}$ và kết luận tập nghiệm $S$",
          points: 0.25,
          keywords: ["k \\in \\mathbb{Z}", "k \\in Z", "k in Z", "k\\in Z", "k\\in\\mathbb{Z}", "tập nghiệm", "S ="]
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết & Barem chấm điểm từ ThS. Lương Thanh Sáng:</strong>
  
  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-list-check"></i> Bước 1 (0,5 điểm): Biến đổi phương trình về dạng chuẩn và viết họ nghiệm:</strong>
    <p>Ta có $-\\dfrac{\\sqrt{2}}{2} = \\cos\\left(\\dfrac{3\\pi}{4}\\right)$, phương trình tương đương:</p>
    $$\\cos\\left(2x + \\dfrac{\\pi}{4}\\right) = \\cos\\left(\\dfrac{3\\pi}{4}\\right) \\Leftrightarrow \\left[\\begin{array}{l}
    2x + \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4} + k2\\pi \\\\[6pt]
    2x + \\dfrac{\\pi}{4} = -\\dfrac{3\\pi}{4} + k2\\pi
    \\end{array}\\right. \\quad (k \\in \\mathbb{Z}).$$
  </div>

  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-calculator"></i> Bước 2 (0,5 điểm): Giải chi tiết tìm $x$:</strong>
    $$\\Leftrightarrow \\left[\\begin{array}{l}
    2x = \\dfrac{3\\pi}{4} - \\dfrac{\\pi}{4} + k2\\pi \\\\[6pt]
    2x = -\\dfrac{3\\pi}{4} - \\dfrac{\\pi}{4} + k2\\pi
    \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l}
    2x = \\dfrac{\\pi}{2} + k2\\pi \\\\[6pt]
    2x = -\\pi + k2\\pi
    \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l}
    x = \\dfrac{\\pi}{4} + k\\pi \\\\[6pt]
    x = -\\dfrac{\\pi}{2} + k\\pi
    \\end{array}\\right. \\quad (k \\in \\mathbb{Z}).$$
  </div>

  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-square-check"></i> Bước 3 (0,5 điểm): Kết luận đầy đủ họ nghiệm kèm điều kiện:</strong>
    <p>Vậy tập nghiệm của phương trình đã cho là:</p>
    $$S = \\left\\{\\dfrac{\\pi}{4} + k\\pi;\\; -\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}.$$
  </div>

  <p class="final-answer">$\\Rightarrow$ <strong>Tổng điểm tối đa: 1,5 điểm.</strong></p>
</div>
`
    },
    {
      id: 21,
      part: "III",
      grade: "11",
      type: "essay",
      maxScore: 1.5,
      topic: "Hình học không gian - Xác định giao điểm của đường thẳng và mặt phẳng",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh bên $SC$. Xác định giao điểm $K$ của đường thẳng $SD$ với mặt phẳng $(ABM)$.",
      svg: SVG_TOAN11_CAU21,
      rubric: [
        {
          id: "step1",
          label: "Chọn mặt phẳng phụ thích hợp: Chọn $(SBD)$ chứa đường thẳng $SD$",
          points: 0.25,
          keywords: ["(SBD)", "mặt phẳng phụ", "chứa SD", "SBD"]
        },
        {
          id: "step2",
          label: "Chỉ ra điểm chung thứ nhất: $B \\in (SBD) \\cap (ABM)$",
          points: 0.25,
          keywords: ["B \\in", "B thuộc", "điểm chung thứ nhất", "B là điểm chung", "(SBD) \\cap (ABM)"]
        },
        {
          id: "step3",
          label: "Trong $(SAC)$, gọi $I = SO \\cap AM$",
          points: 0.25,
          keywords: ["SO \\cap AM", "SO cắt AM", "giao điểm của SO và AM", "I = SO", "I là giao"]
        },
        {
          id: "step4",
          label: "Chứng minh $I \\in (SBD) \\cap (ABM)$ và xác định giao tuyến là đường thẳng $BI$",
          points: 0.25,
          keywords: ["giao tuyến là BI", "giao tuyến BI", "= BI", "I \\in (SBD)", "I \\in (ABM)", "BI"]
        },
        {
          id: "step5",
          label: "Trong $(SBD)$, gọi $K = BI \\cap SD$",
          points: 0.25,
          keywords: ["BI \\cap SD", "BI cắt SD", "K = BI", "K là giao", "K là điểm chung"]
        },
        {
          id: "step6",
          label: "Lập luận $K \\in (ABM)$ và kết luận giao điểm $K = SD \\cap (ABM)$",
          points: 0.25,
          keywords: ["K = SD \\cap (ABM)", "giao điểm là K", "K \\in (ABM)", "K thuộc (ABM)", "kết luận"]
        }
      ],
      explanation: `
<div class="solution-step">
  <strong>Lời giải chi tiết & Barem chấm điểm từ ThS. Lương Thanh Sáng:</strong>

  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-pen-ruler"></i> a) Vẽ hình biểu diễn chính xác, phân biệt rõ nét đứt/liền (0,5 điểm):</strong>
    <p>– Đáy $ABCD$ vẽ dạng hình bình hành, hai đường chéo cắt nhau tại $O$ (nét đứt).<br>
    – Các cạnh khuất $AD, DC, SD$ và các đoạn nối bên trong $SO, AM, BI$ được vẽ bằng nét đứt khúc.<br>
    – Các cạnh nhìn thấy $SA, AB, BC, SC, SB, BM$ được vẽ bằng nét liền rõ nét.</p>
  </div>

  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-diagram-project"></i> b) Lập luận chọn mặt phẳng phụ và tìm giao tuyến trung gian (0,5 điểm):</strong>
    <ul>
      <li>Để xác định giao điểm của đường thẳng $SD$ với mặt phẳng $(ABM)$, ta chọn mặt phẳng phụ chứa đường thẳng $SD$ là $(SBD)$.</li>
      <li>Tìm giao tuyến của mặt phẳng phụ $(SBD)$ và mặt phẳng $(ABM)$:<br>
      + Ta thấy điểm $B$ thuộc cả hai mặt phẳng: $B \\in (SBD)$ và $B \\in (ABM)$ nên $B$ là điểm chung thứ nhất:
      $$B \\in (SBD) \\cap (ABM).$$
      + Trong mặt phẳng $(SAC)$, gọi $I$ là giao điểm của hai đường thẳng $SO$ và $AM$:
      $$I = SO \\cap AM.$$
      Vì $I \\in AM \\subset (ABM)$ và $I \\in SO \\subset (SBD)$ nên $I$ là điểm chung thứ hai:
      $$I \\in (SBD) \\cap (ABM).$$
      + Do đó, giao tuyến của hai mặt phẳng $(SBD)$ và $(ABM)$ là đường thẳng $BI$:
      $$(SBD) \\cap (ABM) = BI.$$
      </li>
    </ul>
  </div>

  <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; border-radius:4px;">
    <strong><i class="fa-solid fa-crosshairs"></i> c) Xác định chính xác giao điểm và kết luận (0,5 điểm):</strong>
    <ul>
      <li>Trong mặt phẳng $(SBD)$, đường thẳng $BI$ cắt đường thẳng $SD$ tại điểm $K$:
      $$K = BI \\cap SD.$$</li>
      <li>Khi đó:
      $$\\begin{cases} K \\in SD \\\\ K \\in BI \\subset (ABM) \\Rightarrow K \\in (ABM) \\end{cases} \\Rightarrow K = SD \\cap (ABM).$$
      Vậy giao điểm của đường thẳng $SD$ với mặt phẳng $(ABM)$ là điểm $K$.</li>
    </ul>
    <p style="font-size:0.85rem; color:#475569; margin-top:6px;"><em>(Ghi chú thêm: Trong $\\triangle SAC$, $SO$ và $AM$ là hai đường trung tuyến cắt nhau tại $I$ nên $I$ là trọng tâm $\\triangle SAC \\Rightarrow \\dfrac{SI}{SO} = \\dfrac{2}{3}$. Do đó trong $\\triangle SBD$, $I$ cũng là trọng tâm tam giác, suy ra $BI$ là đường trung tuyến của $\\triangle SBD$ ứng với đỉnh $B$, do đó $K$ chính là trung điểm của cạnh bên $SD$).</em></p>
  </div>

  <p class="final-answer">$\\Rightarrow$ <strong>Tổng điểm tối đa: 1,5 điểm.</strong></p>
</div>
`
    }
  ]
};


// ==================== BỘ ĐỀ THI TOÁN 12 - GIỮA KÌ I (MÃ ĐỀ: 0002) ====================
const EXAM_12_GK1_0002 = {
  id: "12_GK1_0002",
  config: {
    title: "Đề Kiểm Tra Giữa Kì I - Mã Đề 0002 (Toán 12)",
    school: "Trường THPT Nguyễn Văn Thoại - Sở GD&ĐT An Giang",
    schoolYear: "2026 - 2027",
    teacher: "ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)",
    timeLimitMinutes: 90,
    totalQuestions: 22,
    maxScore: 10.0,
    grade: "12",
    modes: {
      all: { time: 90, label: "90 phút (Cả đề thi gồm 3 phần - 22 câu)", count: 22 },
      part1: { time: 45, label: "45 phút (12 câu trắc nghiệm - 3.0 điểm)", count: 12 },
      part2: { time: 25, label: "25 phút (4 câu Đúng / Sai - 4.0 điểm)", count: 4 },
      part3: { time: 25, label: "25 phút (6 câu Trả lời ngắn - 3.0 điểm)", count: 6 }
    }
  },

  // PHẦN I TOÁN 12 (12 CÂU)
  part1: [
    {
      "id": 1,
      "part": "I",
      "grade": "12",
      "topic": "Khảo sát hàm số - Số điểm cực trị của hàm bậc bốn trùng phương",
      "question": "Cho hàm số bậc bốn $y = f(x)$ có đồ thị như hình vẽ bên dưới. Hàm số đã cho có bao nhiêu điểm cực trị?",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" class=\"tikz-svg\" style=\"max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/></marker></defs><line x1=\"20\" y1=\"160\" x2=\"340\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"180\" y1=\"225\" x2=\"180\" y2=\"15\" stroke=\"#1e293b\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><text x=\"345\" y=\"164\" font-family=\"Times New Roman, serif\" font-size=\"15\" font-style=\"italic\" fill=\"#1e293b\">x</text><text x=\"186\" y=\"18\" font-family=\"Times New Roman, serif\" font-size=\"15\" font-style=\"italic\" fill=\"#1e293b\">y</text><text x=\"166\" y=\"174\" font-family=\"Times New Roman, serif\" font-size=\"14\" font-style=\"italic\" fill=\"#1e293b\">O</text><line x1=\"102.2\" y1=\"160\" x2=\"102.2\" y2=\"70.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/><line x1=\"257.8\" y1=\"160\" x2=\"257.8\" y2=\"70.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/><line x1=\"102.2\" y1=\"70.0\" x2=\"257.8\" y2=\"70.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/><text x=\"102.2\" y=\"176\" font-family=\"Times New Roman, serif\" font-size=\"13\" text-anchor=\"middle\" fill=\"#1e293b\">-√2</text><text x=\"257.8\" y=\"176\" font-family=\"Times New Roman, serif\" font-size=\"13\" text-anchor=\"middle\" fill=\"#1e293b\">√2</text><text x=\"168\" y=\"74.0\" font-family=\"Times New Roman, serif\" font-size=\"13\" text-anchor=\"end\" fill=\"#1e293b\">3</text><text x=\"172\" y=\"194.0\" font-family=\"Times New Roman, serif\" font-size=\"13\" text-anchor=\"end\" fill=\"#1e293b\">-1</text><path d=\"M 66.7,221.0 C 80,120 95,70 102.2,70 C 120,70 160,190 180,190 C 200,190 240,70 257.8,70 C 265,70 280,120 293.3,221.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><circle cx=\"102.2\" cy=\"70.0\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"257.8\" cy=\"70.0\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"180.0\" cy=\"190.0\" r=\"3.5\" fill=\"#dc2626\"/></svg>",
      "options": [
        { "id": "A", "text": "1" },
        { "id": "B", "text": "2" },
        { "id": "C", "text": "3" },
        { "id": "D", "text": "4" }
      ],
      "correctAnswer": "C",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào đồ thị hàm số bậc bốn trùng phương đã cho:</p>
  <ul>
    <li>Đồ thị hàm số có hai điểm cực đại tại $x = -\\sqrt{2}$ và $x = \\sqrt{2}$ với giá trị cực đại bằng $3$.</li>
    <li>Đồ thị hàm số có một điểm cực tiểu tại $x = 0$ với giá trị cực tiểu bằng $-1$.</li>
  </ul>
  <p>Do đó, hàm số đã cho có tất cả $3$ điểm cực trị.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      "id": 2,
      "part": "I",
      "grade": "12",
      "topic": "Tính đơn điệu của hàm số chứa căn thức",
      "question": "Cho hàm số $y = \\sqrt{x^2 - 4x + 8}$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
      "svg": "",
      "options": [
        { "id": "A", "text": "$(-\\infty;\\; 2)$" },
        { "id": "B", "text": "$(2;\\; +\\infty)$" },
        { "id": "C", "text": "$(-\\infty;\\; 4)$" },
        { "id": "D", "text": "$(0;\\; 4)$" }
      ],
      "correctAnswer": "A",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tập xác định: $D = \\mathbb{R}$ vì $x^2 - 4x + 8 = (x - 2)^2 + 4 > 0,\\; \\forall x \\in \\mathbb{R}$.</p>
  <p>Đạo hàm: $y' = \\dfrac{x - 2}{\\sqrt{x^2 - 4x + 8}}$.</p>
  <p>Hàm số nghịch biến khi $y' < 0 \\iff x < 2$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      "id": 3,
      "part": "I",
      "grade": "12",
      "topic": "Đồ thị hàm số bậc ba - Điểm thuộc đồ thị",
      "question": "Cho hàm số $y = -x^3 + 3x^2 - 2$. Điểm nào sau đây thuộc đồ thị hàm số đã cho?",
      "svg": "",
      "options": [
        { "id": "A", "text": "$P(1;\\; 2)$" },
        { "id": "B", "text": "$Q(-1;\\; -2)$" },
        { "id": "C", "text": "$N(0;\\; 2)$" },
        { "id": "D", "text": "$M(2;\\; 2)$" }
      ],
      "correctAnswer": "D",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Thay tọa độ $M(2;\\; 2)$ vào hàm số: $y(2) = -(2)^3 + 3(2)^2 - 2 = -8 + 12 - 2 = 2$ (thỏa mãn).</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      "id": 4,
      "part": "I",
      "grade": "12",
      "topic": "Cực trị của hàm số bậc ba",
      "question": "Cho hàm số $y = x^3 - 3x^2 - 9x + 5$. Điểm cực tiểu của hàm số đã cho là:",
      "svg": "",
      "options": [
        { "id": "A", "text": "$x = -1$" },
        { "id": "B", "text": "$x = 3$" },
        { "id": "C", "text": "$y = -22$" },
        { "id": "D", "text": "$x = 0$" }
      ],
      "correctAnswer": "B",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Đạo hàm: $y' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3) = 0 \\iff x = -1$ hoặc $x = 3$.</p>
  <p>Đạo hàm đổi dấu từ âm sang dương khi qua $x = 3$, do đó $x = 3$ là điểm cực tiểu.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      "id": 5,
      "part": "I",
      "grade": "12",
      "topic": "Đường tiệm cận của đồ thị hàm số qua giới hạn",
      "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{2\\}$ thỏa mãn $\\lim_{x \\to +\\infty} f(x) = 1$, $\\lim_{x \\to -\\infty} f(x) = 1$ và $\\lim_{x \\to 2^+} f(x) = +\\infty$. Khẳng định nào sau đây đúng?",
      "svg": "",
      "options": [
        { "id": "A", "text": "Đồ thị hàm số có đúng một tiệm cận ngang $y = 1$ và một tiệm cận đứng $x = 2$." },
        { "id": "B", "text": "Đồ thị hàm số có hai tiệm cận đứng là $x = 1$ và $x = 2$." },
        { "id": "C", "text": "Đồ thị hàm số không có đường tiệm cận đứng nào." },
        { "id": "D", "text": "Đồ thị hàm số có hai đường tiệm cận ngang là các đường thẳng $y = 1$ và $y = 2$." }
      ],
      "correctAnswer": "A",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tiệm cận ngang là $y = 1$, tiệm cận đứng là $x = 2$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      "id": 6,
      "part": "I",
      "grade": "12",
      "topic": "Nhận dạng đồ thị hàm phân thức bậc hai trên bậc nhất",
      "question": "Đường cong trong hình vẽ là đồ thị của hàm số phân thức hữu tỉ bậc hai trên bậc nhất nào?",
      "svg": "",
      "options": [
        { "id": "A", "text": "$y = \\dfrac{x^2 - x + 1}{x - 2}$" },
        { "id": "B", "text": "$y = \\dfrac{x^2 + 1}{x - 2}$" },
        { "id": "C", "text": "$y = \\dfrac{x^2 - 2x + 2}{x - 2}$" },
        { "id": "D", "text": "$y = \\dfrac{x^2 - 3x + 3}{x - 2}$" }
      ],
      "correctAnswer": "D",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tiệm cận đứng $x = 2$, tiệm cận xiên $y = x - 1$, điểm cực trị $(1; -1)$ và $(3; 3)$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      "id": 7,
      "part": "I",
      "grade": "12",
      "topic": "Đọc bảng biến thiên - Khoảng đơn điệu",
      "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên. Mệnh đề nào dưới đây đúng?",
      "svg": "",
      "options": [
        { "id": "A", "text": "Hàm số đồng biến trên khoảng $(-\\infty;\\; -2)$." },
        { "id": "B", "text": "Hàm số đồng biến trên khoảng $(-2;\\; 1)$." },
        { "id": "C", "text": "Hàm số nghịch biến trên khoảng $(-2;\\; 4)$." },
        { "id": "D", "text": "Hàm số đồng biến trên khoảng $(-2;\\; 4)$." }
      ],
      "correctAnswer": "B",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Trên khoảng $(-2;\\; 1)$, $f'(x) > 0$ nên hàm số đồng biến.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      "id": 8,
      "part": "I",
      "grade": "12",
      "topic": "Giao điểm của đồ thị hàm số với trục hoành",
      "question": "Cho hàm số $y = \\dfrac{2x - 4}{x + 1}$. Giao điểm của đồ thị hàm số với trục hoành là điểm nào?",
      "svg": "",
      "options": [
        { "id": "A", "text": "$(0;\\; -4)$" },
        { "id": "B", "text": "$(-1;\\; 0)$" },
        { "id": "C", "text": "$(2;\\; 0)$" },
        { "id": "D", "text": "$(0;\\; 2)$" }
      ],
      "correctAnswer": "C",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Cho $y = 0 \\iff 2x - 4 = 0 \\iff x = 2$. Giao điểm là $(2;\\; 0)$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    },
    {
      "id": 9,
      "part": "I",
      "grade": "12",
      "topic": "Giá trị nhỏ nhất của hàm số trên đoạn",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\dfrac{2x + 1}{x - 2}$ trên đoạn $[3;\\; 5]$ bằng bao nhiêu?",
      "svg": "",
      "options": [
        { "id": "A", "text": "$7$" },
        { "id": "B", "text": "$\\dfrac{11}{3}$" },
        { "id": "C", "text": "$-\\dfrac{1}{2}$" },
        { "id": "D", "text": "$4$" }
      ],
      "correctAnswer": "B",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>$y' = \\dfrac{-5}{(x-2)^2} < 0$. Hàm số nghịch biến nên $\\min_{[3; 5]} y = y(5) = \\dfrac{11}{3}$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
`
    },
    {
      "id": 10,
      "part": "I",
      "grade": "12",
      "topic": "Tiệm cận đứng và ngang từ bảng biến thiên",
      "question": "Cho hàm số $y = f(x)$ có bảng biến thiên. Mệnh đề nào sau đây đúng?",
      "svg": "",
      "options": [
        { "id": "A", "text": "Hàm số không có đường tiệm cận ngang nào." },
        { "id": "B", "text": "Hàm số đồng biến trên tập xác định $\\mathbb{R} \\setminus \\{-1\\}$." },
        { "id": "C", "text": "Hàm số đạt cực đại tại $x = -1$." },
        { "id": "D", "text": "Đồ thị hàm số có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 3$." }
      ],
      "correctAnswer": "D",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Đồ thị hàm số có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 3$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
`
    },
    {
      "id": 11,
      "part": "I",
      "grade": "12",
      "topic": "Tổng số tiệm cận của hàm số chứa căn",
      "question": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 9} - 2x}{x + 3}$ là:",
      "svg": "",
      "options": [
        { "id": "A", "text": "3" },
        { "id": "B", "text": "1" },
        { "id": "C", "text": "2" },
        { "id": "D", "text": "4" }
      ],
      "correctAnswer": "A",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Có 1 TC đứng $x = -3$, và 2 TC ngang $y = -1, y = -3$. Tổng cộng 3 đường.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
`
    },
    {
      "id": 12,
      "part": "I",
      "grade": "12",
      "topic": "Giá trị lớn nhất, nhỏ nhất từ bảng biến thiên",
      "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-3;\\; 2]$. Gọi $M, m$ là giá trị lớn nhất và nhỏ nhất. Tính $T = M - 2m$:",
      "svg": "",
      "options": [
        { "id": "A", "text": "1" },
        { "id": "B", "text": "11" },
        { "id": "C", "text": "13" },
        { "id": "D", "text": "-13" }
      ],
      "correctAnswer": "C",
      "explanation": `
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>$M = 7, m = -3 \\implies T = 7 - 2(-3) = 13$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
`
    }
  ],

  // PHẦN II TOÁN 12 (4 CÂU)
  part2: [
    {
      "id": 1,
      "part": "II",
      "grade": "12",
      "topic": "Khảo sát hàm số bậc ba",
      "question": "Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$. Xét tính đúng hay sai của các mệnh đề sau:",
      "svg": "",
      "items": [
        { "id": "a", "text": "Điểm cực đại của hàm số là $x = 0$ và giá trị cực đại bằng $2$.", "correct": true },
        { "id": "b", "text": "Hàm số nghịch biến trên khoảng $(0;\\; 2)$.", "correct": true },
        { "id": "c", "text": "Tâm đối xứng của đồ thị $(C)$ là gốc tọa độ $O(0;\\; 0)$.", "correct": false },
        { "id": "d", "text": "Đồ thị $(C)$ cắt trục hoành tại đúng $3$ điểm phân biệt.", "correct": true }
      ],
      "explanation": "<div class=\"solution-step\"><strong>Đáp án: a) Đ; b) Đ; c) S; d) Đ.</strong></div>"
    },
    {
      "id": 2,
      "part": "II",
      "grade": "12",
      "topic": "Mô hình vi khuẩn nuôi cấy",
      "question": "Mô hình số lượng vi khuẩn $N(t) = \\dfrac{m}{n + e^{-0,5t}}$. Xét tính đúng sai:",
      "svg": "",
      "items": [
        { "id": "a", "text": "Các hệ số của mô hình là $m = 100$ và $n = 0,25$.", "correct": true },
        { "id": "b", "text": "Về lâu dài, số lượng vi khuẩn trong môi trường có thể vượt quá $500$ cá thể.", "correct": false },
        { "id": "c", "text": "Tốc độ sinh trưởng lớn nhất bằng $50$ cá thể/giờ tại $t = 4\\ln 2$ giờ.", "correct": true },
        { "id": "d", "text": "Tốc độ giảm trở lại mức $32$ tại $t = 5$ giờ.", "correct": false }
      ],
      "explanation": "<div class=\"solution-step\"><strong>Đáp án: a) Đ; b) S; c) Đ; d) S.</strong></div>"
    },
    {
      "id": 3,
      "part": "II",
      "grade": "12",
      "topic": "Khảo sát bảng biến thiên hàm phân thức",
      "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{2\\}$. Xét tính đúng sai:",
      "svg": "",
      "items": [
        { "id": "a", "text": "Hàm số đồng biến trên toàn bộ tập xác định.", "correct": false },
        { "id": "b", "text": "Điểm cực đại của hàm số là $x = 0$ và giá trị cực đại bằng $3$.", "correct": true },
        { "id": "c", "text": "Đồ thị hàm số có tiệm cận đứng $x = 2$ và tiệm cận ngang $y = -1$.", "correct": true },
        { "id": "d", "text": "Giá trị nhỏ nhất của hàm số trên tập xác định bằng $-2$.", "correct": false }
      ],
      "explanation": "<div class=\"solution-step\"><strong>Đáp án: a) S; b) Đ; c) Đ; d) S.</strong></div>"
    },
    {
      "id": 4,
      "part": "II",
      "grade": "12",
      "topic": "Khảo sát hàm phân thức hữu tỉ",
      "question": "Cho hàm số $y = f(x) = x - 1 + \\dfrac{4}{x + 2}$. Xét tính đúng sai:",
      "svg": "",
      "items": [
        { "id": "a", "text": "Đạo hàm là $f'(x) = \\dfrac{x^2 + 2x - 4}{(x + 2)^2}$.", "correct": false },
        { "id": "b", "text": "Hàm số nghịch biến trên khoảng $(-4;\\; 0)$.", "correct": false },
        { "id": "c", "text": "Tập nghiệm phương trình $f'(x) = 0$ là $S = \\{-4;\\; 0\\}$.", "correct": true },
        { "id": "d", "text": "Điểm cực đại của đồ thị hàm số là $(-4;\\; -7)$.", "correct": true }
      ],
      "explanation": "<div class=\"solution-step\"><strong>Đáp án: a) S; b) S; c) Đ; d) Đ.</strong></div>"
    }
  ],

  // PHẦN III TOÁN 12 (6 CÂU TRẢ LỜI NGẮN)
  part3: [
    {
      "id": 1,
      "part": "III",
      "grade": "12",
      "topic": "Giá trị lớn nhất và nhỏ nhất trên đoạn [0; 3]",
      "question": "Cho hàm số $f(x) = x^3 - 3x^2 - x + 2$ trên đoạn $[0;\\; 3]$. Tính $T = M + m$ (làm tròn đến hàng phần mười).",
      "svg": "",
      "correctAnswer": "-2,1",
      "acceptableAnswers": ["-2,1", "-2.1", "-2,10", "-2.10"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: -2,1</strong></div>"
    },
    {
      "id": 2,
      "part": "III",
      "grade": "12",
      "topic": "Đường tiệm cận xiên",
      "question": "Cho hàm số $y = -2,2x + 1 - \\dfrac{4x + 1}{3x - 1}$. Tiệm cận xiên $y = ax + b$. Tính $T = a + b$:",
      "svg": "",
      "correctAnswer": "-2,5",
      "acceptableAnswers": ["-2,5", "-2.5"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: -2,5</strong></div>"
    },
    {
      "id": 3,
      "part": "III",
      "grade": "12",
      "topic": "Quãng đường xe thám hiểm",
      "question": "Tính tổng quãng đường xe di chuyển trên đường thẳng $d$ từ $t = 0$ đến $t = 5$ giây (làm tròn đến hàng phần mười):",
      "svg": "",
      "correctAnswer": "30,3",
      "acceptableAnswers": ["30,3", "30.3"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: 30,3</strong></div>"
    },
    {
      "id": 4,
      "part": "III",
      "grade": "12",
      "topic": "Tốc độ phát tán lớn nhất",
      "question": "Hỏi sau bao nhiêu ngày tốc độ phát tán của loài côn trùng đạt cực đại (làm tròn đến hàng phần mười)?",
      "svg": "",
      "correctAnswer": "38,6",
      "acceptableAnswers": ["38,6", "38.6"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: 38,6</strong></div>"
    },
    {
      "id": 5,
      "part": "III",
      "grade": "12",
      "topic": "Khoảng cách ngắn nhất từ sườn đồi đến cáp treo",
      "question": "Khoảng cách ngắn nhất từ sườn đồi đến tuyến cáp treo $\\Delta$ bằng bao nhiêu km (làm tròn đến hàng phần mười)?",
      "svg": "",
      "correctAnswer": "7,2",
      "acceptableAnswers": ["7,2", "7.2"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: 7,2</strong></div>"
    },
    {
      "id": 6,
      "part": "III",
      "grade": "12",
      "topic": "Tối ưu vật liệu vách kính khoang tương tác ảo",
      "question": "Tính diện tích của khoang tương tác $APQ$ khi chiều dài $PQ$ ngắn nhất (làm tròn đến hàng phần mười):",
      "svg": "",
      "correctAnswer": "30,9",
      "acceptableAnswers": ["30,9", "30.9"],
      "explanation": "<div class=\"solution-step\"><strong>Đáp số: 30,9</strong></div>"
    }
  ]
};

// ==================== CƠ SỞ DỮ LIỆU ĐỀ THI TOÀN TRƯỜNG ====================
const EXAMS_DATABASE = {
  "11_GK1_TK5": EXAM_11_GK1_TK5,
  "11_GK1_TK4": EXAM_11_GK1_TK4,
  "12_GK1_0002": EXAM_12_GK1_0002
};

// Đặt đề mặc định ban đầu là Đề Toán 11 (Mã đề mới nhất: 11.GK1.TK5)
const DEFAULT_ACTIVE_EXAM_ID = "11_GK1_TK5";

// Khai báo biến toàn cục tương thích ngược
var QUIZ_CONFIG = EXAMS_DATABASE[DEFAULT_ACTIVE_EXAM_ID].config;
var QUIZ_PART1 = EXAMS_DATABASE[DEFAULT_ACTIVE_EXAM_ID].part1;
var QUIZ_PART2 = EXAMS_DATABASE[DEFAULT_ACTIVE_EXAM_ID].part2;
var QUIZ_PART3 = EXAMS_DATABASE[DEFAULT_ACTIVE_EXAM_ID].part3;
var QUIZ_QUESTIONS = QUIZ_PART1;

