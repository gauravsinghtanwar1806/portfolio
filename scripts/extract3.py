import sys
import subprocess

try:
    import pdfplumber
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfplumber"])
    import pdfplumber

def extract_pdf(pdf_path, txt_path):
    try:
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success")
    except Exception as e:
        print("Error:", str(e))

if __name__ == "__main__":
    extract_pdf(sys.argv[1], sys.argv[2])
