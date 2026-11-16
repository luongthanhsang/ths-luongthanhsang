with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
examples = re.findall(r'title:\s*"([^"]+)",\s*problem:\s*`([^`]+)`,\s*solution:\s*`([^`]+)`,\s*similarProblem:\s*`([^`]+)`', text)
print(f"Found {len(examples)} workedExamples with similarProblem:")
for e in examples:
    print(f"\nExample: {e[0]}")
    print(f"  Problem snippet: {e[1][:100]}...")
    print(f"  Solution snippet: {e[2][:100]}...")
    print(f"  Similar Problem snippet: {e[3][:100]}...")
