import os, re

src_dir = 'c:\\reactprojes\\gozdeinsaat\\src'

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            
            # For data files: image: "/images/..." -> image: `${import.meta.env.BASE_URL}images/...`
            # The regex looks for "/images/..." (with quotes)
            if file.endswith('.js'):
                content = re.sub(r'\"/images/(.*?)\"', r'`${import.meta.env.BASE_URL}images/\1`', content)
            
            # For jsx files: src="/images/..." -> src={`${import.meta.env.BASE_URL}images/...`}
            if file.endswith('.jsx'):
                # First handle src="/images/..."
                content = re.sub(r'src=\"/images/(.*?)\"', r'src={`${import.meta.env.BASE_URL}images/\1`}', content)
                # Also handle image: "/images/..." in Service pages where they have local arrays
                content = re.sub(r'image:\s*\"/images/(.*?)\"', r'image: `${import.meta.env.BASE_URL}images/\1`', content)

            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Fixed image paths in: {filepath}')

