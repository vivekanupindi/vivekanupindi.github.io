# Accessibility tools

This portfolio provides an optional side panel for visitor-controlled presentation preferences. The panel is designed to be keyboard accessible and usable on mobile-sized screens.

## Available preferences

- **High contrast** — switches the page to a black-and-white palette with yellow accents.
- **Large text** — increases the size of common text content.
- **Dyslexia-friendly font** — uses a system sans-serif font stack with increased letter and word spacing.
- **Reduce motion** — suppresses most transitions and animations for the current page.
- **Enhanced focus indicators** — makes keyboard focus outlines more visible.
- **Underline links** — adds persistent underlines to links.
- **Increase line spacing** — gives text content more vertical space.
- **Highlight headings** — underlines section headings.

Selections are saved with `localStorage` in the visitor's browser. The reset control clears saved custom preferences. When browser storage is unavailable, the controls should still work for the current page.

## Manual verification checklist

- Open and close the panel with the keyboard and pointer.
- Verify that `Escape` closes the panel and returns focus to the accessibility trigger.
- Tab through every checkbox and button; confirm focus indicators are visible.
- Toggle each option individually, combine options, reload, and reset.
- Verify behavior in dark mode, light mode, desktop, and mobile layouts.
- Zoom to 200% and check for clipped text or inaccessible controls.
- Check the site with a screen reader and confirm controls have names and state.
- Run automated checks with Lighthouse or axe and inspect color contrast manually.
- Test that reduced-motion settings minimize movement and transitions.

## Motion behavior

Optional motion includes a brief staggered hero entrance, slowly shifting decorative background glows, subtle card hover/focus feedback, scroll-triggered reveals, and a short project-dialog entrance.

- Motion is decorative; it does not add information needed to understand the portfolio.
- Scroll-reveal styles are only activated when JavaScript and `IntersectionObserver` are available. Without them, content stays visible.
- The system-level `prefers-reduced-motion: reduce` preference and the visitor's **Reduce motion** setting disable decorative animations and reveal transitions.
- Verify the site with reduced motion both enabled before loading and toggled on while the page is open. Confirm all sections remain visible and usable.
- Test keyboard focus on cards and ensure visual movement never obscures focus indicators or hides content.

## Scope note

These controls improve customization, but their presence does not establish WCAG 2.2 AA conformance. Formal conformance requires automated and manual testing across the full page, interactions, content, and responsive states.
