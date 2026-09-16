# Iftikhar Zahid — Enhanced Portfolio (Static)

Enhanced version of https://iftikharzahid.me built with the **same tech stack** (vanilla HTML, CSS, JavaScript). Zero build step. Drop-in ready for **GitHub Pages**.

## Files

- `index.html` — markup & content
- `styles.css` — design system (light/dark), layout, animations
- `script.js` — typewriter, reveal-on-scroll, magnetic buttons, 3D card tilt, cursor glow, neural-network canvas, count-up stats, active-section nav, theme toggle, testimonial auto-carousel

## Deploy to GitHub Pages

1. Create a repo (e.g. `portfolio`).
2. Copy `index.html`, `styles.css`, `script.js` to the repo root.
3. Push to GitHub.
4. Repo → **Settings → Pages** → Source: **Deploy from branch** → Branch: **main** / **/(root)** → Save.
5. Site lives at `https://<username>.github.io/portfolio/` (or your `<username>.github.io` root).

For a user site at `https://<username>.github.io/`, create a repo named exactly `<username>.github.io` and push the same three files to root.

## Local preview

Any static server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```
