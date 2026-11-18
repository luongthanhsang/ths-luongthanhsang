with open('tai-lieu.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('class="repo-search-box"')
print(text[idx-500:idx+600])
