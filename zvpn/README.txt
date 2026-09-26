# ZVPN Website

Static website for the ZVPN Android app.

## Files

- `index.html` — public product/store-style landing page
- `privacy.html` — privacy policy page suitable as a starting point for a Google Play privacy-policy URL
- `style.css` — responsive styling
- `script.js` — small JavaScript interactions
- `assets/zvpn-logo.png` — ZVPN logo
- `assets/zvpn-banner.png` — ZVPN feature graphic

## Before publishing

1. Replace `YOUR-SUPPORT-EMAIL@example.com` in `privacy.html` with the real support/privacy email.
2. Review the privacy policy against the actual data collection and third-party SDKs in the production APK/AAB.
3. Replace the `Get ZVPN` placeholder links in `index.html` with the actual Google Play Store URL.
4. Upload the whole folder to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or another static host.
5. Use the public URL ending in `/privacy.html` as the Privacy Policy URL in Google Play Console.

No backend is required for this static site.
