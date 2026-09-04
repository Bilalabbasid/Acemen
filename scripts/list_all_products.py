import re
import os
from PIL import Image

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

products = re.findall(r'name:\s*"([^"]+)",[\s\S]*?primary:\s*"([^"]+)",\s*secondary:\s*"([^"]+)"', content)

print(f"Found {len(products)} products in products.ts:")
for name, prim, sec in products:
    prim_path = os.path.join('public', prim.lstrip('/\\').replace('/', os.sep))
    sec_path = os.path.join('public', sec.lstrip('/\\').replace('/', os.sep))
    prim_ok = os.path.exists(prim_path) and os.path.getsize(prim_path) > 0
    sec_ok = os.path.exists(sec_path) and os.path.getsize(sec_path) > 0
    print(f"[{'OK' if prim_ok else 'FAIL'}] {name} -> Primary: {prim} (size: {os.path.getsize(prim_path) if prim_ok else 0} bytes)")
    print(f"[{'OK' if sec_ok else 'FAIL'}] {name} -> Secondary: {sec} (size: {os.path.getsize(sec_path) if sec_ok else 0} bytes)")
