import subprocess

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

test_html = """<!DOCTYPE html>
<html>
<body>
  <svg width="400" height="200" style="background:#f8fafc;">
    <!-- Method 1: Combining arrow -->
    <text x="50" y="50" font-size="20" font-weight="bold" fill="#0284c7">a&#8407;</text>
    <text x="100" y="50" font-size="20" font-weight="bold" fill="#0284c7">F&#8407;</text>
    
    <!-- Method 2: Vector group with path arrow above -->
    <!-- For AB: arrow from x to x+24, y-14 -->
    <g transform="translate(150, 50)">
      <path d="M 0,-16 L 26,-16 M 22,-19 L 26,-16 L 22,-13" fill="none" stroke="#0284c7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="0" y="0" font-size="20" font-weight="bold" font-style="italic" fill="#0284c7">AB</text>
    </g>

    <g transform="translate(220, 50)">
      <path d="M 0,-16 L 14,-16 M 10,-19 L 14,-16 L 10,-13" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="0" y="0" font-size="20" font-weight="bold" font-style="italic" fill="#dc2626">a</text>
    </g>
  </svg>
</body>
</html>"""

with open('test_svg_vector.html', 'w', encoding='utf-8') as f:
    f.write(test_html)

print("Saved test_svg_vector.html")
