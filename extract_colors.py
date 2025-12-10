from PIL import Image
from collections import Counter
import sys

def analyze_image(image_path):
    try:
        print(f"Analyzing {image_path}...")
        img = Image.open(image_path)
        img = img.resize((200, 200)) # resize for speed
        img = img.convert("RGBA")
        pixels = []
        data = img.getdata()
        for item in data:
            if item[3] > 100: # Only mostly opaque pixels
                pixels.append(item[:3])
                
        counts = Counter(pixels)
        print("Top 20 colors:")
        for rgb, count in counts.most_common(20):
            hex_val = '#{:02x}{:02x}{:02x}'.format(*rgb)
            print(f"Hex: {hex_val}, RGB: {rgb}, Count: {count}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_image('public/logo.png')
