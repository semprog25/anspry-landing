# Domain switch — run when anspry.de DNS is live

In `.github/workflows/deploy.yml`, change the build env:

```yaml
env:
  VITE_BASE_PATH: /
```

Then re-enable custom domain in GitHub Pages:

```bash
gh api -X PUT repos/semprog25/anspry-landing/pages -f build_type=workflow -f cname=anspry.de
```

The `public/CNAME` file already contains `anspry.de` and is preserved in builds.
