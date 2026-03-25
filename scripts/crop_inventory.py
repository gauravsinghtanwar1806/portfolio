from PIL import Image
import os

img_path = r'c:\Users\HP\Desktop\Prot\portfolio-master\data\Inventory Management System.png'
save_path = r'c:\Users\HP\Desktop\Prot\portfolio-master\app\assets\inventory-new.png'

with Image.open(img_path) as img:
    width, height = img.size
    print(f"Original size: {width}x{height}")
    
    # Refined estimates based on the visual:
    left = 110
    top = 155
    right = 914
    bottom = 1460
    
    img_cropped = img.crop((left, top, right, bottom))
    img_cropped.save(save_path)
    print(f"Cropped size: {img_cropped.size}")
