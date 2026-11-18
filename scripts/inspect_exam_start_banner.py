with open('trac-nghiem.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx1 = text.find('id="examStartBanner"')
idx2 = text.find('id="quizResultCard"')
print("--- examStartBanner ---")
print(text[idx1:idx1+1500])
print("--- quizResultCard ---")
print(text[idx2:idx2+1500])
