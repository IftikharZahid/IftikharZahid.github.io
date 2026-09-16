# SEO setup & growth strategy

## What's already implemented

- **Keyword-targeted title & description** — "React Native & React Developer for Hire" (hire-intent, not just a name query).
- **Full meta set** — keywords, author, robots (`max-image-preview:large`), googlebot, bingbot, geo, language, theme-color, PWA tags.
- **Canonical + hreflang** (`en`, `x-default`) pointing at `https://iftikharzahid.me/`.
- **Open Graph + Twitter cards** with image, dimensions and alt text.
- **Structured data (JSON-LD)**: Person, WebSite, ProfessionalService, BreadcrumbList, ItemList of featured projects (SoftwareApplication), FAQPage.
- **Visible FAQ section** matching the FAQ schema — eligible for rich results and quoted by AI answer engines.
- **robots.txt** allowing all major crawlers plus AI search bots (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended).
- **sitemap.xml** with image sitemap extension (hash anchors removed — search engines ignore fragments and they created duplicates).
- **Performance** — async Font Awesome, preconnect/dns-prefetch, high-priority avatar preload, semantic HTML, alt text.

## Keyword map

| Intent | Target queries | Where it lives |
| --- | --- | --- |
| Brand | iftikhar zahid, iftikharzahid developer | title, H1, Person schema |
| Hire (money) | hire react native developer, freelance react developer, react native app developer | title, description, FAQ, contact copy |
| Service | cross-platform app development, firebase developer, expo app developer | skills section, ProfessionalService schema |
| Long-tail | how long does it take to build a mobile app, ios and android one codebase | FAQ section + FAQPage schema |

New/low-authority domains win on long-tail, buyer-intent phrases first — not on head terms like "react developer".

## Do these next (off-site, biggest impact)

1. **Google Search Console + Bing Webmaster Tools** — verify the domain and submit `https://iftikharzahid.me/sitemap.xml`.
2. **Add the verification meta tags** once issued:
   `<meta name="google-site-verification" content="..." />`
   `<meta name="msvalidate.01" content="..." />`
3. **Consistent profiles** — same name, photo and URL on GitHub, LinkedIn, X, Dev.to, Stack Overflow, Upwork/Fiverr. These feed the `sameAs` entity graph and are the fastest authority signal for a personal brand.
4. **Backlinks** — GitHub project READMEs linking home, dev.to / Hashnode / Medium posts, "built with Expo" style showcases, local business directories.
5. **Content depth** — one dedicated page per service/use case is what actually ranks (e.g. `/react-native-app-development`, `/hire-react-developer-pakistan`, a case study page per project). Depth beats volume; avoid thin near-duplicate pages.

## Maintenance

- Update the FAQ and project list as work changes; keep the JSON-LD in sync with visible text (mismatch = rich-result penalty).
- Keep Core Web Vitals green: no render-blocking CSS/JS, images sized and lazy-loaded.
