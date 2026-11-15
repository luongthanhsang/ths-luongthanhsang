for name in ['scripts/check_quiz_math.py', 'scripts/check_dom_tracnghiem.py']:
    try:
        with open(name, 'r', encoding='utf-8') as f:
            print(f"=== {name} ===")
            print(f.read()[:1000])
    except Exception as e:
        print(f"Error {name}: {e}")
