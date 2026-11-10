# Free GitHub Pages deployment

Repository: https://github.com/KrunalMoharkar/KrunalMoharkar.github.io

Site: https://krunalmoharkar.github.io/

Configuration is prepared locally. No commit, push, GitHub settings change, or deployment was performed as part of this setup.

## Configuration

- The Angular application and `.github/workflows/deploy.yml` are at the Git repository root. Although the local folder is named `developer-portfolio`, Actions runs npm commands at the repository root.
- `angular.json` explicitly sets the output base to `dist/developer-portfolio` and the production base href to `/`. The application builder adds the `browser` directory, so the uploaded site is **`dist/developer-portfolio/browser`**.
- `npm run build:pages` explicitly requests the production configuration and base href `/`.
- `.nvmrc` pins Node 24.16.0, compatible with this project's installed Angular CLI engine requirements.
- The workflow installs from `package-lock.json` using `npm ci`, runs the tests, builds, verifies public assets, and uploads the browser output. Its deployment job uses the `github-pages` environment and grants only the Pages and OIDC permissions it needs.
- Deployments run on pushes to `main` and through the manual **Run workflow** button. No deployment branch, personal access token, or paid service is needed.
- Everything under `public/` is copied to the site root: resume PDF, profile photo, certification logos, project previews, and `favicon.svg`. The verification script checks that all public files match their built copies and that compiled entry assets exist.

## Routing and refresh

The current `app.routes.ts` has no routes. All content is on one page, with ordinary fragment links such as `/#about` and `/#projects`. Both root and fragment URL refreshes request `/` from Pages, so no SPA redirect script, hash-router conversion, or custom 404 fallback is necessary. Existing section navigation is preserved.

If routed subpages such as `/projects/example` are added later, GitHub Pages cannot serve them through an automatic Angular history fallback. Configure static prerendered pages or a suitable routing strategy before adding those URLs. This setup does not claim to support routes that do not exist.

## Enable Pages

1. For hosting on GitHub Free, keep this repository **public**.
2. Open the repository, then **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the **Source**.
4. Use the prepared workflow; do not create another starter workflow.
5. Once you approve publishing, run the commands below. A push to `main` will automatically build and deploy the site.
6. In **Actions**, open **Deploy portfolio to GitHub Pages** and wait for both jobs to pass. The deployment job exposes the published URL.
7. If the workflow is already present on GitHub and no new commit is needed, use **Actions → Deploy portfolio to GitHub Pages → Run workflow → main**.

Official setup reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Commands to run after approval

From PowerShell:

```powershell
Set-Location 'C:\Users\Krunal Moharkar\Desktop\portfolio\developer-portfolio'
git status
git diff
npm run build:pages
npm run verify:pages
npm test -- --watch=false
git add .github/workflows/deploy.yml .nvmrc angular.json package.json public/favicon.svg src/index.html scripts/verify-pages.mjs DEPLOYMENT.md README.md
git commit -m "Configure free GitHub Pages deployment"
git push origin main
```

The repository already has `origin` set to the requested GitHub URL. Do not run `git init` or add another origin. The built `dist/` directory remains ignored and is uploaded by Actions rather than committed.

If Git reports dubious ownership in this Windows environment, use this one-time trusted-directory configuration for your own checkout, then rerun the commands:

```powershell
git config --global --add safe.directory 'C:/Users/Krunal Moharkar/Desktop/portfolio/developer-portfolio'
```

## Verify the live site after deployment

1. Open https://krunalmoharkar.github.io/ and confirm the portfolio and favicon appear.
2. Toggle Dark Premium to Warm Light and back. Refresh in each mode; the saved preference should remain. The early bootstrap script restores `portfolio-theme` before Angular starts. Preferences are per origin, so localhost's theme choice does not transfer to the GitHub domain.
3. Open https://krunalmoharkar.github.io/#about directly, refresh, and check section navigation. Repeat for `#projects` and `#contact`.
4. Check the profile photo, project previews, and certification logos on mobile and desktop.
5. Use every resume download button and open https://krunalmoharkar.github.io/Krunal-Moharkar-Resume.pdf directly.
6. Check social links, email, keyboard focus, and the theme button using Enter/Space. Test reduced-motion preferences.
7. Check browser console/network errors for missing assets. The site uses the root base `/`, never `/developer-portfolio/`.

Live behavior cannot be verified until an approved deployment exists. Local tests cover the theme signal, preference restoration, blocked storage, SSR guards, toggle labels, and navigation/download targets.
