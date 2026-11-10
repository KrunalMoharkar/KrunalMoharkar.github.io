# Portfolio themes

Dark Premium is the first-visit default. Warm Light uses ivory backgrounds, white cards, beige surfaces, and terracotta accents. All existing content and sections are retained; no dependencies were added.

## How it works

`ThemeService` owns a private writable Angular signal and exposes a read-only `theme` signal. The navbar reads `theme()` in its template, so Angular updates the icon and accessible action label whenever `toggle()` changes the signal. `setTheme()` also updates `data-theme` on the root HTML element and saves `portfolio-theme` in localStorage.

Browser access is guarded by `isPlatformBrowser`. Storage errors are caught, so switching still works without persistence if storage is blocked. An early script in `index.html` restores the saved preference before styles and Angular load, minimizing initial theme flicker. If a deployment adds a strict Content Security Policy, allow that script using its hash or a nonce.

`src/styles.css` defines runtime CSS variables for both palettes. Tailwind v4's `@theme inline` maps them to semantic utilities such as `bg-card`, `text-muted`, `border-line`, and `text-accent-text`. Updating the root attribute changes every component without duplicating templates or using dark-mode class variants. Darker terracotta variants are used for text and filled buttons to improve contrast. Shadows and gradient stops also change with the theme.

## Files created

- `src/app/core/services/theme.service.ts`
- `src/app/core/services/theme.service.spec.ts`
- `THEMES.md`

## Files modified

- `src/styles.css`: tokens, Tailwind mapping, shadows, focus indicators, transitions, reduced-motion support.
- `src/index.html`: dark default and early preference restoration.
- `src/app/shared/navbar/navbar.ts`, `navbar.html`, `navbar.css`, `navbar.spec.ts`: responsive theme action and tests.
- `src/app/features/hero/hero.html`
- `src/app/features/about/about.html`
- `src/app/features/skills/skills.html`
- `src/app/features/projects/projects.html`
- `src/app/features/experience/experience.html`
- `src/app/features/credentials/credentials.html`
- `src/app/features/contact/contact.html`
- `src/app/shared/project-card/project-card.html`
- `src/app/shared/credential-card/credential-card.html`
- `src/app/shared/footer/footer.html`
- `src/app/core/data/profile.data.ts`: corrected the resume URL to the existing PDF filename; hero and navbar downloads use the same path.
- `src/app/app.spec.ts`: replaced the stale starter heading assertion and checked section targets, cards, social links, and download URLs.
- `src/app/shared/project-card/project-card.spec.ts`, `src/app/shared/credential-card/credential-card.spec.ts`: supplied required inputs in existing fixtures.

## Manual verification

1. Run `npm start` from `developer-portfolio`, then open the printed localhost URL.
2. Remove `portfolio-theme` from localStorage and reload: Dark Premium should appear.
3. Click the Sun button: Warm Light should apply to all sections, badges, timeline, buttons, footer, and gradients. Reload and confirm it stays light.
4. Click the Moon button and reload to confirm dark persistence.
5. Tab to the theme button and activate it with Enter and Space. Check the focus outline and updated accessible label.
6. Check at 375px, 768px, and 1440px widths. The toggle and resume action should remain available without horizontal overflow.
7. Enable reduced motion in your browser or OS and confirm theme switching and anchor navigation avoid animation.
8. Check section links, social links, email, and all three resume downloads in both themes. Project links are rendered only when URLs are present in the existing project data.
9. If possible, block localStorage and confirm switching still works during the visit.

## Existing content limitations

Project cards use locally stored SVG dashboard illustrations in `public/images/projects`, labeled as illustrative previews rather than actual screenshots. The existing project data has no repository or live-demo URLs, so those optional links are not rendered. External social account availability has not been verified.

## Validation results

- `npm run build`: passed the production build; initial bundle 249.35 kB, within configured budgets.
- `npm test -- --watch=false`: all 20 tests passed across 13 files, including persistence, invalid preferences, blocked storage, server-side guards, toggle labels, and navigation/download regression checks.
- The initial sandbox build hit filesystem restrictions; the successful build and test runs used approved execution outside the sandbox.
- Browser automation could not initialize because of an environment tooling error. Visual responsiveness, actual browser downloads, and live external destinations still need the manual checks above.
