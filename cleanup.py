import os, re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Handle React imports
    # Case 1: import React from 'react';
    content = re.sub(r'^import\s+React\s+from\s+[\'\"\]react[\'\"];?\n', '', content, flags=re.MULTILINE)
    # Case 2: import React, { ... } from 'react';
    content = re.sub(r'^import\s+React\s*,\s*\{\s*(.*?)\s*\}\s+from\s+[\'\"\]react[\'\"];?', r'import { \1 } from "react";', content, flags=re.MULTILINE)

    if 'About.jsx' in filepath:
        content = content.replace('].map((stat, i) => (', '].map((stat) => (')
    
    if 'HaliSaha.jsx' in filepath:
        content = re.sub(r'^import\s*\{\s*COLORS\s*\}\s*from\s*[\'\"\]\.\./theme[\'\"];?\n', '', content, flags=re.MULTILINE)

    if 'Services.jsx' in filepath:
        # Remove unused variables and the useEffect
        content = re.sub(r'\s*const isEven = index % 2 === 0;\n', '\n', content)
        content = re.sub(r'\s*const \[activeSection, setActiveSection\] = useState\(0\);\n', '\n', content)
        content = re.sub(r'\s*const \[isMobile, setIsMobile\] = useState\(false\);\n', '\n', content)
        
        # Remove the useEffect that's causing issues and is unused
        # We will use string manipulation to carefully remove it
        start_idx = content.find('  useEffect(() => {\n')
        if start_idx != -1:
            # find the end of useEffect
            end_idx = content.find('  }, []);\n', start_idx)
            if end_idx != -1:
                content = content[:start_idx] + content[end_idx + 10:]
            else:
                end_idx = content.find('  });\n', start_idx)
                if end_idx != -1:
                    content = content[:start_idx] + content[end_idx + 6:]
        
        content = content.replace('process.map((step, idx) => (', 'process.map((step) => (')

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Modified: {filepath}')

src_dir = 'c:\\reactprojes\\gozdeinsaat\\src'
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            process_file(os.path.join(root, file))
