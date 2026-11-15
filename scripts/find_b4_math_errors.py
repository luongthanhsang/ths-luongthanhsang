# -*- coding: utf-8 -*-
with open('debug_dom_b4.html', encoding='utf-8') as f:
    text = f.read()

import re

# Find mjx-merror tags
for m in re.finditer(r'<merror[^>]*title="([^"]+)"[^>]*>[\s\S]*?</merror>', text):
    title = m.group(1)
    span = m.span()
    context = text[max(0, span[0]-200):min(len(text), span[1]+200)]
    clean_ctx = re.sub(r'<[^>]+>', ' ', context)
    clean_ctx = ' '.join(clean_ctx.split())
    print(f"TITLE: {title}")
    print(f"CONTEXT: {clean_ctx}\n---")
