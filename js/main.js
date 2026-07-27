/* ============================================================
   Nata Flowers, interactions
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   1. КОНТАКТЫ. Единственное место, где нужно что-то править.
      Заполните строки, которых пока нет. Пустые поля просто
      не отрисуются на сайте, ничего не сломается.
   ───────────────────────────────────────────────────────────── */
const CONTACTS = {
  instagram: 'https://www.instagram.com/nata.flowers.gomel/',
  telegram:  '',          // например 'https://t.me/nataflowers'
  phone:     '',          // например '+375291234567'
  whatsapp:  '',          // например '375291234567' (только цифры)
  viber:     '',          // например '375291234567'
  tiktok:    ''           // например 'https://www.tiktok.com/@nata.flowers'
};

/* ───────────────────────────────────────────────────────────── */

const ICONS = {
  instagram: '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/>',
  telegram:  '<path d="M21.5 4.3 2.9 11.4c-.9.35-.88 1.63.03 1.95l4.7 1.63 1.8 5.5c.26.8 1.29.99 1.82.33l2.5-3.1 4.7 3.45c.6.44 1.46.11 1.62-.62l3.06-14.2c.17-.8-.6-1.5-1.63-1.04z"/><path d="m7.6 15 10.9-8.2-8.6 9.5"/>',
  phone:     '<path d="M6.2 3.5h3l1.5 4-2 1.4a13 13 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7 2 2 0 0 1 6.2 3.5z"/>',
  whatsapp:  '<path d="M3.5 20.5 5 16.4a8 8 0 1 1 3.1 3L3.5 20.5z"/><path d="M9 9.2c.3 2.4 3.4 5.5 5.8 5.8l1-1.5 2 .9v1.4c-.1.6-.7 1-1.3.9A8.6 8.6 0 0 1 8.5 9.6c-.1-.6.3-1.2.9-1.3h1.4l.9 2-1.7.9z"/>',
  viber:     '<path d="M12 2.6c4.9 0 8.4 3.3 8.4 7.9 0 4.6-3.5 7.9-8.4 7.9-.7 0-1.4-.1-2-.2L6 21.4v-3.6C4.1 16.3 3 13.7 3 10.5 3 5.9 7.1 2.6 12 2.6Z"/><path d="M9.2 7.6c.2 1.9 2.6 4.3 4.5 4.5"/>',
  tiktok:    '<path d="M15.5 3.2c.5 2.2 2 3.5 4.2 3.7v3c-1.6.1-3-.4-4.2-1.3v5.8a5.7 5.7 0 1 1-4.9-5.6v3.1a2.6 2.6 0 1 0 1.8 2.5V3.2h3.1z"/>'
};

const LABELS = {
  instagram: ['Instagram', 'Написать в Direct'],
  telegram:  ['Telegram',  'Быстрее всего отвечу'],
  phone:     ['Позвонить', 'Если нужно срочно'],
  whatsapp:  ['WhatsApp',  'Написать сообщение'],
  viber:     ['Viber',     'Написать сообщение'],
  tiktok:    ['TikTok',    'Видео с клумбы']
};

/* превращает значение из CONTACTS в рабочую ссылку */
function hrefFor(key, value) {
  if (!value) return null;
  switch (key) {
    case 'phone':    return 'tel:' + value.replace(/[^\d+]/g, '');
    case 'whatsapp': return 'https://wa.me/' + value.replace(/\D/g, '');
    case 'viber':    return 'viber://chat?number=' + encodeURIComponent(value.replace(/\D/g, ''));
    default:         return value;
  }
}

/* Заглушка вместо отсутствующего фото.
   Функция уже объявлена инлайном в <head>, здесь только подстраховка
   на случай, если этот файл подключат отдельно. */
window.phFail = window.phFail || function (img) {
  const fig = img.closest('.ph');
  if (fig) fig.classList.add('is-empty');
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── год в подвале ─────────────────────────────── */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ── подчистить картинки ───────────────────────── */
  // Часть фото могла отвалиться ещё до выполнения этого файла,
  // часть (lazy) загрузится позже, ловим оба случая.
  document.querySelectorAll('.ph img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) window.phFail(img);
    img.addEventListener('error', () => window.phFail(img));
  });

  /* ── карточки контактов ────────────────────────── */
  const grid = document.getElementById('contact-grid');
  const available = Object.keys(CONTACTS).filter(k => CONTACTS[k]);

  if (grid) {
    if (!available.length) {
      grid.innerHTML = '<p class="text-cream/60">Контакты пока не заполнены. Добавьте их в <code>js/main.js</code>.</p>';
    } else {
      grid.innerHTML = available.map(key => {
        const href = hrefFor(key, CONTACTS[key]);
        const ext  = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
        const [title, sub] = LABELS[key];
        return `<a class="contact-card" href="${href}"${ext}>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[key]}</svg>
          <span><b>${title}</b><span>${sub}</span></span>
        </a>`;
      }).join('');
    }
  }

  /* ── кнопки в шапке и герое ────────────────────── */
  document.querySelectorAll('[data-contact]').forEach(el => {
    const want = el.dataset.contact;
    const key  = want === 'primary' ? (available[0] || null) : (CONTACTS[want] ? want : null);
    if (!key) return;                              // нет ссылки, остаётся якорь на #contact
    const href = hrefFor(key, CONTACTS[key]);
    el.href = href;
    if (href.startsWith('http')) { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
  });

  /* ── мобильное меню ────────────────────────────── */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobile-menu');

  if (burger && menu) {
    const setMenu = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      menu.hidden = !open;
    };

    burger.addEventListener('click', () => {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });

    // закрыть после перехода по ссылке
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

    // Escape возвращает фокус на кнопку
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        burger.focus();
      }
    });

    // клик мимо меню
    document.addEventListener('click', e => {
      if (burger.getAttribute('aria-expanded') !== 'true') return;
      if (!menu.contains(e.target) && !burger.contains(e.target)) setMenu(false);
    });

    // при возврате на десктоп меню не должно «залипнуть» открытым
    matchMedia('(min-width: 1024px)').addEventListener('change', e => {
      if (e.matches) setMenu(false);
    });
  }

  /* ── прилипающая шапка ─────────────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── дальше только анимации ────────────────────── */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';

  // страховка: если GSAP не загрузился или движение отключено, просто показать всё
  if (!hasGSAP || reduced) {
    document.querySelectorAll('.reveal, .hero-el').forEach(el => { el.style.opacity = 1; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── герой ─────────────────────────────────────── */
  // fromTo, а не from: в CSS у .hero-el уже opacity:0,
  // поэтому from анимировал бы «из 0 в 0» и герой остался бы пустым.
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo('.hero-el',
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: .7, stagger: .09 })
    .fromTo('.hero-ph',
      { opacity: 0, y: 34, scale: .96 },
      { opacity: 1, y: 0, scale: 1, duration: .85, stagger: .12, clearProps: 'transform' },
      .15);

  /* ── появление секций при скролле ──────────────── */
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 14 },
      {
        opacity: 1, y: 0, duration: .55, ease: 'power1.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
      });
  });

  /* ── галерея: волной ───────────────────────────── */
  gsap.from('.gallery-grid .ph', {
    opacity: 0, scale: .92, y: 16, duration: .45,
    ease: 'back.out(1.4)',
    stagger: { each: .06, from: 'start', grid: 'auto' },
    scrollTrigger: { trigger: '.gallery-grid', start: 'top 82%' }
  });

  /* ── лёгкий параллакс фона героя ───────────────── */
  gsap.to('.hero-bg', {
    yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ── лепестки ──────────────────────────────────── */
  const field = document.querySelector('.petal-field');
  if (field && window.innerWidth > 640) {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('span');
      p.className = 'petal';
      p.style.left = Math.random() * 100 + '%';
      p.style.top  = Math.random() * 100 + '%';
      p.style.opacity = .18 + Math.random() * .3;
      p.style.scale = (.6 + Math.random() * .9).toFixed(2);
      field.appendChild(p);

      gsap.to(p, {
        y: `+=${40 + Math.random() * 90}`,
        x: `+=${-30 + Math.random() * 60}`,
        rotate: `+=${90 + Math.random() * 180}`,
        duration: 9 + Math.random() * 9,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
        delay: -Math.random() * 8
      });
    }
  }

  /* ── подсветка активного пункта меню ───────────── */
  document.querySelectorAll('main section[id]').forEach(sec => {
    const link = document.querySelector(`.nav-a[href="#${sec.id}"]`);
    if (!link) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 45%', end: 'bottom 45%',
      onToggle: self => link.classList.toggle('is-active', self.isActive)
    });
  });

});
