import os
from PIL import Image

luxury_dir = r"c:\Users\bilal.abbasi\Desktop\acemen\public\images\luxury"
brain_dir = r"C:\Users\bilal.abbasi\.gemini\antigravity-ide\brain\3debb8f6-2db4-4d81-a9bb-c51621d2d61c"

# Copy and convert newly generated cardholder & belt images
cardholder_src = os.path.join(brain_dir, "pair_cardholder_1788456664547.jpg")
belt_src = os.path.join(brain_dir, "pair_leather_belt_1788456722555.jpg")

if os.path.exists(cardholder_src):
    img = Image.open(cardholder_src)
    img.save(os.path.join(luxury_dir, "prod-cardholder-1.webp"), "WEBP", quality=85)
    img.save(os.path.join(luxury_dir, "prod-cardholder-2.webp"), "WEBP", quality=85)
    print("Saved prod-cardholder-1.webp and prod-cardholder-2.webp")

if os.path.exists(belt_src):
    img = Image.open(belt_src)
    img.save(os.path.join(luxury_dir, "prod-belt-1.webp"), "WEBP", quality=85)
    img.save(os.path.join(luxury_dir, "prod-belt-2.webp"), "WEBP", quality=85)
    print("Saved prod-belt-1.webp and prod-belt-2.webp")

# Convert all shoe .jpg images to optimized .webp
shoe_jpgs = [f for f in os.listdir(luxury_dir) if f.startswith("prod-shoe-") and f.endswith(".jpg")]
for jpg_name in shoe_jpgs:
    webp_name = jpg_name.rsplit(".", 1)[0] + ".webp"
    jpg_path = os.path.join(luxury_dir, jpg_name)
    webp_path = os.path.join(luxury_dir, webp_name)
    with Image.open(jpg_path) as im:
        # Resize to max 900x900 for razor-sharp crisp retina display while keeping file size tiny
        im.thumbnail((900, 900), Image.Resampling.LANCZOS)
        im.save(webp_path, "WEBP", quality=82, method=6)
        old_size = os.path.getsize(jpg_path) // 1024
        new_size = os.path.getsize(webp_path) // 1024
        print(f"Optimized {jpg_name}: {old_size}KB -> {webp_name}: {new_size}KB (reduced by {(1 - new_size/old_size)*100:.1f}%)")

print("Image optimization complete!")
