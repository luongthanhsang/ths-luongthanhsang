with open('js/lesson-10-2-data.js', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        s = line.strip()
        if any(target in s for target in ['hook: {', 'realworldWrapup: {', 'part1MultipleChoice:', 'part2TrueFalse:', 'num: "1"', 'num: "2"', 'num: "3"']):
            print(f'{i+1}: {s[:70]}')
