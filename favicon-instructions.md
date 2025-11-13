# Favicon Setup Instructions

Your website needs a favicon (the small icon that appears in browser tabs).

## Quick Setup (Recommended)

### Step 1: Create Favicon
Go to **[RealFaviconGenerator.net](https://realfavicongenerator.net/)**

### Step 2: Upload Image
- Upload your profile photo or a logo
- The site will generate all necessary favicon sizes

### Step 3: Download & Install
1. Download the generated favicon package
2. Extract the zip file
3. Copy ALL files to your website root directory (same folder as index.html)

### Step 4: Update HTML
Replace line 63-64 in `index.html`:

```html
<!-- Current (placeholder) -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

With the code provided by RealFaviconGenerator (usually looks like):

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```

## Alternative: Simple Favicon

If you just want a basic favicon:

1. Create or get a square image (512x512px PNG)
2. Convert to ICO at [Favicon.io](https://favicon.io/)
3. Download `favicon.ico`
4. Place in root directory
5. The existing HTML link will work!

## What You'll Get

- favicon.ico (16x16, 32x32)
- apple-touch-icon.png (180x180)
- favicon-32x32.png
- favicon-16x16.png
- android-chrome icons
- site.webmanifest (for PWA)

## Testing

After adding favicon:
1. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
2. Check browser tab for icon
3. Test on mobile by adding to home screen

## Pro Tips

- Use your profile photo for personal brand recognition
- Keep it simple - complex images don't work well at small sizes
- Use a solid background color
- Ensure good contrast

---

**Need Help?** 
The RealFaviconGenerator tool is very user-friendly and walks you through each step!

