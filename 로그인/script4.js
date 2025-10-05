const modal = document.getElementById('loginModal');
const openBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => modal.style.display = 'block');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
