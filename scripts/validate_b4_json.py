import json

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# remove leading `window.LESSON_11_C1_B4_DATA = `
start_idx = text.find('{')
end_idx = text.rfind('};')

if start_idx != -1 and end_idx != -1:
    json_str = text[start_idx:end_idx+1]
    try:
        data = json.loads(json_str)
        print("JSON is VALID! Keys count:", len(data))
    except Exception as e:
        print("JSON Error:", e)
        # find line of error
        import re
        m = re.search(r'char (\d+)', str(e))
        if m:
            char_pos = int(m.group(1))
            line_no = json_str[:char_pos].count('\n') + 1
            print(f"Error near line {line_no} in JSON (approx {line_no + 3} in file):")
            lines = json_str.split('\n')
            for l_idx in range(max(0, line_no - 5), min(len(lines), line_no + 5)):
                print(f"{l_idx+1}: {lines[l_idx]}")
else:
    print("Could not find { and }; bounds")
