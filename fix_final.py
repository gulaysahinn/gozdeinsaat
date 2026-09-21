import os, re

# FloorComparisonCards.jsx
filepath = r'c:\reactprojes\gozdeinsaat\src\components\FloorComparisonCards.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('GraduationCap, ', '').replace(' TreePalm', '')
content = re.sub(r',\s*serviceLink', '', content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# Nav.jsx
filepath = r'c:\reactprojes\gozdeinsaat\src\components\Nav.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'\s*// Close mobile menu on route change\n\s*useEffect\(\(\) => \{\n\s*setMobileOpen\(false\);\n\s*\}, \[\]\);\n', '\n', content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# ServicePage.jsx
filepath = r'c:\reactprojes\gozdeinsaat\src\components\ServicePage.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'^import\s*\{\s*PROCESS\s*\}\s*from\s*[\'"]\.\./data/content[\'"];?\n', '', content, flags=re.MULTILINE)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# useInView.js
filepath = r'c:\reactprojes\gozdeinsaat\src\hooks\useInView.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('}, [options.threshold, options.rootMargin, isInView]);', '  // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [options.threshold, options.rootMargin, isInView]);')
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# Services.jsx
filepath = r'c:\reactprojes\gozdeinsaat\src\pages\Services.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('import { useState, useEffect } from "react";\n', '')
content = content.replace('process.map((step, idx) => (', 'process.map((step) => (')
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Final fixes applied!')
