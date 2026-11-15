with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find sections and SVGs
sections = re.findall(r'title:\s*["\']([^"\']+)["\']', text)
print("Sections found:", sections[:15])

# Find SVGs
svg_matches = list(re.finditer(r'<svg[^>]*>', text))
print(f"Total SVGs in lesson-11-12: {len(svg_matches)}")
for i, m in enumerate(svg_matches):
    start = m.start()
    end = text.find('</svg>', start)
    snippet = text[start:min(start+250, end+6)]
    print(f"SVG {i+1}: {snippet[:150]}")

# Check quiz answers in lesson 12
correct_answers = re.findall(r'correctAnswer:\s*["\']([^"\']+)["\']', text)
print("Correct answers in quiz:", correct_answers)
