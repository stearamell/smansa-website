/* ============================================================
   form.js — Contact Form Handler
   Ganti fungsi submit() dengan integrasi API nyata jika perlu
   ============================================================ */

const Form = (() => {

  /* ── Validasi Sederhana ── */
  function validate(formEl) {
    const nama  = formEl.querySelector('input[type="text"]');
    const email = formEl.querySelector('input[type="email"]');
    const pesan = formEl.querySelector('textarea');

    if (nama && !nama.value.trim()) {
      nama.focus();
      nama.style.borderColor = '#C0392B';
      return false;
    }
    if (email && !email.value.includes('@')) {
      email.focus();
      email.style.borderColor = '#C0392B';
      return false;
    }
    if (pesan && !pesan.value.trim()) {
      pesan.focus();
      pesan.style.borderColor = '#C0392B';
      return false;
    }
    return true;
  }

  /* ── Reset Border Colors ── */
  function resetBorders(formEl) {
    formEl.querySelectorAll('.finput').forEach(el => {
      el.style.borderColor = '';
    });
  }

  /* ── Submit Handler ── */
  function submit(btn) {
    const formEl = btn.closest('.reveal, div');
    resetBorders(document);

    // Uncomment untuk validasi:
    // if (!validate(document.querySelector('#kontak'))) return;

    const origText  = btn.textContent;
    const origBg    = btn.style.background;
    const origColor = btn.style.color;

    btn.disabled    = true;
    btn.textContent = 'Mengirim...';
    btn.style.opacity = '0.7';

    // ── Simulasi pengiriman (ganti dengan fetch() API sungguhan) ──
    setTimeout(() => {
      btn.style.opacity   = '1';
      btn.textContent     = '✓ Pesan Berhasil Terkirim!';
      btn.style.background = '#1A6B45';
      btn.style.color      = '#fff';

      // Reset setelah 3.5 detik
      setTimeout(() => {
        btn.textContent     = origText;
        btn.style.background = '';
        btn.style.color      = '';
        btn.disabled         = false;
      }, 3500);
    }, 1500);

    /*
    // ── Contoh integrasi API nyata ──
    const formData = {
      nama:  document.querySelector('#kontak input[type="text"]').value,
      email: document.querySelector('#kontak input[type="email"]').value,
      pesan: document.querySelector('#kontak textarea').value,
    };

    fetch('https://api.smansa-bdl.sch.id/kontak', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(() => { ... success ... })
    .catch(() => { ... error ... });
    */
  }

  return { submit };
})();
