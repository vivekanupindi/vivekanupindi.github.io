# Vivek Anupindi — Research Portfolio

This repository hosts the professional research portfolio of Vivek Anupindi, presented as a static website and published through GitHub Pages. The site is designed to communicate academic interests, research activity, professional experience, and selected projects in a clear and accessible digital format.

Live site: https://vivekanupindi.github.io/

## Overview

The portfolio functions as a lightweight, static academic web presence for showcasing:
- research interests and ongoing work
- project highlights and technical contributions
- publications and scholarly outputs
- educational and professional background
- contact information and professional links
- a responsive layout suitable for desktop, tablet, and mobile viewing

The site is intentionally simple in architecture: it requires no backend, database, or package manager and is optimized for straightforward hosting and maintenance.

## Key Features

- Research-driven portfolio structure
- Project and publication highlights
- Experience timeline and academic background
- Contact and professional links
- Responsive design for multiple screen sizes
- Light and dark mode support
- Accessibility-oriented interface options and reduced-motion settings
- Interactive research console and project detail dialogs
- Separate Books & Films section for curated reading and media notes

## Repository Structure

```text
.
├── index.html                  # Main portfolio page and primary content
├── blog.html                   # Secondary page for Books & Films content
├── styles.css                  # Main styling, responsive layout, theming, and accessibility rules
├── main.js                     # Interactivity, dialogs, theme switching, and UI behavior
├── README.md                   # Project overview and repository usage guidance
├── ACCESSIBILITY.md            # Accessibility settings and manual verification checklist
├── assets/
│   ├── headshot.jpeg           # Profile photo for the portfolio
│   ├── Vivek_Anupindi_CV.pdf   # Curriculum vitae
│   └── favicon.svg             # Browser tab icon
├── .github/                    # Optional repository configuration and workflow files
├── .gitignore                  # Git ignore rules
└── LICENSE                     # License file, if applicable
```

## Local Development

This project is a static website and does not require a build pipeline or dependency installation.

1. Clone the repository:

   ```bash
   git clone https://github.com/vivekanupindi/vivekanupindi.github.io.git
   cd vivekanupindi.github.io
   ```

2. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

3. Open the portfolio in a browser:

   ```text
   http://localhost:8000
   ```

Using a local web server is recommended because it more closely matches the deployment behavior of the published GitHub Pages site.

## Maintaining the Portfolio

### Content updates
Edit `index.html` to revise sections including:
- research interests
- featured projects
- publications
- experience details
- education and background
- professional links

Maintain consistent heading structure and section IDs to preserve navigation integrity.

### Design updates
Edit `styles.css` to adjust:
- layout and spacing
- typography and hierarchy
- color palette and theme behavior
- responsive design rules
- motion and accessibility styling

### Interaction updates
Edit `main.js` to revise:
- theme switching
- mobile navigation behavior
- project dialogs
- accessibility controls
- scroll-reveal effects and motion preferences

### Asset updates
Replace or update files in `assets/` as needed:
- profile image
- CV
- favicon

If an asset filename changes, ensure the corresponding reference in `index.html` is updated.

### Accuracy and review
Before publishing updates, confirm that:
- project descriptions are accurate and current
- professional and academic dates are correct
- publication status is up to date
- links and contact details are valid
- the content remains consistent with the latest CV or institutional records

## Deployment

This portfolio is deployed through GitHub Pages.

To publish or validate a deployment:
1. Merge changes into the `main` branch.
2. Confirm the repository Pages settings are configured correctly.
3. Review deployment status in the repository Actions tab.
4. Verify the live site after publication.

## Accessibility

Accessibility is treated as an ongoing design consideration rather than a final claim of conformance.

The site includes support for:
- keyboard navigation
- visible focus indicators
- reduced-motion settings
- theme and readability controls
- contrast enhancement options
- semantic structure and descriptive labeling

For implementation details and manual testing guidance, see [ACCESSIBILITY.md](ACCESSIBILITY.md).

## Testing Checklist

Before merging substantive changes, verify that:
- all navigation and contact links function correctly
- the profile image and CV load successfully
- the site renders correctly across desktop, tablet, and mobile dimensions
- light and dark themes display appropriately
- interactive elements work with both pointer and keyboard input
- accessibility controls behave as expected
- motion preferences minimize unnecessary animation
- content remains aligned with current academic and professional records

## Notes

This repository hosts a personal research portfolio and is intentionally designed to be lightweight, maintainable, and easy to deploy through GitHub Pages. The project emphasizes clarity, accessibility, and straightforward static hosting without a backend or complex application architecture.
