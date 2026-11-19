# -*- coding: utf-8 -*-
import re

def normalize_latex(text):
    # 1. Normalize all variations of \left and \right
    # Delimiters can be: (, ), [, ], \{, \}, |, ., \vert
    
    # First, let's clean up any corruptions like \\\left, \\\\left, \left with weird slashes
    text = re.sub(r'\\+left\s*\\+([\{\}])', r'\\left\\\1', text)
    text = re.sub(r'\\+right\s*\\+([\{\}])', r'\\right\\\1', text)
    text = re.sub(r'\\+left\s*([\(\[\|\.])', r'\\left\1', text)
    text = re.sub(r'\\+right\s*([\(\]\|\.])', r'\\right\1', text)
    
    # 2. Fix any carriage-return corrupted \right:
    # Notice: ASCII 13 followed by 'ight' or '\r\right' or '\r' + 'ight'
    text = re.sub(r'\\*[\r\n]\s*ight', r'\\right', text)
    text = re.sub(r'\\+r\\+right', r'\\right', text)
    
    # 3. Clean up \; and \middle|
    text = re.sub(r';middle\|;', r'\\;\\middle|\\;', text)
    text = re.sub(r'\\+;\\+middle\|\\+;', r'\\;\\middle|\\;', text)
    text = re.sub(r'\\+middle', r'\\middle', text)
    text = re.sub(r'\\+;', r'\\;', text)
    
    # 4. Clean up simple curly braces: \{ and \}
    text = re.sub(r'\\+([\{\}])', r'\\\1', text)
    
    # 5. Fix \mid
    text = re.sub(r'(?<!\\)\\*mid\b', r'\\mid', text)
    
    # 6. Fix \setminus
    text = re.sub(r'\\+setminus\b', r'\\setminus', text)
    
    # 7. In audioScript, ensure no LaTeX remains
    # (replace k2\pi with 'k hai pi')
    text = re.sub(r'k2\\+pi\b', 'k hai pi', text)

    return text

def process_file(filepath):
    print("Processing:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = normalize_latex(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Done:", filepath)

process_file('js/lesson-11-3-data.js')
process_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
process_file('js/lesson-11-4-data.js')
process_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-4-data.js')
