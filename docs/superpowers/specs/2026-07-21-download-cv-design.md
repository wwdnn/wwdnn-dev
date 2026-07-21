# Download CV Design

## Goal

Clicking `Download CV` in `HeroOverlay` downloads `CV-Wildan Setya Nugraha.pdf`.

## Design

- Import PDF from `src/assets/portfolio` through Vite.
- Replace disabled download button with an anchor using existing `hero-button` styling.
- Set `href` to imported asset and `download` to desired filename.
- Keep behavior inside presentation component; no state, handler, new layer, or dependency.

## Verification

- Run `npm run build`.
- Confirm built output contains PDF asset.
