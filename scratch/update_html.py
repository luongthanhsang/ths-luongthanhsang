with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

target = '  <!-- Scripts -->\n  <script src="js/b10-3-audio-cache.js?v=20261115_05"></script>'
replacement = '''  <!-- Scripts -->
  <script src="js/b10-1-audio-cache.js?v=20261116_01"></script>
  <script src="js/lesson-10-1-data.js?v=20261116_01"></script>
  <script src="js/b10-3-audio-cache.js?v=20261115_05"></script>'''

if target in text:
    text = text.replace(target, replacement)
    with open('bai-hoc-so.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated bai-hoc-so.html successfully!")
else:
    print("WARNING: target not found in bai-hoc-so.html")
