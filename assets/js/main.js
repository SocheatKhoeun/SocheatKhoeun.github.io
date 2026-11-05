// ---------- Data (edit these to update the site) ----------
const GITHUB_USER = 'SocheatKhoeun';

const SKILLS = [
  { title: 'Backend', desc: 'Scalable APIs, real-time systems and microservices.',
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Laravel', 'PHP', 'REST APIs', 'WebSocket', 'Microservices', 'JWT Auth'] },
  { title: 'Frontend', desc: 'Fast, responsive interfaces for web and mobile.',
    items: ['Vue 3', 'Nuxt', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Flutter', 'Dart'] },
  { title: 'Database Management', desc: 'Data modeling, migrations and performance.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Schema Design', 'Migrations', 'Query Optimization'] },
  { title: 'DevOps', desc: 'Containerized builds, automation and deployment.',
    items: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions', 'Linux', 'Git'] },
  { title: 'AI / ML', desc: 'Applied machine learning served through production APIs.',
    items: ['Python', 'Computer Vision', 'Face Recognition', 'NLP', 'Khmer NLP', 'Model Serving'] },
];

const PROJECTS = [
  {
    name: 'SabayFlix',
    category: 'Full-Stack',
    desc: 'Movie and series streaming platform. I built the backend API that powers the apps and the web back office the team uses to manage titles, content and users.',
    tech: ['REST API', 'Back Office', 'Streaming'],
    repos: [],
  },
  {
    name: 'MoiTV Media',
    category: 'Full-Stack',
    desc: 'Digital TV and media platform. I built the API that serves channels and video content, and the web back office used to manage programs, media and users.',
    tech: ['REST API', 'Back Office', 'Media'],
    repos: [],
  },
  {
    name: 'Face Recognition Service',
    category: 'AI',
    desc: 'Backend service that detects and recognizes faces in images, exposed through an API for other applications to use.',
    tech: ['Computer Vision', 'API'],
    repos: [],
  },
  {
    name: 'Chat Service',
    category: 'Backend',
    desc: 'Real-time chat with separate frontend and backend, delivering instant two-way messaging over WebSockets.',
    tech: ['Node.js', 'WebSocket', 'JavaScript'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/WebSocket-Chat' }],
  },
  {
    name: 'Movie Stream Service',
    category: 'Backend',
    desc: 'NestJS service that streams video using HTTP range requests, so players can seek and buffer large files efficiently.',
    tech: ['NestJS', 'TypeScript', 'Streams'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/video-stream' }],
  },
  {
    name: 'Khmer Word Segmentation',
    category: 'AI',
    desc: 'FastAPI service that segments Khmer text, which is written without spaces between words, into individual words using khmer-nltk.',
    tech: ['Python', 'FastAPI', 'NLP'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/segment-khmer' }],
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
      <span class="project__tag">${esc(p.category)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
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
