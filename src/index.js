import {PAGELOAD, TABS, TABCONTENTS} from './modules/template'
import {LOADHOME} from './modules/home'
import {LOADEAT} from './modules/eat'
import {LOADSLEEP} from './modules/sleep'
import {LOADCODE} from './modules/code'
import './main.scss';

LOADHOME();


let navLinks = document.querySelectorAll('.tab-item');

TABS.addEventListener('click', (e) =>{
  TABCONTENTS.innerHTML = '';
  if(e.target.innerText === 'Home'){
    console.log('load home');
    LOADHOME();
  }
  else if(e.target.innerText === 'Eat ( );'){
    console.log('load eat');
    LOADEAT();
  }
  else if(e.target.innerText === 'Sleep ( );'){
    console.log('load SLEEP');
    LOADSLEEP();
  }

})

console.log(navLinks);