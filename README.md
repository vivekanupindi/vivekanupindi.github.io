# Vivek Anupindi — Research Portfolio

A static, GitHub Pages portfolio for Vivek Anupindi, featuring research, projects, publications, professional experience, and academic background.

**Live site:** [vivekanupindi.github.io](https://vivekanupindi.github.io/)

## Contents

- [Highlights](#highlights)
- [Technology](#technology)
- [Repository structure](#repository-structure)
- [Run locally](#run-locally)
- [Maintain the site](#maintain-the-site)
- [Accessibility](#accessibility)
- [Deploy](#deploy)

## Highlights

- Research portfolio covering clinical NLP, healthcare machine learning, time-series modeling, and data systems
- Project, publication, experience, education, and contact sections
- A separate **Books & Films** page at [blog.html](blog.html)
- Interactive research console with a fixed set of navigation and information commands; it does not run shell commands
- Project detail dialogs, mobile navigation, and light/dark themes
- Optional accessibility preferences for contrast, text size, font styling, motion, focus, links, and line spacing

Publication and project statuses are presented as listed on the site. They should be checked against current records before being reused elsewhere.

## Technology

The site uses semantic HTML, CSS, and vanilla JavaScript. It has no application backend, package manager, or build step. Google Fonts supplies the preferred typefaces when available; system fonts remain the fallback.

## Repository structure

```text
.
├── index.html                 # Main portfolio and research console
├── blog.html                  # Books & Films page
├── styles.css                 # Layout, themes, responsive styles, and accessibility preferences
├── main.js                    # Navigation, dialogs, preferences, and page interactions
├── ACCESSIBILITY.md           # Accessibility features and manual review guidance
├── README.md
└── assets/
    ├── headshot.jpeg
    ├── Vivek_Anupindi_CV.pdf
    └── favicon.svg
```

## Run locally

No dependencies are required. From the repository directory, start a local server:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). A local server exercises the site more like its GitHub Pages deployment than opening the HTML file directly.

## Maintain the site

- **Portfolio content:** edit `index.html`. Keep section IDs aligned with the navigation links.
- **Books & Films content:** edit `blog.html`.
- **Layout and visual styling:** edit `styles.css`.
- **Interactions:** edit `main.js`. Keep controls usable by keyboard and respect reduced-motion preferences.
- **Images, CV, and icon:** update the matching files in `assets/`; update page references if filenames change.

Before publishing content changes, verify project descriptions, dates, publication status, contact details, and links against current records.

## Accessibility

The site provides keyboard-accessible controls, visible focus styling, reduced-motion support, and optional display and reading preferences. These features do not establish conformance with an accessibility standard. See [ACCESSIBILITY.md](ACCESSIBILITY.md) for implementation notes and a manual review checklist.

When changing the interface, check keyboard navigation, both themes, narrow viewports, dialogs and menus, and the accessibility preferences. Automated checks can help identify issues but should be paired with manual review.

## Deploy

The repository is published with GitHub Pages at [vivekanupindi.github.io](https://vivekanupindi.github.io/). Merge changes into `main`, confirm the Pages deployment has completed in the repository’s **Actions** tab, and review the live pages and key interactions after deployment.
