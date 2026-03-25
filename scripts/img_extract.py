import sys
import fitz

def pdf_to_image(pdf_path, img_path):
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0) # load first page
        pix = page.get_pixmap(dpi=150)
        pix.save(img_path)
        print("Image saved to", img_path)
    except Exception as e:
        print("Error:", str(e))

if __name__ == "__main__":
    if len(sys.argv) > 2:
        pdf_to_image(sys.argv[1], sys.argv[2])
