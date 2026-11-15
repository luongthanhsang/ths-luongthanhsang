for path in ['js/quiz-data.js', 'BAN_CAP_NHAT_NETLIFY/js/quiz-data.js']:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    # find Câu 3 of 0110
    idx = text.find('id: "12_BGD_0110"')
    if idx != -1:
        snippet = text[idx:idx+15000]
        q3_idx = snippet.find('id: 3,')
        if q3_idx != -1:
            print(f"File {path}:")
            print(snippet[q3_idx:q3_idx+800])
            print("="*60)
