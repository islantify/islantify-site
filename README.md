I Slantify — Official static website

This repository contains a lightweight, static website suitable for deployment via GitHub Pages (docs/). It is intentionally simple and does not depend on any backend services.

How to deploy

1. Replace placeholders in docs/assets/config.js:
   - SITE_URL
   - APP_STORE_URL
   - GOOGLE_PLAY_URL
   - CONTACT_EMAIL

2. Push to GitHub on the main branch.

3. Enable the GitHub Pages deployment:
   - Option A (recommended): Let the provided GitHub Actions workflow publish the contents of `docs/` to the `gh-pages` branch automatically when you push to `main`.
   - Option B: In repository settings > Pages, set Source to the `docs/` folder on the `main` branch.

Notes
- QR codes use Google Charts API to generate QR images client-side (no paid service). One QR encodes the site download page (SITE_URL/download/) and one points to the homepage (SITE_URL/).
- All legal pages (Privacy, Terms) are marked placeholders and must be replaced with final legal content before public launch.

Files created
- docs/index.html (Landing page)
- docs/download/index.html (Smart download page + QR)
- docs/privacy/index.html (Privacy Policy placeholder)
- docs/privacy-choices/index.html (Privacy Choices page)
- docs/terms/index.html (Terms placeholder)
- docs/contact/index.html (Contact page)
- docs/assets/styles.css (Site styles)
- docs/assets/config.js (Central configuration file — update placeholders)
- docs/robots.txt
- docs/sitemap.xml
- docs/404.html
- .github/workflows/deploy.yml (GitHub Actions workflow to publish docs/ to gh-pages)

Placeholders to update before public launch
- docs/assets/config.js: SITE_URL, APP_STORE_URL, GOOGLE_PLAY_URL, CONTACT_EMAIL
- docs/robots.txt: update Sitemap line
- docs/sitemap.xml: replace REPLACE_WITH_SITE_URL

Design notes
- Dark, premium fintech look (black/dark background, orange accent, subtle gold)
- Responsive and mobile-first
- Accessibility: semantic HTML, clear headings, accessible buttons

If you'd like, next steps I can take:
- Replace Google Chart QR usage with a client-side embedded QR library to avoid third-party services.
- Add automated link checks in CI.
- Generate App Store / Play button graphics matching brand.
- Preview the site locally and run simple validation checks.

Created by: AI assistant using Copilot CLI runtime in VS Code
