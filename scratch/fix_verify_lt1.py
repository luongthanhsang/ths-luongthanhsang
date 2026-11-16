with open('scripts/verify_lesson_10_1.py', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    """                # Test Luyện tập 1 Table
                lt1_test = await send("Runtime.evaluate", {
                    "expression": \"\"\"
                    (() => {
                        const table = document.querySelector('.sgk-exercise-table-wrap table');
                        const rows = table ? table.querySelectorAll('tbody tr').length : 0;
                        const radios = table ? table.querySelectorAll('input[type="radio"]').length : 0;
                        const btn = document.querySelector('.btn-check-table-lt1');
                        if (btn) btn.click();
                        const feedbackVisible = document.getElementById('lt1-feedback-box')?.style.display !== 'none';
                        return { hasTable: !!table, rows, radios, feedbackVisible };
                    })()
                    \"\"\",
                    "returnByValue": True
                })""",
    """                # Test Luyện tập 1 Table
                lt1_test = await send("Runtime.evaluate", {
                    "expression": \"\"\"
                    (() => {
                        window.activateStep('sec-1', 'a');
                        const table = document.querySelector('.sgk-exercise-table-wrap table');
                        const rows = table ? table.querySelectorAll('tbody tr').length : 0;
                        const radios = table ? table.querySelectorAll('input[type="radio"]').length : 0;
                        const btn = document.querySelector('.btn-check-table-lt1');
                        if (btn) btn.click();
                        const feedbackVisible = document.getElementById('lt1-feedback-box')?.style.display !== 'none';
                        return { hasTable: !!table, rows, radios, feedbackVisible };
                    })()
                    \"\"\",
                    "returnByValue": True
                })"""
)

with open('scripts/verify_lesson_10_1.py', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated lt1_test in verify_lesson_10_1.py")
