const mobileMenu = document.getElementById('menu-container');

const openBtn = document.getElementById('btn-open');

const closeBtn = document.getElementById('btn-close');

openBtn.onclick = () => {
  mobileMenu.classList.add('is-open');
};

closeBtn.onclick = () => {
  mobileMenu.classList.remove('is-open');
};
