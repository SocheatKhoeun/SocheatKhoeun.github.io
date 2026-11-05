// ---------- Data (edit these to update the site) ----------
const GITHUB_USER = 'SocheatKhoeun';

const SKILLS = [
  { icon: '🎨', title: 'Frontend', desc: 'Responsive, accessible interfaces and SPAs.',
    items: ['Vue 3', 'Nuxt', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
  { icon: '⚙️', title: 'Backend', desc: 'REST APIs, auth, real-time and microservices.',
    items: ['Node.js', 'NestJS', 'Express', 'Laravel', 'PHP', 'Python', 'Socket.IO', 'JWT'] },
  { icon: '📱', title: 'Mobile', desc: 'Cross-platform apps with clean state management.',
    items: ['Flutter', 'Dart', 'Firebase', 'Provider', 'PWA'] },
  { icon: '🗄️', title: 'Data & DevOps', desc: 'Databases, containers and tooling.',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'Inertia.js'] },
];

const PROJECTS = [
  {
    name: 'UAMS — University Management Platform',
    category: 'Full-Stack',
    icon: '🎓',
    gradient: 'linear-gradient(135deg,#2563eb,#7c3aed)',
    desc: 'Capstone project: a university management platform with a typed Nuxt/Vue frontend (services, stores, middleware) and a containerised Python backend with Alembic migrations and tests.',
    tech: ['Nuxt', 'Vue', 'TypeScript', 'Python', 'Docker'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/SocheatKhoeun/Capstone2-UAMS-Frontend' },
      { label: 'Backend', url: 'https://github.com/SocheatKhoeun/Capstone2-UAMS-Backend' },
    ],
  },
  {
    name: 'Inventory Management System',
    category: 'Full-Stack',
    icon: '📦',
    gradient: 'linear-gradient(135deg,#0ea5e9,#22c55e)',
    desc: 'MERN app for products, orders and sales with real-time stock sync over Socket.IO, low-stock alerts, KPI dashboards and JWT auth with admin/staff roles.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/Inventory-Management-System' }],
  },
  {
    name: 'HanyBay POS System',
    category: 'Full-Stack',
    icon: '🧾',
    gradient: 'linear-gradient(135deg,#f97316,#ef4444)',
    desc: 'Point-of-sale system built on Laravel with JWT authentication, permission-based roles, and seeded catalogs for sizes, categories and countries.',
    tech: ['Laravel', 'PHP', 'JavaScript', 'JWT'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/HanyBay-POS-System' }],
  },
  {
    name: 'Payment Microservice',
    category: 'Backend',
    icon: '💳',
    gradient: 'linear-gradient(135deg,#e11d48,#7c3aed)',
    desc: 'A standalone payment service built with NestJS and TypeScript, designed to plug into a larger microservice architecture.',
    tech: ['NestJS', 'TypeScript', 'Microservices'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/payment-microservice' }],
  },
  {
    name: 'Video Streaming Service',
    category: 'Backend',
    icon: '🎬',
    gradient: 'linear-gradient(135deg,#334155,#0f172a)',
    desc: 'NestJS service that streams video using HTTP range requests, so clients can seek and buffer large files efficiently.',
    tech: ['NestJS', 'TypeScript', 'Streams'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/video-stream' }],
  },
  {
    name: 'Khmer Word Segmentation',
    category: 'Backend',
    icon: '🔤',
    gradient: 'linear-gradient(135deg,#14b8a6,#2563eb)',
    desc: 'A FastAPI service that segments Khmer text — written without spaces between words — into individual words using khmer-nltk.',
    tech: ['Python', 'FastAPI', 'NLP'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/segment-khmer' }],
  },
  {
    name: 'Flutter + Firebase Student App',
    category: 'Mobile',
    icon: '📱',
    gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
    desc: 'Cross-platform student management app built with Flutter and backed by Firebase for data and authentication.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/FLUTTER-FIREBASE-STUDENT' }],
  },
  {
    name: 'Ride-Sharing App (Flutter)',
    category: 'Mobile',
    icon: '🚗',
    gradient: 'linear-gradient(135deg,#0284c7,#14b8a6)',
    desc: 'Carpooling app UI and flows built in Flutter across several iterations, exploring the observer pattern and state management.',
    tech: ['Flutter', 'Dart', 'State Mgmt'],
    repos: [
      { label: 'Source', url: 'https://github.com/SocheatKhoeun/blablacar' },
      { label: 'State mgmt', url: 'https://github.com/SocheatKhoeun/W5---Observer-Pattern-State-Management' },
    ],
  },
  {
    name: 'Real-Time WebSocket Chat',
    category: 'Full-Stack',
    icon: '💬',
    gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    desc: 'Chat application with separate frontend and backend, delivering instant two-way messaging over WebSockets.',
    tech: ['Node.js', 'WebSocket', 'JavaScript'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/WebSocket-Chat' }],
  },
];

const LANG_COLORS = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Vue: '#41b883', Dart: '#00B4AB',
  HTML: '#e34c26', CSS: '#563d7c', PHP: '#4F5D95', 'C++': '#f34b7d',
};

// ---------- Helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';

// ---------- Render skills ----------
$('#skillsGrid').innerHTML = SKILLS.map((s) => `
  <article class="skill-card reveal">
    <div class="skill-card__icon">${s.icon}</div>
    <h3>${esc(s.title)}</h3>
    <p class="muted">${esc(s.desc)}</p>
    <div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join('')}</div>
  </article>`).join('');

// ---------- Render projects + filters ----------
const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];
$('#filters').innerHTML = categories.map((c, i) =>
  `<button class="filter" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');

$('#projectGrid').innerHTML = PROJECTS.map((p) => `
  <article class="project reveal" data-cat="${esc(p.category)}">
    <div class="project__body">
      <div class="project__top">
        <span class="app-icon" style="background:${p.gradient}" aria-hidden="true">${p.icon}</span>
        <span class="project__tag">${esc(p.category)}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
      <div class="project__links">
        ${p.repos.map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)} ${ARROW}</a>`).join('')}
      </div>
    </div>
  </article>`).join('');

$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  document.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-selected', b === btn));
  const cat = btn.dataset.cat;
  document.querySelectorAll('.project').forEach((el) => {
    el.classList.toggle('hidden', cat !== 'All' && el.dataset.cat !== cat);
  });
});

// ---------- Live repos from GitHub ----------
(async function loadRepos() {
  const list = $('#repoList');
  const featured = new Set(PROJECTS.flatMap((p) => p.repos.map((r) => r.url.split('/').pop().toLowerCase())));
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json())
      .filter((r) => !r.fork && !featured.has(r.name.toLowerCase()) && r.name.toLowerCase() !== `${GITHUB_USER}.github.io`.toLowerCase())
      .slice(0, 6);
    if (!repos.length) { list.innerHTML = ''; return; }
    list.innerHTML = repos.map((r) => `
      <a class="repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
        <span class="repo__name">${esc(r.name)}<svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg></span>
        ${r.description ? `<span class="muted" style="font-size:.85rem">${esc(r.description)}</span>` : ''}
        <span class="repo__meta">
          ${r.language ? `<span><i class="lang-dot" style="background:${LANG_COLORS[r.language] || '#8b949e'}"></i>${esc(r.language)}</span>` : ''}
          <span>★ ${r.stargazers_count}</span>
          <span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
        </span>
      </a>`).join('');
  } catch {
    list.innerHTML = `<p class="muted">Couldn't load repositories right now — browse them on <a class="grad" href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener">GitHub</a>.</p>`;
  }
})();

(async function loadStats() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!res.ok) return;
    const u = await res.json();
    if (u.public_repos) $('#statRepos').textContent = u.public_repos;
  } catch {}
})();

// ---------- Theme toggle ----------
$('#themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
});

// ---------- Mobile nav ----------
const burger = $('#burger');
const links = $('#navLinks');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

// ---------- Nav shadow + active section ----------
const nav = $('#nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });

const navAnchors = [...links.querySelectorAll('a')];
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['about', 'skills', 'projects', 'contact'].forEach((id) => sectionObs.observe(document.getElementById(id)));

// ---------- Reveal on scroll ----------
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

$('#year').textContent = new Date().getFullYear();
