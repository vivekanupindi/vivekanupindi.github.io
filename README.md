# Vivek Anupindi — Research Portfolio

A responsive, static portfolio for **Vivek Anupindi**, presenting research interests, projects, publications, experience, education, and work beyond research.

**Live website:** [https://vivekanupindi.github.io](https://vivekanupindi.github.io)

The site is built with semantic HTML, CSS, and vanilla JavaScript and is published through GitHub Pages. Its visual direction uses a dark charcoal foundation, warm typography, and restrained red accents.

---

## What the site includes

### Main portfolio — `index.html`

- **Animated introduction:** a two-line typewriter headline, “Building intelligent systems for human health.” The full heading remains available to assistive technology.
- **Research topics:** featured areas and project cards covering clinical NLP, healthcare-focused machine learning, predictive modeling, and data systems.
- **Project details:** research cards can open dialogs with additional context.
- **Publications:** a dedicated section for publication and manuscript information.
- **Experience and about:** professional experience, academic background, research interests, and related highlights.
- **Skills:** a grouped technical toolkit.
- **Contact:** email and professional links.
- **Fun Corner entry:** a designed footer card linking to the separate Books & Films page.

### Interactive research console

The homepage includes a terminal-style command prompt. It accepts a fixed set of portfolio commands; **it is not a real shell and does not execute operating-system commands**.

Type `help` to display the available commands:

| Command | Action |
|---|---|
| `help` | List available commands |
| `whoami` | Show the portfolio research profile |
| `cat current_focus.md` | Show current research themes |
| `ls active_projects/` | List featured project directions |
| `open research` | Navigate to research topics |
| `open publications` | Navigate to publications |
| `open experience` | Navigate to experience |
| `open about` | Navigate to the about section |
| `open contact` | Navigate to contact information |
| `open fun-corner` | Open the Fun Corner page |
| `clear` | Clear the console output |

The console input can be used with the keyboard or its Run button. Its output is announced through a live region for assistive technology.

### Fun Corner — `blog.html`

A separate personal page for books, films, reading lists, watchlists, and notes. The homepage links to it as **Fun Corner**; the page itself is titled **Off the Clock** and uses Books & Films navigation.

- Bookshelf and reading-list sections
- Film and rewatch-list sections
- Personal notes and recommendations
- Shared theme and accessibility controls

The page is maintained separately from the main portfolio. Edit `blog.html) to update its content.

---

## Accessibility and visitor preferences

Both pages provide an **Accessibility Tools** panel with visitor-controlled settings:

- High contrast
- Large text
- Dyslexia-friendly font styling
- Reduce motion
- Enhanced keyboard focus indicators
- Underlined links
- Increased line spacing
- Highlighted headings
- **Speak this page aloud**, with pause and stop controls

Settings are saved in the visitor's browser using `localStorage`. If browser storage is unavailable, the preferences should still apply for the current page session.

Page speech uses the browser's built-in Web Speech API. Voice availability and behavior depend on the visitor's browser, device, and installed voices; the site does not send page text to a portfolio backend. Browsers without speech support disable the speech control.

The site also uses a skip link, named navigation and controls, visible focus styles, and keyboard-operable menus and dialogs. These features are an ongoing accessibility effort, **not a claim of WCAG conformance**.

See [`ACCESSIBILITY.md`](ACCESSIBILITY.md) for implementation notes and a manual review checklist.

## Motion and reduced-motion behavior

Motion is decorative and is not required to understand the content. The site uses:

- The hero typewriter effect and entrance treatment
- Subtle ambient background movement
- Research-card hover and focus feedback
- Scroll-triggered section reveals
- Short project-dialog and Fun Corner visual transitions

The site respects both the operating system's `prefers-reduced-motion: reduce` setting and the in-page **Reduce motion** preference. When reduced motion is enabled, decorative animations are suppressed and reveal content remains visible. When adding or changing motion, test both preferences—including enabling Reduce Motion after the page has loaded.

## Technology

| Technology | Role |
|---|---|
| HTML5 | Semantic page structure and content |
| CSS3 | Layout, responsive styling, themes, accessibility preferences, and motion |
| Vanilla JavaScript | Navigation, theme switching, dialogs, research console, accessibility controls, speech, and motion behavior |
| Google Fonts | DM Sans and Manrope when available; system font fallbacks are provided |

There is no application framework, package manager, build step, or backend required for the current site.

---

## Repository structure

```text
.
├── index.html                  # Main portfolio, hero, research console, and accessibility panel
├── blog.html                   # Fun Corner / Off the Clock (Books & Films)
├── styles.css                  # Shared layout, responsive styles, themes, accessibility, and motion
├── main.js                     # Navigation, console, dialogs, preferences, speech, and interactions
├── ACCESSIBILITY.md            # Accessibility feature notes and manual review checklist
├── README.md                   # Project documentation
└── assets/
    ├── headshot.jpeg            # Hero profile image
    ├── Vivek_Anupindi_CV.pdf    # CV linked from the portfolio
    └── favicon.svg              # Browser tab icon
```

## Run locally

No dependencies need to be installed. From the repository directory, start a local web server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

A local server is preferable to opening `index.html` directly because it more closely resembles the GitHub Pages environment and allows relative links between the homepage, blog page, and assets to work normally.

## Where to make changes

| To update… | Edit… |
|---|---|
| Hero text, research, publications, experience, education, skills, contact, or console markup | `index.html` |
| Books, films, reading lists, watchlists, and personal notes | `blog.html` |
| Colors, layout, responsive behavior, themes, accessibility styling, or motion | `styles.css` |
| Console commands, navigation, theme behavior, dialogs, accessibility settings, speech, or other interactions | `main.js` |
| Accessibility documentation and manual checks | `ACCESSIBILITY.md` |
| Headshot, CV, or favicon | Matching file in `assets/` |

When changing navigation or console destinations, keep the HTML section IDs and JavaScript command mappings aligned. When changing a control, preserve its accessible name, keyboard behavior, and visible focus state.

Before publishing academic updates, check project descriptions, dates, publication status, experience, and contact details against the latest source records.

## Deployment

The public site is hosted on GitHub Pages at:

[https://vivekanupindi.github.io](https://vivekanupindi.github.io)

There is currently no custom domain configured.

1. Create a feature branch for changes.
2. Review the change and open a pull request against `main`.
3. After merging, check the repository's **Actions** tab for the GitHub Pages deployment.
4. Verify the homepage and [Fun Corner](https://vivekanupindi.github.io/blog.html) after deployment.

## Pre-merge review checklist

- [ ] Homepage and Fun Corner load at desktop, tablet, and mobile widths.
- [ ] Navigation links and section anchors reach the correct sections.
- [ ] The hero headline remains readable with JavaScript disabled or reduced motion enabled.
- [ ] All research console commands listed by `help` work as described.
- [ ] Research dialogs open and close with pointer and keyboard.
- [ ] Dark and light themes both work.
- [ ] Every accessibility preference works individually and in combination.
- [ ] Speech controls start, pause, resume, and stop where supported; unsupported browsers show an appropriate state.
- [ ] Reduced motion works when enabled before page load and when toggled during a session.
- [ ] CV, headshot, favicon, and other assets load.
- [ ] Links, dates, publication statuses, and project descriptions have been checked.

## Scope and limitations

- This is a static portfolio; it does not have a server-side application or database.
- The research console runs a predefined set of client-side portfolio commands, not shell commands.
- Speech uses browser/device capabilities and may not be available in every environment.
- Accessibility controls improve visitor customization but do not replace assistive technology or a formal accessibility audit.
- Healthcare-related project descriptions communicate research interests and project work; they should not be interpreted as clinically validated tools or medical advice.

---

Built with care for research, clear communication, and the things worth exploring off the clock.
