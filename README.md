# Vivek Anupindi — Research Portfolio

A responsive, Netflix-inspired research portfolio built with plain HTML, CSS, and JavaScript. No framework, build step, or backend is required.

## Files

- `index.html` — page structure and portfolio content.
- `css/styles.css` — responsive layout, themes, card rails, and visual styling.
- `js/main.js` — mobile navigation, theme toggle, horizontal rail controls, and research-detail dialogs.
- `assets/Vivek_Anupindi_CV.pdf` — CV linked from the home page.
- `assets/favicon.svg` — lightweight monogram favicon for browser tabs.


## Portfolio structure

The design is Netflix-inspired rather than a direct Netflix clone: dark cinematic styling, horizontal research-card rails, and expandable project details, adapted for an academic portfolio. The website uses plain HTML, CSS, and JavaScript; there is no backend or framework dependency.


## Accessibility tools

The portfolio includes an optional **Accessibility** panel that lets visitors customize presentation and reading preferences. Settings are saved in the visitor's browser using `localStorage`; the reset button clears these custom preferences.

Available controls:
- High contrast
- Large text
- Dyslexia-friendly font
- Reduced motion
- Enhanced keyboard focus indicators
- Underlined links
- Increased line spacing
- Highlighted headings

### Test the controls

1. Open the site and activate **Accessibility** using a mouse or keyboard.
2. Toggle each setting and confirm the page presentation changes.
3. Reload the page and verify selected preferences are retained.
4. Select **Reset accessibility settings** and verify the custom settings are cleared.
5. Test the panel close button and `Escape` key, keyboard focus visibility, mobile layout, and both site themes.
6. Run an automated check with Lighthouse or axe, then manually review contrast, zoom/reflow, keyboard order, and screen-reader announcements.

These controls are user preferences, not a substitute for a formal WCAG conformance audit. Please run automated and manual accessibility tests before describing the site as WCAG-compliant.
