import json, re

# Simulate step tree generation in Python to test logic
def build_lesson_step_tree(lesson_data):
    tree = []
    
    # 1. Welcome
    if lesson_data.get('teacherWelcome'):
        tree.append({
            'id': 'welcome',
            'part': 'Phần I',
            'title': 'Lời chào của Thầy Sáng',
            'weight': 5,
            'type': 'welcome'
        })
        
    # 2. Goals
    if lesson_data.get('learningGoals'):
        tree.append({
            'id': 'goals',
            'part': 'Phần II',
            'title': 'Mục tiêu & Yêu cầu cần đạt',
            'weight': 5,
            'type': 'goals'
        })
        
    # 3. Process (Phần III)
    process_children = []
    if lesson_data.get('hook'):
        process_children.append({
            'id': 'hook',
            'numLabel': 'Dẫn nhập',
            'title': lesson_data['hook'].get('title', 'Tình huống mở đầu'),
            'type': 'hook'
        })
        
    sections = lesson_data.get('sections', [])
    for idx, sec in enumerate(sections):
        sec_id = f"sec-{idx + 1}"
        subs = []
        for sub in sec.get('subsections', []):
            subs.append({
                'id': f"{sec_id}-{sub.get('key', '')}",
                'parentSecId': sec_id,
                'numLabel': f"Mục {sub.get('key', '')}",
                'title': sub.get('title', ''),
                'type': 'subsection'
            })
        process_children.append({
            'id': sec_id,
            'numLabel': f"Mục {sec.get('num', idx + 1)}",
            'title': sec.get('title', ''),
            'type': 'section',
            'children': subs
        })
        
    if lesson_data.get('realworldWrapup'):
        process_children.append({
            'id': 'wrapup',
            'numLabel': 'Tổng kết',
            'title': lesson_data['realworldWrapup'].get('title', 'Chốt kiến thức then chốt'),
            'type': 'wrapup'
        })
        
    tree.append({
        'id': 'group-process',
        'part': 'Phần III',
        'title': 'Tiến trình bài học',
        'weight': 70,
        'type': 'group',
        'children': process_children
    })
    
    # 4. Quiz (Phần IV)
    if lesson_data.get('examFormatPractice') or lesson_data.get('practiceQuizzes'):
        tree.append({
            'id': 'quiz',
            'part': 'Phần IV',
            'title': 'Bài tập củng cố (Trắc nghiệm)',
            'weight': 20,
            'type': 'quiz',
            'children': [
                {'id': 'quiz-part1', 'title': 'Dạng 1. Trắc nghiệm 4 lựa chọn (5 câu)'},
                {'id': 'quiz-part2', 'title': 'Dạng 2. Trắc nghiệm Đúng / Sai (3 câu)'},
                {'id': 'quiz-part3', 'title': 'Dạng 3. Trả lời ngắn thực tế (2 câu)'}
            ]
        })
        
    return tree

# Test on Bài 6
with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Mock extract
lesson_b6 = {
    'teacherWelcome': True,
    'learningGoals': True,
    'hook': {'title': 'Đo khoảng cách tới Tháp Rùa giữa lòng Hồ Gươm'},
    'sections': [
        {'num': '1', 'title': 'Định lí Côsin và Hệ quả tính góc, đường trung tuyến', 'subsections': [
            {'key': '1a', 'title': 'Nội dung Định lí Côsin (SGK Trang 39)'},
            {'key': '1b', 'title': 'Hệ quả tính góc và Công thức đường trung tuyến'}
        ]},
        {'num': '2', 'title': 'Định lí Sin và Bán kính đường tròn ngoại tiếp', 'subsections': [
            {'key': '2a', 'title': 'Định lí Sin (SGK Trang 39)'}
        ]},
        {'num': '3', 'title': 'Giải tam giác và Ứng dụng đo đạc thực tiễn', 'subsections': [
            {'key': '3a', 'title': 'Quy trình giải tam giác & Đo Tháp Rùa'}
        ]},
        {'num': '4', 'title': 'Các công thức tính diện tích tam giác và Công thức Heron', 'subsections': [
            {'key': '4a', 'title': 'Hệ thống 5 công thức diện tích'}
        ]}
    ],
    'realworldWrapup': {'title': 'Chốt kiến thức then chốt & Sơ đồ tư duy'},
    'examFormatPractice': True
}

tree = build_lesson_step_tree(lesson_b6)
print("Built Tree:")
for item in tree:
    print(f"[{item['part']}] {item['title']} (Weight: {item.get('weight', 0)}%)")
    for child in item.get('children', []):
        print(f"  ├── {child.get('numLabel', '')}: {child['title']}")
        for sub in child.get('children', []):
            print(f"      └── {sub.get('numLabel', '')}: {sub['title']}")

# Check progress calculation:
part3_count = len(tree[2]['children']) # 6 steps: hook, 4 secs, wrapup
step_weight_p3 = 70.0 / part3_count
print(f"\nPart 3 steps: {part3_count}, each adds {step_weight_p3:.2f}%")
total = 5 + 5 + part3_count * step_weight_p3 + 20
print(f"Total percentage when all done: {total}%")
