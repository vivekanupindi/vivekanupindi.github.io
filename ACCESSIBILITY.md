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

## Scope note

These controls improve customization, but their presence does not establish WCAG 2.2 AA conformance. Formal conformance requires automated and manual testing across the full page, interactions, content, and responsive states.


## Motion design

The portfolio uses a short hero entrance, a slow ambient background drift, restrained research-card hover movement, scroll-triggered content reveals, and a brief research-dialog entrance.

- The effects are decorative and do not contain required information.
- The site's **Reduce Motion** control disables the additional motion and makes scroll-reveal content immediately visible.
- The page also respects the operating system's `prefers-reduced-motion: reduce` setting.
- Scroll reveals use `IntersectionObserver` when available; if it is not available, content stays visible without scroll animations.

Test the motion with the in-site Reduce Motion preference enabled and with reduced motion enabled in the operating system. These measures are not a substitute for manual accessibility testing.


## Motion behavior

The portfolio uses a short hero entrance, slow decorative background movement, scroll-triggered content reveals, and a subtle research-dialog transition. Motion is decorative; content and controls remain available without animation.

- Verify the site with the operating system's reduced-motion preference enabled.
- Enable **Reduce Motion** in the site's Accessibility panel and confirm hero, ambient, scroll-reveal, and dialog animations stop.
- Confirm content is visible when reduced motion is enabled, including on initial load and after scrolling.
- Check that the existing card hover styling and keyboard focus remain usable.
