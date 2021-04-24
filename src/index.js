import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const aElms = document.querySelectorAll('a');

aElms.forEach((tlacitko) => {
  tlacitko.addEventListener('click', () => {
    navElm.classList.toggle('nav-closed');
  });
});

let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (!ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});
