import subprocess
import os

svg_markup = """<svg viewBox="0 0 768 198" style="width: 100%; max-width: 768px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
  <!-- ==================== HÌNH 1: d // (alpha) ==================== -->
  <g id="fig-p1">
    <!-- Mặt phẳng (alpha) -->
    <polygon points="4,133 39,49 237,49 201,133" fill="#ffffff" stroke="#1e293b" stroke-width="2.2"/>
    <!-- Cung góc alpha ở góc dưới trái -->
    <path d="M 28,133 A 24 24 0 0 0 15,107" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <text x="18" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#1e293b">α</text>
    
    <!-- Đường thẳng d phía trên -->
    <line x1="50" y1="32" x2="236" y2="32" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>
    <text x="210" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">d</text>
    
    <!-- Chú thích dưới: d // (alpha) -->
    <text x="120" y="168" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d // (α)</text>
  </g>

  <!-- ==================== HÌNH 2: d cap (alpha) = {M} ==================== -->
  <g id="fig-p2">
    <!-- Mặt phẳng (alpha) -->
    <polygon points="261,133 296,49 494,49 459,133" fill="#ffffff" stroke="#1e293b" stroke-width="2.2"/>
    <!-- Cung góc alpha -->
    <path d="M 285,133 A 24 24 0 0 0 272,107" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <text x="275" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#1e293b">α</text>
    
    <!-- Đoạn đường thẳng bên trên và xuyên qua mặt phẳng tới M: NÉT LIỀN -->
    <line x1="368" y1="15" x2="407" y2="80" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>
    
    <!-- Điểm giao M (chấm tròn xanh) và nhãn M -->
    <circle cx="407" cy="80" r="4" fill="#00a4e4"/>
    <text x="418" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">M</text>
    
    <!-- Đoạn dưới mặt phẳng từ M đến đáy: NÉT ĐỨT -->
    <line x1="407" y1="80" x2="439" y2="133" stroke="#1e293b" stroke-width="2.8" stroke-dasharray="6,4"/>
    
    <!-- Đoạn ló ra ngoài mặt phẳng phía dưới: NÉT LIỀN -->
    <line x1="439" y1="133" x2="451" y2="153" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>
    
    <!-- Chú thích dưới: d cap (alpha) = {M} -->
    <text x="377" y="168" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d ∩ (α) = {M}</text>
  </g>

  <!-- ==================== HÌNH 3: d subset (alpha) ==================== -->
  <g id="fig-p3">
    <!-- Mặt phẳng (alpha) -->
    <polygon points="521,133 556,49 754,49 719,133" fill="#ffffff" stroke="#1e293b" stroke-width="2.2"/>
    <!-- Cung góc alpha -->
    <path d="M 545,133 A 24 24 0 0 0 532,107" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <text x="535" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#1e293b">α</text>
    
    <!-- Đường thẳng d nằm trọn trong mặt phẳng: NÉT LIỀN -->
    <line x1="575" y1="117" x2="725" y2="77" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>
    
    <!-- Hai chấm tròn xanh trên d -->
    <circle cx="618" cy="105.5" r="4" fill="#00a4e4"/>
    <circle cx="678" cy="89.5" r="4" fill="#00a4e4"/>
    
    <!-- Nhãn d màu xanh -->
    <text x="705" y="68" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">d</text>
    
    <!-- Chú thích dưới: d subset (alpha) -->
    <text x="637" y="168" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d ⊂ (α)</text>
  </g>
</svg>"""

html = f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background: white; padding: 20px;">
{svg_markup}
</body>
</html>"""

with open('scripts/test_svg_exact.html', 'w', encoding='utf-8') as f:
    f.write(html)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
html_path = os.path.abspath('scripts/test_svg_exact.html')
out_path = os.path.abspath('scripts/svg_exact.png')
cmd = [chrome_path, '--headless=new', f'--screenshot={out_path}', '--window-size=850,260', f'file:///{html_path}']
subprocess.run(cmd)
print("Rendered successfully:", os.path.exists(out_path))
