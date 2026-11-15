with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Line 2645-2680:")
for i in range(2644, 2680):
    print(f"{i+1}: {lines[i]}", end="")

print("\nLine 2710-2740:")
for i in range(2710, 2740):
    print(f"{i+1}: {lines[i]}", end="")

print("\nLine 2810-2840:")
for i in range(2810, 2840):
    print(f"{i+1}: {lines[i]}", end="")

print("\nLine 2950-3020:")
for i in range(2950, 3020):
    print(f"{i+1}: {lines[i]}", end="")
