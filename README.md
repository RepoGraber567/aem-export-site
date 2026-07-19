<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/0961af2c-8669-4ff0-83a8-cb9900f47385

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is set up to deploy from the `main` branch with GitHub Actions.

1. Push this repository to GitHub.
2. In GitHub, open `Settings` > `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Commit and push to `main`; the workflow will build `dist` and publish it.
5. Add these DNS records in Namecheap for `aem-export.com`:
   - `A` record for `@` to `185.199.108.153`
   - `A` record for `@` to `185.199.109.153`
   - `A` record for `@` to `185.199.110.153`
   - `A` record for `@` to `185.199.111.153`
   - `CNAME` record for `www` to your GitHub Pages domain if you want `www` support

After DNS changes, wait for propagation. GitHub Pages should serve the site once the domain is verified and the records are live.
