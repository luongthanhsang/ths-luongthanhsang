import re

with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print('Has teacherWelcome:', 'teacherWelcome:' in text)
print('Has learningGoals:', 'learningGoals:' in text)
print('Has hook:', 'hook:' in text)
print('Has realworldWrapup:', 'realworldWrapup:' in text)
print('Has practiceQuizzes:', 'practiceQuizzes:' in text)

# List all sections
m_secs = re.findall(r'num:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"', text)
for s in m_secs:
    print('  Sec:', s)

# Check subsections / subkeys
m_subs = re.findall(r'subKey:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"', text)
print('Subsections count:', len(m_subs))
for sb in m_subs[:8]:
    print('   Sub:', sb)
