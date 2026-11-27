(() => {
  'use strict';
  const data = window.PUBLIC_CATALOGUE;
  const clips = data.clips;
  const byId = new Map(clips.map(c => [c.id, c]));
  const grid = document.getElementById('grid');
  const cards = new Map([...grid.querySelectorAll('[data-id]')].map(card => [card.dataset.id, card]));
  // Availability is driven by one public data file, so new uploads need no layout edits.
  for(const clip of clips){
    const card=cards.get(clip.id),ready=clip.status==='ready';
    card.classList.toggle('ready',ready);card.classList.toggle('pending',!ready);
    const poster=card.querySelector('.poster');
    poster.setAttribute('aria-label',(ready?'Spill av ':'Vis informasjon om ')+clip.title);
    const seconds=Math.round(clip.duration),duration=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
    poster.querySelector('span').textContent=(ready?'Spill av':'Kommer snart')+' · '+duration;
    const status=card.querySelector('.status');status.className='status '+clip.status;status.textContent=ready?'Kan spilles':'Kommer snart';
    let direct=card.querySelector('.watch-link');
    if(ready){if(!direct){direct=document.createElement('a');direct.className='watch-link';direct.target='_blank';direct.rel='noopener';direct.textContent='Se på YouTube';card.querySelector('.card-body').append(direct);}direct.href=clip.youtube_url;}
    else direct?.remove();
  }
  const fields = Object.fromEntries(['search','collection','year','kind','status','sort'].map(id => [id,document.getElementById(id)]));
  const fold = value => String(value || '').toLocaleLowerCase('nb').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ø/g,'o').replace(/æ/g,'ae');
  const haystacks = new Map(clips.map(c => [c.id,fold([c.id,c.title,c.context,c.event,c.location,c.people,c.date,c.kind,c.transcript].join(' '))]));
  const addOption = (select,value,label=value) => { const option=document.createElement('option');option.value=value;option.textContent=label;select.append(option); };
  for (const group of data.collections) addOption(fields.collection,group.id,group.label);
  for (const year of [...new Set(clips.map(c => c.year))].sort()) addOption(fields.year,year);
  for (const kind of [...new Set(clips.map(c => c.kind))].sort((a,b)=>a.localeCompare(b,'nb'))) addOption(fields.kind,kind);
  document.getElementById('availability').textContent=data.ready_count===clips.length ? `Alle ${clips.length} klipp kan spilles i katalogen.` : `${data.ready_count} av ${clips.length} klipp kan spilles nå.`;
  const compareTimeline = (a,b) => { for(let i=0;i<a.sort.length;i++){const diff=a.sort[i]-b.sort[i];if(diff)return diff;}return a.id.localeCompare(b.id,'nb',{numeric:true}); };
  function filter() {
    const words=fold(fields.search.value).split(/\s+/).filter(Boolean);
    const selected=clips.filter(c => words.every(word=>haystacks.get(c.id).includes(word)) &&
      (!fields.collection.value||c.collection===fields.collection.value) &&
      (!fields.year.value||String(c.year)===fields.year.value) &&
      (!fields.kind.value||c.kind===fields.kind.value) &&
      (!fields.status.value||c.status===fields.status.value));
    selected.sort((a,b)=>fields.sort.value==='duration'?b.duration-a.duration:fields.sort.value==='id'?a.id.localeCompare(b.id,'nb',{numeric:true}):fields.sort.value==='newest'?-compareTimeline(a,b):compareTimeline(a,b));
    const visible=new Set(selected.map(c=>c.id));
    for(const clip of clips)cards.get(clip.id).hidden=!visible.has(clip.id);
    for(const clip of selected)grid.appendChild(cards.get(clip.id));
    const ready=selected.filter(c=>c.status==='ready').length;
    document.getElementById('count').textContent=`${selected.length} av ${clips.length} klipp · ${ready} kan spilles`;
    document.getElementById('empty').hidden=selected.length!==0;
  }
  for(const [key,field] of Object.entries(fields))field.addEventListener(key==='search'?'input':'change',filter);
  document.getElementById('filters').addEventListener('submit',event=>event.preventDefault());
  document.getElementById('reset').addEventListener('click',()=>{for(const field of Object.values(fields))field.value='';fields.sort.value='timeline';filter();});
  const params=new URLSearchParams(location.search);
  if(params.has('samling'))fields.collection.value=params.get('samling');
  if(params.get('status')==='ready')fields.status.value='ready';
  filter();
  const modal=document.getElementById('player'),host=document.getElementById('videoHost'),link=document.getElementById('youtubeLink');
  let opener=null;
  function openClip(id,button) {
    const clip=byId.get(id);if(!clip)return;
    opener=button;host.replaceChildren();
    document.getElementById('playing').textContent=clip.title;
    document.getElementById('caption').textContent=`${clip.id} · ${clip.date} · ${clip.event}`;
    document.getElementById('playerContext').textContent=clip.context;
    const status=document.getElementById('playerStatus');status.textContent=clip.status==='ready'?'Kan spilles':'Kommer snart';status.className='status '+clip.status;
    const ready=clip.status==='ready'&&/^[A-Za-z0-9_-]{11}$/.test(clip.youtube_id||'');
    link.hidden=!ready;document.getElementById('embedHelp').hidden=!ready;document.getElementById('pendingMessage').hidden=ready;
    if(ready){
      link.href=clip.youtube_url;
      const iframe=document.createElement('iframe');
      iframe.title=clip.title;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;
      iframe.referrerPolicy='strict-origin-when-cross-origin';
      iframe.src=`https://www.youtube-nocookie.com/embed/${clip.youtube_id}?autoplay=1&playsinline=1&rel=0`;
      host.append(iframe);
    }else{
      link.removeAttribute('href');
      const img=document.createElement('img');img.src=clip.poster;img.alt=clip.title;host.append(img);
    }
    modal.showModal();
  }
  grid.addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(button)openClip(button.dataset.open,button);});
  modal.querySelector('.close').addEventListener('click',()=>modal.close());
  modal.addEventListener('close',()=>{host.replaceChildren();link.removeAttribute('href');if(opener?.isConnected)opener.focus();opener=null;});
  modal.addEventListener('click',event=>{if(event.target!==modal)return;const box=modal.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)modal.close();});
})();

// Catalogue navigation for video exports that contain only the video header.
(() => {
  const intro = document.querySelector("header.shell .intro");
  if (!intro || document.querySelector("header.shell .media-nav")) return;
  document.querySelector("header.shell .tag").textContent = "Elisabeth Jarland - Mediekatalog - Svømmerkarriere";
  document.querySelector("header.shell h1").textContent = "Mediekatalog";
  intro.insertAdjacentHTML("beforebegin", "<nav class=\"media-nav\" aria-label=\"Katalogdel\"><a href=\"/swimming-media-catalog/\" aria-current=\"page\">Videoer</a><a href=\"/swimming-media-catalog/bilder.html\">Bilder og utklipp</a><a href=\"/swimming-media-catalog/diverse.html\">Diverse</a></nav>");
  if (!document.querySelector('link[href="/swimming-media-catalog/andre-medier.css"]')) {
    document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"/swimming-media-catalog/andre-medier.css\">");
  }
})();
