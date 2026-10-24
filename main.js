(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.querySelector(".theme-toggle");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    const themeStorageKey = "vivek-portfolio-theme";
    const accessibilityStorageKey = "vivek-portfolio-accessibility";

    function readStoredJson(key) {
      try {
        const value = localStorage.getItem(key);
        const parsed = value ? JSON.parse(value) : {};
        return parsed && typeof parsed === "object" && !Array.isArray(parsed)
          ? parsed
          : {};
      } catch {
        return {};
      }
    }

    function writeStoredJson(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // Settings continue to work for the current page when storage is blocked.
      }
    }

    // --------------------------------------
    // Theme switching: light and dark
    // --------------------------------------

    function savedTheme() {
      try {
        return localStorage.getItem(themeStorageKey);
      } catch {
        return null;
      }
    }

    function updateThemeButton() {
      if (!themeToggle) return;
      const isLight = body.classList.contains("light-theme");
      themeToggle.textContent = isLight ? "☾" : "☼";
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      themeToggle.setAttribute("title", isLight ? "Switch to dark theme" : "Switch to light theme");
      themeToggle.setAttribute("aria-pressed", String(isLight));
    }

    function applyTheme(theme, persist = true) {
      const normalizedTheme = theme === "light" ? "light" : "dark";
      body.classList.toggle("light-theme", normalizedTheme === "light");
      document.documentElement.style.colorScheme = normalizedTheme;
      updateThemeButton();

      if (persist) {
        try {
          localStorage.setItem(themeStorageKey, normalizedTheme);
        } catch {
          // Theme switching still works without browser storage.
        }
      }
    }

    const themePreference = savedTheme();
    const prefersLight = Boolean(
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    );
    applyTheme(
      themePreference === "light" || themePreference === "dark"
        ? themePreference
        : prefersLight ? "light" : "dark",
      false
    );

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        applyTheme(body.classList.contains("light-theme") ? "dark" : "light");
      });
    }

    // --------------------------------------
    // Accessibility tools and saved settings
    // --------------------------------------

    const accessibilityToggle = document.querySelector(".accessibility-toggle");
    const accessibilityPanel = document.getElementById("accessibility-panel");
    const accessibilityClose = document.querySelector(".accessibility-close");
    const accessibilityReset = document.querySelector(".accessibility-reset");

    const accessibilitySettings = {
      highContrast: "a11y-high-contrast",
      largeText: "a11y-large-text",
      dyslexiaFont: "a11y-dyslexia-font",
      reduceMotion: "a11y-reduce-motion",
      enhancedFocus: "a11y-enhanced-focus",
      underlineLinks: "a11y-underline-links",
      increasedSpacing: "a11y-increased-spacing",
      highlightHeadings: "a11y-highlight-headings"
    };

    function setAccessibilitySetting(key, enabled) {
      const className = accessibilitySettings[key];
      if (!className) return;
      body.classList.toggle(className, Boolean(enabled));

      const checkbox = document.querySelector('[data-a11y-setting="' + key + '"]');
      if (checkbox) checkbox.checked = Boolean(enabled);
    }

    function currentAccessibilitySettings() {
      const selected = {};
      Object.keys(accessibilitySettings).forEach((key) => {
        const checkbox = document.querySelector('[data-a11y-setting="' + key + '"]');
        selected[key] = Boolean(checkbox && checkbox.checked);
      });
      return selected;
    }

    const storedAccessibilitySettings = readStoredJson(accessibilityStorageKey);
    Object.keys(accessibilitySettings).forEach((key) => {
      setAccessibilitySetting(key, storedAccessibilitySettings[key] === true);
    });

    // --------------------------------------
    // Motion: one restartable scroll-reveal controller
    // --------------------------------------

    const reducedMotionQuery = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

    const motionTargets = Array.from(document.querySelectorAll([
      ".section-heading",
      ".culture-section-heading",
      ".culture-hero-content",
      ".culture-card",
      ".culture-note-strip",
      ".culture-notes-panel",
      ".feature-strip",
      ".research-card",
      ".publication-item",
      ".timeline-item",
      ".education-item",
      ".skills-grid article",
      ".highlight-card",
      ".contact-content"
    ].join(", ")));

    let revealObserver = null;

    function shouldReduceMotion() {
      return body.classList.contains("a11y-reduce-motion") ||
        Boolean(reducedMotionQuery && reducedMotionQuery.matches);
    }

    function disconnectRevealObserver() {
      if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
      }
    }

    function prepareMotionTargets() {
      motionTargets.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", String((index % 4) * 70) + "ms");
      });
    }

    function revealAllMotionContent() {
      motionTargets.forEach((element) => element.classList.add("is-visible"));
    }

    function startMotionReveals(replay = false) {
      disconnectRevealObserver();
      if (!motionTargets.length) {
        body.classList.remove("motion-enabled");
        return;
      }

      prepareMotionTargets();

      if (shouldReduceMotion() || !("IntersectionObserver" in window)) {
        body.classList.remove("motion-enabled");
        revealAllMotionContent();
        return;
      }

      // Only hide reveal targets once an observer is available to reveal them.
      // Replaying when motion is switched back on makes the behavior noticeable.
      if (replay) {
        motionTargets.forEach((element) => element.classList.remove("is-visible"));
      }

      body.classList.add("motion-enabled");
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.08
      });

      motionTargets.forEach((element) => revealObserver.observe(element));
    }

    function syncMotionPreference() {
      if (shouldReduceMotion()) {
        disconnectRevealObserver();
        body.classList.remove("motion-enabled");
        revealAllMotionContent();
      } else if (!body.classList.contains("motion-enabled")) {
        startMotionReveals(true);
      }
    }

    startMotionReveals();

    // --------------------------------------
    // Accessibility panel open/close behavior
    // --------------------------------------

    function openAccessibilityPanel() {
      if (!accessibilityPanel || !accessibilityToggle) return;
      accessibilityPanel.hidden = false;
      accessibilityToggle.setAttribute("aria-expanded", "true");
      accessibilityToggle.setAttribute("aria-label", "Close accessibility tools");
      if (accessibilityClose) accessibilityClose.focus();
    }

    function closeAccessibilityPanel(returnFocus = true) {
      if (!accessibilityPanel || !accessibilityToggle) return;
      accessibilityPanel.hidden = true;
      accessibilityToggle.setAttribute("aria-expanded", "false");
      accessibilityToggle.setAttribute("aria-label", "Open accessibility tools");
      if (returnFocus) accessibilityToggle.focus();
    }

    if (accessibilityToggle && accessibilityPanel) {
      accessibilityToggle.addEventListener("click", () => {
        if (accessibilityPanel.hidden) {
          openAccessibilityPanel();
        } else {
          closeAccessibilityPanel(false);
        }
      });
    }

    if (accessibilityClose) {
      accessibilityClose.addEventListener("click", () => closeAccessibilityPanel());
    }

    if (accessibilityReset) {
      accessibilityReset.addEventListener("click", () => {
        Object.keys(accessibilitySettings).forEach((key) => setAccessibilitySetting(key, false));
        try {
          localStorage.removeItem(accessibilityStorageKey);
        } catch {
          // Reset still applies during this session.
        }
        syncMotionPreference();
      });
    }

    Object.keys(accessibilitySettings).forEach((key) => {
      const checkbox = document.querySelector('[data-a11y-setting="' + key + '"]');
      if (!checkbox) return;
      checkbox.addEventListener("change", () => {
        setAccessibilitySetting(key, checkbox.checked);
        writeStoredJson(accessibilityStorageKey, currentAccessibilitySettings());
        if (key === "reduceMotion") syncMotionPreference();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && accessibilityPanel && !accessibilityPanel.hidden) {
        closeAccessibilityPanel();
      }
    });

    if (reducedMotionQuery && typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", syncMotionPreference);
    }

    // --------------------------------------
    // Mobile navigation
    // --------------------------------------

    function closeMenu() {
      if (!menuToggle || !nav) return;
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
      });
    }

    // --------------------------------------
    // Research card horizontal scrolling
    // --------------------------------------

    document.querySelectorAll("[data-scroll]").forEach((button) => {
      button.addEventListener("click", () => {
        const rail = document.getElementById(button.dataset.scroll);
        if (!rail) return;

        const direction = button.dataset.direction === "right" ? 1 : -1;
        const reduced = Boolean(reducedMotionQuery && reducedMotionQuery.matches) ||
          body.classList.contains("a11y-reduce-motion");

        rail.scrollBy({
          left: direction * Math.min(360, rail.clientWidth * 0.8),
          behavior: reduced ? "auto" : "smooth"
        });
      });
    });

    // --------------------------------------
    // Interactive research console
    // --------------------------------------

    const consoleForm = document.getElementById("research-console-form");
    const consoleInput = document.getElementById("research-console-input");
    const consoleOutput = document.getElementById("research-console-output");

    if (consoleForm && consoleInput && consoleOutput) {
      const commandHelp = [
        "help                         List every available command",
        "whoami                       Show my research profile",
        "cat current_focus.md         Show my current research themes",
        "ls active_projects/          List featured research directions",
        "open research                Jump to Topics I'm exploring",
        "open publications            Jump to publications",
        "open experience              Jump to experience",
        "open about                   Jump to the about section",
        "open contact                 Jump to contact information",
        "open fun-corner              Open the Fun Corner (books and films)",
        "clear                        Clear the console output"
      ];

      function writeConsoleLine(text, kind = "output") {
        const line = document.createElement("p");
        line.className = "terminal-console-line terminal-console-" + kind;
        line.textContent = text;
        consoleOutput.appendChild(line);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
      }

      function clearConsole() {
        consoleOutput.textContent = "";
      }

      function scrollToPortfolioSection(id, label) {
        const target = document.getElementById(id);
        if (!target) {
          writeConsoleLine("Section not found: " + label, "error");
          return;
        }

        writeConsoleLine("Opening " + label + " ...", "success");
        const reduceMotion = shouldReduceMotion();
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
      }

      function runConsoleCommand(rawCommand) {
        const command = rawCommand.trim().toLowerCase().replace(/\s+/g, " ");
        if (!command) return;

        if (command === "clear") {
          clearConsole();
          writeConsoleLine("Console cleared. Type 'help' to see available commands.", "success");
          return;
        }

        writeConsoleLine("$ " + rawCommand.trim(), "command");

        if (command === "help" || command === "?") {
          writeConsoleLine("Available commands:", "heading");
          commandHelp.forEach((item) => writeConsoleLine(item, "help"));
          writeConsoleLine("This is a portfolio console: commands are predefined and do not execute system commands.", "muted");
          return;
        }

        if (command === "whoami" || command === "whoami --research") {
          writeConsoleLine("Vivek Anupindi — Computer Science Ph.D. student at UMBC.", "success");
          writeConsoleLine("Focus: clinical NLP, healthcare AI, predictive modeling, and reliable data systems.");
          return;
        }

        if (command === "cat current_focus.md" || command === "focus") {
          writeConsoleLine("# Clinical NLP · Healthcare AI · Reliable data systems", "success");
          writeConsoleLine("Current directions include clinical text classification, exploratory time-series prediction, and dependable analytics pipelines.");
          return;
        }

        if (command === "ls" || command === "ls active_projects" || command === "ls active_projects/") {
          writeConsoleLine("clinical-nlp/       Clinical text and multi-label ICD-10 coding", "help");
          writeConsoleLine("health-forecasting/ Exploratory glucose time-series prediction", "help");
          writeConsoleLine("data-systems/       Pipelines, analytics, and dependable data", "help");
          return;
        }

        const commandsToSections = {
          "research": ["research", "research topics"],
          "open research": ["research", "research topics"],
          "publications": ["publications", "publications"],
          "open publications": ["publications", "publications"],
          "experience": ["experience", "experience"],
          "open experience": ["experience", "experience"],
          "about": ["about", "about"],
          "open about": ["about", "about"],
          "contact": ["contact", "contact"],
          "open contact": ["contact", "contact"]
        };

        if (commandsToSections[command]) {
          const [id, label] = commandsToSections[command];
          scrollToPortfolioSection(id, label);
          return;
        }

        if (command === "open fun-corner" ||
            command === "open blog" ||
            command === "open off-the-clock" ||
            command === "open books-and-films" ||
            command === "fun-corner") {
          writeConsoleLine("Opening Fun Corner — books, films, and personal notes ...", "success");
          window.location.href = "blog.html";
          return;
        }

        writeConsoleLine("Command not found: " + rawCommand.trim(), "error");
        writeConsoleLine("Type 'help' to list supported commands.", "muted");
      }

      consoleForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = consoleInput.value;
        consoleInput.value = "";
        runConsoleCommand(value);
      });
    }

    // --------------------------------------
    // Research detail dialog
    // --------------------------------------

    const details = {
      clinical: {
        kicker: "CLINICAL NLP · ICD-10",
        title: "Automated ICD-10 Coding",
        description: "Exploring machine-learning approaches for assigning diagnostic codes to Spanish clinical narratives. The research direction includes text preprocessing, multi-label classification, label alignment, and comparisons between traditional baselines and multilingual transformer approaches."
      },
      glucose: {
        kicker: "HEALTHCARE AI · TIME SERIES",
        title: "Glucose Prediction",
        description: "An exploratory project investigating temporal models for short-term glucose forecasting using contextual signals. The goal is to study how predictive modeling can support health-related decision-making; it is not a clinical product."
      },
      data: {
        kicker: "DATA ENGINEERING · SYSTEMS",
        title: "Cloud-Native Analytics",
        description: "A focus on ETL architecture, orchestration, data validation, and cloud-native pipelines that prepare dependable data for analytics and machine-learning workloads."
      },
      burnout: {
        kicker: "HEALTHCARE ANALYTICS",
        title: "Physician Burnout Analysis",
        description: "Exploratory and statistical analysis of workload, behavioral, emotional, and specialty trends, with an emphasis on transparent analysis and responsible communication of patterns."
      },
      monitoring: {
        kicker: "HEALTH DATA SYSTEMS",
        title: "Smart Health Monitoring",
        description: "A Python project concept for tracking health measurements, applying rule-based anomaly flags, and generating reports from structured observations."
      }
    };

    const dialog = document.getElementById("detail-dialog");
    const dialogKicker = document.getElementById("dialog-kicker");
    const dialogTitle = document.getElementById("dialog-title");
    const dialogBody = document.getElementById("dialog-body");
    const dialogClose = document.querySelector(".dialog-close");
    let dialogOpener = null;

    document.querySelectorAll("[data-detail]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = details[button.dataset.detail];
        if (!item || !dialog || !dialogKicker || !dialogTitle || !dialogBody) return;

        dialogOpener = button;
        dialogKicker.textContent = item.kicker;
        dialogTitle.textContent = item.title;
        dialogBody.textContent = "";
        const paragraph = document.createElement("p");
        paragraph.textContent = item.description;
        dialogBody.appendChild(paragraph);

        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
          if (dialogClose) dialogClose.focus();
        }
      });
    });

    function closeDialog() {
      if (!dialog) return;
      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
        if (dialogOpener) dialogOpener.focus();
      }
    }

    if (dialogClose) dialogClose.addEventListener("click", closeDialog);

    if (dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
      });
      dialog.addEventListener("close", () => {
        if (dialogOpener) dialogOpener.focus();
      });
    }

    // --------------------------------------
    // Footer year
    // --------------------------------------

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
