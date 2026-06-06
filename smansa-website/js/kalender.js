/* ============================================================
   kalender.js — Kalender Akademik Interaktif
   Data events diambil dari data.js (DATA.kalenderEvents)
   ============================================================ */

const Kalender = (() => {
  const MONTHS = [
    'Januari','Februari','Maret','April','Mei','Juni',
    'Juli','Agustus','September','Oktober','November','Desember'
  ];
  const DAYS = ['MIN','SEN','SEL','RAB','KAM','JUM','SAB'];

  const now   = new Date();
  let year    = now.getFullYear();
  let month   = now.getMonth();

  function getEvents() {
    return (typeof DATA !== 'undefined') ? DATA.kalenderEvents : {};
  }

  function render() {
    const titleEl  = document.getElementById('kal-title');
    const gridEl   = document.getElementById('kal-days');
    const evListEl = document.getElementById('kal-events');
    if (!titleEl || !gridEl || !evListEl) return;

    const events       = getEvents();
    const firstDay     = new Date(year, month, 1).getDay();
    const daysInMonth  = new Date(year, month + 1, 0).getDate();
    const today        = new Date();

    titleEl.textContent = `${MONTHS[month]} ${year}`;

    // Day-of-week headers
    let html = DAYS.map(d => `<div class="kal-day-label">${d}</div>`).join('');

    // Empty cells before 1st
    for (let i = 0; i < firstDay; i++) {
      html += `<div class="kal-day empty"></div>`;
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const key     = `${year}-${month}-${d}`;
      const isToday = (
        d === today.getDate() &&
        month === today.getMonth() &&
        year  === today.getFullYear()
      );
      const eventLabel = events[key];
      let cls = 'kal-day';
      if (isToday)    cls += ' today';
      else if (eventLabel) cls += ' event';

      html += `<div class="${cls}" title="${eventLabel || ''}">${d}</div>`;
    }

    gridEl.innerHTML = html;

    // Events list for this month
    const monthEvents = Object.entries(events).filter(
      ([k]) => k.startsWith(`${year}-${month}-`)
    );

    if (monthEvents.length) {
      evListEl.innerHTML = monthEvents.map(([k, v]) => {
        const day = k.split('-')[2];
        return `
          <div class="kal-event-item">
            <div class="kal-event-dot"></div>
            <div class="kal-event-date">${day} ${MONTHS[month]}</div>
            <div class="kal-event-name">${v}</div>
          </div>`;
      }).join('');
    } else {
      evListEl.innerHTML = `
        <div class="kal-event-item">
          <div class="kal-event-dot" style="background:var(--g400)"></div>
          <div class="kal-event-name" style="color:var(--g400)">
            Tidak ada agenda khusus bulan ini
          </div>
        </div>`;
    }
  }

  function prev() {
    month--;
    if (month < 0) { month = 11; year--; }
    render();
  }

  function next() {
    month++;
    if (month > 11) { month = 0; year++; }
    render();
  }

  function init() {
    render();
  }

  return { init, prev, next, render };
})();
