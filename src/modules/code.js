import { TABCONTENTS } from "./template";

const LOADCODE = (() => {
  
  let mainColumns = document.createElement('div');
  mainColumns.classList.add('columns', 'is-centered');
  let column = document.createElement('div');
  column.classList.add('column', 'is-half', 'has-text-centered');

  let image = document.createElement('img');
  image.setAttribute('src', 'https://i.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.webp');

  let phrase = document.createElement('h1');
  phrase.classList.add('is-size-1');
  phrase.innerText = 'Just do it!';

  column.appendChild(image);
  column.appendChild(phrase);
  mainColumns.appendChild(column);




  TABCONTENTS.appendChild(mainColumns);
});

export{LOADCODE};