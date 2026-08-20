# Google Search Console — anspry.de

## Property

Add **Domain** property: `anspry.de` (covers http/https and www).

Fallback if domain HTTPS/cert is still pending: URL-prefix `https://semprog25.github.io/anspry-landing/` (note: custom domain redirects github.io → anspry.de).

## Verification

Recommended: **DNS TXT** on apex (`@` / `anspry.de`).

Search Console provides a record like:
`google-site-verification=XXXXXXXX`

Add that TXT in STRATO DNS for `@`, wait for propagation (`dig TXT anspry.de`), then click Verify.

Alternative: HTML file upload — place `googleXXXX.html` in `public/` and redeploy Pages.

## After verification

1. Submit sitemap: `https://anspry.de/sitemap.xml`
2. Request indexing for:
   - https://anspry.de/
   - https://anspry.de/privacy
   - https://anspry.de/terms
   - https://anspry.de/support
   - https://anspry.de/download
   - https://anspry.de/about

## Status (2026-08-20)

- DNS A for `anspry.de` → GitHub Pages (`185.199.108.153`) — **not** STRATO parking
- `www` CNAME → `semprog25.github.io`
- GitHub Pages HTTPS cert: `authorization_pending` (serves `*.github.io` until issued)
- Repo homepage set to `https://anspry.de`
