import sys
try:
    import fitz # PyMuPDF
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"])
    import fitz

def extract_text_from_pdf(pdf_path, txt_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text() + "\n"
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success")
    except Exception as e:
        print("Error:", str(e))

if __name__ == "__main__":
    if len(sys.argv) > 2:
        pdf_path = sys.argv[1]
        txt_path = sys.argv[2]
        extract_text_from_pdf(pdf_path, txt_path)
    else:
        print("Please provide PDF path and TXT path.")
