const config = window.siteConfig;

const setBranding = () => {
  document.title = config.companyName;
  document.getElementById('brand-name').textContent = config.shortName;
  document.getElementById('brand-tag').textContent = config.tagline;
  document.getElementById('footer-brand-name').textContent = config.shortName;

  const phoneLink = document.getElementById('phone-link');
  phoneLink.href = `tel:${config.phoneHref}`;
  phoneLink.textContent = config.phone;

  document.getElementById('service-region').textContent = config.serviceRegion;
  document.getElementById('footer-phone').href = `tel:${config.phoneHref}`;
  document.getElementById('footer-phone').textContent = config.phone;
  document.getElementById('footer-email').href = `mailto:${config.email}`;
  document.getElementById('footer-email').textContent = config.email;
};

const populateHero = () => {
  document.getElementById('hero-kicker').textContent = config.hero.kicker;
  document.getElementById('hero-title').textContent = config.hero.title;
  document.getElementById('hero-text').textContent = config.hero.text;

  const pointsWrap = document.getElementById('hero-points');
  pointsWrap.innerHTML = config.hero.points.map(point => `<li>${point}</li>`).join('');

  document.getElementById('availability-number').textContent = config.hero.availability;
  document.querySelector('.panel-figure span').textContent = config.hero.info;
};

const populateTrustBar = () => {
  const wrap = document.getElementById('trust-metrics');
  wrap.innerHTML = config.trustMetrics
    .map(
      metric => `
        <div class="trust-item">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join('');
};

const populateServices = () => {
  const wrap = document.getElementById('services-grid');
  wrap.innerHTML = config.services
    .map(
      service => `
        <article class="service-card">
          <div class="service-icon">${service.icon}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join('');
};

const populateFeatures = () => {
  const wrap = document.getElementById('feature-list');
  wrap.innerHTML = config.features
    .map(feature => `
      <div class="feature-item">
        <span class="checkmark">✓</span>
        <p>${feature}</p>
      </div>
    `)
    .join('');
};

const populateProcess = () => {
  const wrap = document.getElementById('process-grid');
  wrap.innerHTML = config.process
    .map(
      item => `
        <article class="process-card">
          <span class="process-step">${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
};

const populateIndustries = () => {
  const wrap = document.getElementById('industry-list');
  wrap.innerHTML = config.industries.map(item => `<span>${item}</span>`).join('');
};

const populateTestimonials = () => {
  const wrap = document.getElementById('testimonial-grid');
  wrap.innerHTML = config.testimonials
    .map(
      item => `
        <article class="testimonial-card">
          <p class="quote">“${item.quote}”</p>
          <div class="author-block">
            <strong>${item.author}</strong>
            <span>${item.company}</span>
          </div>
        </article>
      `
    )
    .join('');
};

const applyTheme = (themeName = 'steel') => {
  const themes = {
    steel: {
      accent: '#f59e0b',
      accentAlt: '#fbbf24',
      background: '#0b1117',
      surface: '#101a22',
      panel: '#12202c',
      card: '#152a37',
      text: '#edf3f7',
      muted: '#a7b7c5',
      border: 'rgba(255,255,255,0.08)'
    },
    night: {
      accent: '#60a5fa',
      accentAlt: '#7dd3fc',
      background: '#020817',
      surface: '#0f172a',
      panel: '#111827',
      card: '#172033',
      text: '#e2e8f0',
      muted: '#94a3b8',
      border: 'rgba(148,163,184,0.22)'
    },
    copper: {
      accent: '#f97316',
      accentAlt: '#fdba74',
      background: '#1a120d',
      surface: '#231711',
      panel: '#2a1b13',
      card: '#3b2318',
      text: '#fffbeb',
      muted: '#f5d0a9',
      border: 'rgba(255,255,255,0.08)'
    }
  };

  const selectedTheme = themes[themeName] || themes.steel;
  const root = document.documentElement;

  root.style.setProperty('--accent', selectedTheme.accent);
  root.style.setProperty('--accent-alt', selectedTheme.accentAlt);
  root.style.setProperty('--bg', selectedTheme.background);
  root.style.setProperty('--bg-alt', selectedTheme.surface);
  root.style.setProperty('--panel', selectedTheme.panel);
  root.style.setProperty('--card', selectedTheme.card);
  root.style.setProperty('--text', selectedTheme.text);
  root.style.setProperty('--muted', selectedTheme.muted);
  root.style.setProperty('--border', selectedTheme.border);

  const toggleLabel = document.querySelector('.theme-label');
  toggleLabel.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);
};

const attachThemeToggle = () => {
  const toggle = document.querySelector('.theme-toggle');
  let currentTheme = 'steel';

  toggle.addEventListener('click', () => {
    const nextThemes = ['steel', 'night', 'copper'];
    const nextIndex = (nextThemes.indexOf(currentTheme) + 1) % nextThemes.length;
    currentTheme = nextThemes[nextIndex];
    applyTheme(currentTheme);
  });
};

const init = () => {
  setBranding();
  populateHero();
  populateTrustBar();
  populateServices();
  populateFeatures();
  populateProcess();
  populateIndustries();
  populateTestimonials();
  applyTheme();
  attachThemeToggle();
};

window.addEventListener('DOMContentLoaded', init);
