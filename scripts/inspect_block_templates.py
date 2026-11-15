with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("--- Welcome & Goals ---")
for i in range(2650, 2730):
    print(f"{i+1}: {lines[i]}", end="")

print("\n--- Section start ---")
for i in range(2810, 2835):
    print(f"{i+1}: {lines[i]}", end="")

print("\n--- Wrapup & Quiz start ---")
for i in range(2955, 3015):
    print(f"{i+1}: {lines[i]}", end="")
