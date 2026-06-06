/* ============================================================
   ui.js — UI Interactions
   - Navbar toggle & active scroll
   - Profil / Kesiswaan / Berita tabs
   - Guru pagination (4 columns × 4 rows = 16 per page)
   - Prestasi scrollable list
   - Alumni pagination (3 per page)
   - Gallery modal 3×3 + pagination + filter
   - Scroll Reveal
   ============================================================ */

const UI = (() => {

  /* ════════════════ HELPERS ════════════════ */

  function buildPagination(containerId, totalItems, perPage, currentPage, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const totalPages = Math.ceil(totalItems / perPage);
    if (totalPages <= 1) { container.innerHTML = ''; return; }

    let html = '';

    // Prev
    html += `<button class="pg-btn pg-prev" ${currentPage === 1 ? 'disabled' : ''}
      onclick="(${onPageChange.toString()})(${currentPage - 1})">‹</button>`;

    // Page numbers — show max 5 around current
    const range = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        range.push(i);
      }
    }
    let prev = null;
    for (const p of range) {
      if (prev !== null && p - prev > 1) {
        html += `<span class="pg-info">…</span>`;
      }
      html += `<button class="pg-btn ${p === currentPage ? 'active' : ''}"
        onclick="(${onPageChange.toString()})(${p})">${p}</button>`;
      prev = p;
    }

    // Next
    html += `<button class="pg-btn pg-next" ${currentPage === totalPages ? 'disabled' : ''}
      onclick="(${onPageChange.toString()})(${currentPage + 1})">›</button>`;

    // Info
    html += `<span class="pg-info">${currentPage} / ${totalPages}</span>`;

    container.innerHTML = html;
  }

  /* ════════════════ GURU PAGINATION ════════════════ */

  const GURU_PER_PAGE = 16; // 4×4
  let guruPage = 1;
  let guruFilter = 'semua';

  function getFilteredGuru() {
    if (!DATA.guru) return [];
    return guruFilter === 'semua'
      ? DATA.guru
      : DATA.guru.filter(g => g.cat === guruFilter);
  }

  function renderGuru() {
    const grid = document.getElementById('guru-grid');
    if (!grid) return;

    const items = getFilteredGuru();
    const total = items.length;
    const start = (guruPage - 1) * GURU_PER_PAGE;
    const end   = start + GURU_PER_PAGE;
    const page  = items.slice(start, end);

    grid.innerHTML = page.map(g => `
      <div class="guru-card">
        <div class="guru-ava">${g.ava}</div>
        <div class="guru-name">${g.nama}</div>
        <span class="guru-mapel">${g.mapel}</span>
      </div>
    `).join('');

    buildPagination('guru-pagination', total, GURU_PER_PAGE, guruPage, (p) => {
      guruPage = p;
      renderGuru();
      document.getElementById('guru')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function filterGuru(btn, cat) {
    document.querySelectorAll('.guru-filter .filter-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    guruFilter = cat;
    guruPage = 1;
    renderGuru();
  }

  /* ════════════════ ALUMNI PAGINATION ════════════════ */

  const ALUMNI_PER_PAGE = 3;
  let alumniPage = 1;

  function renderAlumni() {
    const grid = document.getElementById('alumni-grid');
    if (!grid) return;

    const items = DATA.alumni || [];
    const total = items.length;
    const start = (alumniPage - 1) * ALUMNI_PER_PAGE;
    const page  = items.slice(start, start + ALUMNI_PER_PAGE);

    grid.innerHTML = page.map(a => `
      <div class="alumni-card">
        <div class="alumni-ava">${a.ava}</div>
        <div class="alumni-name">${a.nama}</div>
        <div class="alumni-year">${a.tahun}</div>
        <div class="alumni-desc">${a.desc}</div>
        <div class="alumni-quote">${a.quote}</div>
      </div>
    `).join('');

    buildPagination('alumni-pagination', total, ALUMNI_PER_PAGE, alumniPage, (p) => {
      alumniPage = p;
      renderAlumni();
    });
  }

  /* ════════════════ PRESTASI SCROLLABLE ════════════════ */

  function renderPrestasi() {
    const list = document.getElementById('prestasi-list');
    if (!list) return;

    const items = DATA.prestasi || [];
    list.innerHTML = items.map(p => `
      <div class="prest-item">
        <div class="prest-medal">${p.medal}</div>
        <div class="prest-info">
          <div class="prest-title">${p.title}</div>
          <div class="prest-sub">${p.sub}</div>
        </div>
        <div class="prest-year">${p.tahun}</div>
      </div>
    `).join('');
  }

  /* ════════════════ GALLERY MODAL ════════════════ */

  const GALLERY_PER_PAGE = 9; // 3×3
  let galleryPage    = 1;
  let galleryFilter  = 'semua';

  function getFilteredGaleri() {
    if (!DATA.galeri) return [];
    return galleryFilter === 'semua'
      ? DATA.galeri
      : DATA.galeri.filter(g => g.cat === galleryFilter);
  }

  function renderGalleryGrid() {
    const grid = document.getElementById('gallery-modal-grid');
    const footer = document.getElementById('gallery-modal-footer');
    if (!grid) return;

    const items = getFilteredGaleri();
    const total = items.length;
    const start = (galleryPage - 1) * GALLERY_PER_PAGE;
    const page  = items.slice(start, start + GALLERY_PER_PAGE);

    grid.innerHTML = page.map(g => `
      <div class="gmi">
        ${g.emoji}
        <div class="gmi-ov">
          <div class="gmi-ov-icon">🔍</div>
          <div class="gmi-ov-label">${g.label}</div>
          <div class="gmi-ov-cat">${g.cat}</div>
        </div>
      </div>
    `).join('');

    // Update meta
    const meta = document.getElementById('gallery-modal-meta');
    if (meta) meta.textContent = `${total} foto · Halaman ${galleryPage} dari ${Math.ceil(total / GALLERY_PER_PAGE)}`;

    // Pagination
    const pgWrap = document.getElementById('gallery-pagination');
    if (pgWrap) {
      buildPagination('gallery-pagination', total, GALLERY_PER_PAGE, galleryPage, (p) => {
        galleryPage = p;
        renderGalleryGrid();
        document.getElementById('gallery-modal-grid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  function openGalleryModal() {
    galleryPage   = 1;
    galleryFilter = 'semua';
    const modal = document.getElementById('gallery-modal');
    if (!modal) return;

    // Reset filter buttons
    modal.querySelectorAll('.gf-btn').forEach(b => {
      b.classList.toggle('on', b.dataset.cat === 'semua');
    });

    renderGalleryGrid();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeGalleryModal() {
    document.getElementById('gallery-modal')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function filterGallery(btn, cat) {
    document.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    galleryFilter = cat;
    galleryPage   = 1;
    renderGalleryGrid();
  }

  /* ════════════════ TABS ════════════════ */

  function switchTab(btn, id) {
    btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('[id^="p-"]').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('p-' + id)?.classList.add('on');
  }

  function switchKtab(btn, id) {
    document.querySelectorAll('.ktab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.kpanel').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('k-' + id)?.classList.add('on');

    // Lazy-render on first open
    if (id === 'prestasi') renderPrestasi();
    if (id === 'alumni')   renderAlumni();
  }

  function switchBerita(btn, id) {
    document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('on'));
    document.querySelectorAll('#berita .kpanel').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById(id)?.classList.add('on');
  }

  /* ════════════════ NAV ════════════════ */

  function toggleNav() {
    document.getElementById('navMenu')?.classList.toggle('open');
  }

  function initNavScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    });
  }

  function initMenuClose() {
    document.querySelectorAll('.nav-menu a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('navMenu')?.classList.remove('open'));
    });
  }

  /* ════════════════ SCROLL REVEAL ════════════════ */

  function initReveal() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.06 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ════════════════ KEYBOARD & BACKDROP ════════════════ */

  function initModalEvents() {
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeGalleryModal();
    });
    // Close on backdrop click
    document.getElementById('gallery-modal')?.addEventListener('click', e => {
      if (e.target.id === 'gallery-modal') closeGalleryModal();
    });
  }

  /* ════════════════ INIT ════════════════ */

  function init() {
    renderGuru();      // Render guru on load
    initNavScroll();
    initReveal();
    initMenuClose();
    initModalEvents();
  }

  return {
    init,
    toggleNav,
    switchTab,
    switchKtab,
    switchBerita,
    filterGuru,
    filterGallery,
    openGalleryModal,
    closeGalleryModal,
  };

})();
