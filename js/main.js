
(function(){
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.main-nav');
  if(burger&&nav){burger.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');burger.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');burger.setAttribute('aria-expanded','false');}));}
  const contactMenu=document.querySelector('[data-contact-menu]');
  const writeButtons=document.querySelectorAll('.write-trigger');
  function setWriteExpanded(v){writeButtons.forEach(b=>b.setAttribute('aria-expanded',String(v)));}
  function openContact(){if(!contactMenu)return;contactMenu.classList.add('is-open');contactMenu.setAttribute('aria-hidden','false');setWriteExpanded(true);}
  function closeContact(){if(!contactMenu)return;contactMenu.classList.remove('is-open');contactMenu.setAttribute('aria-hidden','true');setWriteExpanded(false);}
  writeButtons.forEach(btn=>btn.addEventListener('click',(e)=>{e.stopPropagation();contactMenu&&contactMenu.classList.contains('is-open')?closeContact():openContact();}));
  document.addEventListener('click',(e)=>{if(contactMenu&&contactMenu.classList.contains('is-open')&&!contactMenu.querySelector('.contact-menu__inner').contains(e.target)&&!e.target.closest('.write-trigger'))closeContact();});
  const modal=document.querySelector('[data-image-modal]');
  const modalImg=modal?modal.querySelector('img'):null;
  const modalClose=modal?modal.querySelector('.image-modal__close'):null;
  function openModal(src,alt){if(!modal||!modalImg)return;modalImg.src=src;modalImg.alt=alt||'Увеличенное изображение';modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');modalClose&&modalClose.focus();}
  function closeModal(){if(!modal||!modalImg)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');modalImg.src='';}
  document.querySelectorAll('[data-modal-src]').forEach(el=>el.addEventListener('click',()=>{const img=el.querySelector('img');openModal(el.dataset.modalSrc,img?img.alt:'');}));
  modalClose&&modalClose.addEventListener('click',closeModal);
  modal&&modal.addEventListener('click',(e)=>{if(e.target===modal)closeModal();});
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){closeContact();closeModal();}});
  document.querySelectorAll('.schedule-tabs').forEach(group=>{const buttons=group.querySelectorAll('.tab-button');const panels=group.querySelectorAll('.tab-panel');buttons.forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.tab;buttons.forEach(b=>{b.classList.toggle('is-active',b===btn);b.setAttribute('aria-selected',String(b===btn));});panels.forEach(p=>p.classList.toggle('is-active',p.dataset.panel===id));}));});
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));}
  document.addEventListener('click',(e)=>{const target=e.target.closest('[data-goal]');if(!target)return;const goal=target.dataset.goal;if(goal&&typeof window.ym==='function'){try{window.ym(window.YM_COUNTER_ID||0,'reachGoal',goal);}catch(err){}}});
})();
document.addEventListener("DOMContentLoaded", function () {
  const cookieNotice = document.querySelector("#cookieNotice");
  const cookieAccept = document.querySelector("#cookieAccept");

  if (!cookieNotice || !cookieAccept) {
    return;
  }

  const isCookieAccepted = localStorage.getItem("doctorE_cookiesAccepted");

  if (!isCookieAccepted) {
    cookieNotice.classList.add("is-visible");
  }

  cookieAccept.addEventListener("click", function () {
    localStorage.setItem("doctorE_cookiesAccepted", "yes");
    cookieNotice.classList.remove("is-visible");
  });
});