with open('js/lesson-10-2-data.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace the duplicate lines in the 5 MC questions
c = c.replace('        ],\n        correctAnswer: "C",\n        correctIndex: 2,\n        solution:', '        ],\n        solution:')
c = c.replace('        ],\n        correctAnswer: "A",\n        correctIndex: 0,\n        solution:', '        ],\n        solution:')
c = c.replace('        ],\n        correctAnswer: "D",\n        correctIndex: 3,\n        solution:', '        ],\n        solution:')
c = c.replace('        ],\n        correctAnswer: "B",\n        correctIndex: 1,\n        solution:', '        ],\n        solution:')

with open('js/lesson-10-2-data.js', 'w', encoding='utf-8') as f:
    f.write(c)

print("Duplicates removed cleanly!")
