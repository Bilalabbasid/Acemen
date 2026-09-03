import re
import os

with open(r'c:\Users\bilal.abbasi\Desktop\acemen\src\data\products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

imgs = re.findall(r'/images/[^"\'\s,]+', text)
unique_imgs = sorted(list(set(imgs)))
print('Total unique images referenced:', len(unique_imgs))
missing = []
for img in unique_imgs:
    local_path = os.path.join(r'c:\Users\bilal.abbasi\Desktop\acemen\public', img.lstrip('/\\').replace('/', os.sep))
    if not os.path.exists(local_path):
        missing.append(img)

print('Missing images (' + str(len(missing)) + '):')
for m in missing:
    print(' -', m)
