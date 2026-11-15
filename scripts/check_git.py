import subprocess

r = subprocess.run(['git', 'log', '-p', '-n', '2', 'js/quiz-data.js'], capture_output=True, text=True, encoding='utf-8')
print(r.stdout[:3000])
