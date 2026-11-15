with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

target = '<script src="js/lesson-10-4-data.js?v=20261115_04"></script>'
new_scripts = '''<script src="js/lesson-10-4-data.js?v=20261115_05"></script>
  <script src="js/b10-5-audio-cache.js?v=20261115_05"></script>
  <script src="js/lesson-10-5-data.js?v=20261115_05"></script>
  <script src="js/b10-6-audio-cache.js?v=20261115_05"></script>
  <script src="js/lesson-10-6-data.js?v=20261115_05"></script>'''

html = html.replace(target, new_scripts)

# Update all ?v= to v=20261115_05
html = re.sub(r'(\?v=)[0-9_]+', r'\g<1>20261115_05', html)

with open('bai-hoc-so.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated bai-hoc-so.html successfully!")
