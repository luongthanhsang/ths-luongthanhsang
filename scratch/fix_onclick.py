with open('js/lesson-10-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'onclick="checkLt1TableAnswers()"'
replacement = 'onclick="var b=document.getElementById(\'lt1-feedback-box\');if(b){b.style.display=(b.style.display===\'none\'?\'block\':\'none\');}"'

if target in text:
    text = text.replace(target, replacement)
    with open('js/lesson-10-1-data.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Replaced onclick successfully in lesson-10-1-data.js!")
else:
    print("target not found")
