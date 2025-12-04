from PIL import Image
from collections import Counter

def get_orange_colors(image_path):
    image = Image.open(image_path)
    image = image.convert('RGB')
    # Don't resize too small to avoid losing thin lines
    image = image.resize((300, 300)) 
    pixels = list(image.getdata())
    counts = Counter(pixels)
    
    print("Searching for orange-ish colors (R > 150, G > 50, B < 100):")
    found = False
    for rgb, count in counts.most_common(1000):
        r, g, b = rgb
        # Broad orange filter
        if r > 150 and g > 50 and b < 100 and r > g:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*rgb)
            print(f"Hex: {hex_color}, RGB: {rgb}, Count: {count}")
            found = True
            
    if not found:
        print("No orange colors found in top 1000.")

if __name__ == "__main__":
    try:
        get_orange_colors('public/nick.png')
    except Exception as e:
        print(f"Error: {e}")
