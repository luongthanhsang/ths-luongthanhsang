with open('tai-lieu.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("tai-lieu.html length:", len(text))
# Check script tags
import re
scripts = re.findall(r'<script[^>]*src="([^"]+)"[^>]*>', text)
print("Scripts in tai-lieu.html:", scripts)

# Check inline script or download buttons
idx = text.find('<script')
while idx != -1:
    end_idx = text.find('</script>', idx)
    print("Script tag content snippet:\n", text[idx:idx+400])
    idx = text.find('<script', end_idx + 1)
