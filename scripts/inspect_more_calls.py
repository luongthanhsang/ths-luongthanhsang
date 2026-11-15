with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("--- 3370-3405 ---")
for i in range(3370, 3405):
    print(f"{i+1}: {lines[i]}", end="")

print("\n--- 4780-4795 ---")
for i in range(4780, 4795):
    print(f"{i+1}: {lines[i]}", end="")
