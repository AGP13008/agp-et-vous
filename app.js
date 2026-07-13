
const cards = document.querySelectorAll('.card');
const panels = document.querySelectorAll('.panel');
const closeButtons = document.querySelectorAll('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(card.dataset.target);
    panel.classList.add('active');
    panel.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.panel').classList.remove('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js'));
}
