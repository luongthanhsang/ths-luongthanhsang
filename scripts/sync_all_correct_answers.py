import glob
import re
import os

for filepath in sorted(glob.glob('js/lesson-*-data.js')):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    modified = False
    new_lines = []
    
    for i, line in enumerate(lines):
        new_lines.append(line)
        m_idx = re.search(r'^(\s*)correctIndex:\s*(\d+)', line)
        if m_idx:
            indent = m_idx.group(1)
            idx = int(m_idx.group(2))
            letter = chr(65 + idx)
            # Check surrounding lines for correctAnswer
            has_ca_nearby = False
            for look in range(max(0, i-2), min(len(lines), i+3)):
                if 'correctAnswer:' in lines[look]:
                    has_ca_nearby = True
                    break
            if not has_ca_nearby:
                new_lines.append(f'{indent}correctAnswer: "{letter}",\n')
                modified = True
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Added missing correctAnswer to {os.path.basename(filepath)}")

print("Done synchronizing all files!")
