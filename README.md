# Vivek Anupindi — Research Portfolio

Personal research portfolio for **Vivek Anupindi**

**Live portfolio:** [https://vivekanupindi.github.io/](https://vivekanupindi.github.io/)

The visual design takes inspiration from cinematic streaming interfaces—dark surfaces, bold typography, red accents, and horizontal project cards—adapted for a personal academic portfolio. This is an independently built portfolio and is not affiliated with Netflix.

---

## Contents

- [Features](#features)
- [Research areas represented](#research-areas-represented)
- [Technology stack](#technology-stack)
- [Repository structure](#repository-structure)
- [Run locally](#run-locally)
- [How to update the portfolio](#how-to-update-the-portfolio)
- [Accessibility](#accessibility)
- [Motion and reduced-motion support](#motion-and-reduced-motion-support)
- [Deployment](#deployment)
- [Testing checklist](#testing-checklist)
- [Limitations and scope](#limitations-and-scope)

## Features

### Portfolio content

- **Introduction and featured research** — overview of my research interests and a featured clinical NLP project.
- **Research library** — project cards for automated ICD-10 coding, glucose prediction, cloud-native analytics, physician burnout analysis, and smart health monitoring.
- **Project details** — open a dialog with additional context from a research card.
- **Publications and manuscripts** — separate entries for published work and manuscripts listed as under review.
- **Experience timeline** — teaching, data engineering, and IT systems experience.
- **About and education** — background, academic programs, and research interests.
- **Technical toolkit and academic highlights** — grouped skills, certifications, awards, coursework, and activities.
- **Contact links** — email, GitHub, and LinkedIn.

Publication statuses and project descriptions reflect the information currently listed on the portfolio. They should be kept synchronized with the current CV and publication records.

### Interface

- Responsive layout for desktop, tablet, and mobile.
- Dark and light themes.
- Mobile navigation menu.
- Horizontally scrollable research-card rail with previous/next controls.
- Project detail dialogs.
- Footer year updated automatically by JavaScript.
- Subtle hero entrance, ambient background movement, scroll-triggered reveals, card feedback, and dialog transitions.

### Visitor accessibility preferences

The floating **Accessibility** panel provides optional presentation and reading settings:

- High contrast
- Large text
- Dyslexia-friendly font styling (system font stack with increased letter and word spacing)
- Reduced motion
- Enhanced keyboard focus indicators
- Underlined links
- Increased line spacing
- Highlighted headings

Preferences are stored in the visitor's browser using `localStorage`. The reset control clears the saved custom preferences. If browser storage is blocked, the controls should still apply during the current page session.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for the available settings and manual verification checklist.

## Research areas represented

The portfolio currently highlights these interests and project directions:

- Clinical natural language processing (NLP) and diagnostic-code classification
- Machine learning for healthcare
- Short-term glucose prediction and time-series modeling
- Healthcare analytics
- Data engineering, cloud-native analytics, and data quality
- Intelligent and dependable data systems

Some entries describe ongoing or exploratory work rather than validated clinical systems. The portfolio is intended to present research interests and projects, not to provide medical advice or clinical predictions.

## Technology stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and content |
| CSS3 | Responsive layout, themes, visual design, animation, and accessibility preference styles |
| Vanilla JavaScript | Mobile navigation, theme preference, research rail controls, dialogs, accessibility settings, and scroll reveals |
| Google Fonts | DM Sans and Manrope typography |

There is no framework, package manager, build pipeline, or backend required for the current site. Google Fonts are requested from Google's font service, so the selected web fonts may fall back to system fonts when the service is unavailable.

## Repository structure

```text
.
├── index.html                  # Portfolio sections and accessibility panel markup
├── styles.css                  # Main styles, responsive rules, themes, and motion
├── main.js                     # Interactions, stored preferences, and motion behavior
├── README.md                   # Project overview and maintenance guide
├── ACCESSIBILITY.md            # Accessibility settings and manual test checklist
└── assets/
    ├── headshot.jpeg           # Hero profile image
    ├── Vivek_Anupindi_CV.pdf   # CV linked from the portfolio
    └── favicon.svg             # Browser tab icon
```

## Run locally

Because this is a static site, you do not need to install dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/vivekanupindi/vivekanupindi.github.io.git
   cd vivekanupindi.github.io
   ```

2. Start a local web server from the repository directory. For example, with Python:

   ```bash
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser.

You can also use a local editor extension such as Live Server. A local server is preferable to opening `index.html` directly because it more closely resembles the deployed website.

## How to update the portfolio

### Update text or page sections

Edit `index.html`. Keep navigation links matched to the corresponding section IDs (for example, `#research` and `#experience`). Preserve semantic headings and descriptive labels for interactive controls.

### Update design or responsive behavior

Edit `styles.css`. Test both themes and narrow viewport sizes. Keep keyboard-focus indicators visible and ensure visual changes still work when the accessibility preference classes are active.

### Update interactions

Edit `main.js`. Current features include theme switching, mobile navigation, research-card scrolling, research detail dialogs, accessibility settings, saved preferences, and scroll-reveal behavior. When changing an interaction, retain keyboard support and appropriate behavior when browser APIs or storage are unavailable.

### Update the headshot, CV, or favicon

Replace the matching file under `assets/` while keeping its filename and relative path, or update the corresponding reference in `index.html` if the filename changes.

### Keep academic information accurate

Before publishing changes, verify that project summaries, experience dates, publication status, certifications, and links match the latest CV and original records. Label ongoing, exploratory, and under-review work accurately.

## Accessibility

Accessibility is treated as an ongoing improvement, not a claim of conformance. The page includes a skip link, named navigation and controls, focus styles, labels for accessibility settings, a keyboard-operable settings panel, and a reduced-motion option. These features should be tested in the browser rather than assumed to guarantee accessibility.

Recommended checks:

- Navigate the full site with the keyboard alone.
- Confirm the accessibility panel opens and closes correctly, including with `Escape`, and that focus returns sensibly.
- Check headings, landmark structure, control names, dialog behavior, and image alternatives with a screen reader.
- Test contrast in both themes and with high contrast enabled.
- Zoom to 200% and check for clipping, overlap, and horizontal page scrolling.
- Try large text, line spacing, link underlining, and combinations of preferences.
- Run Lighthouse or axe and manually review every reported issue.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for the fuller checklist.

## Motion and reduced-motion support

Motion is decorative and should never be necessary to find or understand content.

- The hero and featured research card use a short entrance animation.
- Decorative background glows move slowly.
- Research cards provide subtle hover and focus feedback.
- Lower sections can reveal as they enter the viewport.
- Research-detail dialogs use a brief entrance transition.
- The browser's `prefers-reduced-motion: reduce` preference and the Accessibility panel's **Reduce motion** setting suppress optional movement and keep scroll-reveal content visible.
- If JavaScript or `IntersectionObserver` is unavailable, scroll-reveal styles should not hide content.

When adding new animation, include reduced-motion behavior and test both the system preference and the in-page setting.

## Deployment

The repository is named for a GitHub Pages user site. To publish updates:

1. Review and merge the desired changes into `main`.
2. Check the repository's **Settings → Pages** configuration to confirm the intended publishing source.
3. Wait for the GitHub Pages deployment workflow/build to finish, if one is configured.
4. Open [https://vivekanupindi.github.io/](https://vivekanupindi.github.io/) and verify the deployed page, images, CV link, navigation, theme toggle, accessibility panel, and dialogs.
5. If changes do not appear, check the Pages deployment status and browser cache before making additional code changes.

## Testing checklist

Before merging a meaningful change, verify:

- [ ] All navigation and contact links lead to the expected destination.
- [ ] The CV, headshot, and favicon load correctly.
- [ ] The page works at desktop, tablet, and mobile widths.
- [ ] Dark and light theme switching works.
- [ ] The research rail and project-detail dialogs work with a pointer and keyboard.
- [ ] Each accessibility setting works individually and in combination.
- [ ] Settings persist after reload and reset cleanly.
- [ ] System-level and in-page reduced-motion settings keep all content available.
- [ ] Keyboard focus is visible and the accessibility panel can be closed.
- [ ] Automated accessibility checks and manual review have been performed.
- [ ] Publication and experience information has been fact-checked.

## Limitations and scope

- This is a static portfolio; it currently has no server-side application or database.
- Accessibility controls let visitors personalize presentation but do not replace assistive technology or constitute a formal WCAG audit.
- Automated checks alone cannot establish conformance. Do not describe the site as WCAG-compliant until suitable automated and manual testing has been completed.
- The project descriptions are informational. Healthcare-related project concepts should not be interpreted as clinically validated tools.

---

Built with HTML, CSS, and JavaScript.
