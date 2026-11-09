# Background-only update

This package leaves your `style.css`, `script.js`, illustrations, CV, sections, translations, and research graph unchanged. It adds a new original, lightly animated scientific contour background.

## Installation (easy)

1. In your current website folder, replace **only `index.html`** with the supplied `index.html`.
2. Add **`background.css`** and **`background.js`** next to `style.css` and `script.js`.
3. Keep every other existing file exactly as it was.
4. Open `index.html` in a browser, then upload these three files to your existing GitHub repository.

## Manual installation instead of replacing index.html

Add `<link href="background.css" rel="stylesheet"/>` immediately after the existing `style.css` link inside `<head>`.

Add `<script defer src="background.js"></script>` inside `<head>`.

Add `<canvas id="site-background" class="site-background" aria-hidden="true"></canvas>` immediately after the opening `<body>` tag.

## Customization

- In `background.css`, change `opacity: 0.68` to increase or decrease visibility.
- In `background.js`, modify `lineCount` to change how many lines appear.
- In `background.js`, change the `stroke` and `points` variables to change the colors.
- To disable movement, use your device's Reduce Motion accessibility setting.
- To remove the effect, delete the new CSS/JS links and canvas element.

No external libraries or external assets are used. The background respects light/dark mode and reduced-motion preferences.
