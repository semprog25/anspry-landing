# STRATO DNS checklist — anspry.de → GitHub Pages

**Status:** Prepared — apply tomorrow when STRATO DNS management is active.

**GitHub account:** semprog25  
**Repository:** anspry-landing  
**GitHub Pages default domain:** semprog25.github.io (project site: semprog25.github.io/anspry-landing until custom domain is active)

## Custom domain in GitHub

Configured via GitHub Pages settings: `anspry.de`

## Required DNS records (from GitHub Pages documentation)

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### Apex domain (anspry.de) — A records

| Type | Name/Host | Value |
|------|-----------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### Apex domain — AAAA records (IPv6, recommended alongside A)

| Type | Name/Host | Value |
|------|-----------|-------|
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

### Optional: www subdomain

| Type | Name/Host | Value |
|------|-----------|-------|
| CNAME | www | semprog25.github.io |

GitHub will redirect between apex and www automatically once both are configured.

## Tomorrow — steps

1. Log in to STRATO DNS for anspry.de
2. Remove any default parking records that conflict
3. Add the A and AAAA records above for `@`
4. (Optional) Add CNAME `www` → `semprog25.github.io`
5. Wait for DNS propagation (up to 24 hours)
6. Verify: `dig anspry.de +short A` should return the four GitHub IPs
7. In GitHub → anspry-landing → Settings → Pages → confirm custom domain shows verified
8. Enable **Enforce HTTPS** when available
9. Verify https://anspry.de and all public routes

## Do not use

- Wildcard DNS (`*.anspry.de`)
- Outdated GitHub IPs from third-party sources — use the values above from GitHub docs
- SeaDays or any other project’s DNS configuration
