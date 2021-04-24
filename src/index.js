import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const aElms = document.querySelectorAll('a');

aElms.forEach((tlacitko) => {
  tlacitko.addEventListener('click', () => {
    navElm.classList.toggle('nav-closed');
  });
});
