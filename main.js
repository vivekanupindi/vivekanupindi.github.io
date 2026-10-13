
(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.querySelector(".theme-toggle");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    const themeKey = "vivek-portfolio-theme";

    // --------------------------------------
    // Theme switching: light and dark
    // --------------------------------------

    function getSavedTheme() {
      try {
        return localStorage.getItem(themeKey);
      } catch {
        return null;
      }
    }

    function saveTheme(theme) {
      try {
        localStorage.setItem(themeKey, theme);
      } catch {
        // The theme still works if browser storage is unavailable.
      }
    }

    function updateThemeButton() {
      if (!themeToggle) return;

      const isLight = body.classList.contains("light-theme");

      themeToggle.textContent = isLight ? "☾" : "☼";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
      themeToggle.setAttribute(
        "title",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
      themeToggle.setAttribute("aria-pressed", String(isLight));
    }

    function applyTheme(theme, persist = true) {
      const normalizedTheme = theme === "light" ? "light" : "dark";

      body.classList.toggle(
        "light-theme",
        normalizedTheme === "light"
      );

      document.documentElement.style.colorScheme = normalizedTheme;

      updateThemeButton();

      if (persist) {
        saveTheme(normalizedTheme);
      }
    }

    const savedTheme = getSavedTheme();
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    applyTheme(
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersLight
          ? "light"
          : "dark",
      false
    );

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isLight = body.classList.contains("light-theme");
        applyTheme(isLight ? "dark" : "light");
      });
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

        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
          closeMenu();
        }
      });
    }

    // --------------------------------------
    // Research card horizontal scrolling
    // --------------------------------------

    document.querySelectorAll("[data-scroll]").forEach((button) => {
      button.addEventListener("click", () => {
        const rail = document.getElementById(button.dataset.scroll);

        if (!rail) return;

        const direction =
          button.dataset.direction === "right" ? 1 : -1;

        rail.scrollBy({
          left: direction * Math.min(360, rail.clientWidth * 0.8),
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth"
        });
      });
    });

    // --------------------------------------
    // Research detail dialog
    // --------------------------------------

    const details = {
      clinical: {
        kicker: "CLINICAL NLP · ICD-10",
        title: "Automated ICD-10 Coding",
        description:
          "Exploring machine-learning approaches for assigning diagnostic codes to Spanish clinical narratives. The research direction includes text preprocessing, multi-label classification, label alignment, and comparisons between traditional baselines and multilingual transformer approaches."
      },

      glucose: {
        kicker: "HEALTHCARE AI · TIME SERIES",
        title: "Glucose Prediction",
        description:
          "An exploratory project investigating temporal models for short-term glucose forecasting using contextual signals. The goal is to study how predictive modeling can support health-related decision-making; it is not a clinical product."
      },

      data: {
        kicker: "DATA ENGINEERING · SYSTEMS",
        title: "Cloud-Native Analytics",
        description:
          "A focus on ETL architecture, orchestration, data validation, and cloud-native pipelines that prepare dependable data for analytics and machine-learning workloads."
      },

      burnout: {
        kicker: "HEALTHCARE ANALYTICS",
        title: "Physician Burnout Analysis",
        description:
          "Exploratory and statistical analysis of workload, behavioral, emotional, and specialty trends, with an emphasis on transparent analysis and responsible communication of patterns."
      },

      monitoring: {
        kicker: "HEALTH DATA SYSTEMS",
        title: "Smart Health Monitoring",
        description:
          "A Python project concept for tracking health measurements, applying rule-based anomaly flags, and generating reports from structured observations."
      }
    };

    const dialog = document.getElementById("detail-dialog");
    const dialogKicker = document.getElementById("dialog-kicker");
    const dialogTitle = document.getElementById("dialog-title");
    const dialogBody = document.getElementById("dialog-body");
    const dialogClose = document.querySelector(".dialog-close");

    document.querySelectorAll("[data-detail]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = details[button.dataset.detail];

        if (!item || !dialog) return;

        dialogKicker.textContent = item.kicker;
        dialogTitle.textContent = item.title;

        // Use textContent so the description is inserted as text.
        dialogBody.textContent = "";
        const paragraph = document.createElement("p");
        paragraph.textContent = item.description;
        dialogBody.appendChild(paragraph);

        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
      });
    });

    function closeDialog() {
      if (!dialog) return;

      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }

    if (dialogClose) {
      dialogClose.addEventListener("click", closeDialog);
    }

    if (dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          closeDialog();
        }
      });
    }

    // --------------------------------------
    // Automatically update the footer year
    // --------------------------------------

    const year = document.getElementById("year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });
})();
