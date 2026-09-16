// ---------- Year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Theme ----------
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');
const setThemeIcon = () => {
  themeBtn.innerHTML = root.classList.contains('dark')
    ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
};
setThemeIcon();
themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  setThemeIcon();
});

// ---------- Mobile drawer ----------
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
const navScrim = document.getElementById('nav-scrim');
const drawerClose = document.getElementById('drawer-close');
const setMenu = (open) => {
  navLinks?.classList.toggle('open', open);
  if (navScrim) navScrim.hidden = !open;
  menuBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('menu-open', open);
};
menuBtn?.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
drawerClose?.addEventListener('click', () => setMenu(false));
navScrim?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// ---------- Nav scroll state + scroll progress ----------
const nav = document.getElementById('nav');
const progress = document.getElementById('scroll-progress');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / h) * 100 + '%';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('main section[id]');
const linkMap = {};
document.querySelectorAll('.nav-links a').forEach(a => linkMap[a.getAttribute('href').slice(1)] = a);
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      Object.values(linkMap).forEach(l => l.classList.remove('active'));
      linkMap[e.target.id]?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));

// ---------- Reveal on scroll ----------
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ---------- Typewriter ----------
const phrases = [
  'React & React Native Developer.',
  'Mobile App Engineer.',
  'Full Stack Developer.',
  'Firebase & Node.js Specialist.',
  'UI/UX Enthusiast.'
];
const tw = document.getElementById('typewriter');
let pi = 0, ci = 0, deleting = false;
function type() {
  const phrase = phrases[pi];
  tw.textContent = phrase.slice(0, ci);
  if (!deleting && ci < phrase.length) { ci++; setTimeout(type, 70); }
  else if (deleting && ci > 0) { ci--; setTimeout(type, 35); }
  else {
    if (!deleting) { deleting = true; setTimeout(type, 1400); }
    else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); }
  }
}
type();

// ---------- Count-up stats ----------
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => { n = Math.min(target, n + step); el.textContent = n; if (n < target) requestAnimationFrame(tick); };
    tick();
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

// ---------- Cursor glow ----------
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ---------- Magnetic buttons ----------
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

// ---------- Card tilt ----------
document.querySelectorAll('.card-tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// ---------- Testimonial auto-scroll + dots ----------
const track = document.getElementById('testimonial-track');
const dotsWrap = document.getElementById('testimonial-dots');
if (track && dotsWrap) {
  const cards = Array.from(track.querySelectorAll('.testimonial'));
  cards.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    b.addEventListener('click', () => {
      const target = cards[i];
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    });
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);
  const setActive = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let idx = 0, min = Infinity;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft - track.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(mid - center);
      if (d < min) { min = d; idx = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  setActive();
  track.addEventListener('scroll', () => requestAnimationFrame(setActive), { passive: true });

  let paused = false;
  track.addEventListener('mouseenter', () => paused = true);
  track.addEventListener('mouseleave', () => paused = false);
  setInterval(() => {
    if (paused) return;
    const max = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft + 5 >= max) track.scrollTo({ left: 0, behavior: 'smooth' });
    else track.scrollBy({ left: 340, behavior: 'smooth' });
  }, 4200);
}

// ---------- Neural network canvas ----------
(() => {
  const canvas = document.getElementById('network-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const N = Math.min(90, Math.floor(window.innerWidth / 18));
  const mouse = { x: -1e4, y: -1e4 };

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  const init = () => {
    particles = Array.from({ length: N }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.6 + .6
    }));
  };
  const step = () => {
    ctx.clearRect(0, 0, w, h);
    const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#06b6d4';
    ctx.fillStyle = color;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = dx*dx + dy*dy;
        if (d2 < 14000) {
          ctx.strokeStyle = color + Math.floor((1 - d2/14000) * 60).toString(16).padStart(2,'0');
          ctx.lineWidth = .6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const p = particles[i];
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx*dx + dy*dy;
      if (d2 < 20000) {
        ctx.strokeStyle = color + '66'; ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    requestAnimationFrame(step);
  };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); step();
})();

/* Floating tag tap-to-expand */
(() => {
  const tags = document.querySelectorAll('.floating-tag[data-desc]');
  if (!tags.length) return;
  const closeAll = (except) => tags.forEach(t => { if (t !== except) t.classList.remove('is-open'); });
  tags.forEach(tag => {
    tag.setAttribute('aria-expanded', 'false');
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = tag.classList.toggle('is-open');
      tag.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) closeAll(tag);
    });
    tag.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { tag.classList.remove('is-open'); tag.setAttribute('aria-expanded', 'false'); tag.blur(); }
    });
  });
  document.addEventListener('click', () => closeAll(null));
})();

// ---------- Project details modal ----------
(() => {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  const track = document.getElementById('pm-track');
  const dotsBox = document.getElementById('pm-dots');
  const counter = document.getElementById('pm-counter');
  const prevBtn = modal.querySelector('.gallery-nav.prev');
  const nextBtn = modal.querySelector('.gallery-nav.next');
  let index = 0, total = 0;

  const setIndex = (i, smooth = true) => {
    index = Math.max(0, Math.min(total - 1, i));
    track.scrollTo({ left: index * track.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
    syncUI();
  };
  const syncUI = () => {
    counter.textContent = total > 1 ? `${index + 1} / ${total}` : '';
    Array.from(dotsBox.children).forEach((d, i) => {
      d.classList.toggle('active', i === index);
      d.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    prevBtn.hidden = total < 2;
    nextBtn.hidden = total < 2;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
    prevBtn.style.opacity = index === 0 ? '.4' : '1';
    nextBtn.style.opacity = index === total - 1 ? '.4' : '1';
  };
  const buildGallery = (shots, coverClass) => {
    total = shots.length;
    index = 0;
    track.innerHTML = shots.map(s => `
      <figure class="gallery-slide ${coverClass}">
        <i class="${s.icon}" aria-hidden="true"></i>
        ${s.title ? `<figcaption class="shot-title">${s.title}</figcaption>` : ''}
        ${s.caption ? `<span class="shot-caption">${s.caption}</span>` : ''}
      </figure>`).join('');
    dotsBox.innerHTML = shots.map((s, i) =>
      `<button type="button" role="tab" aria-label="Screenshot ${i + 1}${s.title ? ': ' + s.title : ''}"></button>`).join('');
    Array.from(dotsBox.children).forEach((d, i) => d.addEventListener('click', () => setIndex(i)));
    dotsBox.hidden = total < 2;
    track.scrollLeft = 0;
    syncUI();
  };

  prevBtn.addEventListener('click', () => setIndex(index - 1));
  nextBtn.addEventListener('click', () => setIndex(index + 1));
  track.addEventListener('scroll', () => {
    const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    if (i !== index) { index = i; syncUI(); }
  }, { passive: true });
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setIndex(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setIndex(index - 1); }
  });
  const els = {
    role: document.getElementById('pm-role'),
    year: document.getElementById('pm-year'),
    title: document.getElementById('pm-title'),
    desc: document.getElementById('pm-desc'),
    list: document.getElementById('pm-highlights'),
    tags: document.getElementById('pm-tags'),
    repo: document.getElementById('pm-repo'),
  };
  let lastFocused = null;

  const open = (card) => {
    const src = card.querySelector('.proj-cover');
    const coverClass = src ? src.className.replace('proj-cover', '').trim() : '';
    const fallbackIcon = src?.querySelector('i')?.className || 'fa-solid fa-code';
    const shots = (card.dataset.shots || '').split('|').filter(Boolean).map(s => {
      const [icon, title, caption] = s.split(':');
      return { icon: icon || fallbackIcon, title: title || '', caption: caption || '' };
    });
    if (!shots.length) shots.push({ icon: fallbackIcon, title: card.querySelector('h3')?.textContent || '', caption: '' });
    buildGallery(shots, coverClass);
    els.role.textContent = card.dataset.role || 'Project';
    els.year.textContent = card.dataset.year || '';
    els.title.textContent = card.querySelector('h3')?.textContent || '';
    els.desc.textContent = card.querySelector('.proj-body p')?.textContent || '';
    els.list.innerHTML = (card.dataset.highlights || '')
      .split('|').filter(Boolean)
      .map(h => `<li>${h}</li>`).join('');
    els.tags.innerHTML = Array.from(card.querySelectorAll('.tags span'))
      .map(t => `<span>${t.textContent}</span>`).join('');
    els.repo.href = card.dataset.repo || 'https://github.com/IftikharZahid';
    lastFocused = card;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close').focus();
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    lastFocused?.focus();
  };

  document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });

  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') setIndex(index + 1);
    if (e.key === 'ArrowLeft') setIndex(index - 1);
  });
})();
