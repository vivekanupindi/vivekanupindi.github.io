(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Theme preference is kept for the current browser session without requiring a backend.
  const savedTheme = (() => { try { return sessionStorage.getItem('vivek-theme'); } catch (_) { return null; } })();
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const updateThemeButton = () => {
    const light = root.dataset.theme === 'light';
    if (themeButton) {
      themeButton.textContent = light ? '☾' : '☼';
      themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      themeButton.title = light ? 'Switch to dark theme' : 'Switch to light theme';
    }
  };
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { sessionStorage.setItem('vivek-theme', root.dataset.theme); } catch (_) {}
    updateThemeButton();
  });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => {
    const rail = document.getElementById(button.dataset.scroll);
    if (!rail) return;
    const direction = button.dataset.direction === 'right' ? 1 : -1;
    rail.scrollBy({ left: direction * Math.max(260, rail.clientWidth * .8), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }));

  const details = {
    clinical: { kicker: 'CLINICAL NLP · ICD-10', title: 'Automated ICD-10 Coding from Clinical Text', intro: 'This research direction studies how clinical narratives can be mapped to structured diagnostic codes.', points: ['Worked with the CodiEsp clinical text dataset for automated ICD-10 diagnostic-code classification.', 'Investigated TF-IDF representations and logistic regression for multi-label clinical text classification.', 'Examined document-label alignment, missing data, and imbalanced diagnostic codes.', 'A related comparative study is listed as under review in the current CV; the published logistic-regression paper is linked in the Publications section.'] },
    glucose: { kicker: 'HEALTHCARE AI · TIME SERIES', title: 'AI-Assisted Glucose Prediction', intro: 'An independent research direction exploring short-term glucose forecasting and personalized decision support.', points: ['Investigating temporal machine-learning approaches, including LSTM and transformer-based architectures.', 'Potential contextual features include insulin timing, meals, and physical activity.', 'The aim is to study predictive intelligence that could complement glucose monitoring; this is a research project, not a clinical device or medical recommendation.'] },
    data: { kicker: 'DATA ENGINEERING · CLOUD ANALYTICS', title: 'Data Engineering Patterns for Cloud-Native Analytics', intro: 'This work examines how data pipelines can support reliable analytics and machine-learning workloads.', points: ['Investigates cloud-native ETL architecture using Snowflake, Apache Airflow, and dbt.', 'Focus areas include pipeline optimization, warehouse scaling, metadata-driven orchestration, and data quality.', 'A manuscript with this title is listed as under review in the current CV.'] },
    burnout: { kicker: 'HEALTHCARE ANALYTICS', title: 'Physician Burnout Predictive Analysis', intro: 'A master’s research project examining burnout-related indicators in healthcare settings.', points: ['Conducted exploratory and statistical analysis using workload, behavioral, and emotional indicators.', 'Investigated relationships among burnout-related variables and specialty-specific trends.'] },
    monitoring: { kicker: 'HEALTH DATA SYSTEMS', title: 'Smart Health Monitoring System', intro: 'An independent healthcare analytics project focused on basic monitoring and reporting.', points: ['Built a Python application to track heart rate, blood pressure, oxygen saturation, temperature, and blood glucose measurements.', 'Implemented rule-based anomaly flagging and generated basic health reports to support continuous monitoring and early alerts.'] }
  };
  const dialog = document.getElementById('detail-dialog');
  const dialogKicker = document.getElementById('dialog-kicker');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogBody = document.getElementById('dialog-body');
  document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
    const item = details[button.dataset.detail];
    if (!item || !dialog || !dialogBody) return;
    dialogKicker.textContent = item.kicker;
    dialogTitle.textContent = item.title;
    dialogBody.replaceChildren();
    const intro = document.createElement('p'); intro.textContent = item.intro; dialogBody.append(intro);
    const heading = document.createElement('h3'); heading.textContent = 'Research overview'; dialogBody.append(heading);
    const list = document.createElement('ul');
    item.points.forEach(point => { const li = document.createElement('li'); li.textContent = point; list.append(li); });
    dialogBody.append(list);
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  }));
  document.querySelector('.dialog-close')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
