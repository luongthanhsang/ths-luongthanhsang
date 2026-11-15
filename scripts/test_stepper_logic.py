import re, json

# Read database or lessons from js
with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text_10_6 = f.read()

print("File lesson-10-6-data.js read successfully. Length:", len(text_10_6))

def test_progress_weights(has_welcome, has_goals, num_content, has_quiz):
    total = 0
    weights = {}
    if has_welcome:
        weights['welcome'] = 5
        total += 5
    if has_goals:
        weights['goals'] = 5
        total += 5
    if num_content > 0:
        c_weight = 70.0 / num_content
        for i in range(num_content):
            weights[f'content_{i+1}'] = c_weight
            total += c_weight
    if has_quiz:
        weights['quiz'] = 20
        total += 20
    return total, weights

total, weights = test_progress_weights(True, True, 6, True)
print(f"B6 Lớp 10: 6 content steps (Hook + 4 Secs + Wrapup). Total = {total}%. Weights:")
for k, v in weights.items():
    print(f"  {k}: {v:.2f}%")

total, weights = test_progress_weights(True, True, 4, True)
print(f"\nLesson with 4 content steps (Hook + 2 Secs + Wrapup). Total = {total}%. Weights:")
for k, v in weights.items():
    print(f"  {k}: {v:.2f}%")
