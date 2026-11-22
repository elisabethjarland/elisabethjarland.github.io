(() => {
  const transcripts = JSON.parse(document.getElementById('transcripts').textContent);
  const reader = document.getElementById('reader');
  const yearSelect = document.getElementById('year-select');
  const chapters = Array.from(document.querySelectorAll('[data-year]'));
  const yearLinks = Array.from(document.querySelectorAll('[data-year-link]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentYear;
  let scheduled = false;

  function updateYear() {
    const top = Math.min(window.innerHeight * 0.32, 210);
    let active = chapters[0];
    for (const section of chapters) {
      if (section.getBoundingClientRect().top > top) break;
      active = section;
    }
    if (currentYear !== active.dataset.year) {
      currentYear = active.dataset.year;
      yearSelect.value = currentYear;
      for (const link of yearLinks) {
        if (link.dataset.yearLink === currentYear) link.setAttribute('aria-current', 'date');
        else link.removeAttribute('aria-current');
      }
    }
    scheduled = false;
  }
  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateYear);
    }
  }
  yearSelect.addEventListener('change', () => { location.hash = 'aar-' + yearSelect.value; });
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  document.addEventListener('toggle', scheduleUpdate, true);
  updateYear();

  document.getElementById('reader-close').addEventListener('click', () => reader.close());
  reader.addEventListener('click', (event) => {
    if (event.target !== reader) return;
    const rect = reader.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) reader.close();
  });
  function readArticle(button) {
    const record = transcripts[button.dataset.read];
    if (!record) return;
    document.getElementById('reader-title').textContent = button.parentElement.querySelector('h4').textContent;
    const notes = {
      verified: 'Avskrift kontrollert mot originalen.',
      partial: 'Avskrift av lesbare utdrag. Hele utklippet kan åpnes som bilde.',
      ocr: 'Automatisk tekstgjenkjenning. Ord, tegn og spalterekkefølge kan inneholde feil.'
    };
    document.getElementById('reader-note').textContent = notes[record.method] || notes.ocr;
    document.getElementById('reader-copy').textContent = record.text;
    reader.showModal();
    reader.scrollTop = 0;
  }
  function showPhoto(link) {
    const links = Array.from(document.querySelectorAll('a.photo')).filter(item => item.dataset.group === link.dataset.group);
    const gallery = new PhotoSwipe({
      dataSource: links.map(item => ({ src:item.href, width:Number(item.dataset.w),
        height:Number(item.dataset.h), alt:item.dataset.title })),
      index:links.indexOf(link), bgOpacity:0.96, loop:false, showHideAnimationType:'fade',
      showAnimationDuration:reduceMotion.matches ? 0 : 160,
      hideAnimationDuration:reduceMotion.matches ? 0 : 160,
      closeTitle:'Lukk', zoomTitle:'Endre zoom', arrowPrevTitle:'Forrige bilde',
      arrowNextTitle:'Neste bilde', errorMsg:'Bildet kunne ikke lastes.',
      padding:{top:48,bottom:50,left:8,right:8}, returnFocus:true
    });
    gallery.on('uiRegister', () => {
      gallery.ui.registerElement({ name:'caption', order:9, appendTo:'root', isButton:false,
        onInit(element) {
          element.className = 'pswp-cap';
          const update = () => { element.textContent = links[gallery.currIndex].dataset.title; };
          gallery.on('change', update);
          update();
        }
      });
    });
    gallery.init();
  }
  document.addEventListener('click', (event) => {
    const read = event.target.closest('button[data-read]');
    if (read) { readArticle(read); return; }
    const link = event.target.closest('a.photo');
    if (!link || !window.PhotoSwipe || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    showPhoto(link);
  });
})();
