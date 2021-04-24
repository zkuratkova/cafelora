import { Layer } from './Layer/index';
import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
const drinkInfoElm = document.querySelector('.drink__info');
const appElm = document.querySelector('#app');

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

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerList = (props) => {
  let result = '';

  props.items.forEach((item) => {
    result += Layer(item);
    console.log(result);
  });
  return result;
};

drinkInfoElm.innerHTML += layerList({ items: layers });
