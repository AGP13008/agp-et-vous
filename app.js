
const screens=[...document.querySelectorAll('.screen')];
const navButtons=[...document.querySelectorAll('.bottom-nav button[data-go]')];

function go(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  navButtons.forEach(b=>b.classList.toggle('active',b.dataset.go===id));
  window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelectorAll('[data-go]').forEach(b=>{
  b.addEventListener('click',()=>go(b.dataset.go));
});

const modal=document.getElementById('loginModal');
document.querySelectorAll('[data-open="login"]').forEach(b=>{
  b.addEventListener('click',()=>{
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
});
document.querySelectorAll('[data-close]').forEach(b=>{
  b.addEventListener('click',()=>{
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  });
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));
}
