# Anjan Kumar Ayyadapu — Profile Website

A single-page professional profile site ready for GitHub Pages.

## Live URL (after deployment)

https://anjankumarayyadapu.github.io/

## Deploy to GitHub Pages

1. Clone your GitHub Pages repo locally:
   ```bash
   git clone https://github.com/anjankumarayyadapu/anjankumarayyadapu.github.io.git
   cd anjankumarayyadapu.github.io
   ```

2. Copy these files into the repo root:
   - `index.html`
   - `css/`
   - `js/`

3. Commit and push:
   ```bash
   git add index.html css js
   git commit -m "Add professional profile website"
   git push origin main
   ```

4. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / root**

## Local preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Customize

- Update content in `index.html`
- Adjust colors in `css/style.css` (`:root` variables)
- Replace project links in the Featured Work section
