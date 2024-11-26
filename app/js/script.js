// console.log('HELLO');

const main = document.querySelector('#main');
const body = document.querySelector('body');
const footer = document.querySelector('#footer');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const menuTopNav = document.querySelector('#menuTopNav');
const overlay = document.querySelector('#overlay');
const breakpoint = window.matchMedia('(width < 30em)');
const menu = document.querySelector(".menu");
const nav__items = document.querySelectorAll(".nav__item");
const btnHamburger = document.querySelector('#btnHamburger');
const faders = document.querySelectorAll(".fade-in");


const setupTopNav = () => {
  if (breakpoint.matches) {
    // console.log('is mobile');
    menuTopNav.setAttribute('inert', '');
  }
  else {
    // console.log('is tablet/desktop');
    menuTopNav.removeAttribute('inert');
  }
}



// setupTopNav();

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

breakpoint.addEventListener('change', () => {
  // console.log('breakpoint crossed');
  setupTopNav();
});

function openMobileMenu() {
  // console.log('run open mobile menu');
  btnOpen.setAttribute('aria-expanded', 'true');
  main.setAttribute('inert', '');
  footer.setAttribute('inert', '');
  menuTopNav.removeAttribute('inert');
  menuTopNav.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
  bodyScrollLock.disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  // console.log('run close mobile menu');
  btnOpen.setAttribute('aria-expanded', 'false');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');
  menuTopNav.setAttribute('inert', '');
  bodyScrollLock.enableBodyScroll(menuTopNav);
  btnOpen.focus();
  
  setTimeout(() => {
    menuTopNav.removeAttribute('style');
    overlay.removeAttribute('style');
  }, 500);
}



// Submenu
function toggleItem() {
  if (this.classList.contains("sub-menu-active")) {
    this.classList.remove("sub-menu-active");
  } else if (menu.querySelector(".sub-menu-active")) {
    menu.querySelector(".sub-menu-active").classList.remove("sub-menu-active");
    this.classList.add("sub-menu-active");
  } else {
    this.classList.add("sub-menu-active");
  }
}

for (let nav__item of nav__items) {
  if (nav__item.querySelector(".sub-menu")) {
    nav__item.addEventListener("click", toggleItem, false);
    nav__item.addEventListener("keypress", toggleItem, false);
  }
}

// Close submenu from anywhere on page
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".sub-menu-active")) {
    menu.querySelector(".submenu-active").classList.remove("sub-menu-active");
  }
}

document.addEventListener("click", closeSubmenu, false);


// Intersection Observer

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px"
};

const appearOnScroll = new IntersectionObserver (function(
    entries, 
    appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, 
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});