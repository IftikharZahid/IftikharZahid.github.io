# CopyNest Official Website

A static, responsive website built with **vanilla HTML5, CSS3, and JavaScript** only. No framework, package manager, build step, or backend is required.

## Files

- `index.html` — landing page
- `privacy-policy.html` — privacy policy template (must be completed against the real app)
- `support.html` — support information
- `data-deletion.html` — data deletion guidance template
- `404.html` — not-found page
- `css/style.css` — shared responsive design system
- `js/config.js` — central site configuration
- `js/main.js` — mobile navigation, FAQ, CTA and footer behavior
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` — site metadata

## Run locally

Open `index.html` directly in a browser. For testing multiple pages, a simple static file server is optional, but no server is required by the website itself.

## Required configuration before publishing

Edit `js/config.js` and replace:
- `developerName`
- `supportEmail`
- `websiteUrl`
- `privacyPolicyUrl`
- `dataDeletionUrl`
- `googlePlayUrl`
- `appVersion`
- `minimumAndroidVersion`
- `publicationStatus`

The supplied `googlePlayUrl` is a **Google Play internal-testing invitation**, and `publicationStatus` is set to `internal-testing`. CTA buttons say “Join Internal Testing” and link directly to it. Only enrolled/eligible testers can access the test. Set `publicationStatus` to `published` only after the public listing is live and replace the URL with the real public store listing.

Update canonical URLs and the domain in `robots.txt` and `sitemap.xml`. If deploying to a GitHub Pages project subdirectory, check all canonical URLs and sitemap paths against the final public URL.

## Assets

The SVG logo and app icon are temporary original brand assets. Use the official CopyNest app icon if available. The phone mockup and screenshot cards on the home page are illustrative placeholders, not genuine app screenshots. Replace them with screenshots captured from the actual Android app before launch.

## Deploy

Upload the project files and folders to a static hosting provider such as GitHub Pages, Netlify, or Vercel static hosting. Connect a domain if desired, enable HTTPS, and confirm each page is publicly reachable without sign-in.

## Google Play pre-publication checklist

- [ ] Confirm the actual Android package/application ID and official Play Store URL.
- [ ] Publish the site on HTTPS.
- [ ] Replace all configuration placeholders.
- [ ] Verify the actual app behavior, permissions, local storage, server usage, and every third-party SDK.
- [ ] Complete and review the Privacy Policy; do not publish the template text unchanged.
- [ ] Ensure the policy agrees with the Play Console Data safety form and the in-app privacy link.
- [ ] Confirm the support email is valid and monitored.
- [ ] Complete data/account deletion instructions based on verified app behavior.
- [ ] Replace illustrative UI previews with genuine app screenshots and the official app icon.
- [ ] Update sitemap and robots.txt with the deployed domain.
- [ ] Test navigation, mobile menu, FAQ, external links, keyboard access, and all page routes.
- [ ] Review Google Play policies directly before submission.

This website does not guarantee Google Play approval. Compliance depends on the Android app, its SDKs, declarations, and the current Play policies.
