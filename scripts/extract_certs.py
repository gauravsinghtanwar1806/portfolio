import os
import sys

try:
    import fitz  # PyMuPDF
    print("Using PyMuPDF")
    
    data_dir = r"C:\Users\HP\Desktop\Prot\portfolio-master\data"
    out_dir = r"C:\Users\HP\Desktop\Prot\portfolio-master\public\certificates"
    os.makedirs(out_dir, exist_ok=True)

    for file in os.listdir(data_dir):
        if file.endswith('.pdf'):
            pdf_path = os.path.join(data_dir, file)
            img_name = file.replace('.pdf', '.png')
            img_path = os.path.join(out_dir, img_name)
            
            # Copy PDF to public for downloading/viewing
            pdf_out_path = os.path.join(out_dir, file)
            with open(pdf_path, 'rb') as f_in, open(pdf_out_path, 'wb') as f_out:
                f_out.write(f_in.read())
                
            try:
                # Generate thumbnail image
                doc = fitz.open(pdf_path)
                page = doc.load_page(0)
                # Lower resolution for thumbnail using Matrix
                pix = page.get_pixmap(matrix=fitz.Matrix(1.0, 1.0))
                pix.save(img_path)
                print(f"Extracted {img_name}")
            except Exception as e:
                print(f"Failed to extract image for {file}: {e}")

except ImportError:
    print("PyMuPDF not found, please install it: pip install PyMuPDF")
    sys.exit(1)
