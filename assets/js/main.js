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

// Skill icons: brand logos from Simple Icons, generic ones from Lucide.
// Value: [source, slug, brand color]. No color = follows the text color (light/dark).
const SI = 'https://cdn.jsdelivr.net/npm/simple-icons@15.22.0/icons/';
const LU = 'https://cdn.jsdelivr.net/npm/lucide-static@1.50.0/icons/';
const SKILL_ICONS = {
  'Node.js': [SI, 'nodedotjs', '#5FA04E'], 'NestJS': [SI, 'nestjs', '#E0234E'], 'Express': [SI, 'express'],
  'Python': [SI, 'python', '#3776AB'], 'FastAPI': [SI, 'fastapi', '#009688'], 'Laravel': [SI, 'laravel', '#FF2D20'],
  'PHP': [SI, 'php', '#777BB4'], 'REST APIs': [LU, 'server'], 'WebSocket': [LU, 'radio'],
  'Microservices': [LU, 'boxes'], 'JWT Auth': [LU, 'key-round'],
  'Vue 3': [SI, 'vuedotjs', '#4FC08D'], 'Nuxt': [SI, 'nuxt', '#00DC82'], 'React': [SI, 'react', '#61DAFB'],
  'Angular': [SI, 'angular', '#DD0031'], 'TypeScript': [SI, 'typescript', '#3178C6'],
  'JavaScript': [SI, 'javascript', '#F7DF1E'], 'Tailwind CSS': [SI, 'tailwindcss', '#06B6D4'],
  'PostgreSQL': [SI, 'postgresql', '#4169E1'], 'MySQL': [SI, 'mysql', '#4479A1'], 'MongoDB': [SI, 'mongodb', '#47A248'],
  'Prisma': [SI, 'prisma'], 'Drizzle ORM': [SI, 'drizzle'], 'Firebase': [SI, 'firebase', '#DD2C00'],
  'Schema Design': [LU, 'layers-3'], 'Migrations': [LU, 'git-compare'], 'Query Optimization': [LU, 'gauge'],
  'Docker': [SI, 'docker', '#2496ED'], 'Docker Compose': [SI, 'docker', '#2496ED'], 'CI/CD': [LU, 'infinity'],
  'GitHub Actions': [SI, 'githubactions', '#2088FF'], 'Linux': [SI, 'linux', '#FCC624'], 'Git': [SI, 'git', '#F05032'],
  'Computer Vision': [SI, 'opencv', '#5C3EE8'], 'Face Recognition': [LU, 'scan-face'], 'NLP': [LU, 'languages'],
  'Khmer NLP': [LU, 'languages'], 'Model Serving': [LU, 'brain-circuit'],
};

const PROJECTS = [
  {
    name: 'SabayFlix',
    category: 'Full-Stack',
    desc: 'Streaming platform for movies and series. I built the website viewers watch on, the backend API behind its apps, and a back office that lets the team publish titles and manage users without developer help.',
    tech: ['Website', 'REST API', 'Back Office', 'Streaming'],
    repos: [],
  },
  {
    name: 'MoiTV Media',
    category: 'Full-Stack',
    desc: 'Ministry digital TV and media platform. I built the API that delivers live channels and video to viewers, and a back office that lets staff schedule programs and manage media in one place.',
    tech: ['REST API', 'Back Office', 'Media'],
    repos: [],
  },
  {
    name: 'MOI Management System',
    category: 'Full-Stack',
    desc: 'Ministry platform that replaced paper processes for leave, roles and approvals. Staff sign in and check in by face scan with location checks, and get instant mobile notifications. I also handled deployment and servers.',
    tech: ['Face Recognition', 'FCM', 'Back Office', 'DevOps'],
    repos: [],
  },
  {
    name: 'Coffee POS System',
    category: 'Full-Stack',
    desc: 'Point-of-sale system that helps coffee shops take orders faster, track stock and payments, and see daily sales at a glance, with role-based access for owners and staff.',
    tech: ['REST API', 'Web App', 'POS'],
    repos: [],
  },
  {
    name: 'Face Recognition Service',
    category: 'ML',
    desc: 'Ready-to-use face recognition API that identifies faces in photos and live video, with liveness detection to block fake attempts using printed photos or screens. Any app can add secure face login or attendance without building ML from scratch.',
    tech: ['Liveness Detection', 'Computer Vision', 'REST API'],
    repos: [],
  },
  {
    name: 'AI-Power-Study',
    category: 'AI',
    desc: 'AI study platform that turns notes and documents into flashcards, quizzes and summaries in seconds, helping learners revise faster and remember more.',
    tech: ['AI', 'Flashcards', 'Quizzes', 'Summaries'],
    repos: [],
  },
  {
    name: 'Chat Microservice',
    category: 'Backend',
    desc: 'Real-time chat service that plugs into any app as an independent microservice, delivering instant two-way messaging over WebSockets and scaling separately from the main system.',
    tech: ['Microservices', 'Node.js', 'WebSocket'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/WebSocket-Chat' }],
  },
  {
    name: 'Movie Stream Service',
    category: 'Backend',
    desc: 'Video streaming service that lets users start watching instantly and skip to any point smoothly, even with large files, while keeping server and bandwidth costs low.',
    tech: ['NestJS', 'TypeScript', 'Streams'],
    repos: [{ label: 'Source', url: 'https://github.com/SocheatKhoeun/video-stream' }],
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
function skillIcon(name) {
  const icon = SKILL_ICONS[name];
  if (!icon) return '';
  const [base, slug, color] = icon;
  const style = `--icon:url('${base}${slug}.svg')${color ? `;--c:${color}` : ''}`;
  return `<span class="skill-icon" style="${style}" aria-hidden="true"></span>`;
}
$('#skillsGrid').innerHTML = SKILLS.map((s) => `
  <div class="skill-row">
    <div class="skill-row__head">
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </div>
    <ul class="skill-row__items">${s.items.map((t) => `<li>${skillIcon(t)}<span>${esc(t)}</span></li>`).join('')}</ul>
  </div>`).join('');

// ---------- Render projects: centre line, one card per row, alternating left/right ----------
// As you scroll, the line draws down; when it reaches a project, its branch grows and the card slides in.
const projectTree = $('#projectTree');
$('#projectGroups').innerHTML = PROJECTS.map((p, i) => `
  <div class="tree__row tree__row--${i % 2 ? 'right' : 'left'}">
    <article class="project" data-cat="${esc(p.category)}">
      <span class="project__cat">${esc(p.category)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <p class="project__tech">${p.tech.map(esc).join('<span aria-hidden="true">·</span>')}</p>
    </article>
  </div>`).join('');

const treeCards = [...projectTree.querySelectorAll('.tree__row .project')];
const treeSvg = projectTree.querySelector('.tree__lines');
let treeYs = [], treeY0 = 0, treeEnd = 0, treeTip = REDUCED ? Infinity : 0;

function drawTree() {
  const box = projectTree.getBoundingClientRect();
  const root = projectTree.querySelector('.tree__root').getBoundingClientRect();
  const cards = treeCards.map((c) => c.getBoundingClientRect());
  if (!cards.length) return;
  // Trunk in the centre on wide screens, or at the root's left side when cards stack.
  const centered = cards.length > 1 && Math.abs(cards[0].left - cards[1].left) > 2;
  const x = (centered ? root.left + root.width / 2 : root.left + 22) - box.left;
  treeY0 = root.bottom - box.top;
  treeYs = cards.map((c) => c.top - box.top + 44);
  treeEnd = treeYs[treeYs.length - 1];
  treeSvg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
  treeSvg.innerHTML =
    `<path class="tree__trunk" pathLength="1" d="M${x} ${treeY0} V${treeEnd}" />` +
    cards.map((c, i) => {
      const toLeft = c.right - box.left <= x;
      const edge = (toLeft ? c.right : c.left) - box.left;
      return `<path class="tree__branch" pathLength="1" d="M${x} ${treeYs[i]} H${edge}" />`
        + `<circle class="tree__dot" cx="${x}" cy="${treeYs[i]}" r="4" />`;
    }).join('');
  updateTree();
}

function updateTree() {
  if (!treeYs.length) return;
  const top = projectTree.getBoundingClientRect().top;
  // The line's tip follows a point 70% down the viewport, and never retracts.
  treeTip = Math.max(treeTip, innerHeight * 0.7 - top);
  const progress = Math.min(1, Math.max(0, (treeTip - treeY0) / (treeEnd - treeY0 || 1)));
  const trunk = treeSvg.querySelector('.tree__trunk');
  if (trunk) trunk.style.strokeDashoffset = 1 - progress;
  const branches = treeSvg.querySelectorAll('.tree__branch');
  const dots = treeSvg.querySelectorAll('.tree__dot');
  treeYs.forEach((y, i) => {
    const on = treeTip >= y;
    branches[i]?.classList.toggle('is-on', on);
    dots[i]?.classList.toggle('is-on', on);
    const card = treeCards[i];
    if (on && !card.classList.contains('is-shown')) {
      card.classList.add('is-shown');
      setTimeout(() => card.classList.add('is-settled'), 1200); // after the slide-in, hover reacts with no delay
    }
  });
}

let treeTick = false;
addEventListener('scroll', () => {
  if (treeTick) return;
  treeTick = true;
  requestAnimationFrame(() => { treeTick = false; updateTree(); });
}, { passive: true });

drawTree();
new ResizeObserver(drawTree).observe(projectTree);
document.fonts?.ready.then(drawTree);

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
