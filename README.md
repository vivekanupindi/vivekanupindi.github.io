# Vivek Anupindi — Research Portfolio

This repository contains the personal research portfolio for Vivek Anupindi, published as a static website via GitHub Pages.

The site highlights research interests, projects, publications, experience, academic background, and contact information in a responsive, modern portfolio layout.

Live site: https://vivekanupindi.github.io/

## Overview

This project is a static portfolio website that includes:
- a research-focused landing page
- featured projects and publication highlights
- academic and professional experience sections
- contact and social links
- responsive behavior across desktop, tablet, and mobile screens
- light and dark theme support
- accessibility preferences and reduced-motion options
- no backend or dependency installation required

## Features

- Research portfolio and project library
- Featured research highlights and publications
- Experience timeline and academic background
- Contact and profile links
- Responsive layout for multiple screen sizes
- Theme switching for light and dark modes
- Accessibility support, including contrast and motion preferences
- Interactive research console and project detail dialogs
- Separate Books & Films page for media and reading notes

## Repository Structure

```text
.
├── index.html                  # Main portfolio page
├── blog.html                   # Secondary page for Books & Films content
├── styles.css                  # Main styling, layout, responsiveness, and theme behavior
├── main.js                     # Interactions, dialogs, theme toggling, and accessibility settings
├── README.md                   # Project overview and maintenance guide
├── ACCESSIBILITY.md            # Accessibility settings and manual review checklist
├── assets/
│   ├── headshot.jpeg           # Profile image
│   ├── Vivek_Anupindi_CV.pdf   # Curriculum vitae
│   └── favicon.svg             # Browser tab icon
├── .github/                    # Optional repository workflows or configuration
└── .gitignore                  # Git ignore rules (if present)
```

## Local Development

This is a static site, so no package installation or build process is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/vivekanupindi/vivekanupindi.github.io.git
   cd vivekanupindi.github.io
   ```

2. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

3. Open the page in a browser:

   ```text
   http://localhost:8000
   ```

A local server is preferred over opening `index.html` directly, because it more closely matches the deployed site behavior.

## How to Update the Portfolio

### Update content
Edit `index.html` to revise:
- research interests
- featured projects
- publications
- experience details
- education and background
- contact links

Keep section IDs and navigation anchors consistent.

### Update styling
Edit `styles.css` to adjust:
- layout and spacing
- colors and typography
- theme behavior
- mobile responsiveness
- motion and accessibility styling

### Update interactions
Edit `main.js` to change:
- theme switching
- mobile navigation
- dialogs
- research card behavior
- accessibility settings
- scroll-reveal behavior

### Update assets
Replace files in `assets/` as needed:
- headshot
- CV
- favicon

If the filename changes, update the corresponding reference in `index.html`.

### Keep information accurate
Before publishing changes, verify that:
- project summaries are current
- dates and experience details are correct
- publication status is up to date
- contact links work
- academic content matches the latest CV and records

## Deployment

This site is hosted with GitHub Pages.

To publish or verify a deployment:
1. Merge the changes into the `main` branch.
2. Confirm the repository's Pages settings are configured correctly.
3. Check the latest deployment in the repository Actions tab.
4. Verify the homepage and supporting pages after deployment.

## Accessibility

Accessibility is treated as an ongoing improvement rather than a final claim of conformance.

The site includes:
- keyboard-friendly navigation
- visible focus states
- reduced-motion support
- theme and readability preferences
- contrast-enhancing controls
- semantic structure and labels

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for more detail and the manual review checklist.

## Testing Checklist

Before merging substantial changes, confirm that:
- all links resolve correctly
- the CV and profile image load properly
- the layout works on desktop, tablet, and mobile widths
- light and dark themes render correctly
- dialogs and interactive elements work with both mouse and keyboard
- accessibility settings behave as expected
- motion preferences reduce unnecessary animation
- published content reflects current academic and professional information

## Notes

This is a personal portfolio and research site. It is intentionally lightweight, static, and easy to maintain using GitHub Pages.

The project is designed for clarity, portability, and straightforward hosting without a backend or framework.
