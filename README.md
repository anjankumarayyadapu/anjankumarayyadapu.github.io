# Anjan Kumar Ayyadapu — Profile Website

A single-page professional profile site ready for GitHub Pages.

## Live URL

https://anjan-kumar-ayyadapu.com/

GitHub Pages URL (also works): https://anjankumarayyadapu.github.io/

## Custom domain

This site uses the custom domain `anjan-kumar-ayyadapu.com` via GitHub Pages.

### DNS settings (at your domain registrar)

Add these records for the root domain:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional — if you also want `www.anjan-kumar-ayyadapu.com`:

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `anjankumarayyadapu.github.io` |

### GitHub Pages settings

1. Push the `CNAME` file in this repo (already included).
2. On GitHub: **Settings → Pages → Custom domain** → enter `anjan-kumar-ayyadapu.com`
3. Wait for DNS to propagate (up to 24 hours, often much faster).
4. Enable **Enforce HTTPS** once GitHub shows the domain as verified.

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
