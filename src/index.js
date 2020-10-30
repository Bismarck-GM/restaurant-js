import { TABS, TABCONTENTS } from './modules/template';
import LOADHOME from './modules/home';
import LOADEAT from './modules/eat';
import LOADSLEEP from './modules/sleep';
import LOADCODE from './modules/code';
import './main.scss';

LOADHOME();


const tabItems = document.querySelectorAll('.tab-item');

TABS.addEventListener('click', (e) => {
  TABCONTENTS.innerHTML = '';
  if (e.target.innerText === 'Home') {
    LOADHOME();
  } else if (e.target.innerText === 'Eat ( );') {
    LOADEAT();
  } else if (e.target.innerText === 'Sleep ( );') {
    LOADSLEEP();
  } else if (e.target.innerText === 'Code ( );') {
    LOADCODE();
  } else if (e.target.innerText === 'Repeat ( );') {
    window.location.reload();
  }

  tabItems.forEach(tab => {
    if (tab.classList.contains('is-active')) {
      tab.classList.remove('is-active');
    }
    e.target.parentNode.classList.add('is-active');
  });
});
