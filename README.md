# The First Thousand

A free from-scratch X (Twitter) growth course: 0 → 1,000 real followers.

Static HTML. Checklist state lives in the browser only.

## Publish on Cloudflare Pages (2 minutes)

GitHub Pages is not enabled on this repo, so `rakoo04.github.io/first-thousand` 404s. Use Cloudflare.

1. Open [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages)
2. **Create application → Pages → Connect to Git**
3. Authorize GitHub and pick **`rakoo04/first-thousand`**
4. Settings:
   - Project name: `first-thousand` (URL becomes `first-thousand.pages.dev`)
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: *leave empty*
   - Build output directory: `/`
5. **Save and Deploy**

First deploy is usually live in under a minute at `https://first-thousand.pages.dev`.

Custom domain later: Pages project → Custom domains → add `course.rahulmeghwal.com` or similar → Cloudflare adds the CNAME.

## Local

Open `index.html` in a browser, or:

```
python3 -m http.server 8080
```
