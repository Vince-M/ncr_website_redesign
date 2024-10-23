console.log('HELLO');

const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  console.log('run open mobile menu');
  btnOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
  console.log('run close mobile menu');
  btnOpen.setAttribute('aria-expanded', 'false');
}