import os, re

src_dir = 'c:\\reactprojes\\gozdeinsaat\\src'
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            
            # Fix broken React imports
            content = content.replace('from "react";react";', 'from "react";')
            content = content.replace('from "react";react"', 'from "react";')
            content = content.replace("from 'react';react';", "from 'react';")
            
            # Also clean up the remaining 'import React from "react";'
            content = re.sub(r'^import\s+React\s+from\s+[\'"]react[\'"];?\n?', '', content, flags=re.MULTILINE)
            
            # Clean up the remaining 'import React, { ... } from ...' correctly
            content = re.sub(r'^import\s+React\s*,\s*\{\s*(.*?)\s*\}\s+from\s+[\'"]react[\'"];?\n?', r'import { \1 } from "react";\n', content, flags=re.MULTILINE)
            
            # Unused COLORS in HaliSaha
            if 'HaliSaha.jsx' in filepath:
                content = re.sub(r'^import\s*\{\s*COLORS\s*\}\s*from\s*[\'"]\.\./theme[\'"];?\n', '', content, flags=re.MULTILINE)

            # Unused COLORS and FONT in App.jsx
            if 'App.jsx' in filepath:
                content = re.sub(r'^import\s*\{\s*COLORS,\s*FONT\s*\}\s*from\s*[\'"]\./theme[\'"];?\n', '', content, flags=re.MULTILINE)

            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Fixed: {filepath}')
