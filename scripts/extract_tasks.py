import re

def extract_audio_tasks(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    tasks = []
    
    # 1. teacherWelcome
    m_tw = re.search(r'teacherWelcome:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_tw:
        tasks.append((m_tw.group(2), m_tw.group(1)))
    
    # 2. goals
    m_g = re.search(r'goalsAudioScript:\s*"([^"]+)"[\s\S]*?goalsAudioUrl:\s*"([^"]+)"', text)
    if m_g:
        tasks.append((m_g.group(2), m_g.group(1)))
        
    # 3. hook
    m_h = re.search(r'hook:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_h:
        tasks.append((m_h.group(2), m_h.group(1)))
        
    # 4. sections
    for m_sec in re.finditer(r'num:\s*"([^"]+)"[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text):
        tasks.append((m_sec.group(3), m_sec.group(2)))
        
    # 5. realworldWrapup
    m_w = re.search(r'realworldWrapup:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_w:
        tasks.append((m_w.group(2), m_w.group(1)))
        
    return tasks

tasks_b5 = extract_audio_tasks('js/lesson-10-5-data.js')
tasks_b6 = extract_audio_tasks('js/lesson-10-6-data.js')

print(f"Tasks in b5 ({len(tasks_b5)}):")
for url, script in tasks_b5:
    print(f"  {url} -> {script[:60]}...")

print(f"\nTasks in b6 ({len(tasks_b6)}):")
for url, script in tasks_b6:
    print(f"  {url} -> {script[:60]}...")
