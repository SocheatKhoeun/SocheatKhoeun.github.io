// ---------- Data (edit these to update the site) ----------
const GITHUB_USER = 'SocheatKhoeun';

const SKILLS = [
  { title: 'Backend', desc: 'Scalable APIs, real-time systems and microservice architecture.',
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Laravel', 'PHP', 'REST APIs', 'WebSocket', 'Microservices', 'JWT Auth'] },
  { title: 'Frontend', desc: 'Fast, responsive web applications and admin dashboards.',
    items: ['Vue 3', 'Nuxt', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Database Management', desc: 'Data modeling, migrations and query performance.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Drizzle ORM', 'Firebase', 'Schema Design', 'Migrations', 'Query Optimization'] },
  { title: 'DevOps', desc: 'Containerization, CI/CD automation and reliable deployments.',
    items: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions', 'Linux', 'Git'] },
  { title: 'AI / ML', desc: 'Applied machine learning served through production APIs.',
    items: ['Python', 'Computer Vision', 'Face Recognition', 'NLP', 'Khmer NLP', 'Model Serving'] },
];

const PROJECTS = [
  {
    name: 'SabayFlix',
    category: 'Full-Stack',
    desc: 'Movie and series streaming platform. I built the backend API that powers its apps and the web back office the team uses to manage titles, content and users.',
    tech: ['REST API', 'Back Office', 'Streaming'],
    repos: [],
  },
  {
    name: 'MoiTV Media',
    category: 'Full-Stack',
    desc: 'Digital TV and media platform. I built the API that delivers channels and video content, and the web back office used to manage programs, media and users.',
    tech: ['REST API', 'Back Office', 'Media'],
    repos: [],
  },
  {
    name: 'Coffee POS System',
    category: 'Full-Stack',
    desc: 'Point-of-sale system for coffee shops that handles orders, menu and stock management, payments and daily sales reporting, with role-based access for staff.',
    tech: ['REST API', 'Web App', 'POS'],
    repos: [],
  },
  {
    name: 'Face Recognition Service',
    category: 'AI',
    desc: 'Backend service that detects and identifies faces in images, exposed through a REST API so other applications can integrate it easily.',
    tech: ['Computer Vision', 'API'],
    repos: [],
  },
  {
    name: 'AI-Power-Study',
    category: 'AI',
    desc: 'AI-powered learning platform that turns study material into guided, interactive sessions, helping learners study more effectively.',
    tech: ['AI', 'Web App', 'API'],
    repos: [],
  },
  {
    name: 'Chat Microservice',
    category: 'Backend',
    desc: 'Real-time chat built as an independent microservice with its own API and messaging logic, delivering instant two-way messaging over WebSockets.',
    tech: ['Microservices', 'Node.js', 'WebSocket'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/WebSocket-Chat' }],
  },
  {
    name: 'Movie Stream Service',
    category: 'Backend',
    desc: 'NestJS service that streams video over HTTP range requests, enabling smooth seeking and efficient buffering of large files.',
    tech: ['NestJS', 'TypeScript', 'Streams'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/video-stream' }],
  },
  {
    name: 'Khmer Word Segmentation',
    category: 'AI',
    desc: 'FastAPI service that splits Khmer text, which is written without spaces between words, into individual words using khmer-nltk.',
    tech: ['Python', 'FastAPI', 'NLP'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/segment-khmer' }],
  },
];


const SERVICES = [
  { title: 'API & Backend Development', desc: 'Secure, well-documented REST APIs with authentication, roles and clean architecture.',
    stack: 'NestJS · Node.js · Laravel · FastAPI' },
  { title: 'Web Apps & Back Offices', desc: 'Intuitive admin dashboards and back-office tools that help your team run the business.',
    stack: 'Vue · Nuxt · React · TypeScript' },
  { title: 'Microservices & Real-time', desc: 'Independent services for chat, streaming and payments, with live updates over WebSockets.',
    stack: 'Microservices · WebSocket · Streams' },
  { title: 'Database Design', desc: 'Data models, migrations and query tuning that keep your app fast as it grows.',
    stack: 'PostgreSQL · MySQL · MongoDB · Prisma · Drizzle' },
  { title: 'DevOps & Deployment', desc: 'Containerized builds and automated pipelines, so every release reaches production reliably.',
    stack: 'Docker · CI/CD · GitHub Actions · Linux' },
  { title: 'AI Integration', desc: 'AI features served through production APIs, from face recognition to language processing.',
    stack: 'Python · Computer Vision · NLP' },
];

// Lines typed into the showcase terminal: ['cmd', text] is typed, ['out', html] appears.
const TERMINAL = [
  ['cmd', 'whoami'],
  ['out', 'socheat-khoeun <span class="k">·</span> full-stack developer'],
  ['cmd', 'cat stack.yml'],
  ['out', '<span class="k">backend:</span>   NestJS, Node.js, Python, Laravel'],
  ['out', '<span class="k">frontend:</span>  Vue, Nuxt, React'],
  ['out', '<span class="k">database:</span>  PostgreSQL, MySQL, MongoDB'],
  ['out', '<span class="k">orm:</span>       Prisma, Drizzle'],
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

// ---------- Render projects ----------
$('#projectGrid').innerHTML = PROJECTS.map((p) => `
  <article class="project reveal" data-cat="${esc(p.category)}">
    <span class="project__cat">${esc(p.category)}</span>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <p class="project__tech">${p.tech.map(esc).join('<span aria-hidden="true">·</span>')}</p>
  </article>`).join('');

// ---------- Render services ----------
$('#servicesGrid').innerHTML = SERVICES.map((sv, i) => `
  <article class="service">
    <span class="service__num">${String(i + 1).padStart(2, '0')}</span>
    <h3>${esc(sv.title)}</h3>
    <p>${esc(sv.desc)}</p>
    <p class="service__stack">${esc(sv.stack)}</p>
  </article>`).join('');

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
['about', 'skills', 'projects', 'services', 'contact'].forEach((id) => sectionObs.observe(document.getElementById(id)));

$('#year').textContent = new Date().getFullYear();

window.__siteReady = true;
