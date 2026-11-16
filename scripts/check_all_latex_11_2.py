import re

with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Check for \left and \right balance in all $...$ and $$...$$
inline_math = re.findall(r'(?<!\\)\$([^\$]+?)\$', text)
display_math = re.findall(r'(?<!\\)\$\$([^\$]+?)\$\$', text)

all_math = inline_math + display_math
print(f"Total math blocks found: {len(all_math)}")

errors = []
for idx, m in enumerate(all_math):
    # count \left and \right
    # Note: in raw JS string or escaped string
    left_count = len(re.findall(r'\\left[\(\[\{\.\|]', m))
    right_count = len(re.findall(r'\\right[\)\]\}\.\|]', m))
    if left_count != right_count:
        errors.append((idx, left_count, right_count, m[:100]))

if errors:
    print(f"FAILED! Found {len(errors)} math blocks with unbalanced \\left and \\right:")
    for err in errors:
        print(f"  Block {err[0]}: left={err[1]}, right={err[2]} -> {err[3]}")
else:
    print("SUCCESS: 100% of math blocks have balanced \\left and \\right!")
