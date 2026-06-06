/* ============================================================
   slider.js — Hero Slider / Banner
   ============================================================ */

const Slider = (() => {
  let current  = 0;
  let timer    = null;
  const DELAY  = 5000; // ms antar slide

  const slides = () => document.querySelectorAll('.slide');
  const dots   = () => document.querySelectorAll('.dot');

  function goTo(n) {
    const s = slides();
    const d = dots();
    if (!s.length) return;

    s[current].classList.remove('active');
    d[current]?.classList.remove('active');

    current = (n + s.length) % s.length;

    s[current].classList.add('active');
    d[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, DELAY);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  function init() {
    // Pause on hover
    const wrap = document.querySelector('.slider-wrap');
    if (wrap) {
      wrap.addEventListener('mouseenter', stopAuto);
      wrap.addEventListener('mouseleave', startAuto);
    }
    startAuto();
  }

  return { init, goTo, next, prev };
})();
