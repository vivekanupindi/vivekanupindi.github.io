
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // Find the theme toggle, mobile menu button, and navigation.
  const themeToggle = document.querySelector(
    "[data-theme-toggle], #theme-toggle, .theme-toggle"
  );

  const menuToggle = document.querySelector(
    "[data-menu-toggle], #menu-toggle, .menu-toggle"
  );

  const nav = document.querySelector(
    "[data-nav], #site-nav, .nav-links"
  );

  // ----------------------------------------
  // THEME: DARK / LIGHT MODE
  // ----------------------------------------

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    root.classList.toggle("light-mode", theme === "light");
    root.classList.toggle("dark-mode", theme === "dark");

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      );

      themeToggle.setAttribute(
        "aria-pressed",
        String(theme === "light")
      );
    }

    localStorage.setItem("portfolio-theme", theme);
  }

  setTheme(
    savedTheme || (prefersLight ? "light" : "dark")
  );

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme");

      setTheme(
        currentTheme === "light" ? "dark" : "light"
      );
    });
  }

  // ----------------------------------------
  // MOBILE NAVIGATION
  // ----------------------------------------

  if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Close the mobile menu when Escape is pressed.
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      nav &&
      menuToggle
    ) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ----------------------------------------
  // RESEARCH DETAIL MODALS
  // ----------------------------------------

  document.querySelectorAll("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal-open");
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        const closeButton = modal.querySelector(
          "[data-modal-close]"
        );

        if (closeButton) {
          closeButton.focus();
        }
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-modal-close]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modal = trigger.closest("[data-modal]");

      if (modal) {
        closeModal(modal);
      }
    });
  });

  // Close a modal when its backdrop is clicked.
  document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close open modals with Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll("[data-modal].is-open").forEach(
        (modal) => {
          modal.classList.remove("is-open");
          modal.setAttribute("aria-hidden", "true");
        }
      );

      document.body.classList.remove("modal-open");
    }
  });

  // ----------------------------------------
  // AUTOMATIC COPYRIGHT YEAR
  // ----------------------------------------

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
