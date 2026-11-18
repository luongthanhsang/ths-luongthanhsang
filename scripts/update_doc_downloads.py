import re

download_map = {
    'doc-10-01': 1420,
    'doc-10-02': 1180,
    'doc-10-03': 1350,
    'doc-10-04': 980,
    'doc-11-01': 1650,
    'doc-11-02': 1480,
    'doc-11-03': 1220,
    'doc-11-00-tk5': 2150,
    'doc-11-00': 1890,
    'doc-11-04': 1140,
    'doc-12-00': 2480,
    'doc-12-01': 1950,
    'doc-12-02': 1720,
    'doc-12-03': 1560,
    'doc-12-04': 1380,
    'doc-hsg-ag-2026': 1820,
    'doc-hsg-ag-2025': 1450,
    'doc-hsg-ag-2024': 1120,
    'doc-hsg-kg-2024': 980,
    'doc-hsg-sang-01': 860,
    'doc-hsg-sang-02': 790,
    'doc-hsg-sang-03': 820,
    'doc-hsg-sang-04': 740,
    'doc-hsg-sang-05': 690,
    'doc-hsg-sang-06': 710,
    'doc-hsg-01': 890,
    'doc-hsg-sang-08': 650,
    'doc-hsg-02': 780,
    'doc-hsg-03': 810,
    'doc-hsg-04': 730
}

total_initial_downloads = sum(download_map.values())
print(f"Total initial downloads across all docs: {total_initial_downloads}")

for filepath in ['js/document-data.js', 'BAN_CAP_NHAT_NETLIFY/js/document-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for doc_id, dl_count in download_map.items():
        # Insert downloads: dl_count before previewUrl or size
        pattern = rf'(id:\s*"{doc_id}",[\s\S]*?)(date:\s*"[^"]*",)'
        replacement = rf'\1\2\n    downloads: {dl_count},'
        content = re.sub(pattern, replacement, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath} successfully!")
