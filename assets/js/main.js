// ---------- Data (edit these to update the site) ----------
const GITHUB_USER = 'SocheatKhoeun';

const SKILLS = [
  { title: 'Backend', desc: 'Scalable APIs, real-time systems and microservices.',
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Laravel', 'PHP', 'REST APIs', 'WebSocket', 'Microservices', 'JWT Auth'] },
  { title: 'Frontend', desc: 'Fast, responsive web apps and back offices.',
    items: ['Vue 3', 'Nuxt', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
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
    desc: 'Real-time chat built as an independent microservice. It owns its own API and messaging logic and delivers instant two-way messages over WebSockets.',
    tech: ['Microservices', 'Node.js', 'WebSocket'],
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
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Vue: '#41b883',
  HTML: '#e34c26', CSS: '#563d7c', PHP: '#4F5D95', 'C++': '#f34b7d',
};

// Lines typed into the showcase terminal: ['cmd', text] is typed, ['out', html] appears.
const TERMINAL = [
  ['cmd', 'whoami'],
  ['out', 'socheat-khoeun <span class="k">·</span> full-stack developer'],
  ['cmd', 'cat stack.yml'],
  ['out', '<span class="k">backend:</span>   NestJS, Node.js, Python, Laravel'],
  ['out', '<span class="k">frontend:</span>  Vue, Nuxt, React'],
  ['out', '<span class="k">database:</span>  PostgreSQL, MySQL, MongoDB'],
  ['out', '<span class="k">devops:</span>    Docker, CI/CD, GitHub Actions'],
  ['out', '<span class="k">ai_ml:</span>     Face recognition, Khmer NLP'],
  ['cmd', 'docker compose up -d'],
  ['out', '<span class="ok">✔</span> api          <span class="k">Started</span>'],
  ['out', '<span class="ok">✔</span> back-office  <span class="k">Started</span>'],
  ['out', '<span class="ok">✔</span> ai-service   <span class="k">Started</span>'],
];

// ---------- Helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Render skills ----------
$('#skillsGrid').innerHTML = SKILLS.map((s) => `
  <div class="skill-row">
    <div class="skill-row__head">
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </div>
    <ul class="skill-row__items">${s.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
  </div>`).join('');

// ---------- Render projects + filters ----------
const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];
$('#filters').innerHTML = categories.map((c, i) =>
  `<button class="filter" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');

$('#projectGrid').innerHTML = PROJECTS.map((p) => `
  <article class="project reveal" data-cat="${esc(p.category)}">
    <span class="project__cat">${esc(p.category)}</span>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <p class="project__tech">${p.tech.map(esc).join('<span aria-hidden="true">·</span>')}</p>
  </article>`).join('');

$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  $$('.filter').forEach((b) => b.setAttribute('aria-selected', b === btn));
  const cat = btn.dataset.cat;
  $$('.project').forEach((el) => {
    const show = cat === 'All' || el.dataset.cat === cat;
    el.classList.toggle('hidden', !show);
    if (show) { el.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in'))); }
  });
});

// ---------- Split text into words for blur-in ----------
function splitWords(el) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const span = document.createElement('span');
          span.className = 'w';
          span.style.setProperty('--i', i++);
          span.textContent = part;
          frag.appendChild(span);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  walk(el);
  if (el.dataset.delay) el.style.setProperty('--base', `${el.dataset.delay}ms`);
}
$$('[data-split]').forEach(splitWords);

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    io.unobserve(en.target);
  });
}, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
$$('[data-split], .reveal').forEach((el) => io.observe(el));
// hero animates on load
requestAnimationFrame(() => requestAnimationFrame(() => $$('.hero .fade-up, .hero [data-split]').forEach((el) => el.classList.add('in'))));

// ---------- Terminal typing ----------
(function terminal() {
  const out = $('#termOut');
  const status = $('#termStatus');
  const spinner = $('.terminal .spinner');
  const caret = document.createElement('span');
  caret.className = 'caret';

  const finish = () => { status.textContent = 'Deployed'; spinner.classList.add('done'); };

  if (REDUCED) {
    out.innerHTML = TERMINAL.map(([t, s]) => (t === 'cmd' ? `<span class="p">$ </span><span class="c">${esc(s)}</span>` : s)).join('\n') + '\n<span class="p">$ </span>';
    out.appendChild(caret);
    finish();
    return;
  }

  let started = false;
  const run = async () => {
    status.textContent = 'Running';
    for (const [type, text] of TERMINAL) {
      if (type === 'cmd') {
        if (out.childNodes.length) out.append('\n');
        out.insertAdjacentHTML('beforeend', '<span class="p">$ </span>');
        const cmd = document.createElement('span');
        cmd.className = 'c';
        out.append(cmd, caret);
        await sleep(350);
        for (const ch of text) { cmd.textContent += ch; await sleep(38 + Math.random() * 40); }
        await sleep(300);
      } else {
        caret.remove();
        out.insertAdjacentHTML('beforeend', '\n' + text);
        out.append(caret);
        await sleep(110);
      }
    }
    out.insertAdjacentHTML('beforeend', '\n<span class="p">$ </span>');
    out.append(caret);
    finish();
  };
  out.append(caret);
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting && !started) { started = true; obs.disconnect(); setTimeout(run, 500); }
  }, { threshold: 0.35 }).observe($('.showcase'));
})();

// ---------- Count-up stats ----------
function countUp(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  if (REDUCED || !target) { el.textContent = target + suffix; return; }
  const t0 = performance.now();
  const dur = 1400;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
new IntersectionObserver((entries, obs) => {
  if (!entries[0].isIntersecting) return;
  obs.disconnect();
  $$('.stat strong[data-count]').forEach(countUp);
}, { threshold: 0.4 }).observe($('.stats'));

// ---------- Scroll-linked statement ----------
(function statement() {
  const lines = $$('#statement .line');
  let ticking = false;
  const update = () => {
    const mark = innerHeight * 0.62;
    lines.forEach((l) => l.classList.toggle('on', l.getBoundingClientRect().top < mark));
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

// ---------- Chat playback ----------
(function chat() {
  const box = $('#chat');
  const msgs = $$('.msg', box);
  if (REDUCED) { msgs.forEach((m) => m.classList.add('show')); return; }
  const avatar = msgs.find((m) => m.classList.contains('msg--me'))?.querySelector('.msg__who')?.outerHTML || '';
  const play = async () => {
    for (const m of msgs) {
      if (m.classList.contains('msg--me')) {
        const typing = document.createElement('div');
        typing.className = 'msg msg--me show';
        typing.innerHTML = `${avatar}<span class="typing"><i></i><i></i><i></i></span>`;
        m.before(typing);
        await sleep(950);
        typing.remove();
        m.classList.add('show');
        await sleep(650);
      } else {
        m.classList.add('show');
        await sleep(550);
      }
    }
  };
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { obs.disconnect(); setTimeout(play, 400); }
  }, { threshold: 0.3 }).observe(box);
})();

// ---------- Live repos from GitHub ----------
(async function loadRepos() {
  const list = $('#repoList');
  const featured = new Set(PROJECTS.flatMap((p) => p.repos.map((r) => r.url.split('/').pop().toLowerCase())));
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json())
      .filter((r) => !r.fork && r.language !== 'Dart' && !/flutter|blablacar/i.test(r.name) && !featured.has(r.name.toLowerCase()) && r.name.toLowerCase() !== `${GITHUB_USER}.github.io`.toLowerCase())
      .slice(0, 6);
    if (!repos.length) { list.parentElement.hidden = true; return; }
    list.innerHTML = repos.map((r) => `
      <a class="repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
        <span class="repo__name">${esc(r.name)}<svg class="chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        ${r.description ? `<span class="muted">${esc(r.description)}</span>` : ''}
        <span class="repo__meta">
          ${r.language ? `<span><i class="lang-dot" style="background:${LANG_COLORS[r.language] || '#8b949e'}"></i>${esc(r.language)}</span>` : ''}
          <span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
        </span>
      </a>`).join('');
  } catch {
    list.innerHTML = `<p class="muted pad">Couldn't load repositories right now. Browse them on <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener"><strong>GitHub</strong></a>.</p>`;
  }
})();

(async function loadStats() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!res.ok) return;
    const u = await res.json();
    if (u.public_repos) { const el = $('#statRepos'); el.dataset.count = u.public_repos; el.textContent = u.public_repos; }
  } catch {}
})();

// ---------- Theme toggle ----------
$('#themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
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

// ---------- Nav border + active section ----------
const nav = $('#nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });
const navAnchors = $$('a', links);
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['about', 'skills', 'projects', 'contact'].forEach((id) => sectionObs.observe(document.getElementById(id)));

$('#year').textContent = new Date().getFullYear();

window.__siteReady = true;
